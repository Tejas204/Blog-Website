import React from 'react'
import VerticalNavbar from './VerticalNavbar'

const Blogs = () => {
  return (
    <div className='grid grid-cols-8'>
        <div className='col-span-1 md:col-span-2'>
            <VerticalNavbar/>
        </div>
    </div>
  )
}

export default Blogs