import React from 'react'
import BlogImg from '../BlogDetail/BlogImg'
import BlogCard from '../BlogDetail/BlogCard'
import BlogText from '../BlogDetail/BlogText'
import BlogComments from '../BlogDetail/BlogComments'
import { useFetchDetail } from '../../core/hooks/useFetchCourseDetail/useFetchDetail'



const CourseDetail = () => {

  const {course} = useFetchDetail()

  return (
    <div>
      <div className='w-[100%] h-[2400px] flex items-center flex-col m-[auto] border'>
        <div className='flex justify-center gap-10 w-[auto] lg:h-[362px] md:h-[auto] sm:h-[auto] mt-[52px] border'>
          <BlogImg/>
          <BlogCard/>
        </div>
        <BlogText/>
        <BlogComments/>
      </div>
    </div>
  )
}

export default CourseDetail