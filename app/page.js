import { Box, Container, Typography, Image } from '@mui/material'
import TopBar from './components/TopBar'
import PosterSlider from './components/PosterSlider'

export default function Home () {
  return (
    <Container sx={{ width: '100%' }}>
      <Box my={10} sx={{ width: '100%', bgcolor: 'secondary.main' }}>
        <PosterSlider />
      </Box>
      <Box></Box>
    </Container>
  )
}
