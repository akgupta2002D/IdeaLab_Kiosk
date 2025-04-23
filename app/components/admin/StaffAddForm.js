import React, { useState } from 'react';
import './styles/StaffAddForm.css';

const StaffAddForm = ({ onSubmit }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openForm = () => setIsOpen(true);
    const closeForm = () => setIsOpen(false);
    const [formData, setFormData] = useState({ first_name: '', last_name: '', class_year: '', speciality: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataWithTimestamp = { ...formData, created_at: new Date().toISOString() }; // Add created_at as now
        onSubmit(dataWithTimestamp); // Sends the form data with timestamp to parent handler
        setFormData({ first_name: '', last_name: '', class_year: '', speciality: '' }); // Reset form
        setIsOpen(false); // Close modal
    };
    
    return (
        <div>
            <button onClick={openForm} className="open-form-button">Add Staff</button>
            {isOpen && (
                <div className="popup-overlay">
                    <div className="popup-form">
                        <h2>Add Staff Member</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                First Name:
                                <input
                                    type="text"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Last Name:
                                <input
                                    type="text"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Class Year:
                                <input
                                    type="text"
                                    name="class_year"
                                    value={formData.class_year}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Speciality:
                                <input
                                    type="text"
                                    name="speciality"
                                    value={formData.speciality}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <div className="form-buttons">
                                <button type="submit">Submit</button>
                                <button type="button" onClick={closeForm}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StaffAddForm;
