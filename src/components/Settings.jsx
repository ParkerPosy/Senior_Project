import React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';

const Settings = () => {
  return (
    <Box className='content-container'>
      <FormControl sx={{ m: 1 }} component='fieldset' variant='standard'>
        <FormLabel component='legend'>Categories To Include</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox defaultChecked />
            }
            label='Things to do'
          />
          <FormControlLabel
            control={
              <Checkbox defaultChecked />
            }
            label='Attractions'
          />
          <FormControlLabel
            control={
              <Checkbox defaultChecked />
            }
            label='Live Music'
          />
        </FormGroup>
      </FormControl>
      <FormControl sx={{ m: 1 }} component='fieldset' variant='standard'>
        <FormLabel component='legend'>Additional Settings</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox />
            }
            label='Enable Experimental AI Results'
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Settings;