// src/pages/DetailsPage.jsx
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const DetailsPage = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [room, setRoom] = useState(null);
    console.log('id', id)
    useEffect(() => {
        fetch(`http://localhost:3000/roommate/${id}`)
            .then(res => res.json())
            .then(data => setRoom(data))
            .catch(err => console.error(err));
    }, [id]);

    const handleLike = () => {
        if (!user) return toast.error("Please login to like this post");

        fetch(`http://localhost:3000/roommate/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userEmail: user.email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Liked!');
                    setRoom(prev => ({ ...prev, likeCount: prev.likeCount + 1 }));
                }
            });
    };

    if (!room) return <div className="text-center p-10">Loading...</div>;

    return (
        <div className="max-w-3xl mx-auto p-6">
            <img src={room.image} alt={room.title} className="w-full rounded mb-4" />
            <h1 className="text-2xl font-bold text-green-700">{room.title}</h1>
            <p><strong>Location:</strong> {room.location}</p>
            <p><strong>Rent:</strong> ৳{room.rent}</p>
            <p><strong>Room Type:</strong> {room.roomType}</p>
            <p><strong>Lifestyle:</strong> {room.lifestyle}</p>
            <p><strong>Description:</strong> {room.description}</p>
            <p><strong>Contact:</strong> {room.contact}</p>
            <p><strong>Posted by:</strong> {room.userName} ({room.userEmail})</p>
            <p><strong>Availability:</strong> {room.availability}</p>
            <p><strong>Likes:</strong> {room.likeCount}</p>
            <button onClick={handleLike} className="btn btn-success mt-4">Like</button>
        </div>
    );
};

export default DetailsPage;
