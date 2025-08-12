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
import DashLayOut from '../LayOut/DashLayOut';
import DashBoard from "../pages/Dashboard";
import Contact from "../pages/Contact";
import Support from "../pages/Support"
import AboutUs from "../pages/AboutUs";
import Dashboard from "../pages/Dashboard";
import DashBoardHome from "../pages/DashBoardHome";
import MyProfileCard from "../pages/MyProfileCard";


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
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/support',
                element: <Support></Support>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
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
        path: "/dashboard",
        element: <PrivetRoute><DashLayOut /></PrivetRoute>,
        children: [
            {
                index: true,
                element: <DashBoardHome></DashBoardHome>
            },
    
            {
                path: "add-listing", 
                element: <AddListing />
            },
            {
                path: "my-listings", 
                element: <MyListing />
            },
            {
                path: "myProfileCard",
                element: <MyProfileCard></MyProfileCard>
            }

        ]
      },
    {
        path: '/*',
        element: <Error></Error>
    }

]);

export default router;
