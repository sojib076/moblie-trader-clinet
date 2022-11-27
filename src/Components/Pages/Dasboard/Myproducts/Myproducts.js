// import { useQuery } from '@tanstack/react-query';
// import React, { useContext, useEffect, useState } from 'react';
// import toast from 'react-hot-toast';
// import { Usercontex } from '../../../../AuthContex/AuthContex';

// const Myproducts = () => {
//     const { user } = useContext(Usercontex)
//     // const { data: sellerorder = [],refetch } = useQuery({
//     //     queryKey: ['sellerorder',user?.email],
//     //     queryFn: async () => {
//     //         const res = await fetch(`https://moblie.vercel.app/sellerorder?email=${user?.email}`)
//     //         const data = await res.json()
//     //         return data

//     //     }
//     // })
//     const [sellerorder, setSellerorder] = useState([])
//     useEffect(() => {
//         fetch(`https://moblie.vercel.app/sellerorder?email=${user?.email}`)
//             .then(res => res.json())
//             .then(data => {
//                 setSellerorder(data);
//             })
//     }, [user?.email])

//     console.log(sellerorder);


//     const handeldelt = (id) => {
//         fetch(`https://moblie.vercel.app/allphones/${id}`, {
//             method: 'DELETE'
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.acknowledged) {
//                     toast.success('Product deleted successfully')
                   
//                 }
//             })
//     }
//     const handelpromote = (id) => {
//        fetch(`https://moblie.vercel.app/promote `,{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify({id})
//        })
//     }
//     return (
//         <div className='grid grid-cols-2 gap-5'>
//             {
//                 sellerorder?.map((item, index,) => {
//                     return <div className="card w-80 bg-neutral text-neutral-content" key={item._id}>
//                         <div className="card-body items-center text-center">
//                             <h2 className="card-title"> Product name {item.name}</h2>
//                             <h2 className="">Status {
//                                 item?.paid ? "Sold" : "Not sold"
//                             }</h2>
//                             <p> selling price :{item.resalePrice}</p>
//                             <div className="card-actions justify-end">
//                                 <button className="btn btn-primary" onClick={()=>handelpromote(item._id)}>Promote </button>
//                                 <button className="btn btn-ghost" onClick={()=>handeldelt(item._id)}>Delete</button>
//                             </div>
//                         </div>
//                     </div>
//                 })
//             }
//         </div>
//     );
// };

// export default Myproducts;

import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Usercontex } from '../../../../AuthContex/AuthContex';

const Myproducts = () => {
    const { user } = useContext(Usercontex)
    const { data: sellerorder = [],refetch } = useQuery({
        queryKey: ['sellerorder', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://moblie-sojib076.vercel.app/sellerorder?email=${user?.email}`)
            const data = await res.json()
            return data

        }
    })
    console.log(sellerorder);
    const handeldelt = (id) => {
        fetch(`https://moblie-sojib076.vercel.app/allphones/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product deleted successfully')
                    refetch()
                }
            })
    }
    const handelpromote = (id) => {
       fetch(`https://moblie-sojib076.vercel.app/promote `,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({id})
       }).then(res=>res.json())
         .then(data=>{
                if(data){
                    toast.success('Product promoted successfully')
                    refetch()
                }
         })
    }

    return (
        <div className='grid grid-cols-2 gap-5'>
            {
                sellerorder?.map((item, index,) => {
                    return <div className="card w-80 bg-neutral text-neutral-content" key={item._id}>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"> Product name {item.name}</h2>
                            <h2 className="">Status {
                                item?.paid ? "Sold" : "Not sold"
                            }</h2>
                            <p> selling price :{item.resalePrice}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={()=>handelpromote(item._id)}>Promote </button>
                                <button className="btn btn-ghost" onClick={()=>handeldelt(item._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Myproducts;