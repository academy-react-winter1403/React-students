import React from 'react'
import { Link } from 'react-router-dom'


const HeroSection = () => {
  return (
    <div className="mx-[auto] text-center   ts:pt-[12px]   os:pt-[28px]   sm:pt-[44px]   lg:pt-[88px]   dark:bg-[#000000]">
      <div>
        <div>
          <p className="font-[semibold]   ts:text-[16px]   os:text-[24px]    sm:text-[32px]   lg:text-[40px]
          dark:text-gray-300">با آکادمی سپهر ، میتونی از کدنویسی</p>
        </div>
        <div className="flex justify-center items-center   ts:gap-[4px] ts:mt-[4px]   os:gap-[4px] os:mt-[4px]   sm:gap-[8px] sm:mt-[8px]    lg:gap-[8px] lg:mt-[8px]">
          <span className="font-[semibold] text-[#A74DD1] border-[3px] border-[#A74DD1]   ts:px-[8px] ts:py-[4px] ts:text-[16px]   os:px-[8px] os:py-[4px] os:text-[24px]   sm:px-[12px] sm:py-[8px] sm:text-[32px]   lg:px-[15px] lg:py-[11px] lg:text-[40px]">نهایت لذت</span>
          <span className="font-[semibold]   ts:text-[16px]   os:text-[24px]   sm:text-[32px]   lg:text-[40px]
          dark:text-gray-300">رو ببری</span>
        </div>
      </div>
      <div className="mx-[auto]   ts:w-[240px] ts:mt-[8px]   os:w-[360px] os:mt-[12px]   sm:w-[400px] sm:mt-[16px]   lg:w-[547px] lg:mt-[20px]">
        <p className="font-[semibold] text-[#959595]   ts:text-[12px]   lg:text-[16px]">آکادمی سپهر همیشه در تلاش بوده تا محیطی پرانرژی را برای علاقه مندان به حوزه برنامه نویسی و کدنویسی و طراحی وب سایت را فراهم کند.</p>
      </div>
      <div className="flex justify-center items-center mx-[auto]   ts:mt-[8px] ts:gap-[6px]   os:mt-[12px] os:gap-[8px]   sm:mt-[16px] sm:gap-[10px]   lg:mt-[20px] lg:gap-[12px]">
        <Link className="flex justify-center items-center font-[semibold] text-white bg-[#A74DD1]   
          ts:px-[8px] ts:py-[4px] ts:text-[12px] ts:rounded-[8px]   
          os:px-[8px] os:py-[4px] os:rounded-[8px]   
          sm:px-[12px] sm:py-[8px] sm:rounded-[12px]   
          lg:px-[16px] lg:py-[12px] lg:text-[16px] lg:rounded-[16px]"
          to="/courselist"
          >
            شروع یادگیری
          </Link>
        <Link className="font-[semibold]
          ts:px-[8px] ts:py-[4px] ts:text-[12px] ts:rounded-[4px]   
          os:px-[8px] os:py-[4px] os:rounded-[4px]   
          sm:px-[12px] sm:py-[8px] sm:rounded-[8px]   
          lg:px-[16px] lg:py-[12px] lg:text-[16px] lg:rounded-[12px]
          dark:text-gray-300"
          to="/about-us"
        >
          درباره‌ما
        </Link>
      </div>
    </div>
  )
}

export default HeroSection;

