import React, { useState } from 'react'
import BlogCard from './BlogCard'
import { useFetchCourse } from '../../core/Hook/useFetchCourse/useFetchCourse'
import FrameRightIcon from '../../assets/Icons/frame-right.svg'
import FrameLeftIcon from '../../assets/Icons/frame-left.svg'



const Main = () => {

  const {course} = useFetchCourse();

  return (
    <div className="border">
        <div className="flex items-center mx-[auto] bg-[#F8F8F8]   ts:w-[360px] ts:h-[36px] ts:pr-[12px] ts:pl-[12px] ts:rounded-[24px]   os:w-[500px] os:h-[48px] os:pr-[16px] os:pl-[16px] os:rounded-[24px]   sm:w-[640px] sm:h-[60px] sm:pr-[20px] sm:pl-[20px] sm:rounded-[24px]   lg:w-[956px] lg:h-[72px] lg:pr-[26px] lg:pl-[24px] lg:rounded-[24px]">
          <h2 className="font-[semibold] text-[#1E1E1E]   ts:text-[8px]   os:text-[12px]   sm:text-[16px]   lg:text-[16px]">ترتیب</h2>
          <div className="flex justify-center   ts:gap-[4px] ts:mr-[12px]   os:gap-[8px] os:mr-[16px]   sm:gap-[12px] sm:mr-[20px]   lg:gap-[12px] lg:mr-[24px]">
            <button className="flex justify-center items-center font-[semibold] text-[#FFFFFF] bg-[#A74DD1]   ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[16px]   os:px-[12px] os:py-[8px] os:text-[8px] os:rounded-[16px]   sm:px-[16px] sm:py-[12px] sm:text-[12px] sm:rounded-[16px]   lg:px-[16px] lg:py-[13.5px] lg:text-[16px] lg:rounded-[16px]">محبوب ترین</button>
            <button className="flex justify-center items-center font-[semibold] text-[#1E1E1E] bg-[#FFFFFF]   ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[16px]   os:px-[12px] os:py-[8px] os:text-[8px] os:rounded-[16px]   sm:px-[16px] sm:py-[12px] sm:text-[12px] sm:rounded-[16px]   lg:px-[16px] lg:py-[13.5px] lg:text-[16px] lg:rounded-[16px]">ارزان ترین</button>
            <button className="flex justify-center items-center font-[semibold] text-[#1E1E1E] bg-[#FFFFFF]   ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[16px]   os:px-[12px] os:py-[8px] os:text-[8px] os:rounded-[16px]   sm:px-[16px] sm:py-[12px] sm:text-[12px] sm:rounded-[16px]   lg:px-[16px] lg:py-[13.5px] lg:text-[16px] lg:rounded-[16px]">گران ترین</button>
          </div>
          <div className="flex justify-center items-center mr-[auto]   ts:gap-[12px]   os:gap-[16px]   sm:gap-[20px]   lg:gap-[24px]">
            <label className="block font-[semibold] text-[#1E1E1E]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">تعداد نمایش</label>
            <select className="font-[semibold] text-[#1E1E1E] bg-[#FFFFFF]   ts:pr-[8px] ts:pl-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[16px]   os:pr-[8px] os:pl-[8px] os:py-[4px] os:text-[8px] os:rounded-[16px]   sm:pr-[12px] sm:pl-[12px] sm:py-[8px] sm:text-[12px] sm:rounded-[16px]   lg:pr-[12px] lg:pl-[16px] lg:py-[12px] lg:text-[16px] lg:rounded-[16px]" name="" id="">
              <option value="disable selected">9</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center   ts:gap-[8px] ts:mt-[20px]   os:gap-[16px] os:mt-[24px]   sm:gap-[24px] sm:mt-[28px]   lg:gap-[33px] lg:mt-[32px]">
        {
          course.map((item) => (
            <BlogCard 
            data={item}/>
          ))
        }

        </div>
        <div className="flex items-center mx-[auto] border   ts:gap-[8px] ts:w-[220px] ts:mt-[16px]   os:gap-[8px] os:w-[280px] os:mt-[24px]   sm:gap-[12px] sm:w-[340px] sm:mt-[32px]   lg:gap-[12px] lg:w-[404px] lg:mt-[40px]">
          <div className="flex justify-center items-center border border-[#A74DD0]   ts:w-[24px] ts:h-[16px] ts:rounded-[4px]   os:w-[32px] os:h-[24px] os:rounded-[4px]   sm:w-[36px] sm:h-[32px] sm:rounded-[8px]   lg:w-[40px] lg:h-[40px] lg:rounded-[8px]">
            <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={FrameRightIcon} alt="frameRightIcon"/>
          </div>
          <div className="flex justify-center items-center font-[semibold] text-[#A74DD0] border border-[#A74DD0]   ts:w-[24px] ts:h-[16px] ts:text-[6px] ts:rounded-[4px]   os:w-[32px] os:h-[24px] os:text-[8px] os:rounded-[4px]   sm:w-[36px] sm:h-[32px] sm:text-[12px] sm:rounded-[8px]   lg:w-[40px] lg:h-[40px] lg:text-[16px] lg:rounded-[8px]">1</div>
          <div className="flex justify-center items-center font-[semibold] text-[#A74DD0] border border-[#A74DD0]   ts:w-[24px] ts:h-[16px] ts:text-[6px] ts:rounded-[4px]   os:w-[32px] os:h-[24px] os:text-[8px] os:rounded-[4px]   sm:w-[36px] sm:h-[32px] sm:text-[12px] sm:rounded-[8px]   lg:w-[40px] lg:h-[40px] lg:text-[16px] lg:rounded-[8px]">2</div>
          <div className="flex justify-center items-center font-[semibold] text-[#A74DD0] border border-[#A74DD0]   ts:w-[24px] ts:h-[16px] ts:text-[6px] ts:rounded-[4px]   os:w-[32px] os:h-[24px] os:text-[8px] os:rounded-[4px]   sm:w-[36px] sm:h-[32px] sm:text-[12px] sm:rounded-[8px]   lg:w-[40px] lg:h-[40px] lg:text-[16px] lg:rounded-[8px]">3</div>
          <div className="flex justify-center items-center font-[semibold] text-[#A74DD0] border border-[#A74DD0]   ts:w-[24px] ts:h-[16px] ts:text-[6px] ts:rounded-[4px]   os:w-[32px] os:h-[24px] os:text-[8px] os:rounded-[4px]   sm:w-[36px] sm:h-[32px] sm:text-[12px] sm:rounded-[8px]   lg:w-[40px] lg:h-[40px] lg:text-[16px] lg:rounded-[8px]">4</div>
          <div className="flex justify-center items-center font-[semibold] text-[#A74DD0] border border-[#A74DD0]   ts:w-[24px] ts:h-[16px] ts:text-[6px] ts:rounded-[4px]   os:w-[32px] os:h-[24px] os:text-[8px] os:rounded-[4px]   sm:w-[36px] sm:h-[32px] sm:text-[12px] sm:rounded-[8px]   lg:w-[40px] lg:h-[40px] lg:text-[16px] lg:rounded-[8px]">5</div>
          <div className="flex justify-center items-center font-[semibold] text-[#A74DD0] border border-[#A74DD0]   ts:w-[24px] ts:h-[16px] ts:text-[6px] ts:rounded-[4px]   os:w-[32px] os:h-[24px] os:text-[8px] os:rounded-[4px]   sm:w-[36px] sm:h-[32px] sm:text-[12px] sm:rounded-[8px]   lg:w-[40px] lg:h-[40px] lg:text-[16px] lg:rounded-[8px]">6</div>
          <div className="flex justify-center items-center border border-[#A74DD0]    ts:w-[24px] ts:h-[16px] ts:rounded-[4px]   os:w-[32px] os:h-[24px] os:rounded-[4px]   sm:w-[36px] sm:h-[32px] sm:rounded-[8px]   lg:w-[40px] lg:h-[40px] lg:rounded-[8px]">
            <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={FrameLeftIcon} alt="frameLeftIcon"/>
          </div>
        </div>
    </div>
  )
}

export default Main