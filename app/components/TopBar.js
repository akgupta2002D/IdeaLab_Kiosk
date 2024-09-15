/**
 * TopBar.js
 *
 * Author: Ankit Gupta
 * Company: Kioskx
 *
 * Description:
 * This component renders the top bar for the Kioskx Idea Lab Kiosk App.
 * The left section contains a logo, the app name, and a brief description.
 * The right section displays the "Current Shift" with worker images and names.
 */

'use client'

import { Box, Typography, Avatar } from '@mui/material'

const TopBar = () => {
  // Sample data for the shift workers
  const shiftWorkers = [
    { name: 'Ankit Gupta', image: '/path/to/john-image.jpg' },
    { name: 'Steven Hao', image: '/path/to/jane-image.jpg' }
  ]

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      p={2}
      bgcolor='primary.main'
    >
      {/* Left Section */}
      <Box display='flex' alignItems='flex-start'>
        <Box display='flex' alignItems='center'>
          <Avatar
            alt='App Logo'
            src='/path/to/logo.png' // Replace with the path to your logo image
            sx={{ width: 50, height: 50, marginRight: 2 }}
          />
        </Box>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='h5' color='textPrimary'>
            Idea Lab Kiosk
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            Empowering Creativity and Innovation
          </Typography>
        </Box>
      </Box>

      {/* Right Section */}
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        bgcolor='warning.main'
        sx={{ borderRadius: '20px', p: 1 }}
      >
        <Typography variant='h6' color='textPrimary' gutterBottom>
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
                sx={{ width: 68, height: 68 }}
              />
              <Typography variant='body2' color='textPrimary' mt={1}>
                {worker.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default TopBar
