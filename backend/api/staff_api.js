import { addStaff, getStaff, updateStaff, deleteStaff } from '../database/models/staff_model';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const staff = await getStaff();
            res.status(200).json(staff);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    else if (req.method === 'POST') {
        try {
            const { name, bio, image } = req.body;
            if (!name || !bio || !image) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            await addStaff(name, bio, image);
            res.status(201).json({ message: 'Staff added successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    else if (req.method === 'PUT') {
        try {
            const { id, name, bio, image } = req.body;
            if (!id || !name || !bio || !image) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            await updateStaff(id, name, bio, image);
            res.status(200).json({ message: 'Staff updated successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    else if (req.method === 'DELETE') {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ error: 'ID is required' });
            }

            await deleteStaff(id);
            res.status(200).json({ message: 'Staff deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }



    else {
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}