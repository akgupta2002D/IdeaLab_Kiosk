"use client";

import styles from "./styles/ActiveStaffDisplay.module.css";

const ActiveStaffDisplay = ({ shiftWorkers }) => {

  console.log(shiftWorkers);
  return (
    
    <div className={styles.activeStaffContainer}>
      <h2 className={styles.staffTitle}>CURRENT SHIFT</h2>
      <div className={styles.staffList}>
        {shiftWorkers.length > 0 ? (
          shiftWorkers.map((worker) => (
            <div key={worker.id} className={styles.staffMember}>
              <img
                alt={worker.first_name}
                src={worker.picture}
                className={styles.staffAvatar}
              />
              <p className={styles.staffName}>{worker.first_name + " " + worker.last_name}</p>
              <p className={styles.staffName}>{worker.class_year}</p>
            </div>
          ))
        ) : (
          <p className={styles.staffClass}>No staff currently selected.</p>
        )}
      </div>
    </div>
  );
};

export default ActiveStaffDisplay;