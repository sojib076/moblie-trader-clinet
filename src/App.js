import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./Components/allRoute/PrivateRoute/PrivateRoute";
import Main from "./Components/Layout/Main";
import Blog from "./Components/Pages/Blog/Blog";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/LoginSignup/Login/Login";
import Signup from "./Components/Pages/LoginSignup/Signup/Signup";
import SingleCategories from "./Components/Pages/SingleCategories/SingleCategories";


function App() {
  const route = createBrowserRouter([
    {
      path: "/", element:<Main />,children:[
        {path:"/",element:<Home />},
        {path:"/blog",element:<Blog />},
        {path:'login',element:<Login />},
        {path:'/signup',element:<Signup />},
        
        {path:'categories/:id',element:<PrivateRoute> <SingleCategories> </SingleCategories></PrivateRoute> ,
        loader:({params}) =>{
          return fetch(`http://localhost:5000/categories/${params.id}`).then(res => res.json())
        }
      },

      ]
    }
  ]);
  
  return (
    <RouterProvider router={route}> 

    </RouterProvider>

  );
}

export default App;
