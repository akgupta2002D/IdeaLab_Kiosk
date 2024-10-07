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

import { useState, useEffect } from 'react'
import { Avatar, Box, Typography } from '@mui/material'

const PosterSlider = () => {
  // Sample data for events
  const events = [
    {
      name: 'Tech Meetup 2024',
      location: 'Idea Lab Auditorium',
      location_img: '/Idealab.jpg',
      date: 'Oct 15, 2024',
      image: '/Poster.webp', // Replace with valid image path or empty string
      description: 'This will be a fun one!'
    },
    {
      name: 'Creative Workshop',
      location: 'Room 204',
      date: 'Oct 20, 2024',
      image: '', // No image available
      location_img: '/Idealab.jpg'
    }
    // Add more events as needed
  ]

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

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      height='50vh' // Occupy 50% of the viewport height
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
        style={{
          transition: 'opacity 1s ease-in-out', // Smooth fade-in/out effect
          opacity: 1,
          backgroundImage: `url(${currentEvent.image || defaultImage})`, // Use event image or fallback to default image
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Event Details */}
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
        >
          {currentEvent.name} {/* Event name */}
        </Typography>

        {/* Soft UI Background Container */}
        <Box
          display={'flex'}
          width={'100%'}
          bgcolor='background.default' // Soft background color
          // borderRadius={3}
          boxShadow={1}
          p={2} // Padding inside the container
          gap={2}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            width={'70%'}
            bgcolor={'#f0f8ff'} // Soft light blue background
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
          >
            <Avatar
              src='CIS_Location.jpeg'
              variant='square'
              sx={{
                border: '1px solid none', // Lighter border color
                width: '90%',
                height: '80%',
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
    </Box>
  )
}

export default PosterSlider
