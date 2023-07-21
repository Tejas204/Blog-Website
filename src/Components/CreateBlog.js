import React, { useState, useEffect } from 'react';
import VerticalNavbar from './VerticalNavbar'
import uploadImage from '../Images/uploadImage.png'

const CreateBlog = () => {

// Hook: sets the uploaded image to the div
const [selectedImage, setSelectedImage] = useState(uploadImage);

  return (
    // Parent div: contains 2 columns
    // Column 1: vertical Navbar
    // Column 2: Create blog content
    <div className={parentDiv}>

        {/* Column 1 */}
        <div className={columnOne}>
            {/* Vertical navbar */}
            <div className={verticalNavbarStyle}>
                <VerticalNavbar/>
            </div>
        </div>

        {/* Column 2 */}
        <div className={columnTwo}>
            {/* Title text */}
            <div>
                <p className={titleText}>Can't wait to see your blog, get going...</p>
            </div>

            {/* Form begins */}
            {/* Image div */}
            <div className={imageDivStyling}>
                <img alt='no image' src={URL.createObjectURL(selectedImage)} className={uploadImageStyling}></img>
            </div>

            {/* Upload button div */}
            <div>
                <form>
                <label for='blog-image' className={buttonStyling}>Select Image</label>
                    <input type='file' name='blogImage' id='blog-image' className='hidden' onChange={
                        (event) => {
                            setSelectedImage(event.target.files[0]);
                            console.log(selectedImage);
                            }}>
                    </input>
                </form>
            </div>

        </div>
        
    </div>
  )
}


let parentDiv = `flex flex-row`

let columnOne = `grid grid-cols-1 w-[20%] fixed left-0`

let verticalNavbarStyle = `col-span-1`

let columnTwo = `grid grid-cols-1 w-[80%] relative left-[20%] flex flex-col items-center text-center justify-items-center sm:-z-50 md:z-0`

let titleText = `txt-sm md:text-md lg:text-2xl
                 font-semibold
                 p-2`

let imageDivStyling = `p-2 sm:w-[80%] md:w-[70%] lg:w-[60%] h-[80%]`

let uploadImageStyling = `w-[100%] h-[100%] border-[#1a1a1d] rounded-xl`

let buttonStyling = `p-2 
                 md:p-3 
                 bg-[#fccf47] 
                 text-[#1a1a1d] 
                 font-semibold  
                 rounded-md
                 hover:ring-2 hover:ring-offset-2 hover:ring-[#fccf47]
                 duration-150 ease-in-out`

export default CreateBlog