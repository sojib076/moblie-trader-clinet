import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Report = () => {

    const {data,refetch} = useQuery({
        queryKey: 'report',
        queryFn:async ()=>{
            const res = await fetch('https://moblie.vercel.app/report')
            const data = await res.json()
            console.log(data[0]);
            return data
        }
    })


      const handelete = (item) => {
        fetch(`https://moblie.vercel.app/report/${item.reportid}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                    refetch()
                
            })
      }
      console.log(data);
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1'>
           { data && data.map((item,index)=>{ 
            return    <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p className='text-red-800 font-bold' f>Seller : {item.sellerName} </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary " onClick={()=>handelete(item)}>Delete </button>
                </div>
            </div>
        </div>
           })}
        </div>
    );
};

export default Report;