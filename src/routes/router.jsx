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
const router = createBrowserRouter([
    {
        path: "/",
        element :<HomeLayOut></HomeLayOut>, 
      
        children: [
            {
                path: "/",
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
                path: "/add-lisiting",
                element: <AddListing></AddListing>
            },
            {
                path: "/updated-lisiting",
                element: <UpdatedListing></UpdatedListing>
            },
           
            {
                path: "/my-listings",
                element: <MyListing></MyListing>
            },
            {
                path: "/browse-listings",
                element: <BrowseListing></BrowseListing>
            },
            {
                path: "/details/:id",
                element:<Details></Details>
            },
            
        ]
    }
]);

export default router;
  