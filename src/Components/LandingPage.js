import React, { useState } from 'react'
import { navbarItems } from '../data'
import heroImage from '../Images/knowledge-home.png'
import {RxHamburgerMenu} from 'react-icons/rx'

const LandingPage = () => {

// This hook will make the dropdown navigation menu visible on the small devices
const [dropDownVisibility, setDropDownVisibility] = useState(false);
console.log(dropDownVisibility);

  return (
    // Parent div
    <div>
        {/* Navbar */}
            <nav className='flex flex-col gap-y-2 md:flex-row md:gap-x-[25%] lg:gap-x-[45%] xl:gap-x-[55%] sticky top-0 z-10 p-4 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 border-b border-gray-200'>
                {/* Logo */}
                <div className='text-2xl text-[#24AFC1] font-bold hover:cursor-pointer'>
                    Blogger.io
                </div>

                {/* Navlinks */}
                <ul className={`flex flex-col gap-y-4 md:flex-row md:gap-x-12 md:static md:h-auto relative ${dropDownVisibility ? 'top-0' : 'top-[-500px] h-0.5'}`}>
                    {navbarItems.map((navItem, index)=>{
                        return(
                        // li to be replaced by navlink
                        <li className='font-semibold text-lg text-[#1A1A1D] hover:cursor-pointer hover:border-b-2 hover:border-[#FCCF47] duration-100
                            hover:border-t-2 hover:border-[#FCCF47] duration-100' key={index}>
                            {navItem.name}
                        </li>
                        )
                        
                    })}
                </ul>

                <div className='absolute right-4 top-6 md:hidden '>
                    <RxHamburgerMenu className='hover:cursor-pointer' onClick={() => setDropDownVisibility(!dropDownVisibility)}/>
                </div>
            </nav>
        {/* Navbar ends */}


        {/* h-[534px] w-[686px] */}

        {/* Hero image and section */}
        <div className='flex flex-col md:flex-row items-center justify-center'>
            

            {/* Hero Section */}
            <div className='flex flex-col items-center justify-center p-4 mt-4'>
                <p className='text-xl sm:text-2xl md:text-6xl font-normal'>Knowledge is power</p>
                <p className='text-xl sm:text-2xl md:text-3xl font-semibold text-[#FCCF47] mt-4'>Knowledge shared is power multiplied</p>

                {/* CTA */}
                <button className=' p-1 sm:p-2 md:p-3 md:text-md sm:text-lg md:text-xl rounded-xl bg-[#24AFC1] text-white mt-4 hover:shadow-xl hover:-translate-y-2 duration-300'>
                    Get Started
                </button>
            </div>

            {/* Hero image */}
            <img src={heroImage} className='h-[534px] w-[686px]'></img>
        </div>

        

        
    </div>
  )
}

export default LandingPage