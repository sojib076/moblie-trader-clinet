import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { Usercontex } from '../../AuthContex/AuthContex';
import './error.css'

const Errorpage = () => {
    const { logout } = useContext(Usercontex);
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
            <h4 className="text-5xl "> Please <button onClick={handleLogOut} className='btn btn-error'>Sign out</button> </h4>
        </div>
    );
};

export default Errorpage;