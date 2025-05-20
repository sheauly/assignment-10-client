import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get('name');
        const photo = formData.get('photo');
        const email = formData.get('email');
        const password = formData.get('password');

        // Create user in Firebase
        createUser(email, password)
            .then( () => {
                
                updateUser({
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        console.log('Profile updated');
                        navigate('/'); // or any route
                    })
                    .catch(err => console.log('Profile update error', err));
            })
            .catch(error => {
                console.log(error);
                setError("Registration failed.");
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen px-4 py-10 bg-base-200">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white shadow-xl rounded-xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Register Your Account</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="label">Name</label>
                        <input id="name" name="name" type="text" className="input input-bordered w-full" placeholder="Your Name" required />
                    </div>

                    <div>
                        <label htmlFor="photo" className="label">Photo URL</label>
                        <input id="photo" name="photo" type="text" className="input input-bordered w-full" placeholder="Photo URL" required />
                    </div>

                    <div>
                        <label htmlFor="email" className="label">Email</label>
                        <input id="email" name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />
                    </div>

                    <div>
                        <label htmlFor="password" className="label">Password</label>
                        <input id="password" name="password" type="password" className="input input-bordered w-full" placeholder="Password" required />
                    </div>

                    <button type="submit" className="btn btn-neutral w-full">Register</button>

                    <div className="divider">OR</div>

                    <button type="button" className="btn btn-outline btn-secondary w-full flex items-center justify-center gap-2">
                        {/* Google icon here */}
                        Register with Google
                    </button>

                    <p className="text-center text-sm pt-5">
                        Already have an account? <Link to="/auth/login" className="text-green-700 font-medium">Login</Link>
                    </p>

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Register;
