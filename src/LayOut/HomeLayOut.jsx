import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';

const HomeLayOut = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayOut;