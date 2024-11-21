
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Brands from "../Components/Brands";
import AboutUs from "../Components/AboutUs";
import Profile from "../Components/Profile";
import PrivateRoute from "../Components/PrivateRoute";
import Home from "../Components/Home";
import BrandDetails from "../Components/BrandDetails";
import UpdateProfile from "../Components/UpdateProfile";
import ErrorPage from "../Components/ErrorPage";
import ForgetPassword from "../Components/ForgetPassword";

 export const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            // path:'',
            index:true,
            element:<Home></Home>,
            loader:()=> fetch("./CouponData.json")
            
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
            element: <Brands></Brands>,
            loader:()=> fetch("./CouponData.json")
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
        },
        {
            path: '/brands/:id',
            element:<PrivateRoute>
                <BrandDetails></BrandDetails>
            </PrivateRoute>,
            loader:()=> fetch("./CouponData.json")
        },
        {
            path: '/updateprofile',
            element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
            path:'/forgetpassword',
            element:<ForgetPassword></ForgetPassword>
        }
      ]
    },
  ]);