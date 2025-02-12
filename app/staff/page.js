"use client"
import React,  { useState } from 'react';
import StaffDashboard from '../staff_display_components/StaffDashboard';
import styles from "../staff_display_components/StaffPage.module.css"

// Generate 23 staff members by repeating and modifying baseStaff
const staffList = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  name: `Staff Member ${i + 1}`,
  picture: `./staff/luffy.png`, // Cycles between base images
  classYear: `${2023 + (i % 3)}`, // Randomly assigns 2023, 2024, 2025
}));

const StaffPage = () => {
  const [selectedStaff, setSelectedStaff] = useState(null); // We create a state to hold on to the selected staff

  const handleStaffClick = (staff) => {
    setSelectedStaff(staff);
    console.log("Selected staff:", staff);
  };
  return (
    <div>
      <a href="/" className={styles.backButton}>
      ← Go Back
    </a>
      <StaffDashboard staffList={staffList}  onStaffClick={handleStaffClick} />

      {selectedStaff && (
        <div className="modal">
          <h2>Selected Staff: {selectedStaff.name}</h2>
          <p>Class Year: {selectedStaff.classYear}</p>
        </div>
      )}
    </div>
  );
};

export default StaffPage;