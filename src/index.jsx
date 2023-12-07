import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Explore from "./pages/Explore";
import Home from "./pages/home";
import Notifications from "./pages/Notifications";
import Message from "./pages/Message";
import Bookmarks from "./pages/Bookmarks";
import List from "./pages/List";
import Profil from "./pages/Profil";
import More from "./pages/More";

const router = createBrowserRouter([
{
  path:'/Home',
  element:<App/>
},

{
  path:'/Explore',
  element:<Explore/>
},
{
  path:'/Notifications',
  element:<Notifications/>
},
{
path:'/Messages',
element:<Message/>
},
{
  path:'/Bookmarks',
  element:<Bookmarks/>
},
{
  path:'/Lists',
  element:<List/>
},
{
  path:'/Profil',
  element:<Profil/>
},
{
  path:'/More',
  element:<More/>
}


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
);
