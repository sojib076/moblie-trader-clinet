import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';import { Usercontex } from '../../../AuthContex/AuthContex';
;

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(Usercontex)
    const location = useLocation()
      
    if (loading) {
        return <div className='text-center'> 
            <h1 className='2xl'>Please Wait Loading</h1>        
        </div>
     }
    if (user) {
        return children
    } 
   return <Navigate to="/login" state={{ from: location }} replace />;
        
    
};

export default PrivateRoute;