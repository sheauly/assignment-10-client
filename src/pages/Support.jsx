import React from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';

const supportData = [
    {
        title: '24/7 Customer Support',
        description:
            'Our dedicated team is available around the clock to help you with any questions or issues.',
        icon: '🕓',
    },
    {
        title: 'Privacy & Security',
        description:
            'We prioritize your privacy and ensure that all your data is protected with top-notch security.',
        icon: '🔒',
    },
    {
        title: 'Personalized Assistance',
        description:
            'Get tailored support and guidance to find the best roommate match for your lifestyle.',
        icon: '🤝',
    },
];

const SupportSection = () => {
    return (
        <section className="py-10 px-4 bg-base-200">
            <div className="max-w-6xl mx-auto text-center">
                <Fade direction="up" triggerOnce>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">Need Help? We’re Here</h2>
                    <p className="text-gray-600 mb-10">
                        We’re committed to making your roommate search easy, safe, and personalized. Reach out to us anytime.
                    </p>
               </Fade>

                <div className="grid gap-6 md:grid-cols-3">
                    {supportData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="card shadow-lg bg-white hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-body text-left">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SupportSection;
