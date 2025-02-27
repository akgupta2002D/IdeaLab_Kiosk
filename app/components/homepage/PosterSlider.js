"use client";

import { usePosterSlider } from "../../hooks/usePosterSlider";
import styles from "./styles/PosterSlider.module.css";

const PosterSlider = ({ events }) => {
  const defaultImage = "/default.webp"; // Default fallback image
  const currentEvent = usePosterSlider(events); // Use the custom hook

  return (
    <div className={styles.posterSlider}>
      {/* Poster Image */}
      <div
        className={styles.posterImage}
        style={{ backgroundImage: `url(${currentEvent.image || defaultImage})` }}
      />

      {/* Event Details */}
      {currentEvent.name && (
        <div className={styles.eventDetails}>
          <h2 className={styles.eventTitle}>{currentEvent.name}</h2>

          {/* Event Info Container */}
          <div className={styles.eventContainer}>
            <div className={styles.eventInfo}>
              {/* Event Description */}
              <div className={styles.eventSection}>
                <h6 className={styles.eventHeading}>📋 Event Info</h6>
                <p className={styles.eventText}>
                  {currentEvent.description || "No description! But it will be fun!"}
                </p>
              </div>

              {/* Event Date */}
              <div className={styles.eventSection} style={{ marginTop: "auto" }}>
                <h6 className={styles.eventHeading}>📅 Date</h6>
                <p className={styles.eventText}>{currentEvent.date}</p>
              </div>
            </div>

            {/* Event Location */}
            <div className={styles.eventLocation}>
              <img src="/CIS_Location.jpeg" alt="Event Location" />
              <p className={styles.eventLocationText}>
                Location: {currentEvent.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PosterSlider;