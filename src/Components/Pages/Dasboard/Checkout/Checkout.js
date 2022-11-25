
import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

const Checkout = ({ data }) => {
    const [cardError, setError] = useState('');
    const { resalePrice, email, _id, orderid } = data
    const [clientSecret, setClientSecret] = useState('')
    const [success, setsuccess] = useState(false)
    const [transId, settransId] = useState('')

    useEffect(() => {
        fetch("http://localhost:5000/create-payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({ resalePrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [resalePrice]);
    console.log(clientSecret);


    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (!card) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card: card,
        })
        if (error) {
            console.log(error.message);
            setError(error.message)

        } else {
            setError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setError(cardError.message)
            return
        }
        if (paymentIntent.status === 'succeeded') {
            const payment = {
                paymentId: paymentIntent.id,
                email: email,
                id: _id,
                orderid: orderid,
            }

            fetch(`http://localhost:5000/conpayment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                })
            setsuccess(true)
            settransId(paymentIntent.id)

        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-10' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                {
                    cardError && toast.error(<p className='text-danger'>{cardError}</p>)
                }
                {
                    success ? toast.success(<p className='text-black'>Your payment is successful. Your transaction id is {transId}</p>) : ''
                }
            </form>
        </div>
    );
};

export default Checkout;