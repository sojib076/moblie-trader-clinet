import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

import { Usercontex } from '../../AuthContex/AuthContex';

const Errorpage = () => {
    const { logOut } = useContext(Usercontex);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
             })
            .catch(err => console.log(err));
    }

    return (
        <div>
            
            <p className='text-red-600'>{error.statusText || error.message}</p>
            <h4 className="text-3xl"> Please <button onClick={handleLogOut} className='btn btn-error'>Sign out</button> 
        </div>
    );
};

export default Errorpage;