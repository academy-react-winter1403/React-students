import React from 'react'

const WeeklyBlogs = () => {
  return (
    <div className="mt-[112px]">
      <div className="text-center border">
        <button className="mx-[auto] font-[bold] text-[#A74DD1] bg-[#F1D1FF]   ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[4px]   os:px-[12px] os:py-[4px] os:text-[8px] os:rounded-[4px]   sm:px-[16px] sm:py-[8px] sm:text-[12px] sm:rounded-[8px]   lg:px-[16px] lg:py-[8px] lg:text-[12px] lg:rounded-[8px]">بلاگ ها</button>
        <h2 className="text-center font-[bold]   ts:mt-[4px] ts:text-[12px]   os:mt-[8px] os:text-[16px]   sm:mt-[12px] sm:text-[20px]   lg:mt-[12px] lg:text-[24px]">بلاگ های این هفته</h2>
      </div>
      <div>
        <div className="flex justify-center items-center gap-[20px] mt-[40px] border">
          <div className="overflow-hidden w-[420px] h-[336px] border rounded-[24px]">
            <div className="flex justify-center items-center h-[241px] bg-[#DAE01E] rounded-b-[40px]">
              <img className="w-[24px] h-[24px]" src="" alt=""/>
            </div>
            <h3 className="mt-[12px] mr-[16px] font-[bold] text-[24px]">نقشه راه فول استک جاوااسکریپت</h3>
            <div className="flex justify-between items-center mt-[12px] text-[#959595]">
              <div className="right  flex items-center gap-[8px] mr-[16px] border">
                <img className="w-[24px] h-[24px]" src="" alt=""/>
                <span className="mt-[2px] font-[semibold] text-[14px] text-[#959595]">محمدحسین بحرالعلومی</span>
              </div>
              <div className="flex gap-[16px]">
                <div className="flex gap-[8px] border">
                  <span className="mt-[1.5px] font-[semibold] text-[16px]">6</span>
                  <img className="w-[24px] h-[24px]" src="" alt=""/>
                </div>
                <div className="flex gap-[8px] ml-[16px] border">
                  <span className="mt-[1.5px] font-[semibold] text-[16px]">20</span>
                  <img className="w-[24px] h-[24px]" src="" alt=""/>
                </div>
              </div>
            </div> 
          </div>
          <div className="overflow-hidden w-[420px] h-[336px] border rounded-[24px]">
            <div className="flex justify-center items-center h-[241px] bg-[#DAE01E] rounded-b-[40px]">
              <img className="w-[24px] h-[24px]" src="" alt=""/>
            </div>
            <h3 className="mt-[12px] mr-[16px] font-[bold] text-[24px]">نقشه راه فول استک جاوااسکریپت</h3>
            <div className="flex justify-between items-center mt-[12px] text-[#959595]">
              <div className="right  flex items-center gap-[8px] mr-[16px] border">
                <img className="w-[24px] h-[24px]" src="" alt=""/>
                <span className="mt-[2px] font-[semibold] text-[14px] text-[#959595]">محمدحسین بحرالعلومی</span>
              </div>
              <div className="flex gap-[16px]">
                <div className="flex gap-[8px] border">
                  <span className="mt-[1.5px] font-[semibold] text-[16px]">6</span>
                  <img className="w-[24px] h-[24px]" src="" alt=""/>
                </div>
                <div className="flex gap-[8px] ml-[16px] border">
                  <span className="mt-[1.5px] font-[semibold] text-[16px]">20</span>
                  <img className="w-[24px] h-[24px]" src="" alt=""/>
                </div>
              </div>
            </div> 
          </div>
          <div className="overflow-hidden w-[420px] h-[336px] border rounded-[24px]">
            <div className="flex justify-center items-center h-[241px] bg-[#DAE01E] rounded-b-[40px]">
              <img className="w-[24px] h-[24px]" src="" alt=""/>
            </div>
            <h3 className="mt-[12px] mr-[16px] font-[bold] text-[24px]">نقشه راه فول استک جاوااسکریپت</h3>
            <div className="flex justify-between items-center mt-[12px] text-[#959595]">
              <div className="right  flex items-center gap-[8px] mr-[16px] border">
                <img className="w-[24px] h-[24px]" src="" alt=""/>
                <span className="mt-[2px] font-[semibold] text-[14px] text-[#959595]">محمدحسین بحرالعلومی</span>
              </div>
              <div className="flex gap-[16px]">
                <div className="flex gap-[8px] border">
                  <span className="mt-[1.5px] font-[semibold] text-[16px]">6</span>
                  <img className="w-[24px] h-[24px]" src="" alt=""/>
                </div>
                <div className="flex gap-[8px] ml-[16px] border">
                  <span className="mt-[1.5px] font-[semibold] text-[16px]">20</span>
                  <img className="w-[24px] h-[24px]" src="" alt=""/>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <button className="flex justify-center items-center gap-[8px] w-[156px] h-[48px] mt-[40px] px-[16px] py-[12px] mx-[auto] bg-[#A74DD1] rounded-[16px]">
          <span className="font-[semibold] text-[16px] text-white">مشاهده همه</span>
          <img className="w-[24px] h-[24px]" src="" alt=""/>
      </button>
    </div>
  )
}

export default WeeklyBlogs
