import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';

const UpdatedListing = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        location: '',
        rent: '',
        roomType: '',
        lifestyle: '',
        description: '',
        contact: '',
        availability: '',
        image: '',
        userName: user?.displayName || '',
        userEmail: user?.email || ''
    });

    useEffect(() => {
        // fetch existing post data by ID
        fetch(`http://localhost:3000/roommate/${id}`)
            .then(res => res.json())
            .then(data => {
                setFormData({
                    ...data,
                    userName: user?.displayName || '',
                    userEmail: user?.email || ''
                });
            })
            .catch(error => console.error("Error loading listing data:", error));
    }, [id, user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdate = e => {
        e.preventDefault();

        fetch(`http://localhost:3000/roommate/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Listing updated successfully!'
                    });
                    navigate('/myListings');
                } else {
                    Swal.fire({
                        icon: 'info',
                        title: 'No Changes',
                        text: 'No data was changed.'
                    });
                }
            })
            .catch(error => {
                console.error("Update error:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Failed to update listing.'
                });
            });
    };

    return (
        <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Update Roommate Listing</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
                <input name="title" value={formData.title} onChange={handleChange} required placeholder="Title" className="input input-bordered w-full" />
                <input name="location" value={formData.location} onChange={handleChange} required placeholder="Location" className="input input-bordered w-full" />
                <input name="rent" value={formData.rent} onChange={handleChange} required placeholder="Rent" className="input input-bordered w-full" />

                <select name="roomType" value={formData.roomType} onChange={handleChange} required className="select select-bordered w-full">
                    <option value="">Select Room Type</option>
                    <option value="Single">Single</option>
                    <option value="Shared">Shared</option>
                </select>

                <input name="lifestyle" value={formData.lifestyle} onChange={handleChange} required placeholder="Lifestyle Preferences" className="input input-bordered w-full" />
                <textarea name="description" value={formData.description} onChange={handleChange} required placeholder="Description" className="textarea textarea-bordered w-full" />
                <input name="contact" value={formData.contact} onChange={handleChange} required placeholder="Contact Info" className="input input-bordered w-full" />

                <select name="availability" value={formData.availability} onChange={handleChange} required className="select select-bordered w-full">
                    <option value="">Availability</option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                </select>

                <input name="image" value={formData.image} onChange={handleChange} required placeholder="Image URL" className="input input-bordered w-full" />

                <input name="userName" value={formData.userName} readOnly className="input input-bordered w-full bg-gray-100" />
                <input name="userEmail" value={formData.userEmail} readOnly className="input input-bordered w-full bg-gray-100" />

                <button type="submit" className="btn btn-success w-full">Update Listing</button>
            </form>
        </div>
    );
};

export default UpdatedListing;
