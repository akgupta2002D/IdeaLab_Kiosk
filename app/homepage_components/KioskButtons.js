/**
 * KioskButtons.js
 *
 * Author: Ankit Gupta
 * Company: Kioskx
 *
 * Description:
 * This component displays three large, interactive buttons for a kiosk system in a horizontal layout.
 * The buttons are labeled "Find Something", "AI CHAT BOT", and "GUIDES".
 */

'use client'

import { Box, Button } from '@mui/material'

const KioskButtons = () => {
  return (
    <Box
      display='flex'
      flexDirection='row' // Arrange buttons horizontally
      justifyContent='space-around'
      alignItems='center'
      width='100%' // Full width to distribute buttons evenly
      height='12vh' // Occupy 20% of the viewport height
      p={2}
      bgcolor='background.default'
    >
      {/* Find Something Button */}
      <Button
        variant='contained'
        color='primary'
        sx={{
          width: '20vw', // Each button takes up around 20% of the viewport width
          height: '80px',
          fontSize: '1.2rem',
          boxShadow: 3,
          '&:hover': {
            boxShadow: 6
          }
        }}
      >
        Find Something
      </Button>

      {/* AI Chat Bot Button */}
      <Button
        variant='contained'
        color='warning'
        sx={{
          width: '20vw', // Consistent size for each button
          height: '20vw',
          fontSize: '1.2rem',
          boxShadow: 3,
          '&:hover': {
            boxShadow: 6
          },
          borderRadius: '50%'
        }}
      >
        Ask Our AI
      </Button>

      {/* Guides Button */}
      <Button
        variant='contained'
        color='primary'
        sx={{
          width: '20vw',
          height: '80px',
          fontSize: '1.2rem',
          boxShadow: 3,
          '&:hover': {
            boxShadow: 6
          }
        }}
      >
        GUIDES
      </Button>
    </Box>
  )
}

export default KioskButtons
