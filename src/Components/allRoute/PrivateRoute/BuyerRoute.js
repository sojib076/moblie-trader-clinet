import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Usercontex } from '../../../AuthContex/AuthContex';

const BuyerRoute = ({children}) => {
        const { user, loading } = useContext(Usercontex);
          const {data ,isLoading}=useQuery({
            queryKey: ['user', user?.email],
            queryFn: async () => {
                const res = await fetch(`http://localhost:5000/allusers?email=${user?.email}`)
                const data = await res.json()
                return data
            },
           
          }) 
        
        const location = useLocation();
        if (loading ||isLoading ) {
            return <h1>Loadin</h1>
        }

        if (user && data?.role === 'Buyer') {
            return children;
        }

        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    
};

export default BuyerRoute;