/**
 * @file        events/page.js
 * @description This file defines the EventsPage component, which serves as the main interface for displaying and filtering events.
 * It includes search and filter controls for event name, type, building, and date, and displays a grid of event cards.
 *
 * @dependencies
 * - React (useState, useEffect)
 * - EventCard (component for displaying individual event details)
 * - BackButton (component for navigating back to the previous page)
 * - CSS styles (EventCard.css)
 *
 * @notes
 * - Fetches events data from the `/api/events` endpoint and manages loading and error states.
 * - Provides filtering functionality based on event name, type, building, and date.
 * - Displays a loading message while fetching data and an error message if the fetch fails.
 * - The layout includes a back button, search and filter controls, and a grid of event cards.
 */
// app/events/page.jsx
'use client';

import React, { useEffect, useState } from 'react';
import EventCard from '../../components/events/EventCard';
import '../../components/events/styles/EventCard.css';
import BackButton from '@/app/components/general/BackButton';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterBuilding, setFilterBuilding] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events');
        const data = await res.json();
        setEvents(data);
        setFilteredEvents(data);
      } catch (err) {
        setError('Failed to load events.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    let filtered = [...events];

    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType) {
      filtered = filtered.filter(event => event.type === filterType);
    }

    if (filterBuilding) {
      filtered = filtered.filter(event => event.building === filterBuilding);
    }

    if (filterDate) {
      filtered = filtered.filter(event => event.date === filterDate);
    }

    setFilteredEvents(filtered);
  }, [searchTerm, filterType, filterBuilding, filterDate, events]);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <BackButton />

      <div className="events-page">
        <div className="events-controls">
          <input
            type="text"
            placeholder="Search event name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="">All Types</option>
            <option value="Arts">Arts</option>
            <option value="Sports">Sports</option>
            <option value="Departmental">Departmental</option>
            <option value="Computer Science">Computer Science</option>
          </select>

          <select value={filterBuilding} onChange={(e) => setFilterBuilding(e.target.value)}>
            <option value="">All Buildings</option>
            <option value="Sports Hall">Sports Hall</option>
            <option value="Palamountain">Palamountain</option>
            <option value="CIS">CIS</option>
          </select>

          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>

        <div className="events-grid">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </>
  );
};

export default EventsPage;
