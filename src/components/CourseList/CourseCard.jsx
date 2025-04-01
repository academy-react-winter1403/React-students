import React from 'react'
import JsIcon2 from '../Icons/JsIcon2'
import MortarBoardIcon from '../Icons/MortarBoardIcon'
import FloorIcon from '../Icons/FloorIcon'
import DateIcon from '../Icons/DateIcon'
import ThumbsUpIcon from '../Icons/ThumbsUpIcon'
import ThumbsDownIcon from '../Icons/ThumbsDownIcon'



const CourseCard = () => {
  return (
    <div className="overflow-hidden bg-[#EAEAEA]    w-[297px] h-[441px] rounded-[24px]">
        <div className="flex justify-center bg-[#DAE01E]    h-[191px] rounded-b-[32px]">
            <JsIcon2 className="w-[112px] h-[112px] mt-[48px]"/>
        </div>
        <div className="mt-[8px] pr-[16px]">
            <div className="flex gap-[8px]">
                <button className="font-[semibold] text-[#A74DD0] bg-[#F1D1FF]    px-[8px] py-[5px] text-[12px] rounded-[8px]">پیشرفته</button>
                <button className="font-[semibold] text-[#A74DD0] bg-[#F1D1FF]    px-[8px] py-[5px] text-[12px] rounded-[8px]">جاوااسکریپت</button>
            </div>
            <h2 className="font-[semibold]    mt-[8px] text-[20px]">دوره جاوا اسکریپت</h2>
            <div className="flex items-center     gap-[8px] mt-[16px]">
                <MortarBoardIcon className="w-[24px] h-[24px]"/>
                <span className="font-[semibold] text-[#1E1E1E]    text-[14px]">محمدحسین بحرالعلومی</span>
            </div>
            <div className="flex items-center     gap-[8px] mt-[12px]">
                <FloorIcon/>
                <span className="font-[semibold] text-[#1E1E1E]    text-[14px]">طبقه بالا</span>
            </div>
            <div className="flex items-center     gap-[8px] mt-[12px]">
                <DateIcon/>
                <span className="font-[semibold] text-[#1E1E1E]    text-[14px]">20 اردیبهشت 1404</span>
            </div>
            <div className="flex items-center     gap-[38px] mt-[26px]">
                <div className="flex    gap-[16px]">
                <div className="flex items-center    gap-[8px]">
                    <ThumbsUpIcon/>
                    <span className="font-[medium]    text-[16px]">20</span>
                </div>
                <div className="flex items-center    gap-[8px]">
                    <ThumbsDownIcon/>
                    <span className="font-[medium]    text-[16px]">3</span>
                </div>
                </div>
                <div className="flex items-center    gap-[4px]">
                <span className="font-[semibold]    text-[20px]">2,000,000</span>
                <span className="font-[semibold]    text-[14px]">تومان</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCard