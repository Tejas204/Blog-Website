import React from 'react'
import { navbarItems } from '../data'
import { NavLink } from 'react-router-dom'
import { footerIcons } from '../data'

const VerticalNavbar = () => {
  return (
    <div className='flex flex-col space-y-6 p-2 items-center w-[100%] h-screen bg-[#1a1a1d]'>

        {/* The div contains the brand logo  */}
        <div className='bg-[#FCCF47] rounded-lg p-2 max-w-[20%] text-center'>
            <p className='text-[#1A1A1D] font-semibold text-2xl'>B.io</p>
        </div>

        {/* The div contains vertical navlinks */}
        <div className='flex flex-col gap-y-10 ease-in-out w-[100%] justify-start'>
                    {navbarItems.map((navItem, index)=>{
                        return(
                            <div className='w-[100%] p-3 hover:border-l-[#fccf47] hover:border-l-8 hover:bg-[#fccf47] hover:bg-opacity-25 duration-200 ease-in-out'>
                                <NavLink className='w-[100%] text-xl text-[#ffffff] hover:cursor-pointer' key={index} to={navItem.goTo}>
                                    {navItem.name}
                                </NavLink>
                            </div>
                        )
                    })}
        </div>

        {/* The div contains social media links */}
        <div className='flex flex-col items-center space-y-3 border-t-2 border-t-[#fccf47] p-6 mt-4'>
            {/* The paragraph tag contains contact us text */}
            <p className='text-xl text-[#fccf47]'>Contact us</p>
            <ul className='flex flex-row space-x-20'>
                {footerIcons.map((footerIcon, index) => {
                    return(
                        <li className='text-[#FCCF47] text-5xl hover:cursor-pointer hover:scale-125 duration-100 ease-in-out'>{footerIcon.icon}</li>
                    )
                })}
            </ul>
        </div>

        
    </div>

  )
}

export default VerticalNavbar