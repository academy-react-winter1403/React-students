import React from 'react'

const HeroSection = () => {
  return (
    <div className="content1   mx-[auto] mt-[60px] text-center border">
      <div className="border">
        <div className="border">
          <p className="font-[semibold] text-[40px]">با آکادمی سپهر ، میتونی از کدنویسی</p>
        </div>
        <div className="flex justify-center items-center gap-[8px] mt-[8px] border">
          <span className="px-[15px] py-[11px] font-[semibold] text-[40px] text-[#A74DD1] border-[3px] border-[#A74DD1]">نهایت لذت</span>
          <span className="font-[semibold] text-[40px]">رو ببری</span>
        </div>
      </div>
      <div className="w-[547px] h-[42px] mx-[auto]">
        <p className="mt-[20px] font-[semibold] text-[16px] text-[#959595]">آکادمی سپهر همیشه در تلاش بوده تا محیطی پرانرژی را برای علاقه مندان به حوزه برنامه نویسی و کدنویسی و طراحی وب سایت را فراهم کند.</p>
      </div>
      <div className="flex justify-center items-center gap-[12px] mx-[auto] mt-[20px] border">
        <button className="flex justify-center items-center w-[124px] h-[45px] px-[16px] py-[12px] font-[semibold] text-[16px] text-white bg-[#A74DD1] rounded-[16px]">شروع یادگیری</button>
        <button className="w-[86px] h-[45px] px-[16px] py-[12px] font-[semibold] text-[16px] border rounded-[12px]">درباره‌ما</button>
      </div>
    </div>
  )
}

export default HeroSection
