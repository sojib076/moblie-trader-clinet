import { useQuery } from '@tanstack/react-query';

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Usercontex } from '../../../../AuthContex/AuthContex';

const Myorders = () => {
    const { user } = useContext(Usercontex)
    console.log(user.email);
    //   using use queries 
    const { data, isloading, error } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allorders?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })



    return (

            <div className='grid lg:grid-cols-3 gap-5 mt-5 lg:[w-100%] w-90% mx-auto'> 
                {
                    data?.map(item =>{
                        return <div className="card card-compact w-72  bg-base-100 shadow-xl">
                        <figure><img src={item.picture} alt="Shoes"  className='h-20 w-30'/ ></figure>
                        <div className="card-body">
                          <h2 className="card-title">{item.name}</h2>
                          <p>Price {item.resalePrice}</p>
                          <div className="card-actions justify-end">
                          {
                            item.paid? <span> Paid</span> :<Link to={`/dashboard/payment/${item._id}`}><button className="btn btn-primary">Pay</button></Link> 
                          }
                          </div>
                        </div>
                      </div>
                    } )
                }
            </div>
    );
};

export default Myorders;