import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myListings, setMyListings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {

            navigate('/auth/login');
            return;
        }


        fetch(`/api/listings?userEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setMyListings(data))
            .catch(err => console.error(err));
    }, [user, navigate]);

    const handleLogout = () => {
        logOut()
            .then(() => navigate('/'))
            .catch(err => console.error(err));
    };

    return (
        <div className="max-w-5xl mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-green-700">Dashboard</h1>
                <button
                    onClick={handleLogout}
                    className="btn btn-outline btn-sm text-green-700"
                >
                    Logout
                </button>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold">Welcome, {user?.displayName || user?.email}</h2>
            </div>

            <div className="mb-4 flex justify-between items-center">
                <h3 className="text-2xl font-semibold">My Listings</h3>
                <Link
                    to="/add-listing"
                    className="btn btn-primary btn-sm"
                >
                    Add New Listing
                </Link>
            </div>

            {/* Listings Table */}
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Title</th>
                        <th className="border border-gray-300 px-4 py-2">Location</th>
                        <th className="border border-gray-300 px-4 py-2">Rent</th>
                        <th className="border border-gray-300 px-4 py-2">Room Type</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {myListings.length === 0 && (
                        <tr>
                            <td colSpan="5" className="text-center py-4">You have no listings yet.</td>
                        </tr>
                    )}
                    {myListings.map(listing => (
                        <tr key={listing._id}>
                            <td className="border border-gray-300 px-4 py-2">{listing.title}</td>
                            <td className="border border-gray-300 px-4 py-2">{listing.location}</td>
                            <td className="border border-gray-300 px-4 py-2">{listing.rent}</td>
                            <td className="border border-gray-300 px-4 py-2">{listing.roomType}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Link
                                    to={`/update-listing/${listing._id}`}
                                    className="btn btn-sm btn-outline btn-success"
                                >
                                    Update
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
