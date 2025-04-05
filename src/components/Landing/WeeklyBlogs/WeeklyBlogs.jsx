import React from 'react'
<<<<<<< HEAD:src/components/Landing/WeeklyBlogs.jsx
<<<<<<< HEAD
<<<<<<< HEAD
import JsIcon2 from '../Icons/JsIcon2'
import ArrowURIcon from '../Icons/ArrowURIcon'
import BookMarkIcon from '../Icons/BookMarkIcon'
import MortarBoardIcon from '../Icons/MortarBoardIcon'
import ThumbsUpIcon from '../Icons/ThumbsUpIcon'
import ViewIcon from '../Icons/ViewIcon'
import ArrowLeftIcon from '../Icons/ArrowLeftIcon'
=======
<<<<<<< HEAD
import JSIcon2 from '../../assets/Icons/java-script2.svg'
import ArrowURIcon from '../../assets/Icons/arrow-up-right-03.svg'
import BookMarkIcon from '../../assets/Icons/bookmark-add-01.svg'
import MortarBoardIcon from '../../assets/Icons/mortarboard-02.svg'
import ThumbsUpIcon from '../../assets/Icons/thumbs-up.svg'
import ViewIcon from '../../assets/Icons/view.svg'
import ArrowLeftIcon from '../../assets/Icons/arrow-left-02.svg'
=======
>>>>>>> 7b22063b3f379e17e7236f75766b11569e7708ad
>>>>>>> 4afd4c3cd105e6f976e432d6ba08ab5fc5e633af
=======
import JsIcon2 from '../../assets/Icons/java-script2.svg'
import ArrowURIcon from '../../assets/Icons/arrow-up-right.svg'
import BookMarkIcon from '../../assets/Icons/bookmark-add.svg'
import MortarBoardIcon from '../../assets/Icons/mortarboard.svg'
import ThumbsUpIcon from '../../assets/Icons/thumbs-up.svg'
import ViewIcon from '../../assets/Icons/view.svg'
import ArrowLeftIcon from '../../assets/Icons/arrow-left.svg'
>>>>>>> landingcourse
=======
import JsIcon2 from '../../../assets/Icons/java-script2.svg'
import ArrowURIcon from '../../../assets/Icons/arrow-up-right.svg'
import BookMarkIcon from '../../../assets/Icons/bookmark-add.svg'
import MortarBoardIcon from '../../../assets/Icons/mortarboard.svg'
import ThumbsUpIcon from '../../../assets/Icons/thumbs-up.svg'
import ViewIcon from '../../../assets/Icons/view.svg'
import ArrowLeftIcon from '../../../assets/Icons/arrow-left.svg'
>>>>>>> landingcourse:src/components/Landing/WeeklyBlogs/WeeklyBlogs.jsx

