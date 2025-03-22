import React from 'react'

const FallCourses = () => {
  return (
    <div className="content5   mt-[112px] border">
      <div className="text-center border">
        <button className="w-[70px] h-[32px] px-[16px] py-[8px] mx-[auto] font-[bold] text-[12px] text-[#A74DD1] bg-[#F1D1FF] rounded-[8px]">دوره ها</button>
        <h2 className="mt-[12px] text-center font-[bold] text-[24px]">دوره های جدید پاییزه</h2>
      </div>
      <div className="flex justify-center items-center gap-[20px] mt-[40px] border">
        <div className="overflow-hidden w-[420px] h-[336px] border rounded-[24px]">
          <div className="flex justify-center items-center w-[420px] h-[241px] bg-[#6F8EFF] rounded-b-[40px]">
            <img src="" alt=""/>
          </div>
          <h3 className="mt-[12px] mr-[16px] font-[bold] text-[24px]">دوره جاوااسکریپت</h3>
          <div className="flex justify-between items-center mt-[12px]">
            <div className="right  flex items-center gap-[8px] mr-[16px] border">
              <img className="w-[24px] h-[24px]" src="" alt=""/>
              <span className="m-[2px] font-[semibold] text-[14px] text-[#959595]">محمدحسین بحرالعلومی</span>
            </div>
            <div className="flex gap-[3px] border">
              <span className="font-[semibold] text-[20px]">4,200,000</span><span className="mt-[5px] font-[semibold] text-[14px]">تومان</span>
            </div>
          </div> 
        </div>
        <div className="overflow-hidden w-[420px] h-[336px] border rounded-[24px]">
          <div className="flex justify-center items-center w-[420px] h-[241px] bg-[#EEEEEE] rounded-b-[40px]">
            <img src="" alt=""/>
            <img src="" alt=""/>
          </div>
          <h3 className="mt-[12px] mr-[16px] font-[bold] text-[24px]">دوره html و CSS</h3>
          <div className="flex justify-between items-center mt-[12px]">
            <div className="right  flex items-center gap-[8px] mr-[16px] border">
              <img className="w-[24px] h-[24px]" src="" alt=""/>
              <span className="m-[2px] font-[semibold] text-[14px] text-[#959595]">محمدحسین بحرالعلومی</span>
            </div>
            <div className="flex gap-[3px] border">
              <span className="font-[semibold] text-[20px]">500,000</span><span className="mt-[5px] font-[semibold] text-[14px]">تومان</span>
            </div>
          </div> 
        </div>
        <div className="overflow-hidden w-[420px] h-[336px] border rounded-[24px]">
          <div className="flex justify-center items-center w-[420px] h-[241px] bg-[#DAE01E] rounded-b-[40px]">
            <img src="" alt=""/>
          </div>
          <h3 className="mt-[12px] mr-[16px] font-[bold] text-[24px]">دوره جاوااسکریپت</h3>
          <div className="flex justify-between items-center mt-[12px]">
            <div className="right  flex items-center gap-[8px] mr-[16px] border">
              <img className="w-[24px] h-[24px]" src="" alt=""/>
              <span className="m-[2px] font-[semibold] text-[14px] text-[#959595]">محمدحسین بحرالعلومی</span>
            </div>
            <div className="flex gap-[3px] border">
              <span className="font-[semibold] text-[20px]">2,000,000</span><span className="mt-[5px] font-[semibold] text-[14px]">تومان</span>
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

export default FallCourses
