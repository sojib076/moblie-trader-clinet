import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"


const Slider = () => {
    return (

        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='h-[400px]  bg-[#B5C8BC] rounded-3xl w-[95%]'>
                    <div className='flex justify-between'>
                        <div className='w-[50%] flex flex-col items-center justify-center '>
                            <h1 className=' lg:text-3xl  text-center text-white'>
                                Sell old phone
                            </h1>
                            <motion.p className='lg:text-xl text-white text-center'
                                initial={{ opacity: 0, x: '-100vw' }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5, type: 'spring', stiffness: 120 }}
                                style={{ display: 'inline-block' }}
                                // repeat thus 
                                repeat={{ yoyo: Infinity }}
                            >
                                Sell your old phone
                            </motion.p>
                            <motion.p className='lg:text-xl text-white text-center'
                                initial={{ opacity: 0, x: '-100vw' }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 3, type: 'spring', stiffness: 120 }}
                                style={{ display: 'inline-block' }} >
                                get cash
                            </motion.p>
                            <button className='btn border-none ml-[40%] md:ml-[0%] btn-xs md:btn-md lg:mt-5 bg-black '> Book Now</button>
                        </div>
                        <div className='w-[45%]'>
                            <img src="https://s3n.cashify.in/imageLibrary/RM-Sell-Old-Phone-Homepage-Web-Banner_f151fd657067.png" alt="" srcset="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-[95%] rounded-3xl bg-[#B5C8BC]'>
                    <div className='flex justify-between'>
                        <div className='w-[50%] flex flex-col items-center justify-center '>
                            <motion.p className='lg:text-xl text-white text-center'
                                initial={{ opacity: 0, x: '-100vw' }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5, type: 'spring', stiffness: 120 }}
                                style={{ display: 'inline-block' }}
                                // repeat thus 
                                repeat={{ yoyo: Infinity }}
                            >
                                Sell your old phone
                            </motion.p>
                            <motion.p className='lg:text-xl text-white text-center'
                                initial={{ opacity: 0, x: '-100vw' }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 3, type: 'spring', stiffness: 120 }}
                                style={{ display: 'inline-block' }} >
                                get cash
                            </motion.p>
                            <div>
                                <p className='lg:text-xl text-white text-center' >

                                </p>
                                <Link to={'/categories/637e60081645816e3ab30c2f'}> <button className='btn bg-[#42C8B7] ml-[40%] md:ml-[0%] btn-xs md:btn-md lg:mt-5 border-none' > Book Now</button></Link>
                            </div>
                        </div>
                        <div className='w-[45%]'>
                            <img src="https://s3n.cashify.in/imageLibrary/MI10-Homepage_c1bb937b5d30.png" alt="" srcset="" />
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );

};

export default Slider;