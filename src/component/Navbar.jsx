import React from 'react';
import logoImage from '../../public/logo.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {

     const navLinks = (
            <>
                <li>
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="" className={({ isActive }) =>
                        isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
                    }>Find Roommate</NavLink>
                </li>
                <li>
                    <NavLink to="" className={({ isActive }) =>
                        isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
                    }>Browse Listing</NavLink>
                </li>
                <li>
                    <NavLink to="" className={({ isActive }) =>
                        isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
                    }>My Listings</NavLink>
                </li>
            </>
    );
    
    return (
        <div className='w-11/12 mx-auto mt-2 '>
            <div className="navbar bg-gray-100 shadow-sm rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img src={logoImage} alt="logo" className="w-24 h-auto object-contain" />
                        <h1 className="text-2xl font-bold text-green-700 hidden sm:block">RoomeBond</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn text-green-700">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;