import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } 
        else {
            setTheme("light");
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);

    }, [theme]);

    const handleLogout = () => {
        logOut()
            .then(() => toast.success("Logged out successfully"))
            .catch((error) => toast.error(error.message));
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? "text-secondary font-semibold" : "text-green-700 hover:text-green-700"
                }>Home</NavLink>
            </li>
            <li>
                <NavLink to="/add-listing" className={({ isActive }) =>
                    isActive ? "text-secondary font-semibold" : "text-green-700 hover:text-green-700"
                }>Find Roommate</NavLink>
            </li>
            <li>
                <NavLink to="/browse-listings" className={({ isActive }) =>
                    isActive ? "text-secondary font-semibold" : "text-green-700 hover:text-green-700"
                }>Browse Listing</NavLink>
            </li>
            <li>
                <NavLink to="/my-listings" className={({ isActive }) =>
                    isActive ? "text-secondary font-semibold" : "text-green-700 hover:text-green-700"
                }>My Listings</NavLink>
            </li>
        </>
    );

    return (
        <div className="w-11/12 mx-auto bg-white shadow-md rounded-xl mt-4">
            <div className="navbar flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <img src={logoImage} alt="logo" className="w-20 h-auto object-contain" />
                    <h1 className="text-2xl font-bold text-green-700 hidden sm:block">Roommate Finder</h1>
                </div>

                {/* Nav */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal gap-6">
                        {navLinks}
                    </ul>
                </div>

                {/* Auth Section */}
                <div className="hidden lg:flex items-center gap-4">
                    
                    <label  className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox"onChange={handleToggle}/>

                        {/* sun icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                    {user ? (
                        <>
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full ring-2 ring-green-600" />
                            </div>
                            <button onClick={handleLogout} className="btn btn-outline text-green-700 hover:btn-success">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/auth/login" className="btn btn-outline text-green-700">Login</Link>
                            <Link to="/auth/register" className="btn btn-outline text-green-700">Register</Link>
                        </>
                    )}
                </div>

                {/* Mobile Nav */}
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
                            <div className="mt-2">
                                {user ? (
                                    <>
                                        <div className="flex items-center gap-2 px-2">
                                            <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full" />
                                            <span className="font-semibold">{user.displayName}</span>
                                        </div>
                                        <button onClick={handleLogout} className="btn btn-outline hover:btn-primary w-full mt-2">
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/auth/login" className="btn btn-outline hover:btn-primary w-full mb-1">Login</Link>
                                        <Link to="/auth/register" className="btn btn-outline hover:btn-primary w-full">Register</Link>
                                    </>
                                )}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;