import React from 'react';
import VerticalNavbar from './VerticalNavbar'
import mobile from '../Images/blog-website-mobile.png'
import VR from '../Images/VR.jpg';
import Cyber from '../Images/Cyber.jpg';
import Blockchain from '../Images/Blockchain.jpg';
import { blogsCards } from '../data';

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

        {/* Create button, category dropdown, sorting dropdown */}
        {/* Options div */}
        <div className='flex flex-row absolute top-0 left-[20%] p-3 w-[80%] justify-between'>
              {/* 1. Category dropdown */}
              <select className='p-2 bg-[#1a1a1d] text-[#ffffff] font-normal rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-[#1a1a1d] ease-in-out duration-200 shadow-md' name='category'>
                <option value='all_categories'>All Categories</option>
                <option value='technology'>Technology</option>
                <option value='food'>Food</option>
                <option value='tourism'>Tourism</option>
              </select>

              

                {/* Sorting dropdown button */}
                <select className='p-2 bg-[#1a1a1d] text-[#ffffff] font-normal rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-[#1a1a1d] ease-in-out duration-200 shadow-md'>
                  <option value='sort_a_z'>Sort by A-Z</option>
                  <option value='sort_z_a'>Sort by Z-A</option>
                  <option value='sort_date_latest'>Sort by Date (latest)</option>
                  <option value='sort_date_oldest'>Sort by Date (old)</option>
                  <option value='sort_least_read_time'>Least reading time</option>
                  <option value='sort_most_read_time'>Most reading time</option>
                </select>
          </div>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] relative left-[20%] mt-10'>
        {/* Blog Cards */}
        {blogsCards.map((blogCard, index) => {
          return(
            // ************** Card Begins **************** //
            <div className='col-span-1 p-4 md:p-7 lg:p-8' key={index}>
                <div className='border-2 shadow-lg rounded-md'>
                  {/* Title image of the blog */}
                  <div className='w-full h-full'>
                    <img src={blogCard.blogTitleImage} className='rounded-t-md h-40 md:h-44 lg:h-48 object-fill w-full'></img>
                  </div>
                  

                  {/* This div contains the date, title text, view button */}
                  {/* Parent div */}
                  <div className='flex flex-col gap-y-2 md:gap-y-3 p-2'>

                    {/* Date */}
                    <p className=' text-sm text-slate-500'>
                      {blogCard.dateOfPublishing}
                    </p>

                    {/* Blog title and help text */}
                    <p className='text-sm md:text-md font-bold h-9'>
                      {blogCard.blogTitle}
                    </p>
                    <p className='text-sm text-slate-500 text-justify h-22 md:h-28 lg:h-20'>
                      {blogCard.blogDescription}
                    </p>

                    {/* View button */}
                    <div className='flex justify-center pt-2'>
                      <button className='p-2 md:p-3 bg-[#fccf47] text-[#1a1a1d] font-semibold w-[25%] rounded-md hover:ring-2 hover:ring-offset-2 hover:ring-[#fccf47] duration-150 ease-in-out'>
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              // ************** Card Ends **************** //
          )
        })}
        
        </div>
    </div>

    
  )
}

export default Blogs