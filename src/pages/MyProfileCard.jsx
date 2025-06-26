import React, { useContext } from 'react';
import { FaUserShield, FaFingerprint, FaCheckCircle, FaIdBadge, FaUser, FaFire, FaCheck, FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

const MyProfileCard = () => {
    const { user } = useContext(AuthContext);

    // card info + icon + bg color + icon before value
    const cards = [
        {
            title: "User ID",
            value: user?.uid || "N/A",
            icon: <FaIdBadge className="text-pink-600 mr-2" />,
            valueIcon: <FaUser className="text-pink-500 inline mr-1" />,
            bg: "bg-[#FCE4EC]",
        },
        {
            title: "Provider",
            value: user?.providerData?.[0]?.providerId || "N/A",
            icon: <FaFingerprint className="text-blue-600 mr-2" />,
            valueIcon: <FaFire className="text-blue-500 inline mr-1" />,
            bg: "bg-[#E3F2FD]",
        },
        {
            title: "Verified",
            value: user?.emailVerified ? "Yes ✅" : "No ❌",
            icon: <FaCheckCircle className="text-green-600 mr-2" />,
            valueIcon: <FaCheck className="text-green-500 inline mr-1" />,
            bg: "bg-[#E8F5E9]",
        },
        {
            title: "Display Name",
            value: user?.displayName || "N/A",
            icon: <FaUserShield className="text-yellow-600 mr-2" />,
            valueIcon: <FaUserAlt className="text-yellow-500 inline mr-1" />,
            bg: "bg-[#FFF3E0]",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto mt-10 p-4 space-y-10">
            {/* Profile Image and Basic Info */}
            <div className="max-w-md mx-auto bg-amber-100 dark:bg-gray-800 shadow-xl p-6 rounded-lg text-center">
                <img
                    src={user?.photoURL || 'https://i.ibb.co/ZVFsg37/default-avatar.png'}
                    alt="User"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{user?.displayName || "No Name"}</h2>
                <p className="text-gray-600 dark:text-gray-300">{user?.email || "No Email"}</p>
            </div>

            {/* Profile Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`rounded-xl shadow p-5 border border-gray-200 ${card.bg}`}
                    >
                        <div className="flex items-center">
                            {card.icon}
                            <h2 className="text-lg font-semibold text-gray-800">{card.title}</h2>
                        </div>
                        <p className="text-gray-700 mt-2 flex items-center">
                            {card.valueIcon}
                            {card.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProfileCard;
