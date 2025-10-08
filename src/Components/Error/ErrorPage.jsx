import React from 'react';
import { Link } from 'react-router';
import errorImg from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <img src={errorImg} alt="errorImage" />
            </div>
           <div className='text-center'>
             <h3 className='font-bold text-4xl'>Oops, page not found!</h3>
            <p className='text-gray-400 mt-4'>The page you are looking for is not available.</p>
            <Link to='/'><button className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-4">Go Back!</button></Link>
           </div>
        </div>
    );
};

export default ErrorPage;