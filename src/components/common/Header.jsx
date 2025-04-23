import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <div className="flex justify-between items-center border   ts:px-[16px] ts:mt-[8px]   sm:px-[32px] sm:mt-[16px]    lg:px-[64px] mt-[20px]">
      <div className="flex justify-center items-center   ts:gap-[4px]   sm:gap-[8px]   lg:gap-[8px]">
        <img className="ts:w-[20px] ts:h-[20px]   sm:w-[32px] sm:h-[32px]   lg:w-[44px] lg:h-[44px]" src="" alt=""/>
        <h2 className="font-[semibold]    ts:text-[6px]    os:text-[8px]   sm:text-[12px]   lg:text-[14px]">React-students</h2>
      </div>
      <div className="flex justify-center items-center border   ts:gap-[20px]   os:gap-[32px]   sm:gap:[40px]   lg:ml-[356px] lg:mr-[344px] lg:gap-[48px]">
        <div className="border">
          <Link to="/" className="font-[medium]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">خانه</Link>
          <div className="mx-[auto] bg-[#A74DD1] rounded-[1.5px]   ts:w-[25%] ts:h-[1px]   os:w-[30%] os:h-[1px]   sm:w-[35%] sm:h-[2px]   lg:w-[40.3%] lg:h-[3px]"></div>
        </div>
        <div className="border">
          <Link to="" className="font-[medium]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">دوره ها</Link>
          <div className="mx-[auto] bg-white rounded-[1.5px]   ts:w-[25%] ts:h-[1px]   os:w-[30%] os:h-[1px]   sm:w-[35%] sm:h-[2px]   lg:w-[40.3%] lg:h-[3px]"></div>
        </div>
        <div className="border">
          <Link to="" className="font-[medium]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">بلاگ ها</Link>
          <div className="mx-[auto] bg-white rounded-[1.5px]   ts:w-[25%] ts:h-[1px]   os:w-[30%] os:h-[1px]   sm:w-[35%] sm:h-[2px]   lg:w-[40.3%] lg:h-[3px]"></div>
        </div>
        <div className="border">
          <Link to="" className="font-[medium]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">درباره ما</Link>
          <div className="mx-[auto] bg-white rounded-[1.5px]   ts:w-[25%] ts:h-[1px]   os:w-[30%] os:h-[1px]   sm:w-[35%] sm:h-[2px]   lg:w-[40.3%] lg:h-[3px]"></div>
        </div>
      </div>
      <div className="flex justify-center items-center border   ts:gap-[4px]   os:gap-[8px]   sm:gap-[16px]   lg:gap-[24px]">
        <Link to="/Login" className="flex justify-center items-center font-[semibold] border   ts:text-[6px]   os:text-[10px]  sm:text-[12px]  lg:text-[16px]">ورود</Link>
        <Link to="/RegisterStepOne" className="flex justify-center items-center font-[semibold] text-white bg-[#A74DD1]   ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[4px]    os:px-[12px] os:py-[4px] os:text-[10px] os:rounded-[8px]    sm:px-[16px] sm:py-[8px] sm:text-[12px] sm:rounded-[10px]   lg:px-[16px] lg:py-[8px] lg:text-[16px] lg:rounded-[12px]">ثبت نام</Link>
      </div>
    </div>
  )
}

export default Header
