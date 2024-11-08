'use client'

import React, { useState, useEffect } from 'react'
import { Box, Container, Typography, Image } from '@mui/material'
import TopBar from './homepage_components/TopBar'
import PosterSlider from './homepage_components/PosterSlider'
import KioskButtons from './homepage_components/KioskButtons'
import IdeaLabSchedule from './homepage_components/IdeaLabSchedule'
export default function Home () {
  const [showIdeaLabHours, setShowIdeaLabHours] = useState(false)

  useEffect(() => {
    // Set up a timer to switch components every 60 seconds
    const interval = setInterval(() => {
      setShowIdeaLabHours(prev => !prev)
    }, 30000) // 60000 milliseconds = 1 minute

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(interval)
  }, [])

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

  return (
    <Box sx={{ width: '100%' }}>
      <TopBar />
      <Box my={12} mx={8} sx={{ bgcolor: 'secondary.main' }}>
        {showIdeaLabHours ? (
          <IdeaLabSchedule />
        ) : (
          <PosterSlider events={events} />
        )}
      </Box>
      <Box>
        <KioskButtons />
      </Box>
    </Box>
  )
}
