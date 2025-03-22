import React from 'react'

const Academy = () => {
  return (
    <div>
      <div className="content3  flex h-[400px] border">
        <div className="w-[50%] h-[400px] px-[80px]">
          <button className="w-[97px] h-[32px] mt-[10px] text-[12px] text-[#A74DD1] bg-[#F1D1FF] rounded-[8px]">درباره آکادمی</button>
          <h2 className="mt-[10px] text-[32px]">آکادمی سپهر</h2>
          <p className="mt-[20px] text-[20px]">آکادمی سپهر با 20 سال سابقه آموزش تخصصی در زمینه کدنویسی و برنامه نویسی در سنین کودکی تا بزرگسال در محیطی جامع و پیشرفت متداول در تمامی مهارت ها در کنار اساتید بزرگ از سراسر جهان. اینجا مکانی برای بدست اوردن رویاهای شماست.</p>
        </div>
        <div className="flex justify-center items-end gap-[25px] w-[50%] h-[400px] border"> 
          <div className="flex justify-center items-end w-[201px] h-[116px] mb-[20px] bg-[#F5F5F5] rounded-[24px]">
            <div className="flex justify-center items-end gap-[20px] mb-[20px]">
              <p className="mb-[10px] text-[16px]">اساتید</p>
              <p className="text-[40px]">96</p>
            </div>
          </div>
          <div className="flex justify-center items-end w-[201px] h-[218px] mb-[20px] bg-[#E6C5F4] rounded-[24px]">
            <div className="flex justify-center items-end gap-[20px] mb-[20px]">
              <p className="mb-[10px] text-[16px]">دوره</p>
              <p className="text-[40px]">153</p>
            </div>
          </div>
          <div className="flex justify-center items-end w-[201px] h-[318px] mb-[20px] bg-[#893FAB] rounded-[24px]">
            <div className="flex justify-center items-end gap-[20px] mb-[20px]">
              <p className="mb-[10px] text-[16px] text-white">دانشجو</p>
              <p className="text-[40px] text-white">232</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Academy
