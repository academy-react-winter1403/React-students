import React from 'react'

const HeroSection = () => {
  return (
    <div className="content1   mx-[auto] mt-[60px] text-center border">
      <div className="border">
        <div className="border">
          <p className="font-[semibold]   ts:text-[18px]   os:text-[26px]    sm:text-[32px]   lg:text-[40px]">با آکادمی سپهر ، میتونی از کدنویسی</p>
        </div>
        <div className="flex justify-center items-center border   ts:gap-[2px] ts:mt-[2px]   os:gap-[4px] os:mt-[4px]   sm:gap-[6px] sm:mt-[6px]    lg:gap-[8px] lg:mt-[8px]">
          <span className="font-[semibold] text-[#A74DD1] border-[3px] border-[#A74DD1]   ts:px-[4px] ts:py-[2px] ts:text-[16px]   os:px-[8px] os:py-[4px] os:text-[24px]   sm:px-[12px] sm:py-[8px] sm:text-[32px]   lg:px-[15px] lg:py-[11px] lg:text-[40px]">نهایت لذت</span>
          <span className="font-[semibold]   ts:text-[16px]   os:text-[24px]   sm:text-[32px]   lg:text-[40px]">رو ببری</span>
        </div>
      </div>
      <div className="mx-[auto]   ts:w-[140px]   os:w-[270px]   sm:w-[400px]   lg:w-[547px]">
        <p className="font-[semibold] text-[#959595]   ts:mt-[8px] ts:text-[4px]   os:mt-[12px] os:text-[8px]   sm:mt-[16px] sm:text-[12px]   lg:mt-[20px] lg:text-[16px]">آکادمی سپهر همیشه در تلاش بوده تا محیطی پرانرژی را برای علاقه مندان به حوزه برنامه نویسی و کدنویسی و طراحی وب سایت را فراهم کند.</p>
      </div>
      <div className="flex justify-center items-center mx-[auto] border   ts:mt-[8px] ts:gap-[6px]   os:mt-[12px] os:gap-[8px]   sm:mt-[16px] sm:gap-[10px]   lg:mt-[20px] lg:gap-[12px]">
        <button className="flex justify-center items-center font-[semibold] text-white bg-[#A74DD1]   ts:px-[4px] ts:py-[2px] ts:text-[6px] ts:rounded-[8px]   os:px-[8px] os:py-[4px] os:text-[8px] os:rounded-[8px]   sm:px-[12px] sm:py-[8px] sm:text-[12px] sm:rounded-[12px]   lg:px-[16px] lg:py-[12px] lg:text-[16px] lg:rounded-[16px]">شروع یادگیری</button>
        <button className="font-[semibold] border   ts:px-[4px] ts:py-[2px] ts:text-[4px] ts:rounded-[6px]   os:px-[8px] os:py-[4px] os:text-[8px] os:rounded-[8px]   sm:px-[12px] sm:py-[8px] sm:text-[12px] sm:rounded-[10px]   lg:px-[16px] lg:py-[12px] lg:text-[16px] lg:rounded-[12px]">درباره‌ما</button>
      </div>
    </div>
  )
}

export default HeroSection
