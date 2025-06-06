import React from 'react'


const Academy = () => {

  return (
    <div className="flex justify-between gap-[101px]   ts:justify-center ts:pt-[12px]   os:pt-[32px]   sm:pt-[60px]   lg:pt-[96px]
    dark:bg-[#000000]">
      <div className="ts:text-center   3x:pr-[64px]">
        <button className="font-[bold] text-[#A74DD1] bg-[#F1D1FF]   
          ts:px-[8px] ts:py-[4px] ts:text-[12px] ts:rounded-[4px]    
          os:px-[8px] os:py-[4px] os:rounded-[4px]    
          sm:px-[12px] sm:py-[4px] sm:rounded-[8px]   
          lg:px-[16px] lg:py-[8px] lg:text-[12px] lg:rounded-[8px]">
          درباره آکادمی
        </button>
        <h2 className="font-[bold]   ts:mt-[4px] ts:text-[20px]   os:mt-[4px] os:text-[24px]   sm:mt-[8px] sm:text-[28px]   lg:mt-[12px] lg:text-[32px]
        dark:text-gray-300">آکادمی سپهر</h2>
        <div className="ts:w-[240px] ts:mt-[12px]   os:w-[440px] os:mt-[16px]   sm:w-[520px] sm:mt-[20px]   lg:w-[543px] lg:mt-[24px]">
          <p className="font-[medium]   ts:text-[12px]   os:text-[16px]   sm:text-[20px]   lg:text-[20px]
          dark:text-gray-300">آکادمی سپهر با 20 سال سابقه آموزش تخصصی در زمینه کدنویسی و برنامه نویسی در سنین کودکی تا بزرگسال در محیطی جامع و پیشرفت متداول در تمامی مهارت ها در کنار اساتید بزرگ از سراسر جهان. اینجا مکانی برای بدست اوردن رویاهای شماست.</p>
        </div>
      </div>
      <div className="flex justify-center items-end gap-[24px] ml-[81px]   ts:hidden   3x:flex"> 
        <div className="flex items-end w-[201px] h-[116px] bg-[#F5F5F5] rounded-[24px]">
          <div className="flex justify-center items-end gap-[4px]">
            <p className="mr-[96px] mb-[20px] font-[medium] text-[16px]">اساتید</p>
            <p className="mb-[10px] font-[bold] text-[40px]">96</p>
          </div>
        </div>
        <div className="flex items-end w-[201px] h-[218px] bg-[#E6C5F4] rounded-[24px]">
          <div className="flex justify-center items-end gap-[4px]">
            <p className="mr-[87px] mb-[20px] font-[medium] text-[16px]">دوره</p>
            <p className="mb-[10px] font-[bold] text-[40px]">153</p>
          </div>
        </div>
        <div className="flex items-end w-[201px] h-[318px] bg-[#893FAB] rounded-[24px]">
          <div className="flex justify-center items-end gap-[4px]">
            <p className="mr-[59px] mb-[20px] font-[medium] text-[16px] text-white">دانشجو</p>
            <p className="mb-[10px] font-[bold] text-[40px] text-white">232</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Academy

