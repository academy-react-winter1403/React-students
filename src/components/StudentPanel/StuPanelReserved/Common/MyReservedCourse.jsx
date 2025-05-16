import React from 'react'
import JSIcon from '../../../../assets/Icons/StudentPanelIcons/Rectangle(1).svg'
import ViewIcon from '../Icons/ViewIcon'
import RemoveIcon from '../Icons/RemoveIcon'



const MyCourse = () => {
  return (
    <div className='flex items-center w-[1150px] h-16 mt-3 mr-3 pr-3 border'>
        <div className='flex justify-center items-center w-[83px] h-[52px] bg-[#F0DB4F] rounded-xl'>
            <img src={JSIcon} alt='javaScriptIcon'/>
        </div>
        <div className='w-[228px] mr-6 border'>
            <span className='font-[bold] text-[16px] text-[#2F2F2F]'>دوره جاوااسکریپت</span>
        </div>
        <div className='w-[156px] mr-3 border'>
            <span className='font-[semibold] text-[14px] text-[#2F2F2F]'>محمدحسین بحرالعلومی</span>
        </div>
        <div className='w-[192px] mr-2 border'>
            <span className='font-[semibold] text-[14px] text-[#2F2F2F]'>29 اردیبهشت 1403</span>
        </div>
        <div className='w-[180px] mr-2 border'>
            <span className='font-[semibold] text-[14px] text-[#2F2F2F]'>29 اردیبهشت 1403</span>
        </div>
        <div className='mr-2 ml-24 flex justify-center items-center px-2 py-[2px] bg-[#3772FF] rounded-[32px]'>
            <span className='font-[medium] text-[14px] text-[#FCFCFC]'>تایید شده</span>
        </div>
        {/* <div className='mr-2 ml-24 flex justify-center items-center px-2 py-[2px] bg-[#FF5353] rounded-[32px]'>
            <span className='font-[medium] text-[14px] text-[#FCFCFC]'>تایید نشده</span>
        </div> */}
        <div className='flex justify-center items-center gap-2'>
            <ViewIcon/>
            <RemoveIcon/>
        </div>
    </div>
  )
}

export default MyCourse