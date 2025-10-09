import React from 'react';
import Install from './Install';
import { useLoaderData } from 'react-router';

const Installation = () => {
  const data = useLoaderData();
    return (
        <div className='bg-[#f5f5f5]'>
           <div className='text-center pt-10 Md:pt-16'>
             <h2 className='font-bold text-xl md:text-4xl'>Your Installed Apps</h2>
            <p className='text-gray-500 mt-2 md:mt-4 '>Explore All Trending Apps on the Market developed by us</p>
           </div>
           <div className='w-11/12 mx-auto'>
          
          
            <Install data={data}></Install>
           
               
           </div>
        </div>
    );
};

export default Installation;