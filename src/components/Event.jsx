import React from 'react';
import '../styles/event.css';

const Event = ({ data }) => {
  const {
    title,
    firstTime,
    secondTime,
    description,
    address,
    googleMapsLink,
    rating,
    total_ratings,
    price_level,
  } = data;

  return (
    <div className='result'>
      <div className='result-header'>
        <div className='result-title'>{title}</div>
        <div className='result-time'>{`${firstTime}`}</div>
        {secondTime && <div className='result-time'>{`${secondTime}`}</div>}
        <div className='additional-result-info'>
          <div className='price'>{'\u{1f4b2}'.repeat(price_level).length ? '\u{1f4b2}'.repeat(price_level) : '\u{1f4b2}'}</div>
          <div className='stars'>{`\u2b50 ${rating ?? 'N/A'} (${total_ratings ?? 'N/A'})`}</div>
        </div>
      </div>
      <div className='result-description'>{description}</div>
      <div className='result-footer'>
        <div className='result-address'>{address}</div>
        <div className='result-google-link'>
          <a href={googleMapsLink} target='_blank' rel='noreferrer noopener'>{googleMapsLink}</a>
        </div>
      </div>
    </div>
  );
};

export default Event;