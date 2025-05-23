import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Details = () => {
    const post = useLoaderData();
    const { user } = useContext(AuthContext);

    const [liked, setLiked] = useState(false); // starts false
    const [likeCount, setLikeCount] = useState(post.likes || 0);
    const [showContact, setShowContact] = useState(false); // contact hidden initially

    const handleLike = () => {
        if (!user) {
            alert('You must be logged in to like this post!');
            return;
        }

        // Send PATCH request to backend
        fetch(`https://assignmet-10-server-orpin.vercel.app/roommate/${post._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ isLike: true })
        })
            .then(res => {
                if (!res.ok) throw new Error('Failed to update like count');
                return res.json();
            })
            .then(() => {
                setLiked(true);
                setLikeCount(prev => prev + 1);
                setShowContact(true);
            })
            .catch(err => {
                console.error(err);
                alert('Something went wrong!');
            });
    };

    return (
        <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg space-y-4">
            {/* Like info */}
            <h2 className="text-xl font-semibold text-center text-indigo-600">
                {likeCount} people interested in
            </h2>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                    <img src={post.image} alt={post.title} className="w-full h-full rounded-lg" />
                </div>

                <div className="md:w-1/2 space-y-3">
                    <h2 className="text-2xl font-bold">{post.title}</h2>
                    <p><strong>Location:</strong> {post.location}</p>
                    <p><strong>Rent:</strong> {post.rent} TK</p>
                    <p><strong>Room Type:</strong> {post.roomType}</p>
                    <p><strong>Lifestyle:</strong> {post.lifestyle}</p>
                    <p><strong>Description:</strong> {post.description}</p>
                    <p><strong>Availability:</strong> {post.availability}</p>
                    <p><strong>Posted by:</strong> {post.userName} ({post.userEmail})</p>

                    {showContact && (
                        <p className="text-green-600 font-semibold">
                            📞 Contact Number: {post.contact}
                        </p>
                    )}

                    <button
                        onClick={handleLike}
                        disabled={liked}
                        className={`px-4 py-2 rounded mt-4 transition font-semibold 
                            ${liked ? 'bg-red-500 text-white cursor-not-allowed' : 'bg-gray-300 text-black hover:bg-red-100'}`}
                    >
                        ❤️ {liked ? 'Liked' : 'Like'} ({likeCount})
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
