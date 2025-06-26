import React from 'react';
import { Fade } from 'react-awesome-reveal';

const MutionCard = () => {
    return (
        <Fade direction="up" triggerOnce>
            <div className="hero bg-blue-100 rounded-xl mt-8 p-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co/1f9LCkGb/flat-hotel-banner-template-with-photo-23-2148938556.jpg"
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt="Special Discount"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">🎉 Special Summer Discount!</h1>
                        <p className="py-6">
                            Book your roommate through us this month and get up to 20% off on your service fee.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default MutionCard;
