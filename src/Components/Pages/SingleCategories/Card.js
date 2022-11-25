import React from 'react';

const Card = ({ info ,setModaldata} ) => {
 
    const { picture, time, resalePrice, yearsOfUse, sellerName, originalPrice, name, location, veify,avaiable,phonenumber} = info;
    return (info.paid ? null :
    <div className="card card-compact w-96 bg-[#A6CECE] shadow-xl mt-10 lg:mt-0 ">
        <figure><img src={picture} alt="Shoes" className='h-24 w-24' /></figure>
        <div className="card-body ">
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

            <p className="text-[#000000] text-[20px]"> {sellerName} {veify && 'sojib'} </p>
            <div className="card-actions justify-end">
            <label htmlFor="my-modal" className="btn" onClick={()=> setModaldata(info)}>open modal</label>
            </div>
        </div>
    </div> 
        
    );
};

export default Card;