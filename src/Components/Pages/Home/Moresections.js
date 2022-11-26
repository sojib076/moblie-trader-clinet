import React from 'react';
import banner from './img/HomepageBanner.png';
import price from './img/E-Wallet-pana.png';
import Location from './img/GPSi.png';
import secure from './img/E-Wallet-bro.png';
import why_us from './img/why_us.png';


const Moresections = () => {
    return (
  <div>   
       <div className='my-10'>
            <div className='w-[80%] mx-auto '>
                <h1 className='lg:text-3xl text-xl text-center'>Sell Your Gadget in 3 Steps</h1>
                <p className='text-center'>Book a from your home or work any  time slot as per your convenience</p>
            </div>
            <div className='grid lg:grid-cols-3 w-[60%] lg:w-[88%]  mx-auto mt-2 '>
                <div className='w-60 h-60 border-2  p-5 shadow-xl shadow-black'>
                    <h1 className='text-xl'> Check Price</h1> 
                    <p>Select your device & tell us about its current condition</p>
                    <img src={price} alt="" className='w-36 h-28' />
                </div>
                <div className='w-60 h-60 border-2  p-5 shadow-xl shadow-black'>
                   <h1 className='text-xl'> Fix time & Location</h1>
                   <p>Set time &Location  with the seller and buy </p>
                   <img src={Location} alt="" className='w-36 h-32' />
                </div>
                <div className='w-60 h-60 border-2  p-5 shadow-xl shadow-black'>
                    <h1 className='text-xl'>Secure Payment</h1>
                    <p> 100% cashack if something went worng</p>
                    <img src={secure} alt="" className='w-36 h-28' />
                </div>

            </div>
        </div>
        <section> 
            <img src={banner} alt="" srcset="" className='my-5 w-[90%]  mx-auto rounded-xl' />
        </section>

        <section className='w-[90%] mx-auto'> 
            <div className='flex'> 
                <div className='w-[60%] flex flex-col  justify-center'>
                    <h1 className='lg:text-4xl  text-xl font-semibold'>Why Buy from us</h1>
                    <ul className=''> 
                        <li> 
                            <h1 className='lg:text-xl font-semibold'>100% Cashback</h1>
                        </li>
                        <li>
                            <h1 className='lg:text-xl font-semibold mt-2'>100% Secure </h1>
                        </li>
                        <li>
                            <h1 className='lg:text-xl font-semibold mt-2'> Verified Products </h1>
                        </li>
                        <li>
                            <h1 className='lg:text-xl font-semibold mt-2'> 24*7 Support  </h1>
                        </li>
                    </ul>
                </div>
                <div className='w-[50%]'>
                    <img src={why_us} alt="" srcset="" />
                </div>
                
            </div>
        </section>
            
  </div>
    );
};

export default Moresections;   
