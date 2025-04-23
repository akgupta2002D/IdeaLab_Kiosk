"use client"
import { useState } from 'react';

// List of machines with their details
const machines = [
  {
    id: 'machine1',
    name: 'Machine One',
    avatar: '/machine.png',
    guide: 'This is the guide for Machine One. Follow these steps...',
  },
  {
    id: 'machine2',
    name: 'Machine Two',
    avatar: '/machine.png',
    guide: 'This is the guide for Machine Two. Follow these instructions...',
  },
  {
    id: 'machine3',
    name: 'Machine Three',
    avatar: '/machine.png',
    guide: 'This is the guide for Machine Three. Here are the details...',
  },
];

// Custom hook to manage machine selection and guide
export function useMachineGuide() {
  const [selectedMachine, setSelectedMachine] = useState(machines[0]); // Default to the first machine

  // Function to select a machine by its ID
  const selectMachine = (machineId) => {
    const machine = machines.find((m) => m.id === machineId); // Find machine by ID
    if (!machine) {
      console.warn(`Machine with ID "${machineId}" not found.`); // Warn if not found
      return;
    }
    setSelectedMachine(machine); // Update selected machine
  };

  return { machines, selectedMachine, selectMachine }; // Return state and function
}
