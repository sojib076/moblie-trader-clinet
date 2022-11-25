import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Usercontex } from '../../../../AuthContex/AuthContex';

const Myproducts = () => {
    const { user } = useContext(Usercontex)
    const { data: sellerorder = [] } = useQuery({
        queryKey: ['sellerorder', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sellerorder?email=${user?.email}`)
            const data = await res.json()
            return data

        }
    })
    console.log(sellerorder);

    return (
        <div className='grid grid-cols-2 gap-5'>
            {
                sellerorder?.map((item, index) => {
                    return <div className="card w-80 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"> Product name {item.name}</h2>
                            <h2 className="">Status {
                                item?.paid ? "Sold" : "Not sold"
                            }</h2>
                            <p> selling price :{item.resalePrice}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Promote </button>
                                <button className="btn btn-ghost">Delete</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Myproducts;