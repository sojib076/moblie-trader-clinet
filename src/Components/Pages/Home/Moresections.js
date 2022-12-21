import React from 'react';

import price from './img/E-Wallet-pana.png';
import Location from './img/GPSi.png';
import secure from './img/E-Wallet-bro.png';
import why_us from './img/why_us.png';
import moblie from './img/moblie.mp4'


const Moresections = () => {
    return (
        <div className='md:w-[80%] mx-auto mt-10 overflow-hidden'>
            <div className='my-10' >
                <div className=' ' >
                    <h1 className='lg:text-3xl text-xl text-center'>Sell Your Gadget in 3 Steps</h1>
                    <p className='text-center'>Book a from your home or work any  time slot as per your convenience</p>
                </div>
                <div className='md:w-[100%] w-[90%] mx-auto'>

                    <div className=' md:w-[50%] w-80 h-60 border-2  p-5 shadow-xl md:shadow-black' data-aos="fade-right">
                        <h1 className='text-xl'> Check Price</h1>
                        <p>Select your device & tell us about its current condition</p>
                        <img src={price} alt="" className='w-[50%] h-[80%]' />
                    </div>

                    <img src="https://sellmax.com/img/line-left.png" alt="" srcset="" className='md:w-[45%] w-[80%]' data-aos="fade-right" />
                    <div className='md:w-[50%]  w-80 h-60 border-2  p-5 shadow-xl md:shadow-black md:ml-[40%]' data-aos="fade-left">
                        <h1 className='text-xl'> Fix time & Location</h1>
                        <p>Set time &Location  with the seller and buy </p>
                        <img src={Location} alt="" className='w-36 h-32' />
                    </div>

                    <img src="https://sellmax.com/img/line-right.png" alt="" srcset="" className='lg:w-[45%] w-[80%]' data-aos="fade-left" />
                    <div className='md:w-[50%]  w-80 h-60 border-2  p-5 shadow-xl md:shadow-black' data-aos="fade-right">
                        <h1 className='text-xl'>Secure Payment</h1>
                        <p> 100% cashack if something went worng</p>
                        <img src={secure} alt="" className='w-36 h-28 ' />
                    </div>

                </div>
            </div>
            <section>
                <div className="stats stats-vertical lg:stats-horizontal shadow w-[99%] mt-5 " data-aos="fade-right">

                    <div className="stat">
                        <div className="text-black">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </section>

            <section>
                <h1 className='text-center text-5xl font-serif mt-5'>Growth Story</h1>
                <img src="https://www.recycledevice.com/assets/images/growth-story.svg" alt="" srcset="" data-aos="fade-right" />
            </section>


            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Testimonials</h2>
                        <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                    </div>
                    <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-2 grid-cols-1">
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 shadow-2xl">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3  flex-col">
                                <p> 
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, tempore impedit error architecto nisi assumenda quas animi hic dolores. Laboriosam modi aspernatur rem maxime possimus nisi minus ratione, asperiores accusantium.
                                </p>
                                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"></img>
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>Bonnie Green</div>
                                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                                </div>
                            </figcaption>
                        </figure>
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 shadow-2xl">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <p> 
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, tempore impedit error architecto nisi assumenda quas animi hic dolores. Laboriosam modi aspernatur rem maxime possimus nisi minus ratione, asperiores accusantium.
                                </p>
                                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"></img>
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>Bonnie Green</div>
                                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                                </div>
                            </figcaption>
                        </figure>
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 shadow-2xl">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <p> 
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, tempore impedit error architecto nisi assumenda quas animi hic dolores. Laboriosam modi aspernatur rem maxime possimus nisi minus ratione, asperiores accusantium.
                                </p>
                                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"></img>
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>Bonnie Green</div>
                                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                                </div>
                            </figcaption>
                        </figure>
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 shadow-2xl">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <p> 
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, tempore impedit error architecto nisi assumenda quas animi hic dolores. Laboriosam modi aspernatur rem maxime possimus nisi minus ratione, asperiores accusantium.
                                </p>
                                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"></img>
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>Bonnie Green</div>
                                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>


            </section>
            {/* <section className='h-[90%] mx-auto mt-5 flex flex-row'>
                <h1 className='text-center text-5xl font-serif mt-5'>Get Good Quality Moblies</h1>
                    <div> 
                    <video src={moblie} autoPlay muted controlsList='nodownload' loop  className=' h-[80%]' ></video>
                    </div>
            </section> */}

        </div>
    );
};

export default Moresections;   
