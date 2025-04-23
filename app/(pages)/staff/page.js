
/**
 * @file        staff/page.js
 * @description This file defines the StaffPage component, which provides an interface for managing staff members.
 *              It allows administrators to view a list of staff, select/deselect staff, and persist selections in localStorage.
 *
 * @component
 * StaffPage
 *
 * @dependencies
 * - React (useState, useEffect)
 * - StaffDashboard (custom component for displaying staff data)
 * - BackButton (custom component for navigation)
 *
 * @notes
 * - Fetches staff data from the `/api/staff` endpoint on component mount.
 * - Adds a default picture (`luffy.png`) to each staff member.
 * - Manages selected staff state and persists it in localStorage.
 * - Displays a loading indicator while fetching staff data.
 *
 * @example
 * <StaffPage />
 */
'use client';
import React, { useState, useEffect } from "react";
import StaffDashboard from "../../components/staff_display/StaffDashboard";
import BackButton from "@/app/components/general/BackButton";

const StaffPage = () => {
  // State to hold the list of staff fetched from the API
  const [staffList, setStaffList] = useState([]);
  // State to manage the loading state while fetching data
  const [isLoading, setIsLoading] = useState(true);

  // Fetch staff data from the API when the component mounts
  useEffect(() => {
    setIsLoading(true); // Set loading to true before fetching
    const fetchStaff = async () => {
      try {
        const res = await fetch('/api/staff'); // Fetch staff data from the API
        if (!res.ok) throw new Error('Failed to fetch staff data');
        const data = await res.json();
        setStaffList(data); // Update the staff list state
      } catch (err) {
        console.error('Error fetching staff:', err); // Log any errors
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchStaff();
  }, []);

  // State to hold the list of selected staff
  const [selectedStaff, setSelectedStaff] = useState([]);

  // Load selected staff from localStorage when the component mounts
  useEffect(() => {
    const storedStaff = localStorage.getItem("selectedStaff");
    if (storedStaff) {
      setSelectedStaff(JSON.parse(storedStaff)); // Parse and set the selected staff
    }
  }, []);

  // Handle staff selection/deselection
  const handleStaffClick = (staff) => {
    setSelectedStaff((prevSelected) => {
      let updatedList = [...prevSelected];
      const existingIndex = updatedList.findIndex((s) => s.id === staff.id);

      if (existingIndex !== -1) {
        // Remove staff if already selected
        updatedList.splice(existingIndex, 1);
      } else {
        // Add staff if not selected
        updatedList.push(staff);
      }

      // Update localStorage based on the updated list
      if (updatedList.length === 0) {
        localStorage.removeItem("selectedStaff"); // Remove from localStorage if no staff is selected
      } else {
        localStorage.setItem("selectedStaff", JSON.stringify(updatedList)); // Save updated list to localStorage
      }

      return updatedList;
    });
  };

  return (
    <div>
      {/* Back button to navigate to the previous page */}
      <BackButton />

      {isLoading ? (
        // Show a loading message while data is being fetched
        <p style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center", marginTop: "20px" }}>
          Loading...
        </p>
      ) : (
        // Render the staff dashboard with the fetched staff list
        <StaffDashboard
          staffList={staffList}
          onStaffClick={handleStaffClick}
          selectedStaff={new Set(selectedStaff.map((s) => s.id))} // Pass selected staff IDs as a Set
        />
      )}
    </div>
  );
};

export default StaffPage;