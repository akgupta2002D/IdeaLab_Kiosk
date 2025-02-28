"use client";

import React from 'react';
import { useIdeaLabToggle } from '../../hooks/useIdeaLabToggle';
import TopBar from './TopBar';
import PosterSlider from './PosterSlider';
import KioskButtons from './KioskButtons';
import IdeaLabSchedule from './IdeaLabSchedule';
import styles from './styles/HomeContent.module.css'; // Import the CSS module

export default function HomeContent() {
  const showIdeaLabHours = useIdeaLabToggle();

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