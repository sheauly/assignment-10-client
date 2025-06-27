import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { AuthContext } from '../context/AuthContext';

const MutionCard = () => {
      const { darkMode } = useContext(AuthContext);
    return (
        <Fade direction="up" triggerOnce>
            <div className="hero bg-blue-100 rounded-xl mt-8 p-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co/1f9LCkGb/flat-hotel-banner-template-with-photo-23-2148938556.jpg"
                        className="max-w-sm rounded-lg shadow-2xl w-[900px]"
                        alt="Special Discount"
                    />
                    <div>
                        <h1 className={`${darkMode ? "text-gray-300" : "text-black"} text-lg font-bold`}>🎉 Special Summer Discount!</h1>
                        <p className={`${darkMode ? "text-gray-300" : "text-black"} text-lg`}>
                            Book your roommate through us this month  and get up to 20% off on your service fee.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default MutionCard;
