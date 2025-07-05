import React, { useEffect, useState } from 'react'
import BlogImg from './BlogImg'
import BlogCard from './BlogCard'
import BlogText from './BlogText'
import BlogComments from './BlogComments'
import { useFetchBlog } from '../../core/hooks/useFetchCourseDetail/useFetchBlog'
import { useParams } from 'react-router-dom'
// import { getApi } from "../../core/services/api/index";
// import { useParams } from 'react-router-dom'
  
const BlogDetail = () => {
  const { blog } = useFetchBlog();
  console.log(blog)

  
  return (
    <div className='w-full '>
    
       <div className='w-full mx-auto min-h-screen flex items-center justify-center px-8 sm:px-6 lg:px-6 py-8 flex-col'>
            <div className='flex flex-row gap-8 justify-center lg:w-[700px] lg:h-[362px] lg:px-20 sm:justify-center sm:h-[auto] md:overflow-x-invisible h-[362px] mt-[52px]'>
                <BlogImg image={blog?.currentImageAddress} />
                <BlogCard
                title={blog?.title || "یک نام خیلیی انحصاری برای خبر"} 
                name={blog?.addUserFullName || "امیرررر-حسینی" } 
                date={blog?.updateDate || "2023-09-10"} 
                comments={blog?.commentsCount || 155 } 
                floor={blog?.inUsersFavoriteCount || 11 }
                minidescribe={blog?.googleDescribe || "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان "}
                />
            </div>

            <BlogText describe={blog?.describe || "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از لورم ایپسوم متن ساختگی با لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان  تولید سادگی نامفهوم از صنعت چاپ، و با استفاده ازلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از ان تشکیل میشود که بسیار زیبا و جلوه گرافیکی منحصر بفردی دارد."} />

            <BlogComments />

        </div>
  </div>
  )
 }


export default BlogDetail