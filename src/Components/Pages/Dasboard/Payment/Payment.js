import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';

const stripePromise = loadStripe(process.env.REACT_APP_stripe);

const Payment = () => {
    const data = useLoaderData()
    const {name,resalePrice,email} = data
    return (
        <div>
            <div>
                <h1 className='text-4xl my-5'>Payment for </h1>
                <div className='w-[90%] mx-auto'> 
                <h1 className='text-3xl text-blue-800'> Product Name {name}</h1>
                <h1 className='text-2xl font-bold'>{resalePrice}</h1>
                <h1 className='text-xl'> Billin To {email}</h1>
                </div>
            </div>
          <div className='w-[70%]'> 
          <Elements stripe={stripePromise}>
                <Checkout data={data}> </Checkout>
            </Elements>
          </div>
        </div>
    );
};

export default Payment;