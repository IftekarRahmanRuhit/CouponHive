
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Brands from "../Components/Brands";
import AboutUs from "../Components/AboutUs";
import Profile from "../Components/Profile";
import PrivateRoute from "../Components/PrivateRoute";
import Home from "../Components/Home";

 export const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path:'/',
            element:<Home></Home> 
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/brands',
            element: <Brands></Brands>
        },
        {
            path: '/about',
            element:<AboutUs></AboutUs>
        },
        {
            path: '/profile',
            element:<PrivateRoute>
                <Profile></Profile>
            </PrivateRoute>
        }
      ]
    },
  ]);