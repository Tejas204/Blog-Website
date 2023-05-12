import React, { useState } from 'react'
import heroImage from '../Images/knowledge-home.png'
import Footer from './Footer'
import Navbar from './Navbar'

const LandingPage = () => {



  return (
    // Parent div
    <div>
        {/* Navbar */}
        <div className='sticky top-0 z-10 p-4 bg-[#ffffff] backdrop-filter backdrop-blur-lg bg-opacity-10 border-b border-gray-200'>
            <Navbar></Navbar>
        </div>
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