import React from 'react';
import toast from 'react-hot-toast';

const Card = ({ info, setModaldata }) => {



    const handelreport=(reportinfo)=>{
   
       const report={
              name:reportinfo.name,
              reportid :reportinfo._id,
              sellerName:reportinfo.sellerName,
       } 

       fetch('https://moblie.vercel.app/report', {
              method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(report)
            }).then(res => res.json())
                .then(data => {
                    if (data) {
                        toast.success('Reported successfully')
                               }
                
       })
    }
    const { picture, time, resalePrice, yearsOfUse, sellerName, originalPrice, name, location, veify, condition, phonenumber, description } = info;
    return (info.paid ? null :
        <div className="card card-compact  w-80 lg:w-96 bg-[#A6CECE] shadow-xl mt-10 lg:mt-0  ">
            <figure><img src={picture} alt="Shoes" className='h-32 w-52' /></figure>
            <div className="card-body  ">
                <h2 className="text-xl">{name}</h2>

                <div className='flex justify-between '>
                    <p className="text-[#000000] text-[18px]"> Orginal Price : <span className='text-black font-semibold underline'>{originalPrice}Tk </span> </p>
                    <p className="text-[#000000] text-[18px] ml-5"> Selling Price : <span className='text-black font-semibold underline'>{resalePrice}Tk </span> </p>
                </div>
                <div className='flex '>
                    <p className="text-[#000000] text-[15px]">{yearsOfUse} year used  </p>
                    <p className="text-[#000000] text-[15px]"> post time : {time} </p>
                </div>
                <div className='flex flex-justify'>
                    <p className="text-[#000000]"> Location : {location} </p>
                    <p className="text-[#000000]"> phone : {phonenumber} </p>
                </div>
                <div className='flex flex-justify'>
                    <p className="text-[#000000]"> info : {description} </p>
                    <p className="text-[#000000]"> condition : {condition} </p>
                </div>

                <p className="text-[#000000] text-[20px]"> {sellerName} {veify && 'sojib'} </p>
                <div className="card-actions justify-end">
                    <label htmlFor="my-modal" className="btn" onClick={() => setModaldata(info)}>Book Now</label>
                    <label htmlFor="my-modal" className="btn" onClick={()=>handelreport(info)}>Report to Admin</label>
                    
                </div>
            </div>
        </div>

    );
};

export default Card;