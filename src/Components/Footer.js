import React from 'react'
import { footerIcons, navbarItems } from '../data'

const Footer = () => {
  return (
    // Parent footer div
    <div className='grid grid-cols-1 md:grid-cols-3 bg-[#1A1A1D] p-4 mt-4'>
        {/* Logo div */}
        <div className='space-y-4 p-4 md:border-r-2 border-[#FCCF47] border-opacity-30'>
            {/* hero logo and information */}
            <p className='text-4xl text-[#FCCF47]'>Blogger.io</p>
            <p className='text-[#f8f8f8f8]'>Create and share your knowldege about almost anything in the world.
               Amazing blogs await you!
            </p>

            {/* Footer icons */}
            <ul className='space-x-4 flex flex-row'>
                {footerIcons.map((footerIcon, index) => {
                    return(
                        <li className='text-[#FCCF47] text-3xl hover:cursor-pointer hover:scale-150 duration-100 ease-in-out'>{footerIcon.icon}</li>
                    )
                })}
            </ul>
        </div>

        {/* Div for the navlinks */}
        <div className='p-4 space-y-3 md:border-r-2 border-[#FCCF47] border-opacity-30'>
            <p className='text-2xl text-[#FCCF47]'>Important Links</p>
            <ul className='space-y-3 flex flex-col'>
                {navbarItems.map((navbarItem, index) => {
                    return (
                        <li className='text-[#f8f8f8] hover:text-[#FCCF47] hover:cursor-pointer duration-100'>{navbarItem.name}</li>
                    )
                })}
            </ul>
        </div>

        {/* Div for contact form */}
        <div className='p-4 flex flex-col space-y-3'>
            <p className='text-2xl text-[#FCCF47]'>Get in touch</p>
            <form className='flex flex-col space-y-4'>
                <textarea placeholder='We are all ears...' rows='4' className='h-[100%] bg-transparent ring-2 ring-[#FCCF47] rounded-lg p-2 text-[#f8f8f8]'></textarea>
                <button className='p-1 sm:p-2 md:p-3 md:text-md sm:text-lg md:text-xl rounded-xl bg-[#FCCF47] text-[#1a1a1d] mt-4 hover:shadow-xl hover:-translate-y-2 duration-300'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Footer