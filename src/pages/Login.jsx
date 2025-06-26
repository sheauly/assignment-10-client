import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Lottie from 'lottie-react';
import loginLottie from '../assets/lottees/login.json';
import clickLotte from '../assets/lottees/click.json';
import { Helmet } from 'react-helmet';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/dashboard";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                toast.success("Login successful!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleGooglogin = () => {
        googleSignIn()
            .then((result) => {
                toast.success("Google login successful!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-8 px-4 py-10">
            <Helmet>
                <title>Roommate Finder | Login</title>
            </Helmet>

            {/* Lottie Animation */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <Lottie className="max-w-xs sm:max-w-md md:max-w-lg" animationData={loginLottie} />
            </div>

            {/* Login Form */}
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border">
                <h2 className="text-3xl font-bold text-center mb-4 text-green-600">Login</h2>

                <div className="flex justify-center items-center mb-4">
                    <Lottie className="w-20" animationData={clickLotte} />
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input input-bordered w-full rounded-full"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input input-bordered w-full rounded-full"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-success w-full rounded-full">Login</button>

                    <div className="divider">OR</div>

                    <button
                        onClick={handleGooglogin}
                        type="button"
                        className="btn btn-outline btn-secondary w-full flex items-center justify-center rounded-full gap-2"
                    >
                        <FaGoogle /> Login with Google
                    </button>
                </form>

                <p className="text-center mt-6">
                    Don't have an account?
                    <Link to="/auth/register" className="text-green-700 font-semibold ml-1 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
