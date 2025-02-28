"use client"
import { useState } from 'react';

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

export function useMachineGuide() {
  const [selectedMachine, setSelectedMachine] = useState(machines[0]);

  const selectMachine = (machineId) => {
    const machine = machines.find((m) => m.id === machineId);
    if (machine) {
        setSelectedMachine(machine)
    };
  };

  return { machines, selectedMachine, selectMachine };
}
