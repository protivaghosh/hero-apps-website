import React from 'react';
import heroImg from '../../assets/hero.png'
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-10 bg-[#f5f5f5]'>
            <div className='text-center'>
            <h3 className="font-bold text-2xl md:text-7xl">We Build <br /><span className='text-[#8956eb]'>Productive</span> Apps</h3>
            <p className='text-gray-400 mt-6'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <Link to="https://play.google.com"><button className='btn mt-6 mr-4'><FaGooglePlay />Google Play</button></Link>
           <Link to="https://www.apple.com/app-store/"><button className='btn mt-6 ml-4'><FaAppStore />App Store</button></Link> 
            </div>
            <div>
                <img className='mt-8' src={heroImg} alt="heroImage" />
            </div>
            
        </div>
    );
};

export default Banner;