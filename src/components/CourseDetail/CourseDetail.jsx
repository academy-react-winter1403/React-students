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
        <div className='w-[100%] h-[2400px] px-4 lg:px-6 flex items-center flex-col m-[auto] border-2 border-orange-500'>
            <div className='flex justify-center gap-10 sm:gap-4 w-[auto] lg:h-[362px] md:h-[auto] sm:h-[auto] mt-[52px] border-2 border-pink-600'>
                <BlogImg />
                <BlogCard showCourseText={true} />
            </div>

            <BlogText />
            <BlogComments />

        </div>
    </div>
  )
}

export default CourseDetail