import React from 'react';
import Banner from '../Banner/Banner';
import Trusted from '../../Components/Trusted/Trusted';
import { Link, useLoaderData } from 'react-router';
import { BsDatabaseCheck } from 'react-icons/bs';
import Card from './Card';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='bg-[#f5f5f5]'>
            <Banner></Banner>
            <Trusted></Trusted>

            <div className='p-2 md:p-10 text-center'>
                <h3 className='md:text-4xl font-bold '>Trending Apps</h3>
                <p className='text-gray-500 mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>

             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-4 w-11/12 mx-auto'>
                {
                    data.map((App) =><Card key={App.id} App={App}></Card>)
                }
            </div>
             <div className='text-center p-10'>
                <Link to='/apps'> <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Show All</button></Link>
             </div>
        </div>
    );
};

export default Home;