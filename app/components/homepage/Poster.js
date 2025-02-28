"use client";
import React from "react";
import styles from "./styles/Poster.module.css";

const Poster = ({ imageUrl, altText }) => {
  return (
    <div
      className={styles.poster}
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-label={altText}
    />
  );
};

export default Poster;