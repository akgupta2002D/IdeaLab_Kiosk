'use client'

import { useState } from 'react'
import { TextField, Button, Box } from '@mui/material'

const EventForm = ({ addEvent }) => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const handleAddEvent = () => {
    addEvent({ name, location, date, description })
    setName('')
    setLocation('')
    setDate('')
    setDescription('')
  }

  return (
    <Box
      component='form'
      onSubmit={e => e.preventDefault()}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: 400,
        mx: 'auto'
      }}
    >
      <TextField
        label='Event Name'
        value={name}
        onChange={e => setName(e.target.value)}
        variant='outlined'
        fullWidth
      />
      <TextField
        label='Location'
        value={location}
        onChange={e => setLocation(e.target.value)}
        variant='outlined'
        fullWidth
      />
      <TextField
        label='Date'
        type='date'
        value={date}
        onChange={e => setDate(e.target.value)}
        variant='outlined'
        fullWidth
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        label='Description'
        value={description}
        onChange={e => setDescription(e.target.value)}
        variant='outlined'
        multiline
        rows={4}
        fullWidth
      />
      <Button
        onClick={handleAddEvent}
        variant='contained'
        color='primary'
        sx={{ mt: 2 }}
      >
        Add Event
      </Button>
    </Box>
  )
}

export default EventForm
