import { Box, Container, Typography, Image } from '@mui/material'
import TopBar from './components/TopBar'
import PosterSlider from './components/PosterSlider'
import KioskButtons from './components/KioskButtons'

export default function Home () {
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
        <PosterSlider events={events} />
      </Box>
      <Box>
        <KioskButtons />
      </Box>
    </Box>
  )
}
