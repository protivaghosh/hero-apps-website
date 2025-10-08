import React from 'react';
import { CiSearch } from "react-icons/ci";

const AllApps = () => {
    return (
        <div className='w-11/12 mx-auto mt-16 pb-16'>
            <div className='flex justify-between items-center flex-col md:flex-row'>
                <div><h3 className='md:text-2xl font-bold'>(132) Apps Found</h3></div>
                <div className='flex items-center justify-center text-xl bg-white py-2 px-4'><CiSearch /><input className='px-2' type="search" placeholder='search Apps' name="" id="" /></div>
            </div>
            
        </div>
    );
};

export default AllApps;