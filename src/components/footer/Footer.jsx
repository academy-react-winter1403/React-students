import React from 'react'

const Footer = () => {
  return (
    <div className="flex items-center border   ts:justify-between ts:mt-[28px] ts:mb-[20px] ts:pr-[8px] ts:pl-[8px]   os:justify-between os:mt-[48px] os:mb-[32px] os:pr-[16px] os:pl-[16px]   sm:justify-between sm:mt-[60px] sm:mb-[44px] sm:pr-[28px] sm:pl-[28px]   lg:justify-between lg:mt-[80px] lg:mb-[68px] lg:pr-[40px] lg:pl-[40px]   2x:mt-[106px] 2x:mb-[75px] 2x:pr-[64px] 2x:pl-[64px]">
      <div className="flex items-center   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[12px]">
        <img className="ts:w-[20px] ts:h-[20px]   os:w-[32px] os:h-[32px]   sm:w-[44px] sm:h-[44px]   lg:w-[56px] lg:h-[56px]" src="../public/9a811899-ceeb-49d4-802d-a96c8ba50aee 1.png"/>
        <h2 className="font-[semibold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[20px]">React-students</h2>
      </div>
      <div className="flex justify-center items-center border   ts:gap-[12px]   os:gap-[24px]   sm:gap-[36px]   lg:gap-[48px] 2x:mr-[199px]">
        <a className="font-[medium]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[20px]">خانه</a>
        <a className="font-[medium]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[20px]">دوره ها</a>
        <a className="font-[medium]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[20px]">بلاگ ها</a>
        <a className="font-[medium]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[20px]">درباره ما</a>
        <a className="font-[medium]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[20px]">تماس با ما</a>
      </div>
      <div className="flex justify-center items-center border   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[16px] 2x:mr-[302px]">
        <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src="../public/twitter.png" alt=""/>
        <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src="../public/telegram.png" alt=""/>
        <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[24px] lg:h-[24px]" src="../public/instagram.png" alt=""/>
      </div>
    </div>
  )
}

export default Footer
