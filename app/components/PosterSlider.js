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
import { Box, Typography } from '@mui/material'

const PosterSlider = () => {
  // Sample data for events
  const events = [
    {
      name: 'Tech Meetup 2024',
      location: 'Idea Lab Auditorium',
      date: 'Oct 15, 2024',
      image: '/Poster.webp', // Replace with valid image path or empty string
      description: 'This will be a fun one!'
    },
    {
      name: 'Creative Workshop',
      location: 'Room 204',
      date: 'Oct 20, 2024',
      image: '' // No image available
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
        // Semi-transparent background for text readability
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'space-between'}
        color='black'
        borderRadius={2}
        width={'100%'}
      >
        <Typography variant='h4' component='h2' gutterBottom>
          {currentEvent.name} {/* Event name */}
        </Typography>
        <Typography variant='h6'>{currentEvent.description}</Typography>

        <Box display={'flex'} flexDirection={'column'} width={'100%'}>
          <Typography variant='h6' gutterBottom>
            Location: {currentEvent.location} {/* Event location */}
          </Typography>
          <Typography variant='subtitle1'>
            {currentEvent.date} {/* Event date */}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default PosterSlider
