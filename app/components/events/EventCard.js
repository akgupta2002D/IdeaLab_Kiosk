// components/EventCard.js
import React, { useState } from 'react';
import './styles/EventCard.css';

const EventCard = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="event-card" onClick={togglePopup}>
        <img
          src={`/events/${event.image_url}`}
          alt={event.name}
          className="event-image"
        />
      </div>

      {isOpen && (
        <div className="event-popup-overlay" onClick={togglePopup}>
          <div className="event-popup" onClick={(e) => e.stopPropagation()}>
            <img
              src={`/events/${event.image_url}`}
              alt={event.name}
              className="event-popup-image"
            />
            <div className="event-popup-details">
              <h2>{event.name}</h2>
              <p><strong>Description:</strong> {event.description}</p>
              <p><strong>Type:</strong> {event.type}</p>
              <p><strong>Building:</strong> {event.building}</p>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.start_time} - {event.end_time}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;