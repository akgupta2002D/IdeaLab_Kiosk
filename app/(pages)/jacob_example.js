import React from 'react';
import useStaff from '../hooks/useStaff';


const example = () => {
    const { staff, getStaff } = useStaff();
    return (
        <div>
            <h1>Staff</h1>
            <button onClick={getStaff}>Get Staff</button>
            {staff && staff.map((staff) => (
                <div key={staff.id}>
                    <h2>{staff.name}</h2>
                    <p>{staff.bio}</p>
                    <img src={staff.image} alt={staff.name} />
                </div>
            ))}
        </div>
    )
}

export default example;