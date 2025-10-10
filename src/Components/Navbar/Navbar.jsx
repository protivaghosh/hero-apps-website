import React from 'react';
import logoImg from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
const Navbar = () => {
  const links=<>
 <NavLink to='/'className={({ isActive }) => 
            isActive 
            ? 'text-[#8956eb] border-b-2 border-[#8956eb] transition-all duration-200' 
            : 'text-gray-600'
        }><li><a>Home</a></li></NavLink> 
 <NavLink to='/apps' className={({ isActive }) => 
            isActive 
            ? 'text-[#8956eb] border-b-2 border-[#8956eb] transition-all duration-200' 
            : 'text-gray-600'
        }><li><a>Apps</a></li></NavLink> 
 <NavLink to='/installation' className={({ isActive }) => 
            isActive 
            ? 'text-[#8956eb] border-b-2 border-[#8956eb] transition-all duration-200' 
            : 'text-gray-600'
        }><li><a>Installation</a></li></NavLink>
  </>
    return (
        <div>
            <div className="navbar bg-[#FFFFFF] shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
   <Link to='/'><a className="btn btn-ghost md:text-xl text-[#8956eb]">
      <img className='w-5 h-5 md:w-10 md:h-10' src={logoImg} alt="" />
      HERO.IO</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
  <Link to='https://github.com/protivaghosh'>
  <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><FaGithub />Contribute</a> 
  </Link>  
  </div>
</div>
        </div>
    );
};

export default Navbar;
