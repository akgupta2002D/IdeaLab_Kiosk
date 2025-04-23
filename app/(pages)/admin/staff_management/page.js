/**
 * @file        StaffPage.js
 * @description This file defines the StaffPage component, which provides an interface for administrators to manage staff members, 
 * including viewing, adding, editing, and removing staff.
 *
 * @dependencies
 * - React (useEffect, useState)
 * - GeneralPageLayout (custom layout component)
 * - Button (custom button component)
 * - CSS styles (TableStyles.css)
 *
 * @notes
 * - Fetches staff data from the `/api/staff` endpoint on component mount.
 * - Displays loading, error, or staff data based on the fetch state.
 * - Includes a placeholder button for adding staff functionality.
 */

'use client'
import { useEffect, useState } from 'react'
import GeneralPageLayout from '../../../components/admin/GeneralPageLayout'
import '../../../components/admin/styles/TableStyles.css'
// import Button from '../../../components/general/Button' // Removed as it is unused
import StaffAddForm from '../../../components/admin/StaffAddForm'

export default function StaffPage() {
  const [staff, setStaff] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const pageContent = [
    {
      name: 'Staff Management',
      description:
        'This page allows administrators to manage staff members, including adding, editing, and removing staff.'
    }
  ]
  const handleAddStaff = async (newStaff) => {
    try {
      const res = await fetch('/api/staff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStaff),
      });
  
      if (!res.ok) {
        throw new Error('Failed to add staff member');
      }
  
      await fetchStaff(); // safer: refresh full list
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

    const fetchStaff = async () => {
      try {
        const res = await fetch('/api/staff');
        const data = await res.json();
        setStaff(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    useEffect(() => {
      fetchStaff();
    }, []);

  return (
    <>
      <GeneralPageLayout pageContent={pageContent}>
        {/* <Button name={'Add Staff'} onClick={() => console.log('Add Staff')} /> */}
        < StaffAddForm onSubmit={handleAddStaff}/>
        <div className="staff-management-container">
          {loading && <p className="loading-text">Loading staff...</p>}
          {error && <p className="error-text">Error: {error}</p>}
          {!loading && staff.length === 0 && <p className="no-staff-text">No staff found.</p>}
          {!loading && staff.length > 0 && (
            <table className="staff-table">
              <thead>
                <tr className="staff-table-header">
                  <th className="staff-table-cell">ID</th>
                  <th className="staff-table-cell">First Name</th>
                  <th className="staff-table-cell">Last Name</th>
                  <th className="staff-table-cell">Class Year</th>
                  <th className="staff-table-cell">Speciality</th>
                </tr>
              </thead>
              <tbody>
                {staff.map((member, index) => (
                  <tr key={index} className="staff-table-row">
                    <td className="staff-table-cell">{index + 1}</td>
                    <td className="staff-table-cell">{member.first_name || 'N/A'}</td>
                    <td className="staff-table-cell">{member.last_name || 'N/A'}</td>
                    <td className="staff-table-cell">{member.class_year || 'N/A'}</td>
                    <td className="staff-table-cell">{member.speciality || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </GeneralPageLayout>
    </>
  )
}
