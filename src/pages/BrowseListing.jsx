import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const BrowseListings = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetch("https://assignmet-10-server-orpin.vercel.app/roommate")
            .then((res) => res.json())
            .then((data) => setListings(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <Helmet>
                <title>RoomMate-Finder || BrowsListing</title>
            </Helmet>
            <div className="w-11/12 mx-auto my-10">
                <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
                    All Roommate Listings
                </h1>

                <div className="overflow-x-auto">
                    <table className="table w-full table-zebra">
                        {/* Table Header */}
                        <thead className="bg-green-100 text-green-800">
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Rent</th>
                                <th>Room Type</th>
                                <th>Availability</th>
                                <th>See More</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {listings.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.location}</td>
                                    <td>৳{item.rent}</td>
                                    <td>{item.roomType}</td>
                                    <td>{item.availability}</td>
                                    <td>
                                        <Link to={`/details/${item._id}`}>
                                            <button className="btn btn-sm btn-outline btn-success">See More</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BrowseListings;
