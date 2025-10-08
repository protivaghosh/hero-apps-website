import React from 'react';
import AppBanner from './AppBanner';
import AllApps from './AllApps';

const Apps = () => {
    return (
        <div className='bg-[#f5f5f5]'>
           <AppBanner></AppBanner>
           <AllApps></AllApps>
        </div>
    );
};

export default Apps;