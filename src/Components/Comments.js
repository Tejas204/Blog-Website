import React from 'react'

const Comments = () => {
  return (
    <div>
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
  )
}

export default Comments