import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../SharedPage/Navbar/Navbar';
import Topbar from './Topbar';

const Main = () => {
    return (
        <div >
            <Topbar></Topbar>
            <Navbar></Navbar>
            <Outlet> </Outlet>
        </div>
    );
};

export default Main;