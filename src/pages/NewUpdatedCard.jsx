import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { AuthContext } from '../context/AuthContext';

const NewUpdatedCard = () => {
    const { darkMode } = useContext(AuthContext);
    return (
        <section className="py-16 px-4 bg-base-200 mt-10 rounded-2xl">
            <div className="max-w-6xl mx-auto text-center">
                <Fade direction="up" triggerOnce>
                    <h2 className="text-4xl font-bold text-primary mb-4">How Roommate Finder Works</h2>
                    <p className={`${darkMode ? "text-gray-300" : "text-white"} text-lg`}>
                        Our process is simple, fast, and designed to connect you with the perfect roommate in just a few steps.
                    </p>
                </Fade>

                {/* Cards with animation */}
                <div className='flex flex-col lg:flex-row justify-center items-center gap-5'>
                    <Fade direction="left" triggerOnce>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://i.ibb.co/s9wGySh0/images.jpg"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className={`${darkMode ? "text-gray-300" : "text-white"} text-lg`}>How to Find the Perfect Roommate</h2>
                                <p >Tips and tricks to choose the best roommate for your lifestyle...</p>
                                <p>Date: 10/2/2025</p>
                            </div>
                        </div>
                    </Fade>

                    <Fade direction="up" delay={100} triggerOnce>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://i.ibb.co/6Rtqjjrh/images.jpg"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Budgeting Your Shared Apartment</h2>
                                <p>Learn how to split costs and manage finances with your roommate...</p>
                                <p>Date: 5/11/2025</p>
                            </div>
                        </div>
                    </Fade>

                    <Fade direction="right" delay={200} triggerOnce>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://i.ibb.co/gM0T8LHf/images.jpg"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Creating a Harmonious Living Space</h2>
                                <p>Design ideas and communication tips for peaceful co-living...</p>
                                <p>Date: 6/10/2025</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default NewUpdatedCard;
