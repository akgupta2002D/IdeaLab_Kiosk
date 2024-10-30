// app/event-manager/page.js
import React from 'react'
import PosterSlider from '../components/PosterSlider' // Update the path as needed
import EventForm from '../posters_display_system/EventForm'

const EventManagerPage = () => {
  //   const { events, addEvent, updateEvent, deleteEvent } = useEventPosters()
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
    <div>
      <h1>Event Manager</h1>
      <EventForm />

      <PosterSlider events={events} />
    </div>
  )
}

export default EventManagerPage
