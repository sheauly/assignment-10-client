import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <Fade direction="up" triggerOnce>
            <div className="max-w-5xl mx-auto py-12 px-4 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg">
                <h1 className="text-4xl font-extrabold text-green-700 mb-6 text-center">
                    Contact <span className="text-orange-500">Us</span>
                </h1>

                <p className="mb-6 text-gray-600 text-center text-lg">
                    We are always here to help! You can reach us through the contact details below.
                </p>

                <ul className="space-y-4 text-gray-700 text-base">
                    <li className="flex items-center gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                        <FaEnvelope className="text-green-600 text-xl" />
                        <span><strong>Email:</strong> shulybd1245.com</span>
                    </li>

                    <li className="flex items-center gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                        <FaPhoneAlt className="text-blue-600 text-xl" />
                        <span><strong>Phone:</strong> +8801518471238</span>
                    </li>

                    <li className="flex items-center gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                        <FaMapMarkerAlt className="text-red-500 text-xl" />
                        <span><strong>Address:</strong> 123, Example Street, Dhaka, Bangladesh</span>
                    </li>
                </ul>
            </div>
        </Fade>
    );
};

export default Contact;
