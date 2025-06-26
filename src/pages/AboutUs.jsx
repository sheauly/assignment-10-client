import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        title: "Community Focused",
        description: "We value compatibility, shared interests, and peaceful co-living.",
        icon: "🤝",
    },
    {
        title: "Secure Profiles",
        description: "Verified users and privacy-first features for safe matching.",
        icon: "🔐",
    },
    {
        title: "Local Listings",
        description: "Find roommates nearby — from cities to towns, we cover it all.",
        icon: "📍",
    },
    {
        title: "Smart Search",
        description: "Filter by rent, location, preferences, and more — easily.",
        icon: "🔍",
    },
];

const AboutUs = () => {
    return (
        <section className="py-12 px-4 bg-base-100">
            <div className="max-w-6xl mx-auto text-center">

                {/* Animated H1 Title */}
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-transparent bg-clip-text mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    Find your ideal roommate
                </motion.h2>

                {/* Paragraph */}
                <motion.p
                    className="text-gray-600 max-w-3xl mx-auto mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Our platform is designed to help you find the ideal roommate who matches your lifestyle, budget, and location. Whether you’re a student, a professional, or someone relocating — we ensure a safe, trustworthy and simple experience.
                </motion.p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            className="card bg-base-200 shadow-md hover:shadow-xl transition-all"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-body items-center text-center">
                                <div className="text-5xl mb-3">{item.icon}</div>
                                <h3 className="text-lg font-semibold text-green-700">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
