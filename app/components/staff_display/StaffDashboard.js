"use client";
import React from "react";
import StaffCard from "./StaffCard";
import styles from "./styles/StaffDashboard.module.css";

const StaffDashboard = ({ staffList, onStaffClick, selectedStaff }) => {
  return (
    <section className={styles.dashboardSection}>
      <div className={styles.header}>
        <h1 className={styles.title}>Please Select Your Avatar</h1>
        <p className={styles.description}>
          Meet the professionals behind our success. Our team is committed to
          excellence and innovation, ensuring that every project is handled with
          utmost care and expertise.
        </p>
      </div>
      {staffList.length === 0 ? (
        <p className={styles.noStaff}>No staff available at the moment.</p>
      ) : (
        <div className={styles.dashboard}>
          {staffList.map((staff) => (
            <StaffCard
              key={staff.id}
              staff={staff}
              onClick={onStaffClick}
              isSelected={selectedStaff.has(staff.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default StaffDashboard;