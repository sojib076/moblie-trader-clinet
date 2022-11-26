import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { Usercontex } from '../../AuthContex/AuthContex';
import './error.css'

const Errorpage = () => {
    const { logout,user } = useContext(Usercontex);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logout()
            .then(() => {
                navigate('/login');
             })
            .catch(err => console.log(err));
    }

    return (
        <div className='error flex justify-center items-center flex-col'>
            <p className='text-black text-5xl'>{error.statusText || error.message}</p>
            <p className='text-black text-5xl'>Sorry Noting is there </p>
            {

            }
            {
            user?.email? <> 
                <p className='text-xl font-bold'> {user.name} please </p><button onClick={handleLogOut} className='btn btn-warning'>Log Out</button>
            </> : <button onClick={() => navigate('/')} className='btn btn-danger'>Home</button>
           }
        </div>
    );
};

export default Errorpage;