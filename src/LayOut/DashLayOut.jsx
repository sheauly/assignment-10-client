import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Outlet, NavLink, Link } from 'react-router-dom';

const DashLayOut = () => {
    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <aside className="w-64 p-4 space-y-4 shadow-md">
                <div className='flex justify-between items-center '>
                    <h2 className="text-2xl font-bold text-green-700 mb-6">Dashboard</h2>
                    <Link
                        to="/"
                        className="btn btn-sm bg-primary text-white hover:bg-primary/90 rounded-full flex items-center gap-2"
                    >
                        <FaHome />Home
                    </Link>
               </div>
                <ul className="space-y-2">
                    {/* <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-green-700 font-bold" : "text-gray-700"}>Dashboard Home</NavLink></li> */}
                    <li><NavLink to="/dashboard/add-listing" className={({ isActive }) => isActive ? "text-green-700 font-bold" : "text-whi"}>Add Listing</NavLink></li>
                    <li><NavLink to="/dashboard/my-listings" className={({ isActive }) => isActive ? "text-green-700 font-bold" : "text-white"}>My Listings</NavLink></li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-base-200">
                <Outlet />
            </main>
        </div>
    );
};

export default DashLayOut;
