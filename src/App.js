import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./Components/allRoute/PrivateRoute/PrivateRoute";
import DashboardLayout from "./Components/Layout/DashboardLayout/DashboardLayout";
import Main from "./Components/Layout/Main";
import Blog from "./Components/Pages/Blog/Blog";
import Addproduct from "./Components/Pages/Dasboard/Addproduct/Addproduct";
import Myorders from "./Components/Pages/Dasboard/Myorders/Myorders";
import Myproducts from "./Components/Pages/Dasboard/Myproducts/Myproducts";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/LoginSignup/Login/Login";
import Signup from "./Components/Pages/LoginSignup/Signup/Signup";
import SingleCategories from "./Components/Pages/SingleCategories/SingleCategories";
import { Toaster } from 'react-hot-toast';
import UserDashboard from "./Components/Pages/Dasboard/UserDashboard/UserDashboard";
import Payment from "./Components/Pages/Dasboard/Payment/Payment";
import SellerRoute from "./Components/allRoute/PrivateRoute/SellerRoute";
import BuyerRoute from "./Components/allRoute/PrivateRoute/BuyerRoute";
import Errorpage from "./Components/SharedPage/Errorpage";
import Adminroute from "./Components/allRoute/PrivateRoute/Adminroute";
import Allbuyer from "./Components/Pages/Dasboard/Allbuyer/Allbuyer";
import Allseller from "./Allseller";


function App() {
  const route = createBrowserRouter([
    {
      path: "/", element: <Main />,
      errorElement:<Errorpage></Errorpage>, children: [
        { path: "/", element: <Home /> },
        { path: "/blog", element: <Blog /> },
        { path: 'login', element: <Login /> },
        { path: '/signup', element: <Signup /> },

        {
          path: 'categories/:id', element: <PrivateRoute> <SingleCategories> </SingleCategories></PrivateRoute>,
          loader: ({ params }) => {
            return fetch(`http://localhost:5000/categories/${params.id}`).then(res => res.json())
          }
        },

      ]
    },

    {
      path: '/dashboard', element: <PrivateRoute> <DashboardLayout> </DashboardLayout></PrivateRoute>,
      errorElement:<Errorpage></Errorpage>,
      children: [
        { path: '/dashboard/myorders', element:<BuyerRoute> <Myorders> </Myorders></BuyerRoute> },
        { path: '/dashboard', element: <UserDashboard></UserDashboard>},
        { path: '/dashboard/myproducts', element: <SellerRoute> <Myproducts></Myproducts></SellerRoute>   },
        { path: '/dashboard/addproduct', element: <SellerRoute><Addproduct></Addproduct> </SellerRoute>},
        { path: '/dashboard/allbuyer', element: <Adminroute><Allbuyer></Allbuyer> </Adminroute>},
        { path: '/dashboard/allseller', element: <Adminroute><Allseller> </Allseller> </Adminroute>},
   

        { path: '/dashboard/admin', element: <SellerRoute><Addproduct></Addproduct> </SellerRoute>},
        {path:'/dashboard/payment/:id', element:<Payment></Payment>,
        loader:({params}) => fetch(`http://localhost:5000/payment/${params.id}`)
      }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={route}>

      </RouterProvider>
      <Toaster />
    </div>

  );
}

export default App;
