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
        <div className="max-w-3xl flex mx-auto p-6 m-8 bg-white shadow-lg rounded-lg mt-10 space-y-4">
            <div className='p-5'>
                <img src={post.image} alt={post.title} className="w-full h-full rounded-lg " />
            </div>
            <div className=''>
                <h2 className="text-2xl font-bold p-2">{post.title}</h2>
                <p className='p-2'><strong>Location:</strong> {post.location}</p>
                <p className='p-2'><strong>Rent:</strong> {post.rent} TK</p>
                <p className='p-2'><strong>Room Type:</strong> {post.roomType}</p>
                <p className='p-2'><strong>Lifestyle:</strong> {post.lifestyle}</p>
                <p className='p-2'><strong>Description:</strong> {post.description}</p>
                <p className='p-2'><strong>Availability:</strong> {post.availability}</p>
                <p className='p-2'><strong>Contact Email:</strong> {post.contact}</p>
                <p className='p-2'><strong>Posted by:</strong> {post.userName} ({post.userEmail})</p>

                <button
                    onClick={handleLike}
                    className={`px-4 py-2 mt-4 rounded ${liked ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
                >
                    ❤️ {liked ? 'Liked' : 'Like'} ({likeCount})
                </button>
           </div>
        </div>
    );
};

export default Details;
