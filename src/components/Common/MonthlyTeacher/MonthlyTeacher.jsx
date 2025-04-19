import React from 'react'

const MonthlyTeacher = ({data}) => {
  return (
    <div>
      <div className="border-2 border-[#FFBF6C] 
        ts:w-[240px] ts:h-[160px] ts:pt-[16px] ts:pr-[20px] ts:rounded-[16px]   
        os:w-[300px] os:h-[180px] os:pt-[20px] os:pr-[20px] os:rounded-[16px]   
        sm:w-[360px] sm:h-[200px] sm:pt-[24px] sm:pr-[24px] sm:rounded-[24px]   
        lg:w-[421px] lg:h-[216px] lg:pt-[27px] lg:pr-[24px] lg:rounded-[24px]">
        <h3 className="font-[bold]   ts:text-[16px]   os:text-[16px]   sm:text-[20px]   lg:text-[20px]">
          {`رتبه ${data.teacherId}`}
        </h3>
        <div className="flex justify-between items-end">
          <div className="border">
            <img className="rounded-[48.5px]   
              ts:w-[44px] ts:h-[44px] ts:mt-[12px]   
              os:w-[48px] os:h-[48px] os:mt-[16px]   
              sm:w-[52px] sm:h-[52px] sm:mt-[20px]   
              lg:w-[56px] lg:h-[56px] lg:mt-[24px]" src={data.pictureAddress} alt="profilePicture"/>
            <h2 className="font-[semibold]  
              ts:text-[16px] ts:mt-[4px] 
              ostext-[16px]   
              sm:mt-[8px] sm:text-[20px]   
              lg:mt-[8px] lg:text-[20px]">
              {data.fullName}
            </h2>
            <p className="font-[semibold] text-[#959595]   
              ts:mb-[12px] ts:text-[12px]   
              os:mb-[16px] os:text-[12px]   
              sm:mt-[4px] sm:mb-[20px] sm:text-[16px]   
              lg:mt-[4px] lg:mb-[24px] lg:text-[16px]">
              {data.description}
            </p>
          </div>
          <img className="ts:w-[76px] ts:h-[76px] ts:mb-[8px] ts:ml-[12px]   
            os:w-[88px] os:h-[88px] os:mb-[12px] os:ml-[12px]   
            sm:w-[100px] sm:h-[100px] sm:mb-[16px] sm:ml-[16px]   
            lg:w-[112px] lg:h-[112px] lg:mb-[19.27px] lg:ml-[16px]" src={data.medalImg} alt="medalThirdPlaceIcon"/>
        </div>
      </div>
    </div>
  )
}

export default MonthlyTeacher