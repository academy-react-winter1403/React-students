import React, { useEffect, useState } from 'react'
import ListHeroSection from '../Common/ListHeroSection/ListHeroSection'
import CourseContent from './CourseContent'
import { getApi } from '../../core/services/api'
import { useFetchCourse } from '../../core/Hook/useFetchCourse/useFetchCourse'
import CodingImage from '../../assets/Icons/Coding-A-Website-Streamline.svg'
import Icons from '../../assets/Icons/4icons.svg'
import FrameRightIcon from '../../assets/Icons/frame-right.svg';
import FrameLeftIcon from '../../assets/Icons/frame-left.svg';



const CourseList = () => {
  
  const { Course } = useFetchCourse();
  
  const data1 = {
    button: "دوره ها", 
    heading: "آموزش رو از همین حالا شروع کن",           
    desc: "تمامی دوره های آموزشی آکادمی به همراه تمامی سطح ها و دسته بندی ها و فیلتر ها",
    rightImg: CodingImage,
    leftImg: Icons
  }

  return (
    <div>
      <ListHeroSection data={data1}/>
      <CourseContent/>
      <div className="flex">
        <div className="border   ts:w-[140px]   os:w-[200px]   sm:w-[260px]   lg:w-[421px]">

        </div>
        <div className="border   ts:w-[360px]  os:w-[500px] sm:w-[640px]   lg:w-[1050px]">
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
            <div className="flex justify-center items-center border border-[#A74DD0]     ts:w-[24px] ts:h-[16px] ts:rounded-[4px]   os:w-[32px] os:h-[24px] os:rounded-[4px]   sm:w-[36px] sm:h-[32px] sm:rounded-[8px]   lg:w-[40px] lg:h-[40px] lg:rounded-[8px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={FrameLeftIcon} alt="frameLeftIcon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseList