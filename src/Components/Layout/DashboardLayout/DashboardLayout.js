import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Usercontex } from '../../../AuthContex/AuthContex';
import Footer from '../../SharedPage/Footer/Footer';
import Navbar from '../../SharedPage/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(Usercontex)
    console.log(user.email);
    const { data } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allusers?email=${user?.email}`)
            const data = await res.json()
            return data

        }
    })
    console.log();
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet> </Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content justify-center">
                        {
                            data?.role === 'Buyer' && <li> <Link to={'/dashboard/myorders'} className='btn bg-[#42C8B7] mt-5 hover:text-white'> My orders </Link></li>
                        }
                        {
                            data?.role === 'Seller' && <>
                                <li><Link to={'/dashboard/addproduct'} className='btn bg-[#42C8B7] mt-5 hover:text-white'> Add Products </Link></li>
                                <li><Link to={'/dashboard/myproducts'} className='btn bg-[#42C8B7] mt-5 hover:text-white'> My Products </Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;