'use client'
import { useEffect, useState } from 'react'
import GeneralPageLayout from '../../../components/admin/GeneralPageLayout'
import '../../../components/admin/styles/TableStyles.css'
import Button from '../../../components/general/Button'

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

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await fetch('/api/staff')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        console.log('Data:', data)
        setStaff(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchStaff()
  }, [])

  return (
    <>
      <GeneralPageLayout pageContent={pageContent}>
        <Button name={'Add Staff'} onClick={() => console.log('Add Staff')} />
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
                {staff.map((member) => (
                  <tr key={member.id} className="staff-table-row">
                    <td className="staff-table-cell">{member.id}</td>
                    <td className="staff-table-cell">{member.first_name}</td>
                    <td className="staff-table-cell">{member.last_name}</td>
                    <td className="staff-table-cell">{member.class_year}</td>
                    <td className="staff-table-cell">{member.speciality}</td>
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
