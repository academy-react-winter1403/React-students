import React from 'react'

const Academy = () => {
  return (
    <div className="content3  flex justify-between gap-[101px] border">
      <div className="pr-[64px] border">
        <button className="w-[97px] h-[32px] mt-[10px] px-[16px] py-[8px] font-[bold] text-[12px] text-[#A74DD1] bg-[#F1D1FF] rounded-[8px]">درباره آکادمی</button>
        <h2 className="w-[170px] h-[42px] mt-[12px] font-[bold] text-[32px]">آکادمی سپهر</h2>
        <p className="w-[543px] h-[104px] mt-[24px] font-[medium] text-[20px]">آکادمی سپهر با 20 سال سابقه آموزش تخصصی در زمینه کدنویسی و برنامه نویسی در سنین کودکی تا بزرگسال در محیطی جامع و پیشرفت متداول در تمامی مهارت ها در کنار اساتید بزرگ از سراسر جهان. اینجا مکانی برای بدست اوردن رویاهای شماست.</p>
      </div>
      <div className="flex justify-center items-end gap-[24px] ml-[81px] border"> 
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
