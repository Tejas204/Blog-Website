import React from 'react'
import { navbarItems } from '../data'

const LandingPage = () => {
  return (
    // Parent div
    <div>
        {/* Navbar */}
        <nav className='flex flex-row gap-x-[55%] p-4'>
            {/* Logo */}
            <a className='text-2xl text-[#24AFC1] font-bold'>
                Blogger.io
            </a>

            {/* Navlinks */}
            <ul className='flex flex-row gap-x-12'>
                {navbarItems.map((navItem, index)=>{
                    return(
                    // li to be replaced by navlink
                    <li className='font-semibold' key={index}>{navItem.name}</li>
                    )
                    
                })}
            </ul>
        </nav>
    </div>
  )
}

export default LandingPage