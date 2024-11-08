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
import ActiveStaffDisplay from '../staff_display_components/ActiveStaffDisplay'

const TopBar = () => {
  // Sample data for the shift workers
  const shiftWorkers = [
    { name: 'Ankit Gupta', image: '/path/to/john-image.jpg' },
    { name: 'Steven Hao', image: '/path/to/jane-image.jpg' },
    { name: 'Ahadu Kebede', image: '/path/to/' }
  ]

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

      <ActiveStaffDisplay shiftWorkers={shiftWorkers} />
      {/* Right Section */}
    </Box>
  )
}

export default TopBar
