import { useState, useEffect } from "react";

// Custom hook to manage shift workers
export function useShiftWorkers() {
  // State to store the list of shift workers
  const [shiftWorkers, setShiftWorkers] = useState([]);

  useEffect(() => {
    // Retrieve the stored staff data from localStorage
    const storedStaff = localStorage.getItem("selectedStaff");
    // Parse the stored data and update the state, or set it to an empty array if no data is found
    setShiftWorkers(storedStaff ? JSON.parse(storedStaff) : []);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Return the current list of shift workers
  return shiftWorkers;
}