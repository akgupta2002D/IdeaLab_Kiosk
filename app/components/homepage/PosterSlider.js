/**
 * PosterSlider.js
 *
 * Author: Ankit Gupta
 * Company: Kioskx
 *
 * Description:
 * This component displays event posters with details such as event name, location, and date.
 * It cycles through a list of events every 15 seconds with a smooth transition effect.
 * If an event's image can't be fetched or is missing, a default image is displayed.
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import { Avatar, Box, Typography } from '@mui/material'

const PosterSlider = ({ events }) => {
  // Sample data for events

  // Default image to be used if an event image is not available
  const defaultImage = '/default.webp' // Replace with the path to your default image

  // State to track the current event index
  const [currentEventIndex, setCurrentEventIndex] = useState(0)

  useEffect(() => {
    // Set up an interval to change events every 15 seconds
    const interval = setInterval(() => {
      // Cycle to the next event, looping back to the start
      setCurrentEventIndex(prevIndex => (prevIndex + 1) % events.length)
    }, 15000) // 15000 ms = 15 seconds

    // Clean up the interval on component unmount to prevent memory leaks
    return () => clearInterval(interval)
  }, [events.length])

  // Get the current event to display
  const currentEvent = events[currentEventIndex]

  // We want a glow feature behind the feature
  // Req: The image
  // Process: The pixels of the image is calculated to find the max repeating color
  // Result: Use the maxPixel color to lay the base of the glow color behind the poster

  // We need a useState to manage the dominant color:

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      height='60vh' // Occupy 50% of the viewport height
      overflow='hidden'
      bgcolor='background.default'
      px={7}
      py={3}
      boxShadow={2}
    >
      {/* Poster Image */}
      <Box
        width='100%'
        height='100%'
        my={4}
        style={{
          transition: 'opacity 1s ease-in-out',
          opacity: 1,
          backgroundImage: `url(${currentEvent.image || defaultImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
          // boxShadow: '0 0 15px 10px yellow' // Glow effect based on dominant color
        }}
      />

      {/* Event Details */}
      {currentEvent.name && (
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'space-between'}
          color='black'
          borderRadius={2}
          width={'100%'}
          my={2}
        >
          <Typography
            variant='h4'
            component='h2'
            gutterBottom
            sx={{ fontWeight: '600' }}
            my={2}
          >
            {currentEvent.name} {/* Event name */}
          </Typography>

          {/* Soft UI Background Container */}
          <Box
            display={'flex'}
            width={'100%'}
            // borderRadius={3}
            boxShadow={1}
            p={2} // Padding inside the container
            gap={2}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              width={'70%'}
              borderRadius={2} // Rounded corners
              p={2} // Padding for inner content
            >
              {/* Event Info */}
              <Box
                display='flex'
                flexDirection={'column'}
                alignItems='flex-start'
              >
                <Typography
                  variant='h6'
                  sx={{ fontSize: '0.9rem', fontWeight: '600', color: '#333' }}
                >
                  📋 Event Info
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ fontSize: '0.9rem', ml: '0.2rem', color: '#555' }}
                >
                  {currentEvent.description ||
                    'No description! But it will be fun!'}
                </Typography>
              </Box>

              {/* Event Date */}
              <Box
                display='flex'
                flexDirection={'column'}
                alignItems='flex-start'
                marginTop={'auto'}
              >
                <Typography
                  variant='h6'
                  sx={{ fontSize: '0.9rem', fontWeight: '600', color: '#333' }}
                >
                  📅 Date
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ fontSize: '0.9rem', ml: '0.2rem', color: '#555' }}
                >
                  {currentEvent.date}
                </Typography>
              </Box>
            </Box>

            <Box
              display={'flex'}
              flexDirection={'column'}
              width={'30%'}
              marginLeft={'auto'}
              alignItems={'center'}
              gap={1}
              px={2}
              py={2}
              bgcolor={'#f0f8ff'}
            >
              <Avatar
                src='CIS_Location.jpeg'
                variant='square'
                sx={{
                  border: '1px solid none', // Lighter border color
                  width: '100%',
                  height: '90%',
                  borderRadius: 3, // Rounded corners for soft UI
                  boxShadow: 3 // Soft shadow for a raised effect
                }}
              />

              <Typography
                gutterBottom
                sx={{
                  fontSize: '0.7rem',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                Location: {currentEvent.location} {/* Event location */}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default PosterSlider
