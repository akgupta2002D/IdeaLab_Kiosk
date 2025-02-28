"use client";
import React, { useState, useEffect } from "react";
import Poster from "./Poster";
import EventInfo from "./EventInfo";
import { usePosterSlider } from "../../hooks/usePosterSlider";
import styles from "./styles/PosterSlider.module.css";

const PosterSlider = ({ events }) => {
  // Use your custom hook to get the current event
  const currentEvent = usePosterSlider(events);

  const [showOverlay, setShowOverlay] = useState(false);

  // Whenever 'currentEvent' changes, we:
  // 1. Immediately show the new poster (rendered below).
  // 2. Wait 2s, then show the overlay (sliding up).
  useEffect(() => {
    setShowOverlay(false);

    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 500); // 2-second delay before overlay appears

    return () => clearTimeout(timer);
  }, [currentEvent]);

  if (!currentEvent) return null;

  return (
    <div className={styles.posterSlider}>
      <Poster
        imageUrl={currentEvent.image || "/default.webp"}
        altText={currentEvent.name || "Event Poster"}
      />
      {showOverlay && (
        <EventInfo
          // Use a unique key so the animation re-triggers each time
          key={currentEvent.id || currentEvent.name}
          name={currentEvent.name}
          description={currentEvent.description}
          date={currentEvent.date}
          location={currentEvent.location}
        />
      )}
    </div>
  );
};

export default PosterSlider;