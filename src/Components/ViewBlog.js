import React from 'react'
import VerticalNavbar from './VerticalNavbar'
import { blogsCards } from '../data'

const ViewBlog = () => {
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

            {/* Subdivision 1 */}
            <div className='w-[100%] col-span-4 md:col-span-3 h-screen'>Hello this is div 2</div>

            {/* Subdivision 2 */}
            <div className='space-y-4 w-[20%] md:col-span-1 hidden md:block h-screen bg-slate-200 text-left p-4 fixed right-0'>
                {/* Category */}
                <p className='border-b-2 border-[#1a1a1d] text-[#1a1a1d] text-xl font-semibold'>Category</p>
                <p className='p-3 rounded-lg w-fit bg-slate-100 border-2 border-slate-400 text-slate-600 font-semibold'>Technology</p>

                {/* Reading time */}
                <p className='border-b-2 border-[#1a1a1d] text-[#1a1a1d] text-xl font-semibold'>Read time</p>
                <p className='p-3 rounded-lg w-fit bg-slate-100 border-2 border-slate-400 text-slate-600 font-semibold'>4 minutes</p>

                {/* Related blogs*/}
                <p className='border-b-2 border-[#1a1a1d] text-[#1a1a1d] text-xl font-semibold'>Related blogs</p>
                <div className='space-y-2 overflow-y-auto h-3/5 scroll-smooth'>
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