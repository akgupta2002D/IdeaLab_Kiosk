"use client";
import React, { useState } from "react";
import StaffDashboard from "../staff_display_components/StaffDashboard";
import styles from "../staff_display_components/StaffPage.module.css";

// Generate 23 staff members
const staffList = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  name: `Staff Member ${i + 1}`,
  picture: `./staff/luffy.png`, // Replace with actual image path
  classYear: `${2023 + (i % 3)}`, // Assigns 2023, 2024, or 2025
}));

const StaffPage = () => {
  const [selectedStaff, setSelectedStaff] = useState(new Set()); // Store staff IDs instead of objects

  const handleStaffClick = (staff) => {
    setSelectedStaff((prevSelected) => {
      const updatedSet = new Set(prevSelected);
      if (updatedSet.has(staff.id)) {
        updatedSet.delete(staff.id); // Remove if already selected
      } else {
        updatedSet.add(staff.id); // Add if not selected
      }
      return updatedSet; // Ensure reactivity
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
        selectedStaff={selectedStaff}
      />

      {selectedStaff.size > 0 && (
        <div className="modal">
          <h2>Selected Staff Members:</h2>
          <ul>
            {staffList
              .filter((staff) => selectedStaff.has(staff.id)) // Retrieve full objects using their IDs
              .map((staff) => (
                <li key={staff.id}>
                  {staff.name} (Class Year: {staff.classYear})
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StaffPage;