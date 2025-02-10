"use client"
// Home.js
import React, { useState, useEffect } from 'react';
import TopBar from './homepage_components/TopBar';
import PosterSlider from './homepage_components/PosterSlider';
import KioskButtons from './homepage_components/KioskButtons';
import IdeaLabSchedule from './homepage_components/IdeaLabSchedule';
import styles from './Home.module.css'; // Import the CSS module

export default function Home() {
  const [showIdeaLabHours, setShowIdeaLabHours] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowIdeaLabHours(prev => !prev);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const events = [
    {
      name: 'Tech Meetup 2024',
      location: 'Idea Lab Auditorium',
      location_img: '/Idealab.jpg',
      date: 'Oct 15, 2024',
      image: '/Poster.webp',
      description: 'This will be a fun one!'
    },
    {
      name: 'Creative Workshop',
      location: 'Room 204',
      date: 'Oct 20, 2024',
      image: '',
      location_img: '/Idealab.jpg'
    }
  ];

  return (
    <div className={styles.homeContainer}>
      <TopBar />
      <div className={styles.contentContainer}>
        <div className={styles.buttonGroup}>
          <a href="/staff" className={`${styles.button} ${styles.checkIn}`}>
            Check In
          </a>
          <a href="/staff" className={`${styles.button} ${styles.checkOut}`}>
            Check Out
          </a>
        </div>
        <div className={styles.mainContent}>
          {showIdeaLabHours ? <IdeaLabSchedule /> : <PosterSlider events={events} />}
        </div>
      </div>
      <div className={styles.kioskButtons}>
        <KioskButtons />
      </div>
    </div>
  );
}