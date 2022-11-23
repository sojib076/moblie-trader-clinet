import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Layout/Main";
import Blog from "./Components/Pages/Blog/Blog";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/LoginSignup/Login/Login";
import Signup from "./Components/Pages/LoginSignup/Signup/Signup";


function App() {
  const route = createBrowserRouter([
    {
      path: "/", element:<Main />,children:[
        {path:"/",element:<Home />},
        {path:"/blog",element:<Blog />},
        {path:'login',element:<Login />},
        {path:'/signup',element:<Signup />}
      ]
    }
  ]);
  
  return (
    <RouterProvider router={route}> 

    </RouterProvider>

  );
}

export default App;