const WeeklyBlogs = () => {
  return (
    <div className="border   ts:mt-[18px]   os:mt-[32px]   sm:mt-[68px]   lg:mt-[112px]">
      <div className="text-center border">
        <button className="mx-[auto] font-[bold] text-[#A74DD1] bg-[#F1D1FF]   ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[4px]   os:px-[12px] os:py-[4px] os:text-[8px] os:rounded-[4px]   sm:px-[16px] sm:py-[8px] sm:text-[12px] sm:rounded-[8px]   lg:px-[16px] lg:py-[8px] lg:text-[12px] lg:rounded-[8px]">بلاگ ها</button>
        <h2 className="text-center font-[bold]   ts:mt-[4px] ts:text-[12px]   os:mt-[8px] os:text-[16px]   sm:mt-[12px] sm:text-[20px]   lg:mt-[12px] lg:text-[24px]">بلاگ های این هفته</h2>
      </div>
      <div className="flex justify-center items-center border   ts:gap-[8px] ts:mt-[16px]   os:gap-[12px] os:mt-[24px]   sm:gap-[20px] sm:mt-[32px]   lg:gap-[26px] lg:mt-[40px]">
        <div className="overflow-hidden border   ts:w-[120px] ts:h-[80px] ts:rounded-[8px]   os:w-[240px] os:h-[120px] os:rounded-[16px]   sm:w-[360px] sm:h-[180px] sm:rounded-[20px]   lg:w-[420px] lg:h-[336px] lg:rounded-[24px]">
          <div className="flex justify-center items-center bg-[#DAE01E]   ts:h-[50px] ts:rounded-b-[8px]   os:h-[80px] os:rounded-b-[16px]   sm:h-[120px] sm:rounded-b-[32px]   lg:h-[241px] lg:rounded-b-[40px]">
<<<<<<< HEAD
<<<<<<< HEAD
            <JsIcon2 className="ts:w-[14px] ts:h-[14px]   os:w-[28px] os:h-[28px]   sm:w-[56px] sm:h-[56px]   lg:w-[112px] lg:h-[112px]"/>
=======
<<<<<<< HEAD
            <img className="ts:w-[14px] ts:h-[14px]   os:w-[28px] os:h-[28px]   sm:w-[56px] sm:h-[56px]   lg:w-[112px] lg:h-[112px]" src={JSIcon2} alt="javaScriptIcon"/>
>>>>>>> 4afd4c3cd105e6f976e432d6ba08ab5fc5e633af
=======
            <img className="ts:w-[14px] ts:h-[14px]   os:w-[28px] os:h-[28px]   sm:w-[56px] sm:h-[56px]   lg:w-[112px] lg:h-[112px]" src={JsIcon2} alt="javaScriptIcon"/>
>>>>>>> landingcourse
            {/* <div className="flex justify-center items-center rounded-[50px] bg-[#FFFFFF] absolute   ts:w-[16px] ts:h-[16px] ts:top-[4px] ts:right-[4px]   os:w-[24px] os:h-[24px] os:top-[8px] os:right-[8px]   sm:w-[32px] sm:h-[32px] sm:top-[12px] sm:right-[12px]   lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:right-[12px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={ArrowURIcon} alt="arrowUpRightIcon"/>
            </div>
            <div className="flex justify-center items-center rounded-[50px] bg-[#FFFFFF] absolute   ts:w-[16px] ts:h-[16px] ts:top-[4px] ts:left-[4px]   os:w-[24px] os:h-[24px] os:top-[8px] os:left-[8px]   sm:w-[32px] sm:h-[32px] sm:top-[12px] sm:left-[12px]   lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:left-[12px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={BookMarkIcon} alt="bookMarkIcon"/>
            </div> */}
          </div>
          <div className="ts:pr-[4px]   os:pr-[8px]   sm:pr-[12px]   lg:pr-[16px]">
            <h3 className="font-[bold]   ts:mt-[4px] ts:text-[6px]   os:mt-[8px] os:text-[8px]   sm:mt-[12px] sm:text-[12px]   lg:text-[20px]    2x:mt-[12px] 2x:text-[24px]">نقشه راه فول استک جاوااسکریپت</h3>
            <div className="flex justify-between items-center text-[#959595]   ts:mt-[4px]   os:mt-[8px]   sm:mt-[12px]   lg:mt-[12px]">
              <div className="flex items-center border   ts:gap-[4px]   os:gap-[4px]   sm:gap-[4px]   lg:gap-[8px]">
                <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src={MortarBoardIcon} alt="mortarBoardIcon"/>
                <span className="font-[semibold] text-[#959595]   ts:text-[4px]   os:text-[6px]   sm:text-[8px]   lg:text-[14px]">محمدحسین بحرالعلومی</span>
              </div>
              <div className="flex items-center   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[16px]">
                <div className="flex items-center border   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[8px]">
                  <span className="font-[semibold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">6</span>
                  <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src={ThumbsUpIcon} alt="thumbsUpIcon"/>
                </div>
                <div className="flex items-center border   ts:gap-[4px] ts:ml-[4px]   os:gap-[4px] os:ml-[8px]   sm:gap-[8px] sm:ml-[12px]   lg:gap-[8px] lg:ml-[16px]">
                  <span className="font-[semibold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">20</span>
                  <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src={ViewIcon} alt="viewIcon"/>
                </div>
              </div>
            </div> 
          </div>
        </div>
        <div className="overflow-hidden border   ts:w-[120px] ts:h-[80px] ts:rounded-[8px]   os:w-[240px] os:h-[120px] os:rounded-[16px]   sm:w-[360px] sm:h-[180px] sm:rounded-[20px]   lg:w-[420px] lg:h-[336px] lg:rounded-[24px]">
          <div className="flex justify-center items-center bg-[#DAE01E]   ts:h-[50px] ts:rounded-b-[8px]   os:h-[80px] os:rounded-b-[16px]   sm:h-[120px] sm:rounded-b-[32px]   lg:h-[241px] lg:rounded-b-[40px]">
            <img className="ts:w-[14px] ts:h-[14px]   os:w-[28px] os:h-[28px]   sm:w-[56px] sm:h-[56px]   lg:w-[112px] lg:h-[112px]" src={JsIcon2} alt="javaScriptIcon"/>
            {/* <div className="flex justify-center items-center rounded-[50px] bg-[#FFFFFF] absolute   ts:w-[16px] ts:h-[16px] ts:top-[4px] ts:right-[4px]   os:w-[24px] os:h-[24px] os:top-[8px] os:right-[8px]   sm:w-[32px] sm:h-[32px] sm:top-[12px] sm:right-[12px]   lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:right-[12px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={ArrowURIcon} alt="arrowUpRightIcon"/>
            </div>
            <div className="flex justify-center items-center rounded-[50px] bg-[#FFFFFF] absolute   ts:w-[16px] ts:h-[16px] ts:top-[4px] ts:left-[4px]   os:w-[24px] os:h-[24px] os:top-[8px] os:left-[8px]   sm:w-[32px] sm:h-[32px] sm:top-[12px] sm:left-[12px]   lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:left-[12px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={BookMarkIcon} alt="bookMarkIcon"/>
            </div> */}
          </div>
          <div className="ts:pr-[4px]   os:pr-[8px]   sm:pr-[12px]   lg:pr-[16px]">
            <h3 className="font-[bold]   ts:mt-[4px] ts:text-[6px]   os:mt-[8px] os:text-[8px]   sm:mt-[12px] sm:text-[12px]   lg:text-[20px]    2x:mt-[12px] 2x:text-[24px]">نقشه راه فول استک جاوااسکریپت</h3>
            <div className="flex justify-between items-center text-[#959595]   ts:mt-[4px]   os:mt-[8px]   sm:mt-[12px]   lg:mt-[12px]">
              <div className="flex items-center border   ts:gap-[4px]   os:gap-[4px]   sm:gap-[4px]   lg:gap-[8px]">
                <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src={MortarBoardIcon} alt="mortarBoardIcon"/>
                <span className="font-[semibold] text-[#959595]   ts:text-[4px]   os:text-[6px]   sm:text-[8px]   lg:text-[14px]">محمدحسین بحرالعلومی</span>
              </div>
              <div className="flex items-center   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[16px]">
                <div className="flex items-center border   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[8px]">
                  <span className="font-[semibold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">6</span>
                  <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src={ThumbsUpIcon} alt="thumbsUpIcon"/>
                </div>
                <div className="flex items-center border   ts:gap-[4px] ts:ml-[4px]   os:gap-[4px] os:ml-[8px]   sm:gap-[8px] sm:ml-[12px]   lg:gap-[8px] lg:ml-[16px]">
                  <span className="font-[semibold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">20</span>
                  <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src={ViewIcon} alt="viewIcon"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden border   ts:w-[120px] ts:h-[80px] ts:rounded-[8px]   os:w-[240px] os:h-[120px] os:rounded-[16px]   sm:w-[360px] sm:h-[180px] sm:rounded-[20px]   lg:w-[420px] lg:h-[336px] lg:rounded-[24px]">
          <div className="flex justify-center items-center bg-[#DAE01E]   ts:h-[50px] ts:rounded-b-[8px]   os:h-[80px] os:rounded-b-[16px]   sm:h-[120px] sm:rounded-b-[32px]   lg:h-[241px] lg:rounded-b-[40px] relative">
            <img className="ts:w-[14px] ts:h-[14px]   os:w-[28px] os:h-[28px]   sm:w-[56px] sm:h-[56px]   lg:w-[112px] lg:h-[112px]" src={JsIcon2} alt="javaScriptIcon"/>
            <div className="flex justify-center items-center rounded-[50px] bg-[#FFFFFF] absolute   ts:w-[16px] ts:h-[16px] ts:top-[4px] ts:right-[4px]   os:w-[24px] os:h-[24px] os:top-[8px] os:right-[8px]   sm:w-[32px] sm:h-[32px] sm:top-[12px] sm:right-[12px]   lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:right-[12px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={ArrowURIcon} alt="arrowUpRightIcon"/>
            </div>
            <div className="flex justify-center items-center rounded-[50px] bg-[#FFFFFF] absolute   ts:w-[16px] ts:h-[16px] ts:top-[4px] ts:left-[4px]   os:w-[24px] os:h-[24px] os:top-[8px] os:left-[8px]   sm:w-[32px] sm:h-[32px] sm:top-[12px] sm:left-[12px]   lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:left-[12px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={BookMarkIcon} alt="bookMarkIcon"/>
            </div>
          </div>
          <div className="ts:pr-[4px]   os:pr-[8px]   sm:pr-[12px]   lg:pr-[16px]">
            <h3 className="font-[bold]   ts:mt-[4px] ts:text-[6px]   os:mt-[8px] os:text-[8px]   sm:mt-[12px] sm:text-[12px]   lg:text-[20px]    2x:mt-[12px] 2x:text-[24px]">نقشه راه فول استک جاوااسکریپت</h3>
            <div className="flex justify-between items-center text-[#959595]   ts:mt-[4px]   os:mt-[8px]   sm:mt-[12px]   lg:mt-[12px]">
              <div className="flex items-center border   ts:gap-[4px]   os:gap-[4px]   sm:gap-[4px]   lg:gap-[8px]">
                <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src={MortarBoardIcon} alt="mortarBoardIcon"/>
                <span className="font-[semibold] text-[#959595]   ts:text-[4px]   os:text-[6px]   sm:text-[8px]   lg:text-[14px]">محمدحسین بحرالعلومی</span>
              </div>
              <div className="flex items-center   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[16px]">
                <div className="flex items-center border   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[8px]">
                  <span className="font-[semibold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">6</span>
                  <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src={ThumbsUpIcon} alt="thumbsUpIcon"/>
                </div>
                <div className="flex items-center border   ts:gap-[4px] ts:ml-[4px]   os:gap-[4px] os:ml-[8px]   sm:gap-[8px] sm:ml-[12px]   lg:gap-[8px] lg:ml-[16px]">
                  <span className="font-[semibold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">20</span>
                  <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src={ViewIcon} alt="viewIcon"/>
                </div>
              </div>
            </div> 
          </div>
=======
            <img className="ts:w-[14px] ts:h-[14px]   os:w-[28px] os:h-[28px]   sm:w-[56px] sm:h-[56px]   lg:w-[112px] lg:h-[112px]" src="" alt=""/>
          </div>
          <h3 className="font-[bold]   ts:mt-[4px] ts:mr-[4px] ts:text-[6px]   os:mt-[8px] os:mr-[8px] os:text-[8px]   sm:mt-[12px] sm:mr-[12px] sm:text-[12px]   lg:text-[20px]    xx:mt-[12px] xx:mr-[16px] xx:text-[24px]">نقشه راه فول استک جاوااسکریپت</h3>
          <div className="flex justify-between items-center text-[#959595]   ts:mt-[4px]   os:mt-[8px]   sm:mt-[12px]   lg:mt-[12px]">
            <div className="flex items-center border   ts:gap-[4px] ts:mr-[4px]   os:gap-[4px] os:mr-[8px]   sm:gap-[4px] sm:mr-[12px]   lg:gap-[8px] lg:mr-[16px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src="" alt=""/>
              <span className="font-[semibold] text-[#959595]   ts:text-[4px]   os:text-[6px]   sm:text-[8px]   lg:text-[14px]">محمدحسین بحرالعلومی</span>
            </div>
            <div className="flex items-center   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[16px]">
              <div className="flex items-center border   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[8px]">
                <span className="font-[semibold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">6</span>
                <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src="" alt=""/>
              </div>
              <div className="flex items-center border   ts:gap-[4px] ts:ml-[4px]   os:gap-[4px] os:ml-[8px]   sm:gap-[8px] sm:ml-[12px]   lg:gap-[8px] lg:ml-[16px]">
                <span className="font-[semibold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">20</span>
                <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src="" alt=""/>
              </div>
            </div>
          </div> 
        </div>
        <div className="overflow-hidden border   ts:w-[120px] ts:h-[80px] ts:rounded-[8px]   os:w-[240px] os:h-[120px] os:rounded-[16px]   sm:w-[360px] sm:h-[180px] sm:rounded-[20px]   lg:w-[420px] lg:h-[336px] lg:rounded-[24px]">
          <div className="flex justify-center items-center bg-[#DAE01E]   ts:h-[50px] ts:rounded-b-[8px]   os:h-[80px] os:rounded-b-[16px]   sm:h-[120px] sm:rounded-b-[32px]   lg:h-[241px] lg:rounded-b-[40px]">
            <img className="ts:w-[14px] ts:h-[14px]   os:w-[28px] os:h-[28px]   sm:w-[56px] sm:h-[56px]   lg:w-[112px] lg:h-[112px]" src="" alt=""/>
          </div>
          <h3 className="font-[bold]   ts:mt-[4px] ts:mr-[4px] ts:text-[6px]   os:mt-[8px] os:mr-[8px] os:text-[8px]   sm:mt-[12px] sm:mr-[12px] sm:text-[12px]   lg:text-[20px]    xx:mt-[12px] xx:mr-[16px] xx:text-[24px]">نقشه راه فول استک جاوااسکریپت</h3>
          <div className="flex justify-between items-center text-[#959595]   ts:mt-[4px]   os:mt-[8px]   sm:mt-[12px]   lg:mt-[12px]">
            <div className="flex items-center border   ts:gap-[4px] ts:mr-[4px]   os:gap-[4px] os:mr-[8px]   sm:gap-[4px] sm:mr-[12px]   lg:gap-[8px] lg:mr-[16px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src="" alt=""/>
              <span className="font-[semibold] text-[#959595]   ts:text-[4px]   os:text-[6px]   sm:text-[8px]   lg:text-[14px]">محمدحسین بحرالعلومی</span>
            </div>
            <div className="flex items-center   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[16px]">
              <div className="flex items-center border   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[8px]">
                <span className="font-[semibold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">6</span>
                <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src="" alt=""/>
              </div>
              <div className="flex items-center border   ts:gap-[4px] ts:ml-[4px]   os:gap-[4px] os:ml-[8px]   sm:gap-[8px] sm:ml-[12px]   lg:gap-[8px] lg:ml-[16px]">
                <span className="font-[semibold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">20</span>
                <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src="" alt=""/>
              </div>
            </div>
          </div> 
        </div>
        <div className="overflow-hidden border   ts:w-[120px] ts:h-[80px] ts:rounded-[8px]   os:w-[240px] os:h-[120px] os:rounded-[16px]   sm:w-[360px] sm:h-[180px] sm:rounded-[20px]   lg:w-[420px] lg:h-[336px] lg:rounded-[24px]">
          <div className="flex justify-center items-center bg-[#DAE01E]   ts:h-[50px] ts:rounded-b-[8px]   os:h-[80px] os:rounded-b-[16px]   sm:h-[120px] sm:rounded-b-[32px]   lg:h-[241px] lg:rounded-b-[40px] relative">
            <img className="ts:w-[14px] ts:h-[14px]   os:w-[28px] os:h-[28px]   sm:w-[56px] sm:h-[56px]   lg:w-[112px] lg:h-[112px]" src="" alt=""/>
            <div className="absolute   ts:w-[16px] ts:h-[16px] ts:top-[4px] ts:right-[4px]   os:w-[24px] os:h-[24px] os:top-[8px] os:right-[8px]   sm:w-[32px] sm:h-[32px] sm:top-[12px] sm:right-[12px]   lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:right-[12px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src="" alt=""/>
            </div>
            <div className="absolute   ts:w-[16px] ts:h-[16px] ts:top-[4px] ts:left-[4px]   os:w-[24px] os:h-[24px] os:top-[8px] os:left-[8px]   sm:w-[32px] sm:h-[32px] sm:top-[12px] sm:left-[12px]   lg:w-[40px] lg:h-[40px] lg:top-[12px] lg:left-[12px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src="" alt=""/>
            </div>
          </div>
          <h3 className="font-[bold]   ts:mt-[4px] ts:mr-[4px] ts:text-[6px]   os:mt-[8px] os:mr-[8px] os:text-[8px]   sm:mt-[12px] sm:mr-[12px] sm:text-[12px]   lg:text-[20px]    xx:mt-[12px] xx:mr-[16px] xx:text-[24px]">نقشه راه فول استک جاوااسکریپت</h3>
          <div className="flex justify-between items-center text-[#959595]   ts:mt-[4px]   os:mt-[8px]   sm:mt-[12px]   lg:mt-[12px]">
            <div className="flex items-center border   ts:gap-[4px] ts:pr-[4px]   os:gap-[4px] os:pr-[8px]   sm:gap-[4px] sm:pr-[12px]   lg:gap-[8px] lg:pr-[16px]">
              <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src="" alt=""/>
              <span className="font-[semibold] text-[#959595]   ts:text-[4px]   os:text-[6px]   sm:text-[8px]   lg:text-[14px]">محمدحسین بحرالعلومی</span>
            </div>
            <div className="flex items-center   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[16px]">
              <div className="flex items-center border   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[8px]">
                <span className="font-[semibold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">6</span>
                <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src="" alt=""/>
              </div>
              <div className="flex items-center border   ts:gap-[4px] ts:ml-[4px]   os:gap-[4px] os:ml-[8px]   sm:gap-[8px] sm:ml-[12px]   lg:gap-[8px] lg:ml-[16px]">
                <span className="font-[semibold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">20</span>
                <img className="ts:w-[8px] ts:h-[8px]   os:w-[8px] os:h-[8px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src="" alt=""/>
              </div>
            </div>
          </div> 
>>>>>>> 7b22063b3f379e17e7236f75766b11569e7708ad
        </div>
      </div>
      <button className="flex justify-center items-center mx-[auto] bg-[#A74DD1]   ts:gap-[4px] ts:mt-[16px] ts:px-[8px] ts:py-[4px] ts:rounded-[4px]   os:gap-[4px] os:mt-[24px] os:px-[12px] os:py-[8px] os:rounded-[8px]   sm:gap-[8px] sm:mt-[32px] sm:px-[16px] sm:py-[12px] sm:rounded-[16px]   lg:gap-[8px] lg:mt-[40px] lg:px-[16px] lg:py-[12px] lg:rounded-[16px]">
        <span className="font-[semibold] text-white   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">مشاهده همه</span>
<<<<<<< HEAD
<<<<<<< HEAD
        <ArrowLeftIcon className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[20px] sm:h-[20px]   lg:w-[24px] lg:h-[24px]"/>
=======
<<<<<<< HEAD
        <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[20px] sm:h-[20px]   lg:w-[24px] lg:h-[24px]" src={ArrowLeftIcon} alt="arrowLeftIcon"/>
=======
        <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[20px] sm:h-[20px]   lg:w-[24px] lg:h-[24px]" src="" alt=""/>
>>>>>>> 7b22063b3f379e17e7236f75766b11569e7708ad
>>>>>>> 4afd4c3cd105e6f976e432d6ba08ab5fc5e633af
=======
        <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[20px] sm:h-[20px]   lg:w-[24px] lg:h-[24px]" src={ArrowLeftIcon} alt="arrowLeftIcon"/>
>>>>>>> landingcourse
      </button>
    </div>
  )
}

<<<<<<< HEAD
export default WeeklyBlogs
=======
export default WeeklyBlogs
>>>>>>> 7b22063b3f379e17e7236f75766b11569e7708ad
