import React from 'react'
import ArrowURIcon from '../../../assets/Icons/arrow-up-right.svg'
import BookMarkIcon from '../../../assets/Icons/bookmark-add.svg'
import MortarBoardIcon from '../../../assets/Icons/mortarboard.svg'
import ThumbsUpIcon from '../../../assets/Icons/thumbs-up.svg'
import ViewIcon from '../../../assets/Icons/view.svg'

const WeeklyBlog = ({data}) => {
  return (
    <div>
        <div className="overflow-hidden border   ts:w-[100px] ts:h-[80px] ts:rounded-[8px]   os:w-[160px] os:h-[120px] os:rounded-[16px]   sm:w-[280px] sm:h-[180px] sm:rounded-[20px]   lg:w-[420px] lg:h-[336px] lg:rounded-[24px]">
          <div className={`flex justify-center items-center bg-[${data.backGroundColor}]   ts:h-[50px] ts:rounded-b-[8px]   os:h-[80px] os:rounded-b-[16px]   sm:h-[120px] sm:rounded-b-[32px]   lg:h-[241px] lg:rounded-b-[40px] relative`}>
            <img className="ts:w-[14px] ts:h-[14px]   os:w-[28px] os:h-[28px]   sm:w-[56px] sm:h-[56px]   lg:w-[112px] lg:h-[112px]" src={data.mainIcon} alt="Icon"/>
            <div className="flex justify-center items-center rounded-[50px] bg-[#FFFFFF] absolute   ts:w-[16px] ts:h-[16px] ts:top-[4px] ts:right-[4px]   os:w-[24px] os:h-[24px] os:top-[8px] os:right-[8px]   sm:w-[32px] sm:h-[32px] sm:top-[12px] sm:right-[12px]   lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:right-[12px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={ArrowURIcon} alt="arrowUpRightIcon"/>
            </div>
            <div className="flex justify-center items-center rounded-[50px] bg-[#FFFFFF] absolute   ts:w-[16px] ts:h-[16px] ts:top-[4px] ts:left-[4px]   os:w-[24px] os:h-[24px] os:top-[8px] os:left-[8px]   sm:w-[32px] sm:h-[32px] sm:top-[12px] sm:left-[12px]   lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:left-[12px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={BookMarkIcon} alt="bookMarkIcon"/>
            </div>
          </div>
          <div className="ts:pr-[4px]   os:pr-[8px]   sm:pr-[12px]   lg:pr-[16px]">
            <h3 className="font-[bold]   ts:mt-[4px] ts:text-[6px]   os:mt-[8px] os:text-[8px]   sm:mt-[12px] sm:text-[12px]   lg:text-[20px]    2x:mt-[12px] 2x:text-[24px]">{data.title}</h3>
            <div className="flex justify-between items-center text-[#959595]   ts:mt-[4px]   os:mt-[8px]   sm:mt-[12px]   lg:mt-[12px]">
              <div className="flex items-center border   ts:gap-[4px]   os:gap-[4px]   sm:gap-[4px]   lg:gap-[8px]">
                <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src={MortarBoardIcon} alt="mortarBoardIcon"/>
                <span className="font-[semibold] text-[#959595]   ts:text-[4px]   os:text-[6px]   sm:text-[8px]   lg:text-[14px]">{data.teacherName}</span>
              </div>
              <div className="flex items-center   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[16px]">
                <div className="flex items-center border   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[8px]">
                  <span className="font-[semibold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">{data.likeNumber}</span>
                  <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src={ThumbsUpIcon} alt="thumbsUpIcon"/>
                </div>
                <div className="flex items-center border   ts:gap-[4px] ts:ml-[4px]   os:gap-[4px] os:ml-[8px]   sm:gap-[8px] sm:ml-[12px]   lg:gap-[8px] lg:ml-[16px]">
                  <span className="font-[semibold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">{data.viewNumber}</span>
                  <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src={ViewIcon} alt="viewIcon"/>
                </div>
              </div>
            </div> 
          </div>
        </div>
    </div>
  )
}

export default WeeklyBlog