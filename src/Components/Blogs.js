import React from 'react'
import VerticalNavbar from './VerticalNavbar'
import mobile from '../Images/blog-website-mobile.png'

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

      <div className='grid grid-cols-3 w-[80%] relative left-[20%]'>
              <div className='col-span-1 h-[100%]'>
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