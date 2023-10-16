import React from 'react';
import '../styles/event.css';

const Event = ({ data }) => {
  return (
    <div className='result'>
      <div className='result-header'>
        <div className='result-title'>{data.title}</div>
        <div className='result-time'>{`${data.startTime} - ${data.endTime}`}</div>
      </div>
      <div className='result-description'>{data.description}</div>
      <div className='result-footer'>
        <div className='result-address'>{data.address}</div>
        <div className='result-google-link'>
          <a href={data.googleMapsLink} target='_blank' rel='noreferrer noopener'>{data.googleMapsLink}</a>
        </div>
      </div>
    </div>
  );
};

export default Event;