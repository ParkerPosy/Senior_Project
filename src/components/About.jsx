import React from 'react';
import Box from '@mui/material/Box';

const About = () => {
  return (
    <Box className='content-container'>
      <div>
        <article>
          <h1>{'What is FunNearby.app?'}</h1>
          <p>{`
          FunNearby is a cool web app that gathers info from different
            sites to make a list of all the exciting events happening in your searched location.
          `}</p>
          <p>{`
            Discover your city's pulse with FunNearby! Effortlessly explore local happenings,
            from live performances to food festivals, and plan your weekends with ease.
            With its user-friendly interface and real-time updates, FunNearby ensures you never miss out on the fun.
            Whether you're a local or just passing through,
            make every day an adventure with FunNearby – your go-to companion for discovering the best events around you.
          `}</p>
        </article>
      </div>
    </Box>
  );
};

export default About;