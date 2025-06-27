import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Lottie from 'lottie-react';
import contactAnimation from '../assets/contact.json';
import { Typewriter } from 'react-simple-typewriter';
import { Tooltip } from 'react-tooltip';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const ContactUs = () => {
    const { darkMode } = useContext(AuthContext);
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <Fade direction="up" triggerOnce>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Lottie Animation */}
                    <div>
                        <Lottie animationData={contactAnimation} loop={true} />
                    </div>

                    {/* Contact Form */}
                    <div className="bg-base-100 p-8 rounded-xl shadow-md">
                        <h2 className="text-3xl font-bold text-primary mb-4">
                            <span>Let's </span>
                            <span className="text-secondary">
                                <Typewriter
                                    words={['Talk', 'Connect', 'Collaborate']}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={60}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h2>

                        <p className={`${darkMode ? "text-gray-300" : "text-white"} text-lg`}>
                            Have a question about finding a roommate? Need help with your listing?
                            Fill out the form below and we’ll respond shortly.
                        </p>

                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full"
                                    required
                                    data-tip="Enter your full name"
                                />
                                <Tooltip place="top" effect="solid" />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full"
                                    required
                                    data-tip="We’ll never share your email."
                                />
                                <Tooltip place="top" effect="solid" />
                            </div>

                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    className="textarea textarea-bordered w-full"
                                    rows="4"
                                    required
                                    data-tip="Write your question or feedback"
                                ></textarea>
                                <Tooltip place="top" effect="solid" />
                            </div>

                            <button type="submit" className="btn btn-primary w-full">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default ContactUs;
