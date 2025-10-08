import React from 'react';
import logoImg from "../../assets/logo.png"

import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
           <footer className="bg-[#121E36] text-white pt-8 ">
            <div className="container mx-auto px-4 md:px-16 border-b border-gray-700 pb-6">
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    
                   
                    <div className="mb-6 md:mb-0">
                      
                        <div className="flex items-center space-x-2 mb-2">
                           
                           <img className='w-12 h-12' src={logoImg} alt="logoImage" />
                            <span className="text-xl font-bold uppercase">HERO.IO</span>
                        </div>
                        
                        
                        <p className="text-gray-400 max-w-sm text-sm mt-3">
                            A platform built for the future. Deploy your next project instantly with our seamless integration and blazing-fast network.
                        </p>
                    </div>

                    
                    <div className="text-right">
                        <p className="text-sm font-semibold mb-3">Social Links</p>
                      <div className="flex space-x-4">
                            <a href="https://www.facebook.com/" className="text-gray-400">
                                <FaFacebookF className="w-5 h-5" />
                            </a>

                           <a href="https://www.linkedin.com/" className="text-gray-400">
                                <FaLinkedinIn className="w-5 h-5" />
                            </a>

                             <a href="https://x.com/?lang=en" className="text-gray-400">
                                <FaTwitter className="w-5 h-5" />
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-16 py-4 text-center text-gray-500 text-sm">
                <p>Copyright © 2025 - All right reserved</p>
            </div>
            
        </footer>
            
        </div>
    );
};

export default Footer;