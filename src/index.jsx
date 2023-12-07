import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Explore from "./pages/Explore";
import Home from "./pages/home";

const router = createBrowserRouter([
{
  path:'/',
  element:<App/>
},
{
  path:'/Home',
  element:<Home/>
},
{
  path:'/Explore',
  element:<Explore/>
}

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
);
