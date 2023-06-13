import React from 'react'
import VerticalNavbar from './VerticalNavbar'

const Blogs = () => {
  return (
    // Grid structure for blogs page
    <div className='grid grid-cols-4'>
      {/* Vertical navbar column */}
        <div className='col-span-1 md:col-span-1'>
            <VerticalNavbar/>
        </div>
    </div>
  )
}

export default Blogs