import React from 'react';

const Trusted = () => {
    return (
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-16'>
            <h3 className='font-bold text-xl md:text-5xl text-center'>Trusted by Million Built for You</h3>
            <div className='flex items-center flex-col md:flex-row justify-around mt-10 gap-4'>
                <div className='text-white text-center'>
                    <p className='mb-2'>Total Downloads</p>
                    <span className='text-6xl font-bold 
                    '>29.6M</span>
                    <p className='mt-2'>21% more than last month</p>
                </div>
                <div className='text-white text-center'>
                    <p  className='mb-2'>Total Reviews</p>
                    <span className='text-6xl font-bold'>906K</span>
                    <p className='mt-2'>46% more than last month</p>
                </div>
                <div className='text-white text-center'>
                    <p  className='mb-2'>Active Apps</p>
                    <span className='text-6xl font-bold'>132+</span>
                    <p className='mt-2'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Trusted;