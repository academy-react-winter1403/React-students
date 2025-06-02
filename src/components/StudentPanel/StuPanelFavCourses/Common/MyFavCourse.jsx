import React from 'react'
import JSIcon from '../../../../assets/Icons/StudentPanel/Rectangle(1).svg'
import ViewIcon from '../../Icons/ViewIcon'
import BookIcon from '../../Icons/BookIcon'
import RemoveIcon from '../../Icons/RemoveIcon'



const MyFavCourse = () => {
  return (
    <div className='flex items-center w-[1150px] h-16 mt-3 mr-3 pr-3 rounded-2xl   dark:bg-[#606060]'>
        <div className='flex justify-center items-center w-[83px] h-[52px] bg-[#F0DB4F] rounded-xl'>
            <img src={JSIcon} alt='javaScriptIcon'/>
        </div>
        <div className='w-[228px] mr-6'>
            <span className='font-[bold] text-[16px] text-[#2F2F2F]   dark:text-[#FFFFFF]'>دوره جاوااسکریپت</span>
        </div>
        <div className='w-[156px] mr-3'>
            <span className='font-[semibold] text-[14px] text-[#2F2F2F]   dark:text-[#FFFFFF]'>محمدحسین بحرالعلومی</span>
        </div>
        <div className='w-[192px] mr-2'>
            <span className='font-[semibold] text-[14px] text-[#2F2F2F]   dark:text-[#FFFFFF]'>29 اردیبهشت 1403</span>
        </div>
        <div className='w-[180px] mr-2'>
            <span className='font-[semibold] text-[14px] text-[#2F2F2F]   dark:text-[#FFFFFF]'>29 اردیبهشت 1403</span>
        </div>
        <div className='mr-2 ml-24 flex justify-center items-center px-2 py-[2px] bg-[#FF37F5] rounded-[32px]'>
            <span className='font-[medium] text-[14px] text-[#FCFCFC]'>پیشرفته</span>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <ViewIcon/>
            <BookIcon/>
            <RemoveIcon/>
        </div>
    </div>
  )
}

export default MyFavCourse