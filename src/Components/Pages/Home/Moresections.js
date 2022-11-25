import React from 'react';

const Moresections = () => {
    return (
  <div>   
       <div className='my-10'>
            <div className='w-[80%] mx-auto '>
                <h1 className='lg:text-3xl text-xl text-center'>Sell Your Gadget in 3 Steps</h1>
                <p className='text-center'>Book a from your home or work any  time slot as per your convenience</p>
            </div>
            <div className='grid lg:grid-cols-3 w-[50%] mx-auto mt-2'>
                <div className='w-48 h-48 border-2  p-5'>
                    <h1 className='text-xl'> Check Price</h1> 
                    <p>Select your device & tell us about its current condition</p>
                </div>
                <div className='w-48 h-48 border-2 p-5'>
                   <h1 className='text-xl'> Fix time & Location</h1>
                   <p>Set time with sellet</p>

                </div>
                <div className='w-48 h-48 border-2  p-5'>
                    <h1 className='text-xl'>Secure Payment</h1>
                    <p> 100% cashack if something went worng</p>
                </div>

            </div>
        </div>
            
  </div>
    );
};

export default Moresections;   
