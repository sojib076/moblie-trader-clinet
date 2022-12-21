import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Usercontex } from '../../AuthContex/AuthContex';

const Topbar = () => {
    const { user, logout } = useContext(Usercontex)
    return (

        <div className='md:w-[90%] mx-auto lg:h-[100px] p-5 border-b-2 border-black hidden md:flex '  >
            <div className='md:grid grid-cols-4  justify-between lg:w-[99%] '>
                <div className='md:w-[90%]  lg:w-[100%]'>
                    <img src="https://images-platform.99static.com/28pjQ9gQCqYqo2mzNJX8v007jbY=/500x500/top/smart/99designs-contests-attachments/17/17826/attachment_17826866" alt="" srcset=""
                        className='md:w-[200px] md:h-[150px] md:mt-[-12%] w-28 h-28' />
                </div>
                <div className='col-span-2'>
                    {user?.email &&

                        <form>
                            <div className="relative p-1.5 lg:mt-0 md:mt-[-20%]">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm
                                 text-gray-900 border" placeholder="Search phones..." ></input>
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 btn  bg-[#42C8B7]">Search</button>
                            </div>
                        </form>
                    }
                </div>
                <div>
                    {
                        user?.email ? <Link onClick={logout}
                            className='btn outline-none lg:mt-2 lg:ml-[50%] lg:inline-flex hidden text-center m-5 bg-[#9AB7D3]' >
                            Logout</Link> : <Link to={'/login'} className='btn outline-none lg:mt-2 lg:ml-[50%] lg:inline-flex hidden text-center m-5 bg-[#9AB7D3]' >
                            Login Now</Link>
                    }
                </div>
            </div>
        </div>

    );
};

export default Topbar;