import { createBrowserRouter } from "react-router-dom";
import Main from "../../firebase/layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Catagory from "../../Pages/Catagory/Catagory/Catagory";
import News from "../../Pages/News/News/News";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Login/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermesAndConditions from "../../Pages/Outhers/TermsAndCondition/TermesAndConditions";
import Profile from "../../Pages/Outhers/Profile/Profile";

export const routes =createBrowserRouter([


{
    path: '/',
    element:<Main></Main>,
children:[
    {
        path:'/',
        element: <Home></Home>,
        loader:() => fetch ('http://localhost:5000/news')


    },
    {
        path:'/catagory/:id',
        element: <Catagory></Catagory>,
        loader:({params}) => fetch (`http://localhost:5000/category/${params.id}`)
    },
    {
        path:'/news/:id',
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader:({params}) => fetch (`http://localhost:5000/news/${params.id}`)


    },

    {
        path: '/login',
        element:<Login></Login>
    },


    {
        path: '/register',
        element:<Register></Register>
    },

    {
        path: '/terms',
        element:<TermesAndConditions></TermesAndConditions>
    },

    {
        path: '/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
    },

]
}







])