import {React , useState } from 'react'
import FallCourse from '../../Common/FallCourse/FallCourse'
import SeeAll from '../../Common/SeeAll/SeeAll'
import useFetchFallCourses from '../../../core/Hook/useFetchFallCourses/useFetchFallCourses'
import VectorLine3 from '../../../assets/Icons/Group 7.svg'


const FallCourses = () => {

  const { fallCourses } = useFetchFallCourses();

  return (
    <div className="border relative z-[10]     ts:mt-[18px]   os:mt-[32px]   sm:mt-[68px]   lg:mt-[112px]">
      <div className="text-center border">
        <button className="mx-[auto] font-[bold] text-[#A74DD1] bg-[#F1D1FF]   
          ts:px-[8px] ts:py-[4px] ts:text-[12px] ts:rounded-[8px]   
          os:px-[12px] os:py-[4px]   
          sm:px-[16px] sm:py-[8px]   
          lg:px-[16px] lg:py-[8px]">دوره ها</button>
        <h2 className="text-center font-[bold]   
          ts:mt-[8px] ts:text-[16px]   
          os:mt-[8px] os:text-[20px]   
          sm:mt-[12px] sm:text-[20px]   
          lg:mt-[12px] lg:text-[24px]">دوره های جدید پاییزه</h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center border   
        ts:gap-[8px] ts:mt-[16px]   
        os:gap-[12px] os:mt-[24px]   
        sm:gap-[18px] sm:mt-[32px]   
        lg:gap-[26px] lg:mt-[40px]">
        {
          fallCourses.map((item) => {
            return <FallCourse data={item}/>
          })
        }
      </div>
      <SeeAll/>
      <img className="w-full absolute bottom-[-165px] z-[5]" src={VectorLine3} alt="vectorLine3Image"/>
    </div>
  )
}

export default FallCourses

