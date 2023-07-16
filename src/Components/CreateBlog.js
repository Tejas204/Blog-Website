import React, { useState, useEffect } from 'react';
import VerticalNavbar from './VerticalNavbar'

const CreateBlog = () => {
  return (
    // Parent div: contains 2 columns
    // Column 1: vertical Navbar
    // Column 2: Create blog content
    <div className='flex flex-row'>

        {/* Column 1 */}
        <div className='grid grid-cols-1 w-[20%] fixed left-0'>
            <div className='col-span-1'>
                <VerticalNavbar/>
            </div>
        </div>
        
    </div>
  )
}

export default CreateBlog