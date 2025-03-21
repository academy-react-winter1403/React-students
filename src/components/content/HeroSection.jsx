import React from 'react'

const HeroSection = () => {
  return (
    <div>
        <div className="content1  w-[584px] h-[261px] pt-[60px] text-center border">
          <div className="w-[584px] h-[134px] mx-[auto] border">
            <p className="text-[40px]">با آکادمی سپهر میتونی از کدنویسی
              <span className="mx-[5px] px-[5px] py-[5px] text-[#A74DD1] bg-[url('../public/Group 1.svg')] border-[3px] border-[#A74DD1]"> نهایت لذت </span>
            رو ببری</p>
            <p className="w-[547px] h-[42px] mt-[10px] text-[12px] leading-[100%] text-gray-500">آکادمی سپهر همیشه در تلاش بوده تا محیطی پرانرژی را برای علاقه مندان به حوزه برنامه نویسی و کدنویسی و طراحی وب سایت را فراهم کند.</p>
          </div>
            <div className="flex w-[15%] h-[40px] justify-center items-center gap-[20px] mx-[auto] mt-[20px] border">
            <button className="flex justify-center items-center w-[124px] h-[45px] px-[12px] py-[16px] text-[16px] text-white bg-[#A74DD1] rounded-[16px]">شروع یادگیری</button>
            <button className="w-[86px] h-[45px] px-[16px] py-[12px] text-[12px] border rounded-[10px]">درباره ما</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
