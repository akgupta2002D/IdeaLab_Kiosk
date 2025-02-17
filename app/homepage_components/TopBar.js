'use client';

import { useState, useEffect } from "react";
import { Box, Typography } from '@mui/material';
import ActiveStaffDisplay from '../staff_display_components/ActiveStaffDisplay';

const TopBar = () => {
  const [shiftWorkers, setShiftWorkers] = useState([]);

  // Load selected staff from localStorage when the component mounts
  useEffect(() => {
    const storedStaff = localStorage.getItem("selectedStaff");
    if (storedStaff) {
      setShiftWorkers(JSON.parse(storedStaff));
    } else {
      setShiftWorkers([]); // Ensure no old data remains
    }
  }, []);

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      p={2}
      bgcolor='primary.main'
      width={'100%'}
      height={'14vh'}
    >
      {/* Left Section */}
      <Box display='flex' alignItems='flex-start'>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='h3' color='white'>
            Idea Lab Kiosk
          </Typography>
          <Typography variant='body1' color='warning'>
            Empowering Creativity and Innovation
          </Typography>
        </Box>
      </Box>

      {/* Right Section - Display Selected Staff */}
      <ActiveStaffDisplay shiftWorkers={shiftWorkers} />
    </Box>
  );
};

export default TopBar;