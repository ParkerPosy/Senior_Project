import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useLoadScript } from '@react-google-maps/api';
import Box from '@mui/material/Box';
import FunFinder from './components/FunFinder';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
import About from './components/About';
import './App.css';
import { SearchSettingsContext } from './searchSettingsContext';

const LIBRARIES = ['places'];

const DEFAULT_SEARCH_SETTINGS = {
  checkboxes: {
    bar: true,
    cafe: true,
    restaurant: true,
    night_club: true,
    casino: true,
    park: true,
    museum: true,
    tourist_attraction: true,
  },
  sliders: {
    minimum_rating: 3,
    minimum_ratings: 200,
  },
  use_ai: true,
  radius: 10,
};

const App = () => {
  const [searchSettings, setSearchSettings] = useState(DEFAULT_SEARCH_SETTINGS);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: LIBRARIES,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <SearchSettingsContext.Provider value={{ searchSettings, setSearchSettings }}>
      <div className='app'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Navigate to='/search' />} />
            <Route path='/search' element={<FunFinder />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/about' element={<About />} />
            <Route
              path='*'
              element={
                <Box className='content-container center-item'>
                  <h2>404 Page not found</h2>
                </Box>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </SearchSettingsContext.Provider>
  );
};

export default App;
