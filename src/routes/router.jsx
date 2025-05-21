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
        element :<HomeLayOut></HomeLayOut>, 
      
        children: [
            {
                path: "/",
                loader: () => fetch('http://localhost:3000/roommate'),
                element:<Home></Home>
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
                element: <AddListing></AddListing>
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
                loader: ({ params }) => fetch(`http://localhost:3000/roommate/${params.id}`),
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
  