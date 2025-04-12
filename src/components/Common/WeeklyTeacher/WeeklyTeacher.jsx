import React from 'react'

const WeeklyTeacher = ({data}) => {
  return (
    <div>
      <div className="border-2 border-[#FFBF6C] ts:w-[100px] ts:h-[60px] ts:pt-[4px] ts:pr-[4px] ts:rounded-[8px]   os:w-[120px] os:h-[80px] os:pt-[8px] os:pr-[8px] os:rounded-[16px]   sm:w-[200px] sm:h-[140px] sm:pt-[12px] sm:pr-[16px] sm:rounded-[24px]   lg:w-[421px] lg:h-[216px] lg:pt-[27px] lg:pr-[24px] lg:rounded-[24px]">
        <h3 className="font-[bold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[20px]">{data.rank}</h3>
        <div className="flex justify-between items-end">
          <div className="border">
            <img className="ts:w-[8px] ts:h-[8px] ts:mt-[4px]   os:w-[24px] os:h-[24px] os:mt-[4px]   sm:w-[40px] sm:h-[40px] sm:mt-[8px]   lg:w-[56px] lg:h-[56px] lg:mt-[24px]" src={data.profileImg} alt="profileImage"/>
            <h2 className="font-[semibold]   ts:text-[6px]   os:mt-[4px] text-[8px]   sm:mt-[4px] sm:text-[10px]   lg:mt-[8px] lg:text-[20px]">{data.teacherName}</h2>
            <p className="font-[semibold] text-[#959595]   ts:text-[4px] ts:mb-[4px]   os:text-[6px] os:mb-[8px]   sm:mt-[4px] sm:mb-[16px] sm:text-[10px]   lg:mt-[4px] lg:mb-[24px] lg:text-[16px]">{data.description}</p>
          </div>
          <img className="ts:w-[20px] ts:h-[20px] ts:mb-[8px] ts:ml-[4px]   os:w-[32px] os:h-[32px] os:mb-[16px] os:ml-[8px]   sm:w-[56px] sm:h-[56px] sm:mb-[16px] sm:ml-[16px]   lg:w-[112px] lg:h-[112px] lg:mb-[19.27px] lg:ml-[16px]" src={data.medalImg} alt="medalThirdPlaceIcon"/>
        </div>
      </div>
    </div>
  )
}

export default WeeklyTeacher