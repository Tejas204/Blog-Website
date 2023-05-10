import React from 'react'

const LoginPage = () => {
  return (
    <div className='bg-[#1a1a1d] relative overflow-hidden'>

        {/* blobs */}
        <div className='absolute -top-24 left-14 rounded-full filter mix-blend-normal blur-2xl bg-gradient-to-b from-[#fff01f] to-[#ffcf47] h-80 w-80 opacity-20'></div>
        
        <div className='absolute -bottom-36 -left-20 rounded-full filter mix-blend-normal blur-2xl bg-gradient-to-t from-[#fdaf05] to-[#ffcf47] h-1/2 w-1/4 opacity-20'></div>
        <div className='absolute -bottom-36 -left-20 rounded-full filter mix-blend-normal blur-2xl bg-gradient-to-t from-[#fff01f] to-[#ffcf47] h-1/2 w-1/4 opacity-20'></div>

        <div className='absolute top-1/4 -right-60 rounded-full filter mix-blend-normal blur-2xl bg-gradient-to-l from-[#fff01f] to-[#ffcf47] h-1/2 w-1/2 opacity-20'></div>
        <div className='absolute top-1/4 -right-60 rounded-full filter mix-blend-normal blur-2xl bg-gradient-to-l from-[#fff01f] to-[#ffcf47] h-1/2 w-1/2 opacity-20'></div>


        {/* Parent div */}
        <div className='flex flex-col justify-center items-center h-screen relative'>

            {/* Login and Information div */}
            <div className='grid grid-cols-1 md:grid-cols-2 h-3/4 md:h-5/6 w-[80%] p-2'>

                {/* Login div */}
                <div className='flex flex-col items-center justify-center space-y-10 bg-[#ffffff] backdrop-filter backdrop-blur-lg bg-opacity-10'>

                    {/* Logo div -- visible only on small devices */}
                    <div className='bg-[#FCCF47] rounded-lg p-2 hover:shadow-md hover:shadow-[#FCCF47] ease-in-out duration-200'>
                        <p className='text-[#1A1A1D] font-semibold text-3xl mt-[10%]'>B.io</p>
                    </div>
                    
                    {/* Sing in text */}
                    <p className='text-xl font-semibold text-[#f8f8f8]'>Sign in</p>

                    {/* Sign in form */}
                    <form className='flex flex-col items-center space-y-10 md:space-y-5'>
                            <input type='text' placeholder='Enter your email...' className='h-[100%] w-[100%] md:w-[150%] bg-transparent ring-2 ring-[#FCCF47] rounded-lg p-2 text-[#f8f8f8]'></input>
                            <input type='password' placeholder='Enter your password...' className='h-[100%] md:w-[150%] bg-transparent ring-2 ring-[#FCCF47] rounded-lg p-2 text-[#f8f8f8]'></input>
                            <button type='submit' className=' w-[100%] md:w-[150%] p-1 sm:p-2 md:p-3 md:text-md sm:text-lg md:text-xl rounded-xl bg-[#FCCF47] text-[#1a1a1d] mt-4 hover:shadow-xl hover:-translate-y-2 duration-300'>Submit</button>
                            <p className='text-[#fccf47]'>Register?</p>
                    </form>
                </div>

            {/* Information div -- not visible on small devices*/}
            <div className='hidden md:flex md:flex-col md:bg-[#FCCF47] md:p-4 md:justify-center backdrop-filter backdrop-blur-lg md:bg-opacity-90'>
                <p className='text-[#1A1A1D] text-3xl font-semibold'>Start off where you left!</p>
                <p className='text-[#1A1A1D]'>Discover amazing blogs on technology, food, movies and much more!</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default LoginPage