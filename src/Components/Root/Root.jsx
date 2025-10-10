import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';

// Loader Component
const Loader = () => (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white/70 z-50">
    {/* DaisyUI Spinner */}
    <div className="w-16 h-16">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  </div>
);

const Root = () => {
  const navigation = useNavigation();
   const isLoading = navigation.state === "loading";


  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar></Navbar>
      
      {/* Show loader when navigating */}
     {isLoading && <Loader />}
      
      <div className='flex-1'><Outlet></Outlet></div>
      
      <Footer></Footer>
    </div>
  );
};

export default Root;
