import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const SingleCategories = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 w-[95%] mx-auto mt-10' >
            {
                data?.map(info => <Card key={info._id} info={info}> </Card> )
            }
        </div>
    );
};

export default SingleCategories;