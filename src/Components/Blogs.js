import React, { useState, useEffect } from 'react';
import VerticalNavbar from './VerticalNavbar'
import { blogsCards, blogCategoryOptions, sortingOptions } from '../data';

const Blogs = () => {

// Hook: sets the category of the blogs to display
const [blogCategory, setBlogCategory] = useState('all_categories');

// Hook: sets the sorting applicable to the cards
const [sortingValue, setSortingValue] = useState('sort_a_z');

// Hook: handles weight of weight_1 and weight_2
const [weight_1, setWeight_1] = useState(1);
const [weight_2, setWeight_2] = useState(-1);

// Hook: Sets the value on the basis of which to sort
const [basisOfSort, setBasisOfSort] = useState('blogTitle');


useEffect(() => {
  if(sortingValue === 'sort_a_z' || sortingValue === 'sort_date_oldest' || sortingValue === 'sort_least_read_time'){
    // Set weights
    setWeight_1(1);
    setWeight_2(-1);   
  }
  else if(sortingValue === 'sort_z_a' || sortingValue === 'sort_date_latest' || sortingValue === 'sort_most_read_time'){
    // Set weights
    setWeight_1(-1);
    setWeight_2(1);
  }

  // Set basisOfSortValue
  if(sortingValue === 'sort_a_z' || sortingValue === 'sort_z_a'){
    setBasisOfSort('blogTitle')
  }
  else if(sortingValue === 'sort_date_latest' || sortingValue === 'sort_date_oldest'){
    setBasisOfSort('dateOfPublishing')
  }
  else{
    setBasisOfSort('readTime');
  }

 
}, [sortingValue]);

// Function: handles the changing of category values
const handleCategoryChange = (categoryChangeEvent) => {
  setBlogCategory(categoryChangeEvent.target.value);
}

// Function: handles the changing of sort value
const handleSortingChange = (sortingChangeEvent) => {
  setSortingValue(sortingChangeEvent.target.value);
}

// Function: handles the remove filter functionality
const handleRemoveFilters = () => {
  setBlogCategory('all_categories');
  setSortingValue('sort_a_z');
}


  return (
    // Grid structure for blogs
  <div className='flex flex-row'>

    {/* Vertical navbar column */}
    <div className='grid grid-cols-1 w-[20%] fixed left-0 z-50'>
        <div className='col-span-1'>
            <VerticalNavbar/>
        </div>
    </div>

    {/* Create button, category dropdown, sorting dropdown */}
    {/* Options div */}
    <div className={optionsDivStyle}>
        {/* 1. Category dropdown */}
        <select className={categorySortingsStyle} name='category' onChange={handleCategoryChange} value={blogCategory}>
            {blogCategoryOptions.map((blogCategoryOption, index) => {
              return(<option value={blogCategoryOption.value} key={index}>{blogCategoryOption.label}</option>)
            })}
        </select>

        {/* Sorting dropdown button */}
        <select className={categorySortingsStyle} name='sorting' onChange={handleSortingChange} value={sortingValue}>
          {sortingOptions.map((sortingOption, index) => {
            return(<option value={sortingOption.value} key={index}>{sortingOption.label}</option>)
          })}
        </select>

        {/* Button to apply filters */}
        <button className={categorySortingsStyle} onClick={handleRemoveFilters}>
          Remove filters
        </button>
    </div>

    {/* Blog cards div */}
    <div className={blogCardsDivStyle}>
        {/* Blog Cards */}
        {blogsCards.sort((blogsCardsObject_1,blogsCardsObject_2) => 
        // Note: .split().reverse() is only for date. It does not have an impact on sorting by blog title or reading time as they simply don't have a '/' character
        {return blogsCardsObject_1[basisOfSort].split('/').reverse() > blogsCardsObject_2[basisOfSort].split('/').reverse() ? weight_1 : weight_2})
        .map((blogCard, index) => {
          if(blogCategory == "all_categories"){ 
            return(
              // ************** Card Begins **************** //
              <div className={`col-span-1 p-4 md:p-7 lg:p-8`} key={index}>
                  <div className='border-2 border-gray-200 shadow-lg rounded-md hover:shadow-slate-400 ease-in-out duration-300'>
                    {/* Title image of the blog */}
                    <div className='w-full h-full'>
                      <img src={blogCard.blogTitleImage} className={cardImageStyling}></img>
                    </div>
                    
  
                    {/* This div contains the date, title text, view button */}
                    {/* Parent div */}
                    <div className='flex flex-col gap-y-2 md:gap-y-3 p-3'>
  
                      {/* Date */}
                      <p className=' text-sm text-slate-500'>
                        {blogCard.dateOfPublishing} | {blogCard.readTime} min
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
                        <button className={`${buttonStyling}`}>
                          View
                        </button>
                      </div>
                    </div>
                  </div>
              </div>
                // ************** Card Ends **************** //
            )
          }
          else if(blogCategory == blogCard.category){
            return(
              // ************** Card Begins **************** //
              <div className='col-span-1 p-4 md:p-7 lg:p-8' key={index}>
                  <div className='border-2 border-gray-200 shadow-lg rounded-md hover:shadow-slate-400 ease-in-out duration-300'>
                    {/* Title image of the blog */}
                    <div className='w-full h-full'>
                      <img src={blogCard.blogTitleImage} className={cardImageStyling}></img>
                    </div>
                    
  
                    {/* This div contains the date, title text, view button */}
                    {/* Parent div */}
                    <div className='flex flex-col gap-y-2 md:gap-y-3 p-2'>
  
                      {/* Date */}
                      <p className=' text-sm text-slate-500'>
                        {blogCard.dateOfPublishing} | {blogCard.readTime} min
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
                        <button className={buttonStyling}>
                          View
                        </button>
                      </div>
                    </div>
                  </div>
              </div>
                // ************** Card Ends **************** //
            )
          }
        })}
        
        </div>
  </div>

    
  )
}

export default Blogs

let categorySortingsStyle = `
                            sm:p-2
                            md:p-2 
                            bg-[#ffffff] 
                            text-[#1a1a1d]
                            border-2 border-[#1a1a1d] 
                            text-xs sm:text-sm md:text-md 
                            font-semibold 
                            rounded-lg 
                            ease-in-out duration-200 shadow-md`;

let optionsDivStyle = `flex flex-row 
                         absolute 
                         top-0 left-[20%] 
                         p-3 
                         w-[80%] 
                         justify-start
                         gap-x-4 md:gap-x-6 lg:gap-x-10`

let blogCardsDivStyle = `grid grid-cols-1 
                           md:grid-cols-2 lg:grid-cols-3
                           w-[80%] 
                           relative 
                           left-[20%] 
                           mt-10`

let buttonStyling = `p-2 
                 md:p-3 
                 bg-[#fccf47] 
                 text-[#1a1a1d] 
                 font-semibold 
                 w-[25%] 
                 rounded-md 
                 hover:ring-2 hover:ring-offset-2 hover:ring-[#fccf47] 
                 duration-150 ease-in-out`

let cardImageStyling = `rounded-t-md 
                        h-40 
                        md:h-44 lg:h-48 
                        object-fill 
                        w-full`