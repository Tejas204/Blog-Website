import React, { useState, useEffect } from 'react';
import VerticalNavbar from './VerticalNavbar'
import { Outlet } from 'react-router-dom';

const CreateBlog = () => {
  return (
    // Parent div: contains 2 columns
    // Column 1: vertical Navbar
    // Column 2: Create blog content
    <div className={parentDiv}>

        {/* Column 1 */}
        <div className={columnOne}>
            {/* Vertical navbar */}
            <div className={verticalNavbarStyle}>
                <VerticalNavbar/>
            </div>
        </div>

        {/* Column 2 */}
        <div className={columnTwo}>
            {/* Title text */}
            <div>
                <p className={titleText}>Can't wait to see your blog, get going...</p>
            </div>
        </div>
        
    </div>
  )
}


let parentDiv = `flex flex-row`

let columnOne = `grid grid-cols-1 w-[20%] fixed left-0`

let verticalNavbarStyle = `col-span-1`

let columnTwo = `grid grid-cols-1 w-[80%] relative left-[20%]`

let titleText = `txt-sm md:text-md lg:text-2xl
                 font-semibold
                 p-2`

export default CreateBlog