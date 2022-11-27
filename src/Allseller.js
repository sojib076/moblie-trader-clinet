
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Allseller = () => {
        const[refect,setresfect]=useState(false)
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('https://moblie.vercel.app/seller')
            .then(res => res.json())
            .then(data => setdata(data))
    }, [refect])

    const handeldelt = (id) => {
        fetch(`https://moblie.vercel.app/userdlt/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                setresfect(!refect)
                toast.success('user deleted successfully')
            })
            
  }
const handelverify = (email) => {
    fetch(`https://moblie.vercel.app/verify`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email})
    })
        .then(res => res.json())
        .then(data => {
            setresfect(!refect)
            toast.success('user verified successfully')
        })
}
    return (
        <div className='grid lg:grid-cols-3 gap-4'>
            {
                data.map(buyer => {
                    return <div className="card card-compact w-80 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{buyer.name}</h2>
                            <h2 className='text-green-700'>{buyer.email}</h2>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={()=>handeldelt(buyer._id)}> Delete </button>
                                <button className="btn btn-primary" onClick={()=>handelverify(buyer.email)} >Verify </button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Allseller;