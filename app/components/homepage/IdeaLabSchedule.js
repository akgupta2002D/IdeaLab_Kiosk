"use client";

import { useEffect, useState } from "react";
import styles from "./styles/IdeaLabSchedule.module.css";

const IdeaLabHours = () => {
  const hours = [
    { day: "Sunday", time: "11:45am - 7pm" },
    { day: "Monday - Thursday", time: "9am - 9pm" },
    { day: "Friday", time: "9am - 6pm" },
    { day: "Saturday", time: "Closed" }
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={styles.ideaLabContainer}>
      <h1 className={styles.ideaLabTitle}>IdeaLab Hours</h1>
      {hours.map((item, index) => (
        <div
          key={item.day}
          className={styles.dayCard}
          style={{ animationDelay: `${index * 0.5}s`, opacity: loaded ? 1 : 0 }}
        >
          <h2>{item.day}</h2>
          <p>{item.time}</p>
        </div>
      ))}
    </div>
  );
};

export default IdeaLabHours;