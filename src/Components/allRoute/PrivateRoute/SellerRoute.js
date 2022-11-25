import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Usercontex } from '../../../AuthContex/AuthContex';
import Loading from '../../Loading/Loading';

const SellerRoute = ({children}) => {
        const {user, loading } = useContext(Usercontex);
          const {data ,isLoading}=useQuery({
            queryKey: ['user', user?.email],
            queryFn: async () => {
                const res = await fetch(`http://localhost:5000/allusers?email=${user?.email}`)
                const data = await res.json()
                return data
            }
          }) 
        
        const location = useLocation();
        if (loading ||isLoading ) {
            return <Loading></Loading>
        }
        if (user && data?.role === 'Seller') {
            return children;
        }
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;