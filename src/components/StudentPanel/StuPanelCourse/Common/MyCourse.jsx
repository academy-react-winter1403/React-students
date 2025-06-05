import React from 'react'
import JSIcon from '../../../../assets/Icons/StudentPanel/Rectangle(1).svg'
import ViewIcon from '../../Icons/ViewIcon'



const MyCourse = () => {
  return (
    <div className='flex items-center w-[1150px] h-16 mt-3 mr-3 pr-3 rounded-2xl   dark:bg-[#606060]'>
        <div className='flex justify-center items-center w-[83px] h-[52px] bg-[#F0DB4F] rounded-xl'>
            <img src={JSIcon} alt='javaScriptIcon'/>
        </div>
        <div className='border   xl:w-[156px]   3x:w-[240px] mr-6 '>
            <span className='font-[bold] text-[#2F2F2F]   
                xl:text-[14px]   3x:text-[16px]   
                dark:text-[#FFFFFF]'>دوره جاوااسکریپت</span>
        </div>
        <div className='border   xl:w-[144px]   3x:w-[164px]'>
            <span className='font-[semibold] text-[#2F2F2F]   
                xl:text-[12px]   3x:text-[14px]   
                dark:text-[#FFFFFF]'>محمدحسین بحرالعلومی</span>
        </div>
        <div className='border   xl:w-[172px]   3x:w-[204px]'>
            <span className='font-[semibold] text-[#2F2F2F]   
                xl:text-[12px]   3x:text-[14px]   
                dark:text-[#FFFFFF]'>29 اردیبهشت 1403</span>
        </div>
        <div className='border   xl:w-[156px]   3x:w-[172px]'>
            <span className='font-[semibold] text-[#2F2F2F]   
                xl:text-[12px]   3x:text-[14px]   
                dark:text-[#FFFFFF]'>29 اردیبهشت 1403</span>
        </div>
        <div className='flex justify-center items-center bg-[#FF37F5]   xl:ml-4   3x:ml-36 px-2 py-[2px] rounded-[32px]'>
            <span className='font-[medium] text-[#FCFCFC]   
                xl:text-[12px]   3x:text-[14px]'>پیشرفته</span>
        </div>
        <ViewIcon/>
    </div>
  )
}

export default MyCourse