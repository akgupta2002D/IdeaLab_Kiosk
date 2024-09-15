import { Box, Container, Typography, Image } from '@mui/material'
import TopBar from './components/TopBar'
export default function Home () {
  return (
    <Container sx={{ width: '100%' }}>
      <Box my={2} sx={{ width: '100%' }}>
        <TopBar />
      </Box>

      <Box my={2} sx={{ width: '100%', bgcolor: 'secondary.main' }}>
        <Typography>Hey</Typography>
      </Box>
      <Box></Box>
    </Container>
  )
}
