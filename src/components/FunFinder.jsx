import React, { useContext, useEffect, useState } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import Event from './Event';
import '../styles/fun-finder.css';
import { SearchSettingsContext } from '../searchSettingsContext';

const FunFinder = () => {
  const { searchSettings } = useContext(SearchSettingsContext);
  const {
    ready,
    value: potentialLocation,
    setValue: setPotentialLocation,
    suggestions,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const [searching, setSearching] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [results, setResults] = useState(undefined);
  const [startDate, setStartDate] = useState(dayjs(Date.now()));
  const [endDate, setEndDate] = useState(dayjs(Date.now()).add(1, 'day'));

  const funSearch = async () => {
    setSearching(prev => !prev);
    const results = await getGeocode({ address: selectedLocation.description });
    const { lat, lng } = getLatLng(results[0]);

    const request = new Request(`https://${process.env.REACT_APP_API_IP}:3500/fun-search?` + new URLSearchParams({
      startDate: startDate.format('YYYY-MM-DD'),
      endDate: endDate.format('YYYY-MM-DD'),
      location: selectedLocation.description,
      lat,
      lng,
      ...searchSettings.checkboxes,
      ...searchSettings.sliders,
      use_ai: searchSettings.use_ai,
      radius: searchSettings.radius,
    }).toString());

    fetch(request).then(res => res.json())
      .then(data => setResults(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box className='content-container'>
        {!searching ? (
          <>
            <div className='dates-container'>
              <FormControl margin='normal' size='small' variant='filled'>
                <MobileDatePicker
                  error={false}
                  label='Start Date'
                  sx={{ width: '100%' }}
                  value={startDate}
                  disablePast
                  onChange={(e) => {
                    if (endDate.isBefore(e)) {
                      setEndDate(e.add(1, 'day'));
                    }
                    if (endDate.isAfter(e.add(3, 'day'))) {
                      setEndDate(e.add(3, 'day'));
                    }
                    setStartDate(e);
                  }}
                />
              </FormControl>
              <FormControl margin='normal' size='small' variant='filled'>
                <MobileDatePicker
                  error={false}
                  label='End Date'
                  sx={{ width: '100%' }}
                  value={endDate}
                  disablePast
                  minDate={startDate}
                  maxDate={dayjs(startDate).add(3, 'day')}
                  onChange={(e) => setEndDate(e)}
                />
              </FormControl>
            </div>
            <FormControl fullWidth margin='normal' variant='filled'>
              <Autocomplete
                label='Location'
                onChange={(_, newValue) => setSelectedLocation(newValue)}
                options={suggestions.data}
                getOptionLabel={(option) => option.description}
                isOptionEqualToValue={(option, value) => option.place_id === value.place_id}
                inputValue={potentialLocation}
                onInputChange={(_, newValue) => setPotentialLocation(newValue, true)}
                renderInput={(params) =>
                  <TextField
                    label='Location'
                    {...params}
                  />
                }
              />
            </FormControl>
            <FormControl size='medium' margin='normal' variant='filled'>
              <Button
                variant='contained'
                size='large'
                onClick={funSearch}
                disabled={!startDate || !endDate || !selectedLocation}>
                  Search
              </Button>
            </FormControl>
          </>
        ) : (
          <>
            {!results ? (
              <div className='loading-container'>
                <svg className='spinner' viewBox='0 0 50 50'>
                  <circle className='path' cx='25' cy='25' r='20' fill='none' strokeWidth='5'></circle>
                </svg>
                <i>Searching for fun. This may take a few moments.</i>
              </div>
            ) : (
              <>
                <Button
                  variant='contained'
                  size='small'
                  onClick={() => {
                    setSearching(false);
                    setResults(undefined);
                    setStartDate(dayjs(Date.now()));
                    setEndDate(dayjs(Date.now()).add(1, 'day'));
                    setPotentialLocation('');
                    setSelectedLocation('');
                  }}>
                   New Search
                </Button>
                <div className='results-container'>
                  {results.map((day, dayIndex) => (
                    <div key={`${dayIndex}-${day.date}`} className='day-container'>
                      <div className='day-date'>{dayjs(day.date).add(-1, 'day').format('dddd, MMMM DD, YYYY')}</div>
                      {day.events.map((event, eventIndex) => (
                        <Event
                          key={`${dayIndex}-${eventIndex}-${event.title}`}
                          data={event}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </Box>
    </LocalizationProvider>
  );
};

export default FunFinder;