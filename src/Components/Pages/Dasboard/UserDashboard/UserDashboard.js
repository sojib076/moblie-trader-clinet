
import React, { useContext } from 'react';
import { Usercontex } from '../../../../AuthContex/AuthContex';

const UserDashboard = () => {
    const {user}= useContext(Usercontex)
    return (
        <div className=' text-5xl'>
             {user.displayName} Welcome to Dasboard
        </div>
    );
};

export default UserDashboard;