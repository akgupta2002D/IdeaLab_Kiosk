'use client'
// components/AddStaff.js
import React, { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { Box, TextField, Button, Typography } from '@mui/material'

const AddStaff = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [success, setSuccess] = useState(false)

  const handleAddStaff = async e => {
    e.preventDefault()

    try {
      // Add staff data to Firebase Firestore
      await addDoc(collection(db, 'staff'), {
        name: name.trim(),
        image: image.trim(),
        isOnShift: false // default status when adding a new staff member
      })
      setName('')
      setImage('')
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000) // Reset success message after 3 seconds
    } catch (error) {
      console.error('Error adding document: ', error)
    }
  }

  return (
    <Box
      component='form'
      onSubmit={handleAddStaff}
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        p: 2,
        bgcolor: 'background.paper',
        borderRadius: '10px',
        boxShadow: 1
      }}
    >
      <Typography variant='h5' gutterBottom>
        Add New Staff
      </Typography>
      <TextField
        label='Name'
        value={name}
        onChange={e => setName(e.target.value)}
        required
        fullWidth
        margin='normal'
      />
      <TextField
        label='Image URL'
        value={image}
        onChange={e => setImage(e.target.value)}
        required
        fullWidth
        margin='normal'
      />
      <Button variant='contained' color='primary' type='submit' sx={{ mt: 2 }}>
        Add Staff
      </Button>
      {success && (
        <Typography color='success.main' mt={2}>
          Staff added successfully!
        </Typography>
      )}
    </Box>
  )
}

export default AddStaff
