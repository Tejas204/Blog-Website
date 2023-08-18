import React from 'react'
import VerticalNavbar from './VerticalNavbar'

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
            <div className='w-[100%] col-span-4 md:col-span-3 border-r-2 h-screen'>Hello this is div 2</div>

            {/* Subdivision 2 */}
            <div className='w-[100%] md:col-span-1 hidden md:block h-screen'>Hello this is div 3</div>
        </div>
     </div>
  )
}

let parentDiv = `flex flex-row`

let columnOne = `grid grid-cols-1 w-[20%] fixed left-0 z-50`

let verticalNavbarStyle = `col-span-1`

let columnTwo = `grid grid-cols-4 w-[80%] relative left-[20%] flex flex-row items-center text-center justify-items-center md:z-0`

export default ViewBlog