import { Link, NavLink } from 'react-router-dom';
import logoImage from "../../src/assets/logo.png";
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert("You are logged out successfully");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
                }>Home</NavLink>
            </li>
            <li>
                <NavLink to="/ExtraNewsCard" className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
                }>ExtraCard</NavLink>
            </li>
            <li>
                <NavLink to="/myProfile" className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
                }>My Profile</NavLink>
            </li>
        </>
    );

    return (
        <div className="w-11/12 mx-auto bg-white shadow-md rounded-xl mt-5">
            <div className="navbar py-4 px-4 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <img src={logoImage} alt="logo" className="w-24 h-auto object-contain" />
                    <h1 className="text-2xl font-bold text-gray-800 hidden sm:block">Event Planning</h1>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal gap-6">
                        {navLinks}
                    </ul>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-4">
                    {user ? (
                        <>
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName || user.email}>
                                <img
                                    src={user.photoURL || "https://i.ibb.co/yYPdK9p/avatar.png"}
                                    alt="User"
                                    className="w-10 h-10 rounded-full border"
                                />
                            </div>
                            <button onClick={handleLogOut} className="btn btn-outline btn-secondary hidden sm:inline-flex">
                                Log out
                            </button>
                        </>
                    ) : (
                        <Link to="/auth/login" className="btn btn-outline btn-secondary">
                            Login
                        </Link>
                    )}
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
                            {user && (
                                <li>
                                    <button onClick={handleLogOut} className="text-left text-red-500 hover:text-red-700">
                                        Log out
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
