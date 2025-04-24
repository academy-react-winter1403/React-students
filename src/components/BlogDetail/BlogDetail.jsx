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
       const res = await getApi(`/News/${blogId}`)
       console.log(res);
       setBlog(res?.detailsNewsDto)    
    }
  
    useEffect(() => {
      fetchApi()
    }, [])
  
  console.log(blog);
  // console.log(blog);
  
  return (
    <div>
    
        <div className='w-[auto] mx-auto h-[auto] flex items-center justify-around pb-12 sm:px-6 lg:px-8 flex-col border-8 border-pink-400'>
            <div className='flex flex-row gap-8 justify-center w-[auto] h-[362px] mt-[52px] border-2 border-purple-500'>
                <BlogImg image={blog?.currentImageAddress} />
                <BlogCard
                title={blog?.title} 
                name={blog?.addUserFullName} 
                date={blog?.updateDate} 
                comments={blog?.commentsCount} 
                floor={blog?.commentsCount}
                miniDescribe={blog?.miniDescribe}
                />
            </div>

            <BlogText blogtext={blog?.describe} />

            <BlogComments />

        </div>
  </div>
  )
}

export default BlogDetail