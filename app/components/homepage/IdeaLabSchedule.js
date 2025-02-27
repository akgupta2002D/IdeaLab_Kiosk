// components/IdeaLabHours.js
'use client'

import React from 'react'
import { Box, Card, Typography } from '@mui/material'
import { styled, keyframes } from '@mui/system'

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`

const Title = styled(Typography)({
  fontSize: '4rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '1.5rem',
  animation: `${slideIn} 1s ease-in-out`
})

const DayCard = styled(Card)(({ delay }) => ({
  padding: '1rem',
  width: '70%',
  marginBottom: '1rem',
  backgroundColor: 'yellow',
  color: 'black',
  textAlign: 'center',
  borderRadius: '8px',
  animation: `${slideIn} 1s ease-in-out ${delay}s forwards`,
  opacity: 0,
  transform: 'translateX(-50px)'
}))

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  maxWidth: '100%',
  margin: 'auto',
  padding: '2rem',
  background: 'white',
  height: '60vh',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
})

const IdeaLabHours = () => {
  const hours = [
    { day: 'Sunday', time: '11:45am - 7pm' },
    { day: 'Monday - Thursday', time: '9am - 9pm' },
    { day: 'Friday', time: '9am - 6pm' },
    { day: 'Saturday', time: 'Closed' }
  ]

  return (
    <Container>
      <Title variant='h1' color='primary'>
        IdeaLab Hours
      </Title>
      {hours.map((item, index) => (
        <DayCard key={item.day} delay={index * 0.5}>
          <Typography variant='h3' component='h2' gutterBottom>
            {item.day}
          </Typography>
          <Typography variant='h4'>{item.time}</Typography>
        </DayCard>
      ))}
    </Container>
  )
}

export default IdeaLabHours
