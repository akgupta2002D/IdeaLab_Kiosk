import React from 'react';
import StaffCard from './StaffCard';
import styles from './StaffDashboard.module.css';

const StaffDashboard = ({ staffList }) => {
  if (!staffList || staffList.length === 0) {
    return <p>No staff available.</p>;
  }

  return (
    <div className={styles.dashboard}>
      {staffList.map((staff) => (
        <StaffCard key={staff.id} staff={staff} />
      ))}
    </div>
  );
};

export default StaffDashboard;