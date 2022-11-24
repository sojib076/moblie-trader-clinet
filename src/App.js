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


function App() {
  const route = createBrowserRouter([
    {
      path: "/", element: <Main />, children: [
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
      children: [
        { path: '/dashboard/myorders', element: <Myorders> </Myorders> },
        { path: '/dashboard/myproducts', element: <Myproducts></Myproducts> },
        { path: '/dashboard/addproduct', element: <Addproduct></Addproduct> },
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
