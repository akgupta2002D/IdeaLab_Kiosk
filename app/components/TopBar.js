/**
 * TopBar.js
 *
 * Author: Ankit Gupta
 * Company: Kioskx
 *
 * Description:
 * This component renders the top bar for the Kioskx Idea Lab Kiosk App.
 * It includes two main sections: on the left, five text elements using Typography,
 * and on the right, a "Current Shift" section with two boxes, each containing an image and a name.
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
      p={2}
      bgcolor='primary.main'
    >
      {/* Left Section */}
      <Box>
        {['Option 1', 'Option 2', 'Option 3'].map((text, index) => (
          <Typography key={index} variant='h6' color='textPrimary' gutterBottom>
            {text}
          </Typography>
        ))}
      </Box>

      {/* Right Section */}
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        bgcolor='warning.main'
        sx={{ borderRadius: '20px' }}
      >
        <Typography variant='h6' color='textPrimary' gutterBottom>
          Current Shift
        </Typography>
        <Box display='flex' justifyContent='center' mx={2}>
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
              <Typography variant='body2' color='textPrimary' my={2}>
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
