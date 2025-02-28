"use client";
import React from "react";
import styles from "./styles/EventInfo.module.css";

const EventInfo = ({ name, description, date, location }) => {
  return (
    <div className={styles.eventOverlay}>
      <h2 className={styles.eventTitle}>{name}</h2>
      <p className={styles.eventDescription}>
        {description || "No description! But it will be fun!"}
      </p>

      <div className={styles.eventMeta}>
        <div>
          <h6>Date</h6>
          <p>{date}</p>
        </div>
        <div>
          <h6>Location</h6>
          <p>{location}</p>
        </div>
      </div>

      {/* Location image, if you want it in the overlay */}
      <div className={styles.locationImageWrapper}>
        <img
          src="/CIS_Location.jpeg"
          alt="Event Location"
          className={styles.locationImage}
        />
      </div>
    </div>
  );
};

export default EventInfo;