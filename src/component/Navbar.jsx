import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import { toast } from 'react-toastify';
import { FaAlignJustify, FaFirefoxBrowser, FaHome, FaLifeRing, FaUserCog, } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // Theme Toggle Handler
    const handleToggle = (e) => {
        setTheme(e.target.checked ? "dark" : "light");
    };

    // Set Theme on HTML
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);

    const handleLogout = () => {
        logOut()
            .then(() => toast.success("Logged out successfully"))
            .catch((error) => toast.error(error.message));
    };

    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-secondary font-semibold"
                            : "text-green-700 hover:text-green-700"
                    }
                >
                    <FaHome /> Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/browse-listings"
                    className={({ isActive }) =>
                        isActive
                            ? "text-secondary font-semibold"
                            : "text-green-700 hover:text-green-700"
                    }
                >
                    <FaFirefoxBrowser />Browse-listings
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                        isActive
                            ? "text-secondary font-semibold"
                            : "text-green-700 hover:text-green-700"
                    }
                >
                    <FaAlignJustify /> About Us
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? "text-secondary font-semibold"
                            : "text-green-700 hover:text-green-700"
                    }
                >
                    <FaUserCog />Contact
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/support"
                    className={({ isActive }) =>
                        isActive
                            ? "text-secondary font-semibold"
                            : "text-green-700 hover:text-green-700"
                    }
                >
                    <FaLifeRing />Support
                </NavLink>
            </li>
        </>
    );

    return (
        <nav className="sticky top-0 z-50 bg-blue-200 px-6 py-3 w-11/12 mx-auto rounded-xl shadow-md flex justify-between items-center mt-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <img src={logoImage} alt="logo" className="w-16 h-auto object-contain" />
                <h1 className="text-2xl font-bold text-green-700 hidden sm:block">
                    Roommate Finder
                </h1>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal gap-6">{navLinks}</ul>
            </div>

            {/* Theme Toggle & Auth Buttons */}
            <div className="hidden lg:flex items-center gap-4">
                {/* Theme toggle */}
                <input onChange={handleToggle} type="checkbox" defaultChecked={theme === "dark"} className="toggle toggle-warning" />
                {user ? (
                    <>
                        {/* Dashboard Button Added */}
                        <Link
                            to="/dashboard"
                            className="btn btn-outline btn-success rounded-full text-green-700 hover:bg-green-700 hover:text-white transition"
                        >
                            Dashboard
                        </Link>

                        <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                            <img
                                src={user.photoURL}
                                alt="User"
                                className="w-10 h-10 rounded-full ring-2 ring-green-600"
                            />
                        </div>
                        <button
                            onClick={handleLogout}
                            className="btn btn-outline text-green-700 hover:btn-success"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            to="/auth/login"
                            className="btn btn-outline text-green-700 hover:bg-green-100"
                        >
                            Login
                        </Link>
                        <Link
                            to="/auth/register"
                            className="btn btn-outline text-green-700 hover:bg-green-100"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>

            {/* Mobile Nav */}
            <div className="lg:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks}
                        <div className="mt-2">
                            {user ? (
                                <>
                                    <div className="flex items-center gap-2 px-2">
                                        <img
                                            src={user.photoURL}
                                            alt="User"
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <span className="font-semibold">{user.displayName}</span>
                                    </div>
                                    {/* Dashboard Button for Mobile */}
                                    <Link
                                        to="/dashboard"
                                        className="btn btn-outline hover:btn-primary w-full mt-2"
                                    >
                                        Dashboard
                                    </Link>
                                    <Link to="/my-profile" className="flex items-center gap-2">
                                        <img
                                            src={user?.photoURL || 'https://i.ibb.co/ZVFsg37/default-avatar.png'}
                                            alt="User"
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <span className="hidden md:inline">{user?.displayName?.split(' ')[0]}</span>
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-outline hover:btn-primary w-full mt-2"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/auth/login"
                                        className="btn btn-outline hover:btn-primary w-full mb-1"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/auth/register"
                                        className="btn btn-outline hover:btn-primary w-full"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
