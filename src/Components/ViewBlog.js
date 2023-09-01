import React from 'react'
import VerticalNavbar from './VerticalNavbar'
import { blogsCards } from '../data'
import Etherium from '../Images/etherium.jpeg';

const ViewBlog = () => {
    console.log(blogsCards[0]);
  return (
    <div className={parentDiv}>

        {/* Column 1 */}
        <div className={columnOne}>
            {/* Vertical navbar */}
            <div className={verticalNavbarStyle}>
                <VerticalNavbar/>
            </div>
        </div>

        {/* Column 2 - contains 2 subdivions
          * Subdivision 1 - contains blog content
          * Subdivision 2 -  contains category and reading time */}
        <div className={columnTwo}>

            {/* Subdivision 1 - Blog */}
            <div className='w-[100%] col-span-4 md:col-span-3 h-screen p-8 space-y-2'>
                {/* Blog title */}
                <p className='text-lg md:text-xl lg:text-2xl font-semibold text-left'>Blockchain: The ledger needed for the modern world</p>

                {/* Blog information div */}
                <p className='text-left text-xs md:text-sm text-slate-500 md:hidden sm:block'>Technology | 4 mins</p>

                {/* Blog image */}
                <img src={Etherium} className='w-[100%] md:h-[40%] lg:h-[60%]'></img>

                {/* Blog content */}
                <p className='text-justify text-sm md:text-md lg:text-base border-b-2 border-slate-300 pb-2'>
                    Ethereum is a decentralized blockchain with smart contract functionality. 
                    Ether is the native cryptocurrency of the platform. Among cryptocurrencies, ether is second only to bitcoin in market capitalization. 
                    It is open-source software.
                    
                    Ethereum was conceived in 2013 by programmer Vitalik Buterin.
                    Additional founders of Ethereum included Gavin Wood, Charles Hoskinson, Anthony Di Iorio and Joseph Lubin.
                    In 2014, development work began and was crowdfunded, and the network went live on 30 July 2015.
                    Ethereum allows anyone to deploy permanent and immutable decentralized applications onto it, with which users can interact.
                    Decentralized finance (DeFi) applications provide financial instruments which do not directly rely on financial intermediaries like brokerages, exchanges, or banks. 
                    This facilitates borrowing against cryptocurrency holdings or lending them out for interest.
                    Ethereum also allows users to create and exchange non-fungible tokens (NFTs), which are tokens that can be tied to unique digital assets, 
                    such as images. Additionally, many other cryptocurrencies utilize the ERC-20 token standard on top of the Ethereum blockchain and have utilized
                    the platform for initial coin offerings.
                    
                    On 15 September 2022, Ethereum transitioned its consensus mechanism from proof-of-work (PoW) to proof-of-stake (PoS) in an upgrade process known as "the Merge". 
                    This has cut Ethereum's energy usage by 99%.
                </p>

                {/* Division of comments */}
                <div className='flex flex-col text-left space-y-3'>
                    {/* Heading for comment */}
                    <p className='fontp-semibold text-lg md:text-xl lg:text-2xl'>Comments</p>

                    {/* Comments */}
                    <div className='space-y-5'>
                        <div className='p-2 border-2 border-[#1a1a1d] rounded-lg hover:bg-slate-300 hover:border-slate-500 ease-in-out duration-200'>
                            <p className='font-semibold text-sm md:text-md lg:text-base'>Tejas | {new Date().toLocaleDateString()}</p>
                            <p className='text-justify text-sm md:text-md lg:text-base text-gray-800'>This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles. This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles. This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles</p>
                        </div>
   
                        {/* <div className='p-2 border-2 border-[#1a1a1d] rounded-lg hover:bg-slate-300 hover:border-slate-500 ease-in-out duration-200'>
                            <p className='font-semibold'>Tejas | {new Date().toLocaleDateString()}</p>
                            <p className='text-justify text-gray-800'>This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles. This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles. This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles</p>
                        </div>

                        <div className='p-2 border-2 border-[#1a1a1d] rounded-lg hover:bg-slate-300 hover:border-slate-500 ease-in-out duration-200'>
                            <p className='font-semibold'>Tejas | {new Date().toLocaleDateString()}</p>
                            <p className='text-justify text-gray-800'>This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles. This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles. This is a great work on ethereum. This helped me a lot in my project. Keep sharing such articles</p>
                        </div> */}

                        {/* Div for comment area */}
                        <div className='w-[100%]'>
                            <textarea rows='4' className='w-[100%] border-2 border-[#1a1a1d] rounded-lg p-2 focus:ring-2 focus:ring-[#1a1a1d] ease-in-out duration-150' placeholder='Share your thoughts..'></textarea>
                        </div>
                        {/* Div for post button */}
                        <div className='w-[100%] flex flex-row-reverse'>
                            <button className='p-2 md:p-3 bg-[#fccf47] text-[#1a1a1d] w-[17%] font-semibold rounded-md hover:ring-2 hover:ring-offset-2 hover:ring-[#fccf47] duration-150 ease-in-out'>Post</button>
                        </div>
                    </div>

                    
                    
                    
                </div>
            </div>

            {/* Subdivision 2 - Blog information*/}
            <div className='space-y-4 w-[20%] md:col-span-1 hidden md:block h-screen bg-slate-200 text-left p-4 fixed right-0'>
                {/* Category */}
                <p className='border-b-2 border-[#1a1a1d] text-[#1a1a1d] text-xl font-semibold'>Category</p>
                <p className='p-3 rounded-lg w-fit bg-slate-100 border-2 border-slate-400 text-slate-600 font-semibold'>Technology</p>

                {/* Reading time */}
                <p className='border-b-2 border-[#1a1a1d] text-[#1a1a1d] text-xl font-semibold'>Read time</p>
                <p className='p-3 rounded-lg w-fit bg-slate-100 border-2 border-slate-400 text-slate-600 font-semibold'>4 minutes</p>

                {/* Related blogs*/}
                <p className='border-b-2 border-[#1a1a1d] text-[#1a1a1d] text-xl font-semibold'>Related blogs</p>
                <div className='space-y-4 overflow-y-auto h-3/5 scroll-smooth'>
                {blogsCards.map((blogCard, index) => {
                    if(blogCard.category == 'technology'){
                        return(
                            <p className='p-1 rounded-lg w-fit bg-slate-100 border-2 border-slate-400 text-slate-600 font-semibold'>{blogCard.blogTitle}</p>
                        )
                    }
                })}
                </div>
            </div>
        </div>
     </div>
  )
}



let parentDiv = `flex flex-row`

let columnOne = `grid grid-cols-1 w-[20%] fixed left-0 z-50`

let verticalNavbarStyle = `col-span-1`

let columnTwo = `grid grid-cols-4 w-[80%] relative left-[20%] flex flex-row items-center text-center justify-items-center md:z-0`

export default ViewBlog