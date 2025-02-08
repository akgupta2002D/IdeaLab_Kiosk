import React from 'react';
import StaffDashboard from '../staff_display_components/StaffDashboard';

const staffList = [
  {
    id: 1,
    name: 'Alice Johnson',
    picture: '/images/alice.jpg',
    classYear: '2023',
  },
  {
    id: 2,
    name: 'Bob Smith',
    picture: '/images/bob.jpg',
    classYear: '2024',
  },
  // ... add more staff as needed
];

const StaffPage = () => {
  return (
    <div>
      <h1>Staff Dashboard</h1>
      <StaffDashboard staffList={staffList} />
    </div>
  );
};

export default StaffPage;