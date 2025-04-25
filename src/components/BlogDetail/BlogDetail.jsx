import React, { useEffect, useState } from 'react'
import BlogImg from './BlogImg'
import BlogCard from './BlogCard'
import BlogText from './BlogText'
import BlogComments from './BlogComments'
import { useFetchBlog } from '../../core/hooks/useFetchCourseDetail/useFetchBlog'
// import { getApi } from "../../core/services/api/index";
// import { useParams } from 'react-router-dom'
  
const BlogDetail = () => {

    const { blog } = useFetchBlog();
  
    console.log(blog);

  
  return (
    <div className='w-full '>
    
       {blog.title? <div className='w-full mx-auto min-h-screen flex items-center justify-center px-8 sm:px-6 lg:px-28 py-8 flex-col border-5 border-purple-500'>
            <div className='flex flex-row gap-8 justify-center lg:w-screen lg:h-[362px] lg:px-10 sm:justify-center sm:h-[auto] md:overflow-x-invisible h-[362px] mt-[52px] border-2 border-red-400'>
                <BlogImg image={blog?.currentImageAddress} />
                <BlogCard
                title={blog?.title} 
                name={blog?.addUserFullName} 
                date={blog?.updateDate} 
                comments={blog?.commentsCount} 
                floor={blog?.commentsCount}/>
            </div>

            <BlogText blogtext={blog?.describe} />

            <BlogComments />

        </div>:"درحال لود شدن"}
  </div>
  )
 }


export default BlogDetail