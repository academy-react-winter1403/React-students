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
        <div className='w-[100%] h-[2400px] flex items-center flex-col m-[auto]'>
            <div className='flex justify-between w-[90%] h-[362px] mt-[52px] '>
                <BlogImg />
                <BlogCard  />

            </div>

            <BlogText />
            <BlogComments />

        </div>
    </div>
  )
}

export default CourseDetail