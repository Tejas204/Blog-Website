import React from 'react';
import VerticalNavbar from './VerticalNavbar'
import mobile from '../Images/blog-website-mobile.png'
import VR from '../Images/VR.jpg';
import Cyber from '../Images/Cyber.jpg';
import Blockchain from '../Images/Blockchain.jpg';

const Blogs = () => {
  return (
    // Grid structure for blogs
    <div className='flex flex-row'>

    {/* Vertical navbar column */}
    <div className='grid grid-cols-1 w-[20%] fixed left-0'>
        <div className='col-span-1'>
            <VerticalNavbar/>
        </div>
    </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] relative left-[20%]'>
        {/******* Card begins ********/}
              <div className='col-span-1 p-4 md:p-7 lg:p-8'>
                <div className='border-2 shadow-lg rounded-md'>
                  {/* Title image of the blog */}
                  <div className='w-full h-full'>
                    <img src={VR} className='rounded-t-md h-40 md:h-44 lg:h-48 object-fill w-full'></img>
                  </div>
                  

                  {/* This div contains the date, title text, view button */}
                  {/* Parent div */}
                  <div className='flex flex-col gap-y-2 md:gap-y-3 p-2'>

                    {/* Date */}
                    <p className=' text-sm md:text-md text-slate-500'>
                      20-Apr-2023
                    </p>

                    {/* Blog title and help text */}
                    <p className='text-sm md:text-md font-bold'>
                      Cybersecurity: The great wall of online protection
                    </p>
                    <p className='text-sm text-slate-500 text-justify'>
                      Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. 
                      These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information.
                    </p>

                    {/* View button */}
                    <div className='flex justify-center'>
                      <button className='p-2 md:p-3 bg-[#fccf47] text-[#1a1a1d] font-semibold w-[25%] rounded-md hover:ring-2 hover:ring-offset-2 hover:ring-[#fccf47] duration-150 ease-in-out'>
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        {/******* Card ends ********/}

        {/******* Card begins ********/}
        <div className='col-span-1 p-4 md:p-7 lg:p-8'>
                <div className='border-2 shadow-lg rounded-md'>
                  {/* Title image of the blog */}
                  <div className='w-full h-full'>
                    <img src={Blockchain} className='rounded-t-md h-40 md:h-44 lg:h-48 object-fill w-full'></img>
                  </div>
                  

                  {/* This div contains the date, title text, view button */}
                  {/* Parent div */}
                  <div className='flex flex-col gap-y-2 md:gap-y-3 p-2'>

                    {/* Date */}
                    <p className=' text-sm md:text-md text-slate-500'>
                      20-Apr-2023
                    </p>

                    {/* Blog title and help text */}
                    <p className='text-sm md:text-md font-bold'>
                      Cybersecurity: The great wall of online protection
                    </p>
                    <p className='text-sm text-slate-500 text-justify h-20'>
                      Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network
                    </p>

                    {/* View button */}
                    <div className='flex justify-center'>
                      <button className='p-2 md:p-3 bg-[#fccf47] text-[#1a1a1d] font-semibold w-[25%] rounded-md hover:ring-2 hover:ring-offset-2 hover:ring-[#fccf47] duration-150 ease-in-out'>
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        {/******* Card ends ********/}

        {/******* Card begins ********/}
        <div className='col-span-1 p-4 md:p-7 lg:p-8'>
                <div className='border-2 shadow-lg rounded-md'>
                  {/* Title image of the blog */}
                  <div className='w-full h-full'>
                    <img src={Cyber} className='rounded-t-md h-40 md:h-44 lg:h-48 object-fill w-full'></img>
                  </div>
                  

                  {/* This div contains the date, title text, view button */}
                  {/* Parent div */}
                  <div className='flex flex-col gap-y-2 md:gap-y-3 p-2'>

                    {/* Date */}
                    <p className=' text-sm md:text-md text-slate-500'>
                      20-Apr-2023
                    </p>

                    {/* Blog title and help text */}
                    <p className='text-sm md:text-md font-bold'>
                      Cybersecurity: The great wall of online protection
                    </p>
                    <p className='text-sm text-slate-500 text-justify'>
                      Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. 
                      These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information.
                    </p>

                    {/* View button */}
                    <div className='flex justify-center'>
                      <button className='p-2 md:p-3 bg-[#fccf47] text-[#1a1a1d] font-semibold w-[25%] rounded-md hover:ring-2 hover:ring-offset-2 hover:ring-[#fccf47] duration-150 ease-in-out'>
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        {/******* Card ends ********/}

              <div className='col-span-1'>
              <div className='p-4 border-2 rounded-lg'>
                  <img src={mobile} className='h-[50%]'></img>
                  <p>this is sample text</p>
                </div>
              </div>

              <div className='col-span-1'>
              <div className='p-4 border-2 rounded-lg'>
                  <img src={mobile} className='h-[50%]'></img>
                  <p>this is sample text</p>
                </div>
              </div>
        </div>
    </div> 
    
  )
}

export default Blogs