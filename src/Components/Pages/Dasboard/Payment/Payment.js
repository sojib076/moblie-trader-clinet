import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';

const stripePromise = loadStripe(process.env.REACT_APP_stripe);
const Payment = () => {

    const data = useLoaderData()
    const { name, resalePrice, email } = data
    return (
        <div>
            <div>
                <div className='w-[90%] mx-auto'>
                    <h1 className='text-3xl text-blue-800'> Product Name {name}</h1>
                    <h1 className='text-2xl font-bold'> {resalePrice} TK </h1>
                    <h1 className='text-xl'> Billin To {email}</h1>
                </div>
            </div>
            <div className='w-[70%] mx-auto mt-10 border-2 border-black p-10 shadow-2xl shadow-blue-600'>
                <Elements stripe={stripePromise}>
                    <Checkout data={data}> </Checkout>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;