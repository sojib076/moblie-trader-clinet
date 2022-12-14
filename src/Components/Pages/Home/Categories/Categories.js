import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';


const Categories = () => {
    const { data } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios.get('https://moblie.vercel.app/categories');
            return res.data;
        }
    })


    return (
        <div className='w-[90%] lg:mx-auto md:my-10 '>
            <h1 className='text-3xl  font-sans mt-5'> All Categories </h1>
            
                            <div className='grid lg:grid-cols-3  grid-cols-2' >
                {
                    data?.map(info => {
                        return <Link to={`/categories/${info._id}`}>
                            <div className='w-[30%] h-[40%] mx-auto'>
         
                                <img src={info.img} alt="" srcSet='' title={info.category} className=' lg:block border mt-2 shadow-2xl'   data-aos="fade-right" />
                            </div>
                        </Link>
                    })

                }
            </div>
        </div>
    );
};

export default Categories;