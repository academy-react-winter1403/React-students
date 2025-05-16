import React from 'react'
import MyFavBlog from './Common/MyFavBlog'
import RightArrow from '../Icons/RightArrow'
import LeftArrow from '../Icons/LeftArrow'


const MyFavBlogs = () => {
  return (
    <div className='w-[1180px] mt-6 pt-4 bg-[#F6F6F6] rounded-3xl'>
      <div className='flex items-center w-[1150px] h-11 mx-auto pr-3 font-[semibold] text-[14px] text-[#707070] bg-[#F1F1F1] rounded-[50px]'>
        <span>#</span>
        <span className='mr-24'>نام</span>
        <span className='mr-56'>مدرس</span>
        <span className='mr-32'>تاریخ برگزاری</span>
        <span className='mr-32'>تاریخ اتمام</span>
        <span className='mr-32'>سطح</span>
      </div>
      <div className='w-[1150px]'>
        <MyFavBlog/>
      </div>
      <div className='flex justify-center items-center w-min h-12 mx-auto mt-20 bg-[#EFEFEF] rounded-2xl'>
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