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
          <h3>{'How to use:'}</h3>
          <ol>
            <li>{'Enter a start date, an end date, and a central location of where you\'d like to search'}</li>
            <li>{'Hit \'Search\' and wait a few moments. This may take a while as your data is being analyzed to ensure the maximum amount of fun.'}</li>
            <li>{'Enjoy the fun locations around you!'}</li>
          </ol>
          <h1>{'Acceptable Use Policy:'}</h1>
          <p>{`
            FunNearby serves as an interface for finding locations using Google Maps, and analyzing that data with OpenAI.
             Although the app is straightforward and user interaction is minimal, adherence to this usage policy is crucial to maintaining
              the seamless operation of the app and to ensuring the availability of our service.
          `}</p>
          <h3>{'User Responsibilities:'}</h3>
          <ul>
            <li>{'Respect API Limitations: Users are expected to use FunNearby strictly for finding locations through Google Maps. Do not attempt to inject or manipulate data into the API.'}</li>
            <li>{'Non-Interference: Do not engage in any actions that could disrupt or interfere with the services supporting FunNearby. This includes but is not limited to attempting to overload or improperly manipulate the services.'}</li>
          </ul>
          <h3>{'Data Privacy:'}</h3>
          <ul>
            <li>{'Location Data: FunNearby may use location data to provide accurate results. Users should be aware that FunNearby may collect and use this data in accordance with applicable laws and regulations.'}</li>
          </ul>
          <h3>{'Security Measures:'}</h3>
          <ul>
            <li>{'Secure Usage: Users are encouraged to keep their web browsers up-to-date and employ proper security measures while using FunNearby to ensure a safe online experience.'}</li>
            <li>{'Unauthorized Access: Do not attempt to access or modify any part of FunNearby or its underlying microservices in an unauthorized manner.'}</li>
          </ul>
        </article>
      </div>
    </Box>
  );
};

export default About;