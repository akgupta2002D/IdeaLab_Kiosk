"use client";

import React from 'react';
import TopBar from './TopBar';
import PosterSlider from './PosterSlider';
import KioskButtons from './KioskButtons';
import styles from './styles/HomeContent.module.css'; // Import the CSS module
import { useEffect, useState } from 'react';

export default function HomeContent() {

  // const events = [
  //   {
  //     name: 'Tech Meetup 2024',
  //     location: 'Idea Lab Auditorium',
  //     location_img: '/Idealab.jpg',
  //     date: 'Oct 15, 2024',
  //     image: '/Poster.webp',
  //     description: 'This will be a fun one!'
  //   },
  //   {
  //     name: 'Creative Workshop',
  //     location: 'Room 204',
  //     date: 'Oct 20, 2024',
  //     image: '',
  //     location_img: '/Idealab.jpg'
  //   }
  // ];

  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }

    fetchEvents();
  }, []);

  

  return (
    <div className={styles.homeContainer}>
      <TopBar />
      <div className={styles.contentContainer}>
        <div className={styles.buttonGroup}>
          <a href="/staff" className={`${styles.button} ${styles.checkIn}`}>
            CHECK IN
          </a>
          <a href="/staff" className={`${styles.button} ${styles.checkOut}`}>
            CHECK OUT
          </a>
        </div>
        <div className={styles.mainContent}>
          {/* {showIdeaLabHours ? <IdeaLabSchedule /> : <PosterSlider events={events} />} */}
          <PosterSlider events={events} />
        </div>
      </div>
      <div className={styles.kioskButtons}>
        <KioskButtons />
      </div>
    </div>
  );
}