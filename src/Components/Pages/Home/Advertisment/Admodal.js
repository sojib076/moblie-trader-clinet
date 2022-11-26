import React, { useContext } from 'react';
import { Usercontex } from '../../../../AuthContex/AuthContex';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Admodal = ({ modaldata, setModaldata }) => {
    const { user } = useContext(Usercontex)
    const { name, resalePrice, _id, picture, selleremail } = modaldata
    console.log(modaldata);
    const handelmodal = (e) => {
        e.preventDefault();
        const number = e.target.number.value
        const location = e.target.location.value
        const order = {
            orderid: _id,
            email: user?.email,
            resalePrice,
            picture,
            name,
            number,
            location,
            selleremail,
        }
        fetch('https://moblie.vercel.app/allorders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        }).then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Order placed successfully')
                    setModaldata(null)
                }
            })




    }
    return (
        <div>

            <input type="checkbox" id="sojib" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h1 className='text-xl text-black'> Product name : {name}</h1>
                    <h1 className='text-xl '> Selling: {resalePrice} Tk</h1>
                    <form onSubmit={handelmodal} className='grid grid-cols-1 gap-3 mt-10'>
                        {
                            user?.email ? <>
                                <input type="text" defaultValue={user?.displayName} disabled className="input w-full input-bordered" />
                                <input type="email" defaultValue={user?.email} disabled className="input w-full input-bordered" />
                                <input type="text" placeholder=" Your Moblie Number" className="input w-full input-bordered" name="number" required />
                                <input type="text" placeholder=" Your Location" className="input w-full input-bordered" name="location" required />
                                <br />
                                <input className='btn btn-accent w-full' type="submit" value="Submit" />
                                <input className='btn btn-info w-full'  value="Cancel" onClick={()=>setModaldata(null)} />
                            </> : <p> Plase Login to Book <Link to={'/login'} className='btn btn-primary'> Login</Link></p>
                            }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admodal;