import React from 'react'
import { navbarItems, verticalNavbarItems } from '../data'
import { NavLink } from 'react-router-dom'
import { footerIcons } from '../data'


const VerticalNavbar = () => {
  return (
    <div className='flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-10 p-2 items-center w-[100%] h-screen bg-[#1a1a1d]'>

        {/* The div contains the brand logo  */}
        <div className='bg-[#FCCF47] rounded-lg p-1 md:p-2 w-[60%] md:w-[30%] lg:w-[20%] text-center hover:ring-offset-2 hover:ring-offset-[#1A1A1D] hover:ring-2 hover:ring-[#fccf47] ease-in-out duration-300'>
            <NavLink to='/' className='text-[#1A1A1D] font-semibold text-sm md:text-xl lg;text-2xl'>B.io</NavLink>
        </div>

        {/* The div contains vertical navlinks */}
        <div className='flex flex-col gap-y-10 ease-in-out w-[100%] justify-start'>
                    {verticalNavbarItems.map((navItem, index)=>{
                        return(
                            // This div contains the navigation icons and links
                            <div className='group flex flex-row items-center justify-center md:items-start md:justify-start w-[100%] p-3 hover:border-l-[#fccf47] hover:border-l-8 hover:bg-[#fccf47] hover:bg-opacity-25 duration-150 ease-in-out'>

                                {/* Navigation icons are visible only on small screens */}
                                <div>
                                    <NavLink className='w-[100%] text-2xl text-[#ffffff] hover:cursor-pointerm md:hidden' key={index} to={navItem.goTo}>
                                        {navItem.icon}
                                    </NavLink>
                                </div>
                                <div className='absolute left-full md:hidden bg-black text-white p-3 whitespace-nowrap rounded-e hidden group-hover:block md:group-hover:hidden min-w-[20px]'>
                                    {navItem.name}
                                </div>

                                {/* Navigation text is visible on medium and large screens */}
                                <div>
                                    <NavLink className='w-[100%] md:text-lg lg:text-xl text-[#ffffff] hover:cursor-pointer hidden md:block' key={index} to={navItem.goTo}>
                                        {navItem.name}
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })}
        </div>

        {/* The div contains social media links */}
        <div className='flex flex-col items-center space-y-3 border-t-2 border-t-[#fccf47] w-[100%] p-1'>
            <ul className='flex flex-col gap-y-6 md:flex-row md:space-x-7'>
                {footerIcons.map((footerIcon, index) => {
                    return(
                        <li className='text-[#FCCF47] text-2xl md:text-3xl lg:text-5xl hover:cursor-pointer hover:scale-125 duration-100 ease-in-out'>{footerIcon.icon}</li>
                    )
                })}
            </ul>
        </div>

        
    </div>

  )
}

export default VerticalNavbar