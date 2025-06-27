import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { AuthContext } from '../context/AuthContext';

const MutionCard = () => {
    const { darkMode } = useContext(AuthContext);

    return (
        <Fade direction="up" triggerOnce>
            <div className={`hero ${darkMode ? "bg-[#1e293b]" : "bg-blue-100"} rounded-xl mt-8 p-6 md:p-10 transition-all duration-300`}>
                <div className="hero-content flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-12">
                    {/* Image */}
                    <img
                        src="https://i.ibb.co/1f9LCkGb/flat-hotel-banner-template-with-photo-23-2148938556.jpg"
                        className="w-full sm:max-w-md lg:max-w-xl rounded-lg shadow-2xl"
                        alt="Special Discount"
                    />

                    {/* Text Section */}
                    <div className="text-center lg:text-left space-y-4">
                        <h1 className={`text-xl md:text-2xl font-bold ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                            🎉 Special Summer Discount!
                        </h1>
                        <p className={`text-base md:text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                            Book your roommate through us this month and get up to 20% off on your service fee.
                        </p>
                        <button className="btn btn-primary mt-2">Get Started</button>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default MutionCard;
