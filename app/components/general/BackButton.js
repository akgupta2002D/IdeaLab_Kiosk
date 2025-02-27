"use client";
import React from "react";
import styles from "./BackButton.module.css";

const BackButton = () => {
  
  return (
    <a href="/" className={styles.backButton}>
        ← Go Back
    </a>
  );
};

export default BackButton;