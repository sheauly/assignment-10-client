import { createBrowserRouter, } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddListing from "../pages/AddListing";
import UpdatedListing from "../pages/UpdatedListing";
import MyListing from "../pages/MyListing";
import BrowseListing from "../pages/BrowseListing";
import Details from "../pages/Details";
import HomeLayOut from "../LayOut/HomeLayOut";
import PrivetRoute from "../context/PrivateRoute";
import Error from "../pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayOut></HomeLayOut>,

        children: [
            {
                path: "/",
                loader: () => fetch('https://assignmet-10-server-orpin.vercel.app/roommate'),
                element: <Home></Home>
            },
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
            {
                path: "/add-listing",
                element: <PrivetRoute>
                    <AddListing></AddListing>
                </PrivetRoute>
            },

            {
                path: "/my-listings",
                element: <PrivetRoute>
                    <MyListing></MyListing>
                </PrivetRoute>
            },

            {
                path: "/browse-listings",
                element: <BrowseListing></BrowseListing>
            },
            {
                path: "/details/:id",
                loader: ({ params }) => fetch(`https://assignmet-10-server-orpin.vercel.app/roommate/${params.id}`),
                element: <PrivetRoute>
                    <Details></Details>
                </PrivetRoute>
            },
            {
                path: '/updatedListing/:id',
                element: <PrivetRoute>
                    <UpdatedListing></UpdatedListing>
                </PrivetRoute>

            },
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }

]);

export default router;
