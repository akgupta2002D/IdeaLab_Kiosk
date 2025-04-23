"use client";
import React from "react";
import styles from "./styles/StaffCard.module.css";

const StaffCard = ({ staff, onClick, isSelected }) => {
  const { id, first_name, last_name, profile_img, class_year, speciality } = staff;
  return (
    <div
      key={id}
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={() => onClick(staff)}
    >
      <img src={`profiles/${profile_img}`} alt="Staff Avatar" className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{first_name + " " + last_name}</h3>
        <p className={styles.classYear}>Class of {class_year}</p>
        <p className={styles.classYear}>Speciality: {speciality}</p>
      </div>
    </div>
  );
};

export default StaffCard;