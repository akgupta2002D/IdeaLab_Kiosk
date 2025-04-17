'use client';
import React, { useState, useEffect } from "react";
import StaffDashboard from "../../components/staff_display/StaffDashboard";
import BackButton from "@/app/components/general/BackButton";



const StaffPage = () => {

  const [staffList, setStaffList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Set loading to true before fetching
    const fetchStaff = async () => {
      try {
        const res = await fetch('/api/staff');
        if (!res.ok) throw new Error('Failed to fetch staff data');
        const data = await res.json();
        const formattedData = data.map((staff) => ({
          ...staff,
          picture: './staff/luffy.png', // Use luffy.png for all staff
        }));
        setStaffList(formattedData);
      } catch (err) {
        console.error('Error fetching staff:', err);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchStaff();
  }, []);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await fetch('/api/staff');
        if (!res.ok) throw new Error('Failed to fetch staff data');
        const data = await res.json();
        const formattedData = data.map((staff) => ({
          ...staff,
          picture: './staff/luffy.png', // Use luffy.png for all staff
        }));
        setStaffList(formattedData);
      } catch (err) {
        console.error('Error fetching staff:', err);
      }
    };

    fetchStaff();
  }, []);

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
      <BackButton />

      {isLoading ? (
        <p style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center", marginTop: "20px" }}>
          Loading...
        </p>
      ) : (
        <StaffDashboard
          staffList={staffList}
          onStaffClick={handleStaffClick}
          selectedStaff={new Set(selectedStaff.map((s) => s.id))}
        />
      )}
    </div>
  );
};

export default StaffPage;