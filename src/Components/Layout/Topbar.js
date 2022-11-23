import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        
                 <div className='w-[90%] mx-auto lg:h-[100px] p-5 border-b-2 border-black '  >
                <div className='md:grid grid-cols-4  justify-between lg:w-[99%] '>
                    <div className='w-[70%]  lg:w-[100%]'>
                        <img src="https://images-platform.99static.com/28pjQ9gQCqYqo2mzNJX8v007jbY=/500x500/top/smart/99designs-contests-attachments/17/17826/attachment_17826866" alt="" srcset=""  
                        className='w-[200px] h-[150px]   mt-[-12%]'/>
                    </div>
                    <div className='col-span-2'>
                        <form>
                            <div class="relative p-1.5">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm
                                 text-gray-900 border" placeholder="Search phones..." ></input>
                                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 btn btn-primary">Search</button>
                            </div>
                        </form>
                    </div>
                    <div>
                     <Link to={'/login'} 
                     className='btn btn-primary lg:mt-2 lg:ml-[50%] lg:inline-flex hidden text-center' > Login</Link>  
                    </div>
                </div>
            </div>
       
    );
};

export default Topbar;