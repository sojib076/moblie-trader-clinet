
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const Allbuyer = () => {

    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://moblie.vercel.app/buyer')
    //         .then(res => res.json())
    //         .then(data => setdata(data))
    // }, [])

    const {data,refetch}=useQuery({
        queryKey:'buyer',
        queryFn: async()=>{
            const res=await fetch('https://moblie.vercel.app/buyer')
            const data=await res.json()
            return data
        }
    })
    
  const handeldelt = (id) => {
        fetch(`https://moblie.vercel.app/userdlt/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                refetch()
                toast.success('user deleted successfully')
            })
            
  }
    return (
        <div className='grid lg:grid-cols-2 gap-5'>
            {
                data?.map(buyer => {
                    return <div className="card card-compact w-80 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{buyer.name}</h2>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={()=>handeldelt(buyer._id)}> Delete </button>
                              
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Allbuyer;