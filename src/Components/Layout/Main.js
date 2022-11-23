import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../SharedPage/Navbar/Navbar';

const Main = () => {
    return (
        <div >
            <div className='w-[90%] mx-auto' > 
                <div className='grid grid-cols-4 mx-auto '> 
                <div> 
                    logo
                </div>
                <div className='col-span-2'>
                    search
                </div>
                <div> 
                    login
                </div>
                </div>
            </div>
            <Navbar></Navbar>
            <Outlet> </Outlet>
        </div>
    );
};

export default Main;