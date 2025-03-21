import { getStaff } from '@/backend/models/staff_model';
import { useState, useEffect } from 'react';

const useStaff = () => {
    const [staff, setStaff] = useState(null);

    // fetch staff json when component loads
    useEffect(() => {
        getStaff()
    }, []);


    const getStaff = async () => {

        try {
            const response = await fetch('/api/staff_api', { method: 'GET' });
            const data = await response.json();
            setStaff(data.staff);
        } catch (error) {
            console.error(error);
        }
    }

    return { staff, getStaff };

}

export default useStaff;