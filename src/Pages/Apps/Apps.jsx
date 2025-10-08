import React from 'react';
import AppBanner from './AppBanner';
import AllApps from './AllApps';
import { useLoaderData } from 'react-router';

const Apps = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='bg-[#f5f5f5]'>
           <AppBanner></AppBanner>
           <AllApps data={data}></AllApps>
        </div>
    );
};

export default Apps;