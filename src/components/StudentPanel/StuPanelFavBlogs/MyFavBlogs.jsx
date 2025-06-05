import React from 'react'
import { useFetchFavBlogs } from '../../../core/Hook/useFetchFavBlogs/useFetchFavBlogs'
import MyFavBlog from './Common/MyFavBlog'
import RightArrow from '../Icons/RightArrow'
import LeftArrow from '../Icons/LeftArrow'


const MyFavBlogs = () => {

  const { favBlogs } = useFetchFavBlogs();

  return (
    <div className='w-[1180px] mt-6 pt-4 bg-[#F6F6F6] rounded-3xl   dark:bg-[#404040]'>
      <div className='flex items-center w-[1150px] h-11 mx-auto pr-3 font-[semibold] text-[14px] text-[#707070] bg-[#F1F1F1] rounded-[50px]
        dark:text-[#FFFFFF] dark:bg-[#606060]'>
        <span>#</span>
        <span className='mr-24'>نام</span>
        <span className='mr-56'>مدرس</span>
        <span className='mr-32'>تاریخ برگزاری</span>
        <span className='mr-32'>تاریخ اتمام</span>
        <span className='mr-32'>سطح</span>
      </div>
      <div className='w-[1150px]'>
        {
          favBlogs.map((item , index) => {
            return <MyFavBlog item={item} key={index}/>
          })
        }
      </div>
      <div className='flex justify-center items-center w-min h-12 mx-auto mt-20 bg-[#EFEFEF] rounded-2xl   
        dark:text-[#FFFFFF] dark:bg-[#606060]'>
        <RightArrow/>
        <div className='flex justify-center items-center mx-4'>
          <div className='flex justify-center items-center w-[45px] h-12 border rounded-lg'>5</div>
          <div className='flex justify-center items-center w-[45px] h-12 border rounded-lg'>4</div>
          <div className='flex justify-center items-center w-[45px] h-12 border rounded-lg'>3</div>
          <div className='flex justify-center items-center w-[45px] h-12 border rounded-lg'>2</div>
          <div className='flex justify-center items-center w-[45px] h-12 border rounded-lg'>1</div>
        </div>
        <LeftArrow/>
      </div>
    </div>
  )
}

export default MyFavBlogs