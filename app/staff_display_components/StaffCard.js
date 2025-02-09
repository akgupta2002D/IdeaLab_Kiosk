// "use client"; // Uncomment if you add client-side interactivity later
import React from 'react';
import styles from './StaffCard.module.css';

const StaffCard = ({ staff }) => {
  const { id, name, picture, classYear } = staff;
  return (
    <div key={id} className={styles.card}>
      <img src={picture} alt={name} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.classYear}>Class of {classYear}</p>
      </div>
    </div>
  );
};

export default StaffCard;