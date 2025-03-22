import React from 'react'

const WeeklyTeachers = () => {
  return (
    <div>
      <div className="content7   ">
        <div className="text-center border">
          <button className="w-[66px] h-[32px] px-[16px] py-[8px] mx-[auto] mt-[20px] text-[13px] text-[#A74DD1] bg-[#F1D1FF] rounded-[8px]">اساتید</button>
          <h2 className="mt-[10px] text-center text-[24px]">اساتید برتر این ماه</h2>
        </div>
        <div className="flex justify-center gap-[20px] h-[250px] mt-[20px] border">
          <div className="w-[421px] h-[216px] pr-[20px] border-2 border-[#E6EE03] rounded-[24px]">
            <h3 className="mt-[10px] text-[20px]">رتبه اول</h3>
            <div className="flex items-end">
              <div className="right   w-[65%] border">
                <img className="w-[56px] h-[56px]" src="" alt=""/>
                <span className="text-[20px]">علی رمضانی</span>
                <p className="text-[16px] text-[#959595]">دکترای هوش مصنوعی</p>
              </div>
              <img className="w-[112px] h-[112px]" src="" alt=""/>
            </div>
          </div>
          <div className="w-[421px] h-[216px] pr-[20px] border-2 border-[#DADADA] rounded-[24px]">
            <h3 className="mt-[10px] text-[20px]">رتبه دوم</h3>
            <div className="flex items-end">
              <div className="right   w-[65%] border">
                <img className="w-[56px] h-[56px]" src="" alt=""/>
                <span className="text-[20px]">علی رمضانی</span>
                <p className="text-[16px] text-[#959595]">دکترای هوش مصنوعی</p>
              </div>
              <img className="w-[112px] h-[112px]" src="" alt=""/>
            </div>
          </div>
          <div className="w-[421px] h-[216px] pr-[20px] border-2 border-[#FFBF6C] rounded-[24px]">
            <h3 className="mt-[10px] text-[20px]">رتبه سوم</h3>
            <div className="flex items-end">
              <div className="right   w-[65%] border">
                <img className="w-[56px] h-[56px]" src="" alt=""/>
                <span className="text-[20px]">علی رمضانی</span>
                <p className="text-[16px] text-[#959595]">دکترای هوش مصنوعی</p>
              </div>
              <img className="w-[112px] h-[112px]" src="" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeeklyTeachers
