import React from 'react';
import { createBrowserRouter } from "react-router"; 
import Root from '../Components/Root/Root';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);

export default Router;