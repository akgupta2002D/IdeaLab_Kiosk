import { Box, Container, Typography, Image } from '@mui/material'

export default function Home () {
  return (
    <Container sx={{ width: '100%', bgcolor: 'secondary.main' }}>
      <Box my={2} mx={0} sx={{ width: '100%', bgcolor: 'secondary.main' }}>
        <Typography>Hey</Typography>
      </Box>
      <Box></Box>
    </Container>
  )
}
