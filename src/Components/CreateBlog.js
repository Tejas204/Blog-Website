import React, { useState, useEffect } from 'react';
import VerticalNavbar from './VerticalNavbar'
import uploadImage from '../Images/uploadImage.png'
import {blogCategoryOptions, blogsCards} from '../data'

const CreateBlog = () => {

// Hook: sets the uploaded image to the div
const [selectedImage, setSelectedImage] = useState(false);

// Hook: sets the category of the new blog
const [newBlogCategory, setNewBlogCategory] = useState('all_categories');

// Function: Handles the change in value of dropdown
const newBlogCategoryChange = (newCategory) => {
    setNewBlogCategory(newCategory.target.value);
}


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
                {selectedImage ? (<img alt='' src={URL.createObjectURL(selectedImage)} className={uploadImageStyling}></img>) : (<img src={uploadImage} className={uploadImageStyling} alt='no image'></img>)}
            </div>

            {/* Upload button div */}
            <div className='flex flex-row gap-x-3 items-center justify-center'>
                {/* Upload Image button */}
                <form>
                <label for='blog-image' className={buttonStyling}>Select Image</label>
                    <input type='file' name='blogImage' id='blog-image' className='hidden' onChange={
                        (event) => {
                            setSelectedImage(event.target.files[0]);
                            }}>
                    </input>
                </form>

                {/* Remove Image button */}
                <button className={buttonStyling} onClick={() => {setSelectedImage(false)}}>
                    Remove Image
                </button>
            </div>

            

            {/* Form to submit title, approx read time, category and body */}
            <div>
                <form className='mt-8 gap-y-4 flex flex-col items-center'>
                    {/* Blog title */}
                    <input required type='text' id='blogTitle' placeholder='Enter title of your blog' className={formStyling}></input>

                    {/* Inputs for appriximate reading time and category */}
                    <input required type='number' min='1' placeholder='Approx. read time' className={formStyling}></input>

                    {/* Blog category */}
                    <select className={formStyling} id='new-category' onChange={newBlogCategoryChange} value={newBlogCategory}>
                        {blogCategoryOptions.map((blogCategory, index) => {
                            return(<option value={blogCategory.value}>{blogCategory.label}</option>)
                        })}
                    </select>

                    {/* Blog content */}
                    <textarea required id='blogContent' placeholder='Start blogging' rows='15' className={blogContentStyling}></textarea>
                    <button type='button' className={buttonStyling} onClick={() => {
                        blogsCards.push({
                            dateOfPublishing: new Date().toLocaleDateString(),
                            readTime: '14',
                            blogTitle: document.getElementById('blogTitle').value,
                            blogDescription: document.getElementById('blogContent').value,
                            blogTitleImage: selectedImage,
                            category: 'technology'
                    })
                }}>Submit</button>
                </form>
            </div>
            

        </div>

        
        
    </div>
  )
}


let parentDiv = `flex flex-row`

let columnOne = `grid grid-cols-1 w-[20%] fixed left-0 z-50`

let verticalNavbarStyle = `col-span-1`

let columnTwo = `grid grid-cols-1 w-[80%] relative left-[20%] flex flex-col items-center text-center justify-items-center md:z-0`

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

let formStyling = `border-b-2 border-b-[#1a1a1d] 
                   bg-slate-100 
                   p-3 
                   outline-none 
                   focus:border-none focus:ring-2 focus:ring-[#fccf47] focus:text-[#1a1a1d] focus:bg-transparent focus:ease-in-out 
                   duration-100 focus:rounded-lg`

let blogContentStyling = `h-[120%] sm:w-[150%] md:w-[250%] lg:w-[350%] 
                          bg-slate-100 border-b-2 border-b-[#1a1a1d] 
                          p-3 outline-none 
                          focus:border-none focus:ring-2 focus:ring-[#fccf47] focus:text-[#1a1a1d] focus:bg-transparent focus:ease-in-out 
                          duration-200 focus:rounded-lg`

export default CreateBlog