import React from 'react'

const CategoryCourse = ({data}) => {
  return (
    <div>
      <div className="border-[2px] border-[#E9E9E9]   ts:w-[80px] ts:h-[60px] ts:pr-[12px] ts:rounded-[12px]   os:w-[160px] os:h-[100px] os:pr-[16px] os:rounded-[16px]   sm:w-[220px] sm:h-[140px] sm:pr-[20px] sm:rounded-[20px]   lg:w-[310px] lg:h-[230px] lg:pr-[24px] lg:rounded-[24px]">
        <div className="flex justify-center items-center bg-[#F7F7F7]   ts:w-[20px] ts:h-[20px] ts:mt-[4px] ts:rounded-[50px]   os:w-[32px] os:h-[32px] os:mt-[8px]    sm:w-[44px] sm:h-[44px] sm:mt-[16px]    lg:w-[56px] lg:h-[56px] lg:mt-[24px] lg:rounded-[50px]">  
          <img className="ts:w-[8px] ts:h-[8px]   os:w-[16px] os:h-[16px]   sm:w-[24px] sm:h-[24px]   lg:w-[32px] lg:h-[32px]" src={data.img} alt="icon"/>
        </div>
        <h3 className="font-[semibold]   ts:mt-[6px] ts:text-[8px]   os:mt-[16px] os:text-[12px]   sm:mt-[24px] sm:text-[16px]   lg:mt-[66px] lg:text-[24px]">{data.title}</h3>
        <p className="font-[medium] text-[#959595]   ts:mt-[4px] ts:text-[6px]    os:text-[10px]   sm:text-[12px]   lg:mt-[8px] lg:text-[16px]">{data.desc}</p>
      </div>
    </div>
  )
}

export default CategoryCourse