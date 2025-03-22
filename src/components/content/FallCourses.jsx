import React from 'react'

const FallCourses = () => {
  return (
    <div>
      <div className="content5   border">
        <div className="text-center border">
          <button className="w-[70px] h-[32px] px-[16px] py-[8px] mx-[auto] mt-[20px] text-[12px] text-[#A74DD1] bg-[#F1D1FF] rounded-[8px]">دوره ها</button>
          <h2 className="mt-[10px] text-center text-[24px]">دوره های جدید پاییزه</h2>
        </div>
        <div className="flex justify-center items-center gap-[20px] mt-[20px] border">
          <div className="overflow-hidden w-[420px] h-[336px] border rounded-[24px]">
            <div className="flex justify-center items-center w-[100%] h-[241px] bg-[#6F8EFF] rounded-b-[40px]">
              <img src="" alt=""/>
            </div>
            <h3 className="mt-[5px] mr-[10px] text-[24px]">دوره جاوااسکریپت</h3>
            <div className="flex justify-between items-center mt-[10px]">
              <div className="right  flex items-center gap-[5px] w-[50%] h-[35px] border">
                <img src="" alt=""/>
                <span className="text-[14px] text-[#959595]">محمدحسین بحرالعلومی</span>
              </div>
              <span className="text-[20px]">4,200,000</span><span className="text-[14px]">تومان</span>
            </div> 
          </div>
          <div className="overflow-hidden w-[420px] h-[336px] border rounded-[24px]">
            <div className="flex justify-center items-center w-[100%] h-[241px] bg-[#EEEEEE] rounded-b-[40px]">
              <img src="" alt=""/>
              <img src="" alt=""/>
            </div>
            <h3 className="mt-[5px] mr-[10px] text-[24px]">دوره html و CSS</h3>
            <div className="flex justify-between items-center mt-[10px]">
              <div className="right  flex items-center gap-[5px] w-[50%] h-[35px] border">
                <img src="" alt=""/>
                <span className="text-[14px] text-[#959595]">محمدحسین بحرالعلومی</span>
              </div>
              <span className="text-[20px]">500,000</span><span className="text-[14px]">تومان</span>
            </div> 
          </div>
          <div className="overflow-hidden w-[420px] h-[336px] border rounded-[24px]">
            <div className="flex justify-center items-center w-[100%] h-[241px] bg-[#DAE01E] rounded-b-[40px]">
              <img src="" alt=""/>
            </div>
            <h3 className="mt-[5px] mr-[10px] text-[24px]">دوره جاوااسکریپت</h3>
            <div className="flex justify-between items-center mt-[10px]">
              <div className="right  flex items-center gap-[5px] w-[50%] h-[35px] border">
                <img src="" alt=""/>
                <span className="text-[14px] text-[#959595]">محمدحسین بحرالعلومی</span>
              </div>
              <span className="text-[20px]">2,000,000</span><span className="text-[14px]">تومان</span>
            </div> 
          </div>
        </div>
        <button className="flex justify-center items-center gap-[8px] w-[156px] h-[48px] mt-[34px] px-[16px] py-[12px] mx-[auto] bg-[#A74DD1] rounded-[16px]">
          <span className="text-[16px] text-white">مشاهده همه</span>
          <img className="w-[24px] h-[24px]" src="" alt=""/>
        </button>
      </div>
    </div>
  )
}

export default FallCourses
