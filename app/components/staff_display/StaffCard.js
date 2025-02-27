"use client";
import React from "react";
import styles from "./StaffCard.module.css";

const StaffCard = ({ staff, onClick, isSelected }) => {
  const { id, name, picture, classYear } = staff;
  return (
    <div
      key={id}
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={() => onClick(staff)}
    >
      <img src={picture} alt="Staff Avatar" className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.classYear}>Class of {classYear}</p>
      </div>
    </div>
  );
};

export default StaffCard;