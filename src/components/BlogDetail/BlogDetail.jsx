import React from 'react'
import BlogImg from './BlogImg'
import BlogCard from './BlogCard'
import BlogText from './BlogText'
import BlogComments from './BlogComments'
import { useFetchDetail } from '../../core/hooks/useFetchCourseDetail/useFetchDetail'

const BlogDetail = () => {

  const {course} = useFetchDetail()

  return (
    <div>
        <div className='w-[100%] h-[2400px] flex items-center flex-col m-[auto]'>
            <div className='flex justify-between w-[90%] h-[362px] mt-[52px]'>
                <BlogImg  image={course.image} />
                <BlogCard title={course.title} name={course.name} date={course.date} comments={course.comments} floor={course.floor}/>
            </div>

            <BlogText blogtext={course.blogtext} />

            <BlogComments />

        </div>
    </div>
  )
}

export default BlogDetail