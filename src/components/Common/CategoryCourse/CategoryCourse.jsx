import React from 'react'

const CategoryCourse = ({data}) => {
  return (
    <div className="border-[2px] border-[#E9E9E9]   
      ts:w-[140px] ts:h-[120px] ts:pr-[12px] ts:rounded-[12px]   
      os:w-[200px] os:h-[160px] os:pr-[16px] os:rounded-[16px]   
      sm:w-[260px] sm:h-[200px] sm:pr-[20px] sm:rounded-[20px]   
      lg:w-[310px] lg:h-[230px] lg:pr-[24px] lg:rounded-[24px]">
      <div className="flex justify-center items-center bg-[#F7F7F7]   
        ts:w-[44px] ts:h-[44px] ts:mt-[4px] ts:rounded-[50px]   
        os:w-[48px] os:h-[48px] os:mt-[8px]    
        sm:w-[52px] sm:h-[52px] sm:mt-[16px]    
        lg:w-[56px] lg:h-[56px] lg:mt-[24px] lg:rounded-[50px]">  
        <img className="
          ts:w-[20px] ts:h-[20px]   
          os:w-[24px] os:h-[24px]   
          sm:w-[28px] sm:h-[28px]   
          lg:w-[32px] lg:h-[32px]" src={data.img} alt="icon"/>
      </div>
      <h3 className="font-[semibold]   
        ts:mt-[6px] ts:text-[12px]   
        os:mt-[16px] os:text-[16px]   
        sm:mt-[24px] sm:text-[20px]   
        lg:mt-[66px] lg:text-[24px]">{data.title}</h3>
      <p className="font-[medium] text-[#959595]   
        ts:mt-[4px] ts:text-[12px]    
        os:text-[12px]   
        sm:text-[16px]   
        lg:mt-[8px] lg:text-[16px]">{data.desc}</p>
    </div>
  )
}

export default CategoryCourse