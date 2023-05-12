import React, { useState } from 'react'
import { navbarItems } from '../data'
import heroImage from '../Images/knowledge-home.png'
import {RxHamburgerMenu} from 'react-icons/rx'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const LandingPage = () => {

// This hook will make the dropdown navigation menu visible on the small devices
const [dropDownVisibility, setDropDownVisibility] = useState(false);
console.log(dropDownVisibility);

  return (
    // Parent div
    <div>
        {/* Navbar */}
            <nav className='flex flex-col gap-y-2 md:flex-row md:gap-x-[25%] lg:gap-x-[45%] xl:gap-x-[55%] sticky top-0 z-10 p-4 bg-[#ffffff] backdrop-filter backdrop-blur-lg bg-opacity-10 border-b border-gray-200'>
                {/* Logo */}
                <div className='flex flex-row items-center space-x-1 hover:cursor-pointer'>
                    <div className='bg-[#FCCF47] rounded-lg p-1'>
                        <p className='text-[#1A1A1D] font-semibold text-2xl'>B.io</p>
                    </div>
                    <div className='text-2xl text-[#1a1a1d] font-bold '>
                        Blogger.io
                    </div>
                </div>

                {/* Navlinks */}
                <ul className={`flex flex-col gap-y-4 md:flex-row md:gap-x-12 md:static md:h-auto relative ${dropDownVisibility ? 'top-0' : 'top-[-500px] h-0.5'} ease-in-out`}>
                    {navbarItems.map((navItem, index)=>{
                        return(
                        // li to be replaced by navlink
                        <NavLink className='font-semibold text-lg text-[#1A1A1D] hover:cursor-pointer hover:border-b-2 hover:border-[#FCCF47] duration-100
                            hover:border-t-2' key={index} to={navItem.goTo}>
                            {navItem.name}
                        </NavLink>
                        )
                        
                    })}
                </ul>

                <div className='absolute right-4 top-6 md:hidden '>
                    <RxHamburgerMenu className='hover:cursor-pointer' onClick={() => setDropDownVisibility(!dropDownVisibility)}/>
                </div>
            </nav>
        {/* Navbar ends */}


        {/* Hero image and section */}
        <div className='flex flex-col md:flex-row items-center justify-center'>
            

            {/* Hero Section */}
            <div className='flex flex-col items-center justify-center p-4 mt-4'>
                <p className='text-xl sm:text-2xl md:text-6xl font-normal'>Knowledge is power</p>
                <p className='text-xl sm:text-2xl md:text-3xl font-semibold text-[#FCCF47] mt-4'>Knowledge shared is power multiplied</p>

                {/* CTA */}
                <button className=' p-1 sm:p-2 md:p-3 md:text-md sm:text-lg md:text-xl rounded-xl bg-[#fccf47] text-[#1a1a1d]] mt-4 hover:shadow-xl hover:scale-105 duration-300'>
                    Get Started
                </button>
            </div>

            {/* Hero image */}
            <img src={heroImage} className='h-[534px] w-[686px]'></img>
        </div>

        {/* Footer */}
        <Footer/>

        

        
    </div>
  )
}

export default LandingPage