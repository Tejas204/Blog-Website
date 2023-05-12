import React, {useState} from 'react'
import { navbarItems } from '../data'
import {RxHamburgerMenu} from 'react-icons/rx'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

// This hook will make the dropdown navigation menu visible on the small devices
const [dropDownVisibility, setDropDownVisibility] = useState(false);
console.log(dropDownVisibility);


  return (
    <div>
        <nav className='flex flex-col gap-y-2 md:flex-row md:gap-x-[25%] lg:gap-x-[45%] xl:gap-x-[55%]'>
                {/* Logo */}
                <div className='flex flex-row items-center space-x-1 hover:cursor-pointer'>
                    <div className='bg-[#FCCF47] rounded-lg p-1'>
                        <p className='text-[#1A1A1D] font-semibold text-2xl'>B.io</p>
                    </div>
                    <div className='text-2xl text-[#1a1a1d] font-bold '>
                        Blogger.io
                    </div>
                </div>

                {/* Navlinks */}
                <ul className={`flex flex-col gap-y-4 md:flex-row md:gap-x-12 md:static md:h-auto relative ${dropDownVisibility ? 'top-0' : 'top-[-500px] h-0.5'} ease-in-out`}>
                    {navbarItems.map((navItem, index)=>{
                        return(
                        // li to be replaced by navlink
                        <NavLink className='font-semibold text-lg text-[#1A1A1D] hover:cursor-pointer hover:border-b-2 hover:border-[#FCCF47] duration-100
                            hover:border-t-2' key={index} to={navItem.goTo}>
                            {navItem.name}
                        </NavLink>
                        )
                        
                    })}
                </ul>

                <div className='absolute right-4 top-6 md:hidden '>
                    <RxHamburgerMenu className='hover:cursor-pointer' onClick={() => setDropDownVisibility(!dropDownVisibility)}/>
                </div>
            </nav>
    </div>
  )
}

export default Navbar