'use client';
import React, { useState, useEffect } from "react";
import StaffDashboard from "../staff_display_components/StaffDashboard";
import styles from "../staff_display_components/StaffPage.module.css";

const staffList = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  name: `Staff Member ${i + 1}`,
  picture: `./staff/luffy.png`,
  classYear: `${2023 + (i % 3)}`, 
}));

const StaffPage = () => {
  const [selectedStaff, setSelectedStaff] = useState([]);

  // Load selected staff from localStorage when the component mounts
  useEffect(() => {
    const storedStaff = localStorage.getItem("selectedStaff");
    if (storedStaff) {
      setSelectedStaff(JSON.parse(storedStaff));
    }
  }, []);

  const handleStaffClick = (staff) => {
    setSelectedStaff((prevSelected) => {
      let updatedList = [...prevSelected];
      const existingIndex = updatedList.findIndex((s) => s.id === staff.id);

      if (existingIndex !== -1) {
        updatedList.splice(existingIndex, 1); // Remove staff if already selected
      } else {
        updatedList.push(staff); // Add staff if not selected
      }

      // If no staff is selected, remove from localStorage
      if (updatedList.length === 0) {
        localStorage.removeItem("selectedStaff");
      } else {
        localStorage.setItem("selectedStaff", JSON.stringify(updatedList));
      }

      return updatedList;
    });
  };

  return (
    <div>
      <a href="/" className={styles.backButton}>
        ← Go Back
      </a>

      <StaffDashboard
        staffList={staffList}
        onStaffClick={handleStaffClick}
        selectedStaff={new Set(selectedStaff.map((s) => s.id))}
      />
    </div>
  );
};

export default StaffPage;