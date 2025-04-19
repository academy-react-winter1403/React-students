import React from 'react'
import ArrowURIcon from '../../../assets/Icons/arrow-up-right.svg'
import BookMarkIcon from '../../../assets/Icons/bookmark-add.svg'
import MortarBoardIcon from '../../../assets/Icons/mortarboard.svg'


const FallCourse = ({data}) => {

  return (
    <div className="group overflow-hidden border   
      ts:w-[300px] ts:h-[220px] ts:rounded-[12px]   
      os:w-[340px] os:h-[260px] os:rounded-[16px]   
      sm:w-[380px] sm:h-[300px] sm:rounded-[24px]   
      lg:w-[420px] lg:h-[336px] lg:rounded-[24px]">
      <div className={`flex justify-center items-center bg-[${data.backGroundColor}] relative   
        ts:h-[160px] ts:rounded-b-[28px]   
        os:h-[160px] os:rounded-b-[32px]   
        sm:h-[200px] sm:rounded-b-[36px]   
        lg:h-[241px] lg:rounded-b-[40px]`}>
        <img className="ts:w-[76px] ts:h-[76px]   
          os:w-[88px] os:h-[88px]   
          sm:w-[100px] sm:h-[100px]   
          lg:w-[112px] lg:h-[112px]" src={data.tumbImageAddress} alt="tumbImageAddress"/>
        <div className="hidden group-hover:flex justify-center items-center bg-[#FFFFFF] rounded-[50px] absolute   
          ts:w-[28px] ts:h-[28px] ts:top-[4px] ts:right-[4px]   
          os:w-[32px] os:h-[32px] os:top-[8px] os:right-[8px]   
          sm:w-[36px] sm:h-[36px] sm:top-[12px] sm:right-[12px]   
          lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:right-[12px]">
          <img className="ts:w-[8px] ts:h-[8px]   
            os:w-[12px] os:h-[12px]   
            sm:w-[16px] sm:h-[16px]   
            lg:w-[20px] lg:h-[20px]" src={ArrowURIcon} alt="arrowUpRightIcon"/>
        </div>
        <div className="hidden group-hover:flex justify-center items-center bg-[#FFFFFF] rounded-[50px] absolute   
          ts:w-[28px] ts:h-[28px] ts:top-[4px] ts:left-[4px]   
          os:w-[32px] os:h-[32px] os:top-[8px] os:left-[8px]   
          sm:w-[36px] sm:h-[36px] sm:top-[12px] sm:left-[12px]   
          lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:left-[12px]">
          <img className="ts:w-[8px] ts:h-[8px]   
            os:w-[12px] os:h-[12px]   
            sm:w-[16px] sm:h-[16px]   
            lg:w-[20px] lg:h-[20px]" src={BookMarkIcon} alt="bookMarkIcon"/>
        </div>
      </div>
      <div className="ts:pr-[4px]   os:pr-[8px]   sm:pr-[12px]   lg:pr-[16px]">
        <h3 className="font-[bold]   
          ts:mt-[4px] ts:text-[12px]   
          os:mt-[8px] os:text-[16px]   
          sm:mt-[12px] sm:text-[20px]   
          lg:mt-[12px] lg:text-[24px]">
          {data.title}
        </h3>
        <div className="flex justify-between items-center   ts:mt-[4px]   os:mt-[8px]   sm:mt-[12px]   lg:mt-[12px]">
          <div className="flex items-center border   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[8px]">
            <img className="ts:w-[12px] ts:h-[12px]   
              os:w-[16px] os:h-[16px]   
              sm:w-[20px] sm:h-[20px]  
              lg:w-[24px] lg:h-[24px]" src={MortarBoardIcon} alt="mortarBoardIcon"/>
            <span className="font-[semibold] text-[#959595]   
              ts:text-[12px]   
              os:text-[12px]   
              sm:text-[14px]   
              lg:text-[14px]">
              {data.teacherName}
            </span>
          </div>
          <div className="flex items-center gap-[4px] border   ts:ml-[4px]   os:ml-[8px]   sm:ml-[12px]   lg:ml-[16px]">
            <span className="font-[semibold]   
              ts:text-[12px]   
              os:text-[16px]   
              sm:text-[16px]   
              lg:text-[20px]">
              {data.cost}
            </span>
            <span className="font-[semibold]   
              ts:text-[12px]   
              os:text-[12px]   
              sm:text-[14px]   
              lg:text-[14px]">تومان</span>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default FallCourse