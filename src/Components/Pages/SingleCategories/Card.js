import React from 'react';

const Card = ({ info }) => {
    const { picture, time, resalePrice, yearsOfUse, sellerName, originalPrice, name, location, veify } = info;
    return (
        <div className="card card-compact w-96 bg-[#A6CECE] shadow-xl mt-10 lg:mt-0 ">
            <figure><img src={picture} alt="Shoes" className='h-24 w-24' /></figure>
            <div className="card-body ">
                <h2 className="text-xl">{name}</h2>

                <div className='flex justify-between '>
                    <p className="text-[#000000] text-[15px]"> Orginal Price : <span className='text-black font-semibold underline'>{originalPrice}Tk </span> </p>
                    <p className="text-[#000000] text-[15px] ml-5"> Selling Price : <span className='text-black font-semibold underline'>{resalePrice}Tk </span> </p>
                </div>
                <div className='flex '>
                    <p className="text-[#000000] text-[15px]"> year of use : {yearsOfUse} </p>
                    <p className="text-[#000000] text-[15px]"> post time  : {time} </p>
                </div>

                <p className="text-[#000000]"> Location : {location} </p>

                <p className="text-[#000000] text-[20px]"> {sellerName} {veify && 'sojib'} </p>
                <div className="card-actions justify-end">

                    <button className="btn btn-primary btn-sm">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;