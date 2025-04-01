import React from 'react'
import CourseCard from '../CourseList/CourseCard'
import FrameRightIcon from '../../assets/Icons/frame-right.svg'
import FrameLeftIcon from '../../assets/Icons/frame-left.svg'



const Main = () => {
  return (
    <div className="border    w-[958.6px]">
        <div className="flex items-center bg-[#F8F8F8]    w-[956px] h-[72px] pr-[26px] pl-[24px] rounded-[24px]">
          <h2 className="font-[semibold] text-[#1E1E1E] text-[16px]">ترتیب</h2>
          <div className="flex justify-center gap-[12px] mr-[24px]">
            <button className="flex justify-center items-center font-[semibold] text-[#FFFFFF] bg-[#A74DD1]    px-[16px] py-[13.5px] text-[16px] rounded-[16px]">محبوب ترین</button>
            <button className="flex justify-center items-center font-[semibold] text-[#1E1E1E] bg-[#FFFFFF]    px-[16px] py-[13.5px] text-[16px] rounded-[16px]">ارزان ترین</button>
            <button className="flex justify-center items-center font-[semibold] text-[#1E1E1E] bg-[#FFFFFF]    px-[16px] py-[13.5px] text-[16px] rounded-[16px]">گران ترین</button>
          </div>
          <div className="flex justify-center items-center mr-[auto] gap-[24px]">
            <label className="block font-[semibold] text-[#1E1E1E]    text-[16px]">تعداد نمایش</label>
            <select className="font-[semibold] text-[#1E1E1E] bg-[#FFFFFF]   pr-[12px] pl-[16px] py-[12px] text-[16px] rounded-[16px]" name="" id="">
              <option value="disable selected">9</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="flex flex-row flex-wrap    gap-[33px] mt-[32px]">
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </div>
        <div className="flex items-center mx-[auto] border    gap-[12px] w-[404px] mt-[40px]">
          <div className="flex justify-center items-center border border-[#A74DD0]    w-[40px] h-[40px] rounded-[8px]">
            <img className="w-[20px] h-[20px]" src={FrameRightIcon} alt="frameRightIcon"/>
          </div>
          <div className="flex justify-center items-center font-[semibold] text-[#A74DD0] border border-[#A74DD0]    w-[40px] h-[40px] text-[16px] rounded-[8px]">1</div>
          <div className="flex justify-center items-center font-[semibold] text-[#A74DD0] border border-[#A74DD0]    w-[40px] h-[40px] text-[16px] rounded-[8px]">2</div>
          <div className="flex justify-center items-center font-[semibold] text-[#A74DD0] border border-[#A74DD0]    w-[40px] h-[40px] text-[16px] rounded-[8px]">3</div>
          <div className="flex justify-center items-center font-[semibold] text-[#A74DD0] border border-[#A74DD0]    w-[40px] h-[40px] text-[16px] rounded-[8px]">4</div>
          <div className="flex justify-center items-center font-[semibold] text-[#A74DD0] border border-[#A74DD0]    w-[40px] h-[40px] text-[16px] rounded-[8px]">5</div>
          <div className="flex justify-center items-center font-[semibold] text-[#A74DD0] border border-[#A74DD0]    w-[40px] h-[40px] text-[16px] rounded-[8px]">6</div>
          <div className="flex justify-center items-center border border-[#A74DD0]    w-[40px] h-[40px] rounded-[8px]">
            <img className="w-[20px] h-[20px]" src={FrameLeftIcon} alt="frameLeftIcon"/>
          </div>
        </div>
    </div>
  )
}

export default Main