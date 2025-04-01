import React from 'react'
import JSIcon2 from '../../assets/Icons/java-script2.svg'
import MortarBoardIcon from '../../assets/Icons/mortarboard-02.svg'
import FloorIcon from '../../assets/Icons/Frame.svg'
import DateIcon from '../../assets/Icons/calendar-02-stroke-rounded 3.svg'
import ThumbsUpIcon from '../../assets/Icons/thumbs-up.svg'
import ThumbsDownIcon from '../../assets/Icons/thumbs-down.svg'



const CourseCard = () => {
  return (
    <div className="overflow-hidden bg-[#EAEAEA]    w-[297px] h-[441px] rounded-[24px]">
        <div className="flex justify-center bg-[#DAE01E]    h-[191px] rounded-b-[32px]">
            <img className="w-[112px] h-[112px] mt-[48px]" src={JSIcon2} alt="javaScriptIcon"/>
        </div>
        <div className="mt-[8px] pr-[16px]">
            <div className="flex gap-[8px]">
                <button className="font-[semibold] text-[#A74DD0] bg-[#F1D1FF]    px-[8px] py-[5px] text-[12px] rounded-[8px]">پیشرفته</button>
                <button className="font-[semibold] text-[#A74DD0] bg-[#F1D1FF]    px-[8px] py-[5px] text-[12px] rounded-[8px]">جاوااسکریپت</button>
            </div>
            <h2 className="font-[semibold]    mt-[8px] text-[20px]">دوره جاوا اسکریپت</h2>
            <div className="flex items-center     gap-[8px] mt-[16px]">
                <img className="w-[24px] h-[24px]" src={MortarBoardIcon} alt="mortarBoardIcon"/>
                <span className="font-[semibold] text-[#1E1E1E]    text-[14px]">محمدحسین بحرالعلومی</span>
            </div>
            <div className="flex items-center     gap-[8px] mt-[12px]">
                <img src={FloorIcon} alt="floorIcon"/>
                <span className="font-[semibold] text-[#1E1E1E]    text-[14px]">طبقه بالا</span>
            </div>
            <div className="flex items-center     gap-[8px] mt-[12px]">
                <img src={DateIcon} alt="dateIcon"/>
                <span className="font-[semibold] text-[#1E1E1E]    text-[14px]">20 اردیبهشت 1404</span>
            </div>
            <div className="flex items-center     gap-[38px] mt-[26px]">
                <div className="flex    gap-[16px]">
                <div className="flex items-center    gap-[8px]">
                    <img src={ThumbsUpIcon} alt="thumbsUpIcon"/>
                    <span className="font-[medium]    text-[16px]">20</span>
                </div>
                <div className="flex items-center    gap-[8px]">
                    <img src={ThumbsDownIcon} alt="thumbsDownIcon"/>
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