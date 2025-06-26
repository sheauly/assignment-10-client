import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const HomeLayOut = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 min-w-xl mx-auto mt-8'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayOut;