import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex justify-center items-center min-h-screen px-4 py-10 bg-base-200">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white shadow-xl rounded-xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Register Your Account</h2>
                <form className="space-y-5">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="label">Name</label>
                        <input id="name" name="name" type="text" className="input input-bordered w-full" placeholder="Your Name" required />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label htmlFor="photo" className="label">Photo URL</label>
                        <input id="photo" name="photo" type="text" className="input input-bordered w-full" placeholder="Photo URL" required />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="label">Email</label>
                        <input id="email" name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="label">Password</label>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type="text"
                                className="input input-bordered w-full pr-10"
                                placeholder="Password"
                                required
                            />

                        </div>

                    </div>

                    <button type="submit" className="btn btn-neutral w-full">Register</button>

                    <div className="divider">OR</div>

                    <button
                        type="button"

                        className="btn btn-outline btn-secondary w-full flex items-center justify-center gap-2"
                    >
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Register with Google
                    </button>

                    <p className="text-center text-sm pt-5">
                        Already have an account? <Link to="/auth/login" className="text-green-700 font-medium">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;