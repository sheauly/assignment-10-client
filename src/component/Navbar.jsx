import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

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