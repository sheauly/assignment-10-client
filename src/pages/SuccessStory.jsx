import React from 'react';
import { Fade } from 'react-awesome-reveal';

const steps = [
    {
        id: 1,
        title: 'Create Your Profile',
        desc: 'Set your preferences, location, lifestyle and rent range to help find the ideal match.',
        icon: '👤'
    },
    {
        id: 2,
        title: 'Explore Matches',
        desc: 'View verified roommate listings that match your needs and interests.',
        icon: '🔍'
    },
    {
        id: 3,
        title: 'Start Chatting',
        desc: 'Send messages, ask questions and get to know your potential roommate.',
        icon: '💬'
    },
    {
        id: 4,
        title: 'Move In Together',
        desc: 'Finalize the details and enjoy a safe, friendly living experience!',
        icon: '🏠'
    }
];

const SuccessStory = () => {
    return (
        <section className="py-16 px-4 bg-base-200">
            <div className="max-w-6xl mx-auto text-center">
                <Fade direction="up" triggerOnce>
                    <h2 className="text-4xl font-bold text-primary mb-4">How Roommate Finder Works</h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                        Our process is simple, fast, and designed to connect you with the perfect roommate in just a few steps.
                    </p>
                </Fade>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map(step => (
                        <Fade key={step.id} direction="up" delay={step.id * 100} triggerOnce>
                            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300">
                                <div className="text-4xl mb-4">{step.icon}</div>
                                <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStory;
