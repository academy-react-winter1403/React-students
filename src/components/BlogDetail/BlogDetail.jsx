import React, { useEffect, useState } from 'react'
import BlogImg from './BlogImg'
import BlogCard from './BlogCard'
import BlogText from './BlogText'
import BlogComments from './BlogComments'
import { useFetchBlog } from '../../core/hooks/useFetchCourseDetail/useFetchBlog'
import { getApi } from "../../core/services/api/index";
import { useParams } from 'react-router-dom'
  
const BlogDetail = () => {
const {blogId} = useParams()

 
  
    const [blog, setBlog] = useState()

    const fetchApi = async () => {
     try {
       const res = await getApi(`/News/${blogId}`)
       setBlog(res)
       console.log(res);
     } catch (error) {
      console.log(error);
     }
    }
  
    useEffect(() => {
      fetchApi()
    }, [])
  
  console.log(blogId);
  // console.log(blog);
  
  return (
    <div className='w-full '>
    
        <div className='w-full max-w-[1550px] mx-auto min-h-screen h-[2400px] flex items-center px-4 sm:px-6 lg:px-8 py-8 flex-col border-5 border-purple-500'>
            <div className='flex flex-row gap-8 justify-center w-[auto] h-[362px] mt-[52px] border-2 border-blue-400'>
                <BlogImg image={blog?.detailsNewsDto?.currentImageAddress} />
                <BlogCard
                title={blog?.detailsNewsDto?.title} 
                name={blog?.detailsNewsDto?.addUserFullName} 
                date={blog?.detailsNewsDto?.updateDate} 
                comments={blog?.detailsNewsDto?.commentsCount} 
                floor={blog?.detailsNewsDto?.commentsCount}/>
            </div>

            <BlogText blogtext={blog?.detailsNewsDto?.describe} />

            <BlogComments />

        </div>
  </div>
  )
}

export default BlogDetail