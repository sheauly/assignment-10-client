import React from 'react';
import logoImage from '../../public/logo.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {

     const navLinks = (
            <>
                <li>
                    <NavLink to="/" className={({ isActive }) =>
                     isActive ? "text-green-700 font-semibold" : "text-gray-700 hover:text-green-700"
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="" className={({ isActive }) =>
                     isActive ? "text-green-700 font-semibold" : "text-gray-700 hover:text-green-700"
                    }>Find Roommate</NavLink>
                </li>
                <li>
                    <NavLink to="" className={({ isActive }) =>
                     isActive ? "text-green-700 font-semibold" : "text-gray-700 hover:text-green-700"
                    }>Browse Listing</NavLink>
                </li>
                <li>
                    <NavLink to="" className={({ isActive }) =>
                     isActive ? "text-green-700 font-semibold" : "text-gray-700 hover:text-green-700"
                    }>My Listings</NavLink>
                </li>
            </>
    );
    
    return (
        <div className="w-11/12 mx-auto bg-white shadow-md rounded-xl mt-4">
                    <div className="navbar flex justify-between items-center">
                        {/* Logo Section */}
                        <div className="flex items-center -space-x-5">
                            <img src={logoImage} alt="logo" className="w-30 h-auto object-contain" />
                            <h1 className="text-2xl font-bold text-green-700 hidden sm:block">RoomeMate Finder</h1>
                        </div>
        
                        {/* Desktop Nav */}
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal gap-6">
                                {navLinks}
                            </ul>
                        </div>
        
                        {/* Auth Buttons */}
                        <div className="flex items-center gap-4">
                            
                                <>
                                   
                        <button className="btn btn-outline text-green-700 hidden sm:inline-flex">
                                        Log out
                                    </button>
                                </>
                            
                                     <Link to="/auth/login" className="btn btn-outline text-green-700">
                                    Login
                                </Link>
                        
                        </div>
        
                        {/* Mobile Nav Toggle */}
                        <div className="lg:hidden">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                                    {navLinks}
                                    
                                        <li>
                                            <button className="text-left text-red-500 hover:text-red-700">
                                                Log out
                                            </button>
                                        </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default Navbar;