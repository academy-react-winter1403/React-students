import React from 'react'
import SeeAll from '../../Common/SeeAll/SeeAll'
import HtmlIcon2 from '../../../assets/Icons/html-5-2.svg'
import CssIcon2 from '../../../assets/Icons/css-3-2.svg'
import JsIcon2 from '../../../assets/Icons/java-script2.svg'
import ReactIcon2 from '../../../assets/Icons/react2.svg'
import ArrowURIcon from '../../../assets/Icons/arrow-up-right.svg'
import BookMarkIcon from '../../../assets/Icons/bookmark-add.svg'
import MortarBoardIcon from '../../../assets/Icons/mortarboard.svg'
import VectorLine3 from '../../../assets/Icons/Group 7.svg'






const FallCourses = () => {
  return (
    <div className="border relative z-[10]     ts:mt-[18px]   os:mt-[32px]   sm:mt-[68px]   lg:mt-[112px]">
      <div className="text-center border">
        <button className="mx-[auto] font-[bold] text-[#A74DD1] bg-[#F1D1FF]   ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[4px]   os:px-[12px] os:py-[4px] os:text-[8px] os:rounded-[4px]   sm:px-[16px] sm:py-[8px] sm:text-[12px] sm:rounded-[8px]   lg:px-[16px] lg:py-[8px] lg:text-[12px] lg:rounded-[8px]">دوره ها</button>
        <h2 className="text-center font-[bold]   ts:mt-[4px] ts:text-[12px]   os:mt-[8px] os:text-[16px]   sm:mt-[12px] sm:text-[20px]   lg:mt-[12px] lg:text-[24px]">دوره های جدید پاییزه</h2>
      </div>
      <div className="flex justify-center items-center border   ts:gap-[8px] ts:mt-[16px]   os:gap-[12px] os:mt-[24px]   sm:gap-[18px] sm:mt-[32px]   lg:gap-[26px] lg:mt-[40px]">
        <div className="overflow-hidden border   ts:w-[260px] ts:h-[80px] ts:rounded-[12px]   os:w-[300px] os:h-[160px] os:rounded-[16px]   sm:w-[340px] sm:h-[240px] sm:rounded-[24px]   lg:w-[420px] lg:h-[336px] lg:rounded-[24px]">
          <div className="flex justify-center items-center bg-[#6F8EFF]   ts:h-[40px] ts:rounded-b-[20px]   os:h-[100px] os:rounded-b-[20px]   sm:h-[160px] sm:rounded-b-[28px]   lg:h-[241px] lg:rounded-b-[40px]">
            <img className="ts:w-[14px] ts:h-[14px]   os:w-[28px] os:h-[28px]   sm:w-[56px] sm:h-[56px]   lg:w-[112px] lg:h-[112px]" src={ReactIcon2} alt="reactIcon"/>
            {/* <div className="flex justify-center items-center bg-[#FFFFFF] rounded-[50px] absolute   ts:w-[16px] ts:h-[16px] ts:top-[4px] ts:right-[4px]   os:w-[24px] os:h-[24px] os:top-[8px] os:right-[8px]   sm:w-[32px] sm:h-[32px] sm:top-[12px] sm:right-[12px]   lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:right-[12px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={ArrowURIcon} alt="arrowUpRightIcon"/>
            </div>
            <div className="flex justify-center items-center bg-[#FFFFFF] rounded-[50px] absolute   ts:w-[16px] ts:h-[16px] ts:top-[4px] ts:left-[4px]   os:w-[24px] os:h-[24px] os:top-[8px] os:left-[8px]   sm:w-[32px] sm:h-[32px] sm:top-[12px] sm:left-[12px]   lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:left-[12px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={BookMarkIcon} alt="bookMarkIcon"/>
            </div> */}
          </div>
          <div className="ts:pr-[4px]   os:pr-[8px]   sm:pr-[12px]   lg:pr-[16px]">
            <h3 className="font-[bold]   ts:mt-[4px] ts:text-[8px]   os:mt-[8px] os:text-[12px]   sm:mt-[12px] sm:text-[16px]   lg:mt-[12px] lg:text-[24px]">دوره جاوااسکریپت</h3>
            <div className="flex justify-between items-center   ts:mt-[4px]   os:mt-[8px]   sm:mt-[12px]   lg:mt-[12px]">
              <div className="flex items-center border   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[8px]">
                <img className="ts:w-[12px] ts:h-[12px]   os:w-[16px] os:h-[16px]   sm:w-[20px] sm:h-[20px]   lg:w-[24px] lg:h-[24px]" src={MortarBoardIcon} alt="mortarBoardIcon"/>
                <span className="font-[semibold] text-[#959595]   ts:text-[4px]   os:text-[6px]   sm:text-[8px]   lg:text-[14px]">محمدحسین بحرالعلومی</span>
              </div>
              <div className="flex items-center gap-[3px] border   ts:ml-[4px]   os:ml-[8px]   sm:ml-[12px]   lg:ml-[16px]">
                <span className="font-[semibold]   ts:text-[8px]   os:text-[8px]   sm:text-[14px]   lg:text-[20px]">4,200,000</span><span className="font-[semibold]   ts:text-[4px]   os:text-[6px]   sm:text-[10px]   lg:text-[14px]">تومان</span>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden border   ts:w-[260px] ts:h-[80px] ts:rounded-[12px]   os:w-[300px] os:h-[160px] os:rounded-[16px]   sm:w-[340px] sm:h-[240px] sm:rounded-[24px]   lg:w-[420px] lg:h-[336px] lg:rounded-[24px]">
          <div className="flex justify-center items-center bg-[#EEEEEE]   ts:h-[40px] ts:rounded-b-[20px]   os:h-[100px] os:rounded-b-[20px]   sm:h-[160px] sm:rounded-b-[28px]   lg:h-[241px] lg:rounded-b-[40px]">
            <img className="ts:w-[14px] ts:h-[14px]   os:w-[28px] os:h-[28px]   sm:w-[56px] sm:h-[56px]   lg:w-[112px] lg:h-[112px]" src={HtmlIcon2} alt="htmlIcon"/>
            <img className="ts:w-[14px] ts:h-[14px]   os:w-[28px] os:h-[28px]   sm:w-[56px] sm:h-[56px]   lg:w-[112px] lg:h-[112px]" src={CssIcon2} alt="cssIcon"/>
            {/* <div className="flex justify-center items-center bg-[#FFFFFF] rounded-[50px] absolute   ts:w-[16px] ts:h-[16px] ts:top-[4px] ts:right-[4px]   os:w-[24px] os:h-[24px] os:top-[8px] os:right-[8px]   sm:w-[32px] sm:h-[32px] sm:top-[12px] sm:right-[12px]   lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:right-[12px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={ArrowURIcon} alt="arrowUpRightIcon"/>
            </div>
            <div className="flex justify-center items-center bg-[#FFFFFF] rounded-[50px] absolute   ts:w-[16px] ts:h-[16px] ts:top-[4px] ts:left-[4px]   os:w-[24px] os:h-[24px] os:top-[8px] os:left-[8px]   sm:w-[32px] sm:h-[32px] sm:top-[12px] sm:left-[12px]   lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:left-[12px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={BookMarkIcon} alt="bookMarkIcon"/>
            </div> */}
          </div>
          <div className="ts:pr-[4px]   os:pr-[8px]   sm:pr-[12px]   lg:pr-[16px]">
            <h3 className="font-[bold]   ts:mt-[4px] ts:text-[8px]   os:mt-[8px] os:text-[12px]   sm:mt-[12px] sm:text-[16px]   lg:mt-[12px] lg:text-[24px]">دوره html و CSS</h3>
            <div className="flex justify-between items-center   ts:mt-[4px]   os:mt-[8px]   sm:mt-[12px]   lg:mt-[12px]">
              <div className="flex items-center border   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[8px]">
                <img className="ts:w-[12px] ts:h-[12px]   os:w-[16px] os:h-[16px]   sm:w-[20px] sm:h-[20px]   lg:w-[24px] lg:h-[24px]" src={MortarBoardIcon} alt="mortarBoardIcon"/>
                <span className="font-[semibold] text-[#959595]   ts:text-[4px]   os:text-[6px]   sm:text-[8px]   lg:text-[14px]">محمدحسین بحرالعلومی</span>
              </div>
              <div className="flex items-center gap-[3px] border   ts:ml-[4px]   os:ml-[8px]   sm:ml-[12px]   lg:ml-[16px]">
                <span className="font-[semibold]   ts:text-[8px]   os:text-[8px]   sm:text-[14px]   lg:text-[20px]">500,000</span><span className="font-[semibold]   ts:text-[4px]   os:text-[6px]   sm:text-[10px]   lg:text-[14px]">تومان</span>
              </div>
            </div> 
          </div>
        </div>
        <div className="overflow-hidden border   ts:w-[260px] ts:h-[80px] ts:rounded-[12px]   os:w-[300px] os:h-[160px] os:rounded-[16px]   sm:w-[340px] sm:h-[240px] sm:rounded-[24px]   lg:w-[420px] lg:h-[336px] lg:rounded-[24px]">
          <div className="flex justify-center items-center bg-[#DAE01E]   ts:h-[40px] ts:rounded-b-[20px]   os:h-[100px] os:rounded-b-[20px]   sm:h-[160px] sm:rounded-b-[28px]   lg:h-[241px] lg:rounded-b-[40px] relative">
            <img className="ts:w-[14px] ts:h-[14px]   os:w-[28px] os:h-[28px]   sm:w-[56px] sm:h-[56px]   lg:w-[112px] lg:h-[112px]" src={JsIcon2} alt="javaScriptIcon"/>
            <div className="flex justify-center items-center bg-[#FFFFFF] rounded-[50px] absolute   ts:w-[16px] ts:h-[16px] ts:top-[4px] ts:right-[4px]   os:w-[24px] os:h-[24px] os:top-[8px] os:right-[8px]   sm:w-[32px] sm:h-[32px] sm:top-[12px] sm:right-[12px]   lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:right-[12px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={ArrowURIcon} alt="arrowUpRightIcon"/>
            </div>
            <div className="flex justify-center items-center bg-[#FFFFFF] rounded-[50px] absolute   ts:w-[16px] ts:h-[16px] ts:top-[4px] ts:left-[4px]   os:w-[24px] os:h-[24px] os:top-[8px] os:left-[8px]   sm:w-[32px] sm:h-[32px] sm:top-[12px] sm:left-[12px]   lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:left-[12px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={BookMarkIcon} alt="bookMarkIcon"/>
            </div>
          </div>
          <div className="ts:pr-[4px]   os:pr-[8px]   sm:pr-[12px]   lg:pr-[16px]">
            <h3 className="font-[bold]   ts:mt-[4px] ts:text-[8px]   os:mt-[8px] os:text-[12px]   sm:mt-[12px] sm:text-[16px]   lg:mt-[12px] lg:text-[24px]">دوره جاوااسکریپت</h3>
            <div className="flex justify-between items-center   ts:mt-[4px]   os:mt-[8px]   sm:mt-[12px]   lg:mt-[12px]">
              <div className="flex items-center border   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[8px]">
                <img className="ts:w-[12px] ts:h-[12px]   os:w-[16px] os:h-[16px]   sm:w-[20px] sm:h-[20px]   lg:w-[24px] lg:h-[24px]" src={MortarBoardIcon} alt="mortarBoardIcon"/>
                <span className="font-[semibold] text-[#959595]   ts:text-[4px]   os:text-[6px]   sm:text-[8px]   lg:text-[14px]">محمدحسین بحرالعلومی</span>
              </div>
              <div className="flex items-center gap-[3px] border   ts:ml-[4px]   os:ml-[8px]   sm:ml-[12px]   lg:ml-[16px]">
                <span className="font-[semibold]   ts:text-[8px]   os:text-[8px]   sm:text-[14px]   lg:text-[20px]">2,000,000</span><span className="font-[semibold]   ts:text-[4px]   os:text-[6px]   sm:text-[10px]   lg:text-[14px]">تومان</span>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <SeeAll/>
      <img className="w-full absolute bottom-[-165px] z-[5]" src={VectorLine3} alt="vectorLine3Image"/>
    </div>
  )
}

export default FallCourses

