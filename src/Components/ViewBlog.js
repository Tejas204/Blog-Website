import React, { useState } from 'react'
import VerticalNavbar from './VerticalNavbar'
import { blogsCards } from '../data'
import Etherium from '../Images/etherium.jpeg';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const ViewBlog = ({newBlogs}) => {

// Hook: this hook stores the state of the comments
const [newComments, getNewComments] = useState(blogsCards[0].comments);

// Hook: makes API calls for dynamically displaying the blogs
const params = useParams();

// Variable: Store the dynamic value coming from the URL
// ex: :2; :1 etc.
let blogid = params.blogID;
blogid = blogid.slice(1);

// Variable: stores the final blog to display
let finalBlog;

console.log("new blogs: "+newBlogs);

// Loop: finalize the blog to be displayed
for(let i = 0; i<blogsCards.length; i++){
    if(blogsCards[i].id == blogid){
        finalBlog = blogsCards[i];
    }
    else{
        continue;
    }
}


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
                {/* <p className='text-lg md:text-xl lg:text-2xl font-semibold text-left'>Blockchain: The ledger needed for the modern world</p> */}
                <p className='text-lg md:text-xl lg:text-2xl font-semibold text-left'>{finalBlog.blogTitle}</p>

                {/* Blog information div */}
                <p className='text-left text-xs md:text-sm text-slate-500 md:hidden sm:block'>{finalBlog.category.toLocaleUpperCase()} | {finalBlog.readTime} mins</p>

                {/* Blog image */}
                <img src={finalBlog.blogTitleImage} className='w-[100%] md:h-[40%] lg:h-[60%]'></img>

                {/* Blog content */}
                <p className='text-justify text-sm md:text-md lg:text-base border-b-2 border-slate-300 pb-2'>
                    {finalBlog.blogDescription}
                </p>

                {/* Division of comments */}
                <div className='flex flex-col text-left space-y-3'>
                    {/* Heading for comment */}
                    <p className='fontp-semibold text-lg md:text-xl lg:text-2xl'>Comments</p>

                    {/* Comments */}
                    <div className='space-y-5'>
                        {/* Loop through each comment for a blog */}
                        {blogsCards[0].comments.map((comment, index) => {
                            return (
                                // return the comment div
                                <div key={index} className='p-2 border-2 border-[#1a1a1d] rounded-lg hover:bg-slate-300 hover:border-slate-500 ease-in-out duration-200'>
                                    {/* Place the author of the comment and the date at which the comment was added */}
                                    <p className='font-semibold text-sm md:text-md lg:text-base'>{comment.commentUser} | {comment.commentDate}</p>
                                    {/* Place the text of the comment */}
                                    <p className='text-justify text-sm md:text-md lg:text-base text-gray-800'>{comment.commentText}</p>
                                </div>
                            )
                        })}

                        {/* Div for comment area */}
                        <div className='w-[100%]'>
                            <textarea id='newComment' rows='4' className='w-[100%] border-2 border-[#1a1a1d] rounded-lg p-2 focus:ring-2 focus:ring-[#1a1a1d] ease-in-out duration-150' placeholder='Share your thoughts..'></textarea>
                        </div>
                        {/* Div for post button
                            When post is clicked, update the state of the comment
                            This is done by pushing the new comment to the comments[array Object]
                             */}
                        <div className='w-[100%] flex flex-row-reverse'>
                            <button type='button' className='p-2 md:p-3 bg-[#fccf47] text-[#1a1a1d] w-[17%] font-semibold rounded-md hover:ring-2 hover:ring-offset-2 hover:ring-[#fccf47] duration-150 ease-in-out' onClick={() => {
                                getNewComments(blogsCards[0].comments.push({
                                    commentText: document.getElementById("newComment").value,
                                    commentUser: "Tejas",
                                    commentDate: new Date().toLocaleDateString()
                                }));
                                document.getElementById("newComment").value = "";
                            }}>
                                Post
                            </button>
                        </div>
                    </div>

                    
                    
                    
                </div>
            </div>

            {/* Subdivision 2 - Blog information*/}
            <div className='space-y-4 w-[20%] md:col-span-1 hidden md:block h-screen bg-slate-200 text-left p-4 fixed right-0'>
                {/* Category */}
                <p className='border-b-2 border-[#1a1a1d] text-[#1a1a1d] text-xl font-semibold'>Category</p>
                <p className='p-3 rounded-lg w-fit bg-slate-100 border-2 border-slate-400 text-slate-600 font-semibold'>{finalBlog.category.toLocaleUpperCase()}</p>

                {/* Reading time */}
                <p className='border-b-2 border-[#1a1a1d] text-[#1a1a1d] text-xl font-semibold'>Read time</p>
                <p className='p-3 rounded-lg w-fit bg-slate-100 border-2 border-slate-400 text-slate-600 font-semibold'>{finalBlog.readTime} minutes</p>

                {/* Related blogs*/}
                <p className='border-b-2 border-[#1a1a1d] text-[#1a1a1d] text-xl font-semibold'>Related blogs</p>
                <div className='space-y-4 overflow-y-auto h-3/5 scroll-smooth flex flex-col'>
                {blogsCards.map((blogCard, index) => {
                    if(blogCard.category == finalBlog.category && blogCard.id != finalBlog.id){
                        return(
                            <NavLink to={`/view-blog/:`+blogCard.id} target='_blank' className='p-1 rounded-lg w-fit bg-slate-100 border-2 border-slate-400 text-slate-600 font-semibold'>{blogCard.blogTitle}</NavLink>
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