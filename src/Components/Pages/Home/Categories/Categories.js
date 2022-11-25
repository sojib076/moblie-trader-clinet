import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const { data } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='w-[90%] lg:mx-auto '>
            <h1 className='text-3xl '> All Categories </h1>
            <div className='grid lg:grid-cols-3  grid-cols-2' >
                {
                    data?.map(info => {
                       return <Link to={`/categories/${info._id}`}> 
                        <div className='w-[30%] h-[40%] mx-auto'>
                                <h1 className='btn btn-outline lg:my-0 lg:mt-5 my-5'> {info.category}</h1>
                                <img src={info.img} alt="" srcSet='' title={info.category}  className='hidden lg:block'/>
                            </div>
                        </Link>
                    } )     
                    
                }
            </div>

        </div>
    );
};

export default Categories;