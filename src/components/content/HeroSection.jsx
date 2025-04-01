import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <div className="heroSection  w-[100%] h-[300px] pt-[60px] border">
          <div className="w-[30%] mx-[auto] text-center border">
              <p className="text-[30px]">با آکادمی سپهر میتونی از کدنویسی<span className="mx-[5px] text-[#A74DD0] border border-2 border-[#A74DD0]"> نهایت لذت </span>رو ببری</p>
              <p className="mt-[10px] text-[12px] text-gray-500">آکادمی سپهر همیشه در تلاش بوده تا محیطی پرانرژی را برای علاقه مندان به حوزه برنامه نویسی و کدنویسی و طراحی وب سایت را فراهم کند.</p>
          </div>
          <div className="flex w-[15%] h-[40px] justify-center items-center gap-[20px] mx-[auto] mt-[20px] border">
              <button className="w-[38%] h-[30px] text-[12px] text-white bg-[#A74DD1] rounded-[10px]">شروع یادگیری</button>
              <button className="w-[40%] h-[30px] text-[12px] border rounded-[10px]">درباره ما</button>
          </div>
      </div>
    </div>
  )
}

export default HeroSection
