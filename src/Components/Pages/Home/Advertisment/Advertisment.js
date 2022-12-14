import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../../Loading/Loading';

import Admodal from './Admodal';

const Advertisment = () => {
    const { data, isLoading,refetch } = useQuery({
        queryKey: ['advertisment'],
        queryFn: async () => {
            const res = await fetch(`https://moblie.vercel.app/promote`)
            const data = await res.json()
            return data
        }
    })
    const [modaldata, setModaldata] = useState(null)
    if (isLoading) {
        return <Loading></Loading>

    }
    refetch()
    return (
        <div className='lg:ml-20 ml-[5%]'>
            <div className='grid lg:grid-cols-3 gap-5 mt-5 lg:[w-100%] '>
                {
                    data?.map(item => {
                        return item?.paid ? null : <div className="card card-compact w-80 bg-[#A6CECE] shadow-xl mt-10 lg:mt-0 ">
                            <figure><img src={item.picture} alt="Shoes" className='h-24 w-24' /></figure>
                            <div className="card-body ">
                                <h2 className="text-xl">{item.name}</h2>

                                <div className='flex justify-between '>
                                    <p className="text-[#000000] text-[18px]"> Orginal Price : <span className='text-black font-semibold underline'>{item.originalPrice}Tk </span> </p>
                                    <p className="text-[#000000] text-[18px] ml-5"> Selling Price : <span className='text-black font-semibold underline'>{item.resalePrice}Tk </span> </p>
                                </div>
                                <div className='flex '>
                                    <p className="text-[#000000] text-[15px]">{item.yearsOfUse} year used  </p>
                                    <p className="text-[#000000] text-[15px]"> post time : {item.time} </p>
                                </div>
                                <div className='flex flex-justify'>
                                    <p className="text-[#000000]"> Location : {item.location} </p>
                                    <p className="text-[#000000]"> phone : {item.phonenumber} </p>
                                </div>

                                <p className="text-[#000000] text-[20px]"> {item.sellerName}</p>
                                <div className="card-actions justify-end">
                                    <label htmlFor="sojib" className="btn" onClick={() => setModaldata(item)}>Book Now</label>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            {
                modaldata && <Admodal modaldata={modaldata} setModaldata={setModaldata} > </Admodal>
            }
        </div>
    );
};

export default Advertisment;