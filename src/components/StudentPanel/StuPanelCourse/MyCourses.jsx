import React from 'react'
import MyCourse from './Common/MyCourse'
import RightArrow from '../Icons/RightArrow'
import LeftArrow from '../Icons/LeftArrow'
import { useFetchMyCourses } from '../../../core/Hook/useFetchMyCourses/useFetchMyCourses'


const MyCourses = () => {

  const { myCourses } = useFetchMyCourses();

  return (
    <div className='bg-[#F6F6F6]   
      xl:w-[880px] xl:mt-6 xl:pt-4 xl:rounded-3xl   
      3x:w-[1180px] 3x:mt-6 3x:pt-4 3x:rounded-3xl   
      dark:bg-[#404040]'>
      <div className='flex items-center mx-auto font-[semibold] text-[#707070] bg-[#F1F1F1]   
        xl:w-[850px] xl:h-10 xl:pr-3 xl:text-[12px] xl:rounded-[50px]
        3x:w-[1150px] 3x:h-11 3x:pr-3 3x:text-[14px] 3x:rounded-[50px]
        dark:text-[#FFFFFF] dark:bg-[#606060]'>
        <span>#</span>
        <span className='xl:mr-24   3x:mr-24'>نام</span>
        <span className='xl:mr-36   3x:mr-56'>مدرس</span>
        <span className='xl:mr-28   3x:mr-32'>تاریخ برگزاری</span>
        <span className='xl:mr-28   3x:mr-32'>تاریخ اتمام</span>
        <span className='xl:mr-28   3x:mr-32'>سطح</span>
      </div>
      <div className='w-[1150px]'>
        {/* {
          myCourses.map((item , index) => {
            return <MyCourse item={item} key={index}/>
          })
        } */}
        <MyCourse/>
      </div>
      <div className='flex justify-center items-center w-min h-12 mx-auto mt-20 bg-[#EFEFEF] rounded-2xl   dark:bg-[#606060]'>
        <RightArrow/>
        <div className='flex justify-center items-center mx-4   dark:text-[#FFFFFF]'>
          <span className='flex justify-center items-center w-[45px] h-12 border rounded-lg'>5</span>
          <span className='flex justify-center items-center w-[45px] h-12 border rounded-lg'>4</span>
          <span className='flex justify-center items-center w-[45px] h-12 border rounded-lg'>3</span>
          <span className='flex justify-center items-center w-[45px] h-12 border rounded-lg'>2</span>
          <span className='flex justify-center items-center w-[45px] h-12 border rounded-lg'>1</span>
        </div>
        <LeftArrow/>
      </div>
    </div>
  )
}

export default MyCourses