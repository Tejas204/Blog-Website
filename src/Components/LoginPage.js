import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const LoginPage = () => {


 //when submit button is clicked, navigate to blogs page using useNavigate
 const navigate = useNavigate();
 const navigateToBlogs = () => {
    navigate('/blogs');
 }   

  return (
    <div className='bg-[#1a1a1d] relative overflow-hidden'>

        {/* blobs */}
        <div className='absolute top-8 left-4 md:left-12 lg:left-32 rounded-full filter mix-blend-normal bg-gradient-to-tr from-[#1a1a1d] to-[#d4d4d5] h-24 w-24 opacity-20 shadow-2xl shadow-black'></div>
        <div className='absolute -bottom-8 -left-5 md:-bottom-20 md:-left-10 lg:-bottom-32 lg:-left-12 rounded-full filter mix-blend-normal bg-gradient-to-tr from-[#1a1a1d] to-[#d4d4d5] h-48 w-48 md:h-52 md:w-52 lg:h-80 lg:w-80 opacity-20 shadow-2xl shadow-black'></div>
        <div className='absolute top-1/2 right-2 rounded-full filter mix-blend-normal bg-gradient-to-tr from-[#1a1a1d] to-[#ffffff] h-32 w-32 opacity-20 shadow-2xl shadow-black'></div>


        {/* Parent div */}
        <div className='flex flex-col justify-center items-center h-screen relative z-10'>

            {/* Login and Information div */}
            <div className='grid grid-cols-1 md:grid-cols-2 h-3/4 md:h-5/6 w-[80%] p-2'>

                {/* Login div */}
                <div className='flex flex-col items-center justify-center space-y-4 md:space-y-10 bg-[#ffffff] backdrop-filter backdrop-blur-lg bg-opacity-5'>

                    {/* Logo div -- visible on all devices */}
                    {/* Routes back to landing page */}
                    <div className='bg-[#FCCF47] md:top-0 rounded-lg p-2 hover:shadow-md hover:shadow-[#FCCF47] ease-in-out duration-300'>
                        <NavLink to='/' className='text-[#1A1A1D] font-semibold text-3xl mt-[10%]'>B.io</NavLink>
                    </div>
                    
                    {/* Sing in text */}
                    <p className='text-xl font-semibold text-[#f8f8f8]'>Sign in</p>

                    {/* Sign in form */}
                    <form className='flex flex-col items-center space-y-10 md:space-y-5'>
                            <input type='text' placeholder='Enter your email...' className='h-[100%] w-[125%] md:w-[135%] lg:w-[150%] bg-transparent ring-2 ring-[#FCCF47] rounded-lg p-2 text-[#f8f8f8]'></input>
                            <input type='password' placeholder='Enter your password...' className='h-[100%] w-[125%] md:w-[135%] lg:w-[150%] bg-transparent ring-2 ring-[#FCCF47] rounded-lg p-2 text-[#f8f8f8]'></input>
                            <button type='submit' className=' w-[125%] md:w-[135%] lg:w-[150%] p-2 sm:p-2 md:p-3 md:text-md sm:text-lg md:text-xl rounded-xl bg-[#FCCF47] text-[#1a1a1d] mt-4 hover:shadow-xl hover:scale-105 duration-300'
                            onClick={navigateToBlogs}>
                                Submit
                            </button>

                            {/* Routes to registration page when clicked */}
                            <NavLink to='/registration' className='text-[#fccf47]'>Register?</NavLink>

                            {/* Forgot password link */}
                            <NavLink to='/forgot-password' className='text-[#fccf47]'>Forgot password?</NavLink>
                    </form>
                </div>

            {/* Information div -- not visible on small devices*/}
            <div className='hidden md:flex md:flex-col md:bg-[#FCCF47] md:p-4 md:justify-center backdrop-filter backdrop-blur-lg md:bg-opacity-90 space-y-4'>
                <p className='text-[#1A1A1D] text-3xl font-semibold'>Start off where you left!</p>
                <p className='text-[#1A1A1D]'>Discover amazing blogs on technology, food, movies and much more!</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default LoginPage