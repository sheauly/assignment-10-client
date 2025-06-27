import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../component/Banner';
import { Fade } from 'react-awesome-reveal';
import ContactUs from './ContactUs';
import SuccessStory from './SuccessStory';
import Lottie from 'lottie-react';
import { Typewriter } from 'react-simple-typewriter';
import animationData from "../assets/why-choose-us.json"; 
import { Helmet } from 'react-helmet';
import MutionCard from './MutionCard';
import NewUpdatedCard from './NewUpdatedCard';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
    const rawData = useLoaderData();
    const { darkMode } = useContext(AuthContext);
    console.log(rawData)
    const roommate = Array.isArray(rawData) ? rawData : rawData.roommates || [];
    
    const availableRoommates = roommate.filter(r => r.availability === "Available");
    const initialRoommate = availableRoommates.slice(0, 8);

    return (
        <div>
            <Helmet>
                <title>RoomMate-Finder || Home</title>
            </Helmet>

            <section>
                <Banner />
            </section>

            <section className="max-w-7xl mx-auto my-10 px-4">
                <Fade direction="up" cascade triggerOnce damping={0.2}>
                    <h2 className="text-3xl font-bold mb-6 text-center text-primary">
                        Featured Roommates
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {initialRoommate.map((roommate) => (
                            <Fade key={roommate._id} triggerOnce>
                                <div className="bg-base-100 rounded-xl shadow p-4 flex flex-col justify-between">
                                    <img
                                        src={roommate.image}
                                        alt={roommate.name}
                                        className="w-full h-52 object-cover rounded-xl mb-4"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-primary">{roommate.name}</h3>
                                        <p><span className="font-medium">Location:</span> {roommate.location}</p>
                                        <p><span className="font-medium">Budget:</span> ${roommate.rent}</p>
                                        <p><span className="font-medium">Lifestyle:</span> {roommate.lifestyle}</p>
                                    </div>
                                    <div className="mt-4">
                                        <Link
                                            to={`/details/${roommate._id}`}
                                            className="btn btn-sm w-full btn-outline btn-primary"
                                        >
                                            See More
                                        </Link>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </Fade>
            </section>

            {/* Why Choose Us (Lottie + Typewriter + Reveal) */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <Fade triggerOnce direction="up">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary">
                            Why{' '}
                            <span className="text-secondary">
                                <Typewriter
                                    words={['Choose Us?', 'Trust Us?', 'Stay with Us?']}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </h2>
                        <p className={`${darkMode ? "text-gray-300" : "text-white"} text-lg`}>
                            We make finding roommates smooth, safe, and simple!
                        </p>
                    </div>
                </Fade>

                <Fade cascade direction="up" triggerOnce damping={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div>
                            <Lottie animationData={animationData} loop={true} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-primary">Verified Listings</h3>
                            <p className={`${darkMode ? "text-gray-300" : "text-white"} text-lg`} >Only trusted posts, no scams.</p>

                            <h3 className="text-2xl font-bold text-primary">Quick Communication</h3>
                            <p className={`${darkMode ? "text-gray-300" : "text-white"} text-lg`}>Contact roommates instantly and securely.</p>

                            <h3 className="text-2xl font-bold text-primary">Privacy First</h3>
                            <p className={`${darkMode ? "text-gray-300" : "text-white"} text-lg`}>We never share your data publicly.</p>
                        </div>
                    </div>
                </Fade>
            </section>

            {/* Contact Us Section */}
            <section>
                <Fade direction="left" triggerOnce>
                    <ContactUs />
                </Fade>
            </section>

            {/* Success Story Section */}
            <section>
                <Fade direction="right" triggerOnce>
                    <SuccessStory />
                </Fade>
            </section>
            <section>
                <MutionCard></MutionCard>
            </section>
            <section>
                <NewUpdatedCard></NewUpdatedCard>
            </section>
        </div>
    );
};

export default Home;
