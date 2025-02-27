import { useState, useEffect } from "react";

export function useShiftWorkers() {
  const [shiftWorkers, setShiftWorkers] = useState([]);

  useEffect(() => {
    const storedStaff = localStorage.getItem("selectedStaff");
    setShiftWorkers(storedStaff ? JSON.parse(storedStaff) : []);
  }, []);

  return shiftWorkers;
}