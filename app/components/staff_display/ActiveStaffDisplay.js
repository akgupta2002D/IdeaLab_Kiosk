'use client';

import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const ActiveStaffDisplay = ({ shiftWorkers }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      bgcolor='warning.main'
      sx={{ borderRadius: '20px', p: 1 }}
    >
      <Typography variant='h5' color='textPrimary' gutterBottom>
        Current Shift
      </Typography>
      <Box display='flex' justifyContent='center'>
        {shiftWorkers.length > 0 ? (
          shiftWorkers.map((worker) => (
            <Box
              key={worker.id} // Ensure correct key usage
              mx={2}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Avatar
                alt={worker.name}
                src={worker.picture} // Ensure the correct attribute is used
                sx={{ width: 98, height: 98 }}
              />
              <Typography variant='body1' color='textPrimary' mt={1}>
                {worker.name}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                Class of {worker.classYear}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary">
            No staff currently selected.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ActiveStaffDisplay;