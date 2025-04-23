"use client"
import { useState } from 'react';

// List of machines with their details
const machines = [
  {
    id: 'Prusa Mini',
    name: 'Prusa Mini 3D Printer',
    avatar: '/machine.png',
    guide: 'The Prusa Mini is a compact 3D printer. Ensure the filament is loaded, the bed is leveled, and the model is sliced properly before starting the print.',
    image: 'guides/3d_printer.png',
  },
  {
    id: 'Sewing Machine',
    name: 'Sewing Machine',
    avatar: '/machine.png',
    guide: 'The Sewing Machine is ideal for fabric stitching. Thread the needle, adjust the tension, and select the appropriate stitch type before starting.',
    image: 'guides/sewing_machine.jpg',
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
