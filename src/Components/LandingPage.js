import React from 'react'
import { navbarItems } from '../data'
import heroImage from '../Images/knowledge.jpg'

const LandingPage = () => {
  return (
    // Parent div
    <div>
        {/* Navbar */}
            <nav className='flex flex-row gap-x-[55%] sticky top-0 mx-auto z-10 p-4 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 border-b border-gray-200'>
                {/* Logo */}
                <a className='text-2xl text-[#24AFC1] font-bold hover:cursor-pointer'>
                    Blogger.io
                </a>

                {/* Navlinks */}
                <ul className='flex flex-row gap-x-12'>
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
            </nav>
        {/* Navbar ends */}



        {/* Hero image */}
        <div className='flex flex-row items-center justify-center'>
            <img src={heroImage} className='h-[534px] w-[686px]'></img>
        </div>

        {/* Hero Section */}
        <div className='flex flex-col items-center justify-center p-4 mt-4'>
            <p className='text-3xl font-bold'>Knowledge is power</p>
            <p className='text-3xl font-bold text-[#FCCF47]'>Knowledge shared is power multiplied</p>

            {/* CTA */}
            <button className='p-3 rounded-xl bg-[#24AFC1] text-white text-xl mt-4 hover:shadow-xl hover:-translate-y-2 duration-300'>
                Get Started
            </button>
        </div>

        
    </div>
  )
}

export default LandingPage