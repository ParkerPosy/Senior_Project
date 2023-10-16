import React from 'react';
import Button from '@mui/material/Button';
import '../styles/validation-dialog.css';

const ValidationDialog = ({ title, description, onClose }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2 className='modal-title'>{title}</h2>
        <p className='modal-description'>{description}</p>
        <div className='modal-buttons'>
          <Button
            variant='contained'
            size='small'
            onClick={onClose}>
          OK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ValidationDialog;