import React from 'react';
import { createBrowserRouter } from "react-router"; 
import Root from '../Components/Root/Root';
import ErrorPage from '../Components/Error/ErrorPage';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import AppDetails from '../Components/AppDetails/AppDetails';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            path: "/",
             loader: async ()=> {
            const res = await fetch("/apps.json");
            const data = await res.json();
            return data;
        },
           element:<Home></Home>,
           
        },
        {
          path:"/apps",
          loader: async ()=> {
            const res = await fetch("/AllApps.json");
            const data = await res.json();
            return data;
        },
          element: <Apps></Apps>,
        },
        {
         path:"/installation",
         element:<Installation></Installation>,
          loader: async ()=> {
            const res = await fetch("/AllApps.json");
            const data = await res.json();
            return data;
        },
        },
         {
            path:"/AppDetails/:id",
            element:<AppDetails></AppDetails>,
            loader: async ()=> {
            const res = await fetch("/AllApps.json");
            const data = await res.json();
            return data;
        },
        }
       
    ]
  },

]);

export default Router;