import React from 'react'

const WeeklyTeachers = () => {
  return (
    <div className="content7   mt-[112px]">
      <div className="text-center border">
        <button className="w-[66px] h-[32px] px-[16px] py-[8px] mx-[auto] font-[bold] text-[13px] text-[#A74DD1] bg-[#F1D1FF] rounded-[8px]">اساتید</button>
        <h2 className="mt-[12px] text-center font-[bold] text-[24px]">اساتید برتر این ماه</h2>
      </div>
      <div className="flex justify-center gap-[24px] mt-[40px] border">
        <div className="w-[421px] h-[216px] pt-[27px] pr-[24px] border-2 border-[#E6EE03] rounded-[24px]">
          <h3 className="font-[bold] text-[20px]">رتبه اول</h3>
          <div className="flex justify-between items-end">
            <div className="right   border">
              <img className="w-[56px] h-[56px] mt-[24px]" src="" alt=""/>
              <span className="mt-[8px] font-[semibold] text-[20px]">علی رمضانی</span>
              <p className="mt-[4px] font-[semibold] text-[16px] text-[#959595]">دکترای هوش مصنوعی</p>
            </div>
            <img className="left   w-[112px] h-[112px] ml-[16px]" src="" alt=""/>
          </div>
        </div>
        <div className="w-[421px] h-[216px] pt-[27px] pr-[24px] border-2 border-[#DADADA] rounded-[24px]">
          <h3 className="font-[bold] text-[20px]">رتبه دوم</h3>
          <div className="flex justify-between items-end">
            <div className="right   border">
              <img className="w-[56px] h-[56px] mt-[24px]" src="" alt=""/>
              <span className="mt-[8px] font-[semibold] text-[20px]">علی رمضانی</span>
              <p className="mt-[4px] font-[semibold] text-[16px] text-[#959595]">دکترای هوش مصنوعی</p>
            </div>
            <img className="left   w-[112px] h-[112px] ml-[16px]" src="" alt=""/>
          </div>
        </div>
        <div className="w-[421px] h-[216px] pt-[27px] pr-[24px] border-2 border-[#FFBF6C] rounded-[24px]">
          <h3 className="font-[bold] text-[20px]">رتبه سوم</h3>
          <div className="flex justify-between items-end">
            <div className="right   border">
              <img className="w-[56px] h-[56px] mt-[24px]" src="" alt=""/>
              <span className="mt-[8px] font-[semibold] text-[20px]">علی رمضانی</span>
              <p className="mt-[4px] font-[semibold] text-[16px] text-[#959595]">دکترای هوش مصنوعی</p>
            </div>
            <img className="left   w-[112px] h-[112px] ml-[16px]" src="" alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeeklyTeachers
