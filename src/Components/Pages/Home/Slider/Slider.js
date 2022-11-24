import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from 'swiper';

 
const Slider = () => {
    return (

        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='h-[400px]  bg-[#42C8B7] rounded-3xl w-[95%]'>
                    <div className='flex justify-between'>
                        <div className='w-[50%] flex flex-col items-center justify-center '>
                            <h1 className=' lg:text-3xl  text-center text-white'>
                                Sell old phone
                            </h1>
                            <p className='lg:text-xl text-white text-center' >
                                Sell your old phone and get cash for it.
                            </p>
                            <button className='btn border-none ml-[40%] md:ml-[0%] btn-xs md:btn-md lg:mt-5 bg-black '> Book Now</button>
                        </div>
                        <div className='w-[45%]'>
                            <img src="https://s3n.cashify.in/imageLibrary/RM-Sell-Old-Phone-Homepage-Web-Banner_f151fd657067.png" alt="" srcset="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-[300px] w-[95%] rounded-3xl bg-[#FF5900]'>
                    <div className='flex justify-between'>
                    <div className='w-[50%] flex flex-col items-center justify-center '>
                            <h1 className=' lg:text-3xl text-center text-white'>
                                Check out those xiaomi phones
                            </h1>
                            <div>
                                <p className='lg:text-xl text-white text-center' >
                                    Get flat 10% off
                                </p>
                                <button className='btn bg-[#42C8B7] ml-[40%] md:ml-[0%] btn-xs md:btn-md lg:mt-5 border-none' > Book Now</button>
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