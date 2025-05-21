import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Details = () => {
    const post = useLoaderData();
    const { user } = useContext(AuthContext);

    const [liked, setLiked] = useState(post.likedBy?.includes(user?.email));
    const [likeCount, setLikeCount] = useState(post.likeCount || 0);

    const handleLike = () => {
        fetch(`http://localhost:3000/roommate/${liked._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userEmail: user.email }),
        })
            .then(res => res.json())
            .then(updated => {
                setLiked(updated.likedBy.includes(user.email));
                setLikeCount(updated.likeCount);
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 space-y-4">
            <img src={post.image} alt={post.title} className="w-full rounded-lg" />
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p><strong>Location:</strong> {post.location}</p>
            <p><strong>Rent:</strong> {post.rent} TK</p>
            <p><strong>Room Type:</strong> {post.roomType}</p>
            <p><strong>Lifestyle:</strong> {post.lifestyle}</p>
            <p><strong>Description:</strong> {post.description}</p>
            <p><strong>Availability:</strong> {post.availability}</p>
            <p><strong>Contact Email:</strong> {post.contact}</p>
            <p><strong>Posted by:</strong> {post.userName} ({post.userEmail})</p>

            <button
                onClick={handleLike}
                className={`px-4 py-2 mt-4 rounded ${liked ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
            >
                ❤️ {liked ? 'Liked' : 'Like'} ({likeCount})
            </button>
        </div>
    );
};

export default Details;
