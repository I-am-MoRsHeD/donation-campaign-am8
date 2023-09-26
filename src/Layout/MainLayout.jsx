// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-[1100px] mx-auto'>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;