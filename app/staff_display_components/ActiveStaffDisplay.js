// active_staff_display.js
'use client'

import React from 'react'
import { Box, Typography, Avatar } from '@mui/material'

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
        {shiftWorkers.map((worker, index) => (
          <Box
            key={index}
            mx={2}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Avatar
              alt={worker.name}
              src={worker.image}
              sx={{ width: 98, height: 98 }}
            />
            <Typography variant='body1' color='textPrimary' mt={1}>
              {worker.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ActiveStaffDisplay
