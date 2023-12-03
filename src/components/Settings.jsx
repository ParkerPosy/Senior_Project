import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { SearchSettingsContext } from '../searchSettingsContext';

const Settings = () => {
  const { searchSettings, setSearchSettings } = useContext(SearchSettingsContext);

  return (
    <Box className='content-container'>
      <FormControl sx={{ m: 1 }} component='fieldset' variant='standard'>
        <FormLabel component='legend'>Categories To Include</FormLabel>
        <FormGroup>
          {Object.entries(searchSettings.checkboxes).map((setting) => (
            <FormControlLabel
              key={setting[0]}
              control={
                <Checkbox
                  checked={setting[1]}
                  onChange={(e) => {
                    setSearchSettings(prev => ({
                      ...prev,
                      checkboxes: {
                        ...prev.checkboxes,
                        [setting[0]]: e.target.checked,
                      },
                    }));
                  }}
                />
              }
              // snake case to title case
              label={`${setting[0].replace(/^_*(.)|_+(.)/g, (s, c, d) => c ? c.toUpperCase() : ' ' + d.toUpperCase())}s`}
            />
          ))}
        </FormGroup>
      </FormControl>
      <FormControl sx={{ m: 1 }} component='fieldset' variant='standard'>
        <FormLabel component='legend'>Minimum Rating</FormLabel>
        <Slider
          value={searchSettings.sliders.minimum_rating}
          valueLabelDisplay='auto'
          valueLabelFormat={(val) => `${val} Stars`}
          step={0.5}
          min={1}
          max={5}
          onChange={(e) => {
            setSearchSettings(prev => ({
              ...prev,
              sliders: {
                ...prev.sliders,
                minimum_rating: e.target.value,
              },
            }));
          }}
        />
      </FormControl>
      <FormControl sx={{ m: 1 }} component='fieldset' variant='standard'>
        <FormLabel component='legend'>Minimum Reviews</FormLabel>
        <Slider
          value={searchSettings.sliders.minimum_ratings}
          valueLabelDisplay='auto'
          valueLabelFormat={(val) => `${val} Reviews`}
          step={50}
          min={0}
          max={500}
          onChange={(e) => {
            setSearchSettings(prev => ({
              ...prev,
              sliders: {
                ...prev.sliders,
                minimum_ratings: e.target.value,
              },
            }));
          }}
        />
      </FormControl>
      <FormControl sx={{ m: 1 }} component='fieldset' variant='standard'>
        <FormLabel component='legend'>Radius to search</FormLabel>
        <Slider
          value={searchSettings.radius}
          valueLabelFormat={(val) => `${val} Miles`}
          valueLabelDisplay='auto'
          step={1}
          min={1}
          max={20}
          onChange={(e) => {
            setSearchSettings(prev => ({
              ...prev,
              radius: e.target.value,
            }));
          }}
        />
      </FormControl>
      <FormControl sx={{ m: 1 }} component='fieldset' variant='standard'>
        <FormLabel component='legend'>Additional Settings</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={searchSettings.use_ai}
                onChange={(e) => {
                  setSearchSettings(prev => ({
                    ...prev,
                    use_ai: e.target.checked,
                  }));
                }}
              />
            }
            label='Enable AI Enhanced Descriptions'
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Settings;