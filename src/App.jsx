import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useLoadScript } from '@react-google-maps/api';
import Box from '@mui/material/Box';
import FunFinder from './components/FunFinder';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
import About from './components/About';
import './App.css';

const LIBRARIES = ['places'];

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: LIBRARIES,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/fun-finder' />} />
          <Route path='/fun-finder' element={<FunFinder />} />
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
  );
};

export default App;
