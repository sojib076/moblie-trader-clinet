import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import Modal from './Modal';

const SingleCategories = () => {
    const data = useLoaderData();
    const [modaldata, setModaldata] =useState(null)
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 w-[95%] mx-auto mt-10 gap-5 p-5' >
            {
                data?.map(info => <Card key={info._id} info={info} setModaldata={setModaldata}> </Card> )
                
            }
            {
                modaldata && <Modal modaldata={modaldata} setModaldata={setModaldata}></Modal>
            }
        </div>
    );
};

export default SingleCategories;