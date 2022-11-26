import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const Allbuyer = () => {

    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/buyer')
            .then(res => res.json())
            .then(data => setdata(data))
    }, [])
    console.log(data);
    return (
        <div>
            {
                data.map(buyer => {
                    return <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{buyer.name}</h2>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary"> Delete </button>
                              
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Allbuyer;