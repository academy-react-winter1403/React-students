import React from 'react'

const Courses = () => {
  return (  
    <div className="content4   mt-[112px] border">
      <div className="text-center border">
        <button className="flex justify-center items-center w-[89px] h-[32px] mx-[auto] px-[16px] py-[8px] font-[bold] text-[12px] text-[#A74DD1] bg-[#F1D1FF] rounded-[8px]">دسته بندی</button>
        <h2 className="mt-[12px] text-center font-[bold] text-[24px]">دسته بندی دوره های ما</h2>
      </div>
      <div className="flex justify-center gap-[25px] mt-[41px] border">
        <div className="w-[309px] h-[230px] pr-[24px] border-[2px] border-[#E9E9E9] rounded-[24px]">
          <div className="flex justify-center items-center w-[56px] h-[56px] mt-[24px] p-[5px] bg-[#F7F7F7] rounded-[50px]">  
            <img className="w-[32px] h-[32px]" src="" alt=""/>
          </div>
          <h3 className="mt-[66px] font-[semibold] text-[24px]">ری اکت جی اس</h3>
          <p className="mt-[8px] font-[medium] text-[16px] text-[#959595]">کتابخانه جاوااسکریپت</p>
        </div>
        <div className="w-[310px] h-[230px] pr-[24px] border-[2px] border-[#E9E9E9] rounded-[24px]">
          <div className="flex justify-center items-center w-[56px] h-[56px] mt-[24px] p-[5px] bg-[#F7F7F7] rounded-[50px]">  
            <img className="w-[32px] h-[32px]" src="" alt=""/>
          </div>
          <h3 className="mt-[66px] font-[semibold] text-[24px]">جاوااسکریپت</h3>
          <p className="mt-[8px] font-[medium] text-[16px] text-[#959595]">زبان برنامه نویسی</p>
        </div>
        <div className="w-[310px] h-[230px] pr-[24px] border-[2px] border-[#E9E9E9] rounded-[24px]">
          <div className="flex justify-center items-center w-[56px] h-[56px] mt-[24px] p-[5px] bg-[#F7F7F7] rounded-[50px]">  
            <img className="w-[32px] h-[32px]" src="" alt=""/>
          </div>
          <h3 className="mt-[66px] font-[semibold] text-[24px]">پایتون</h3>
          <p className="mt-[8px] font-[medium] text-[16px] text-[#959595]">زبان برنامه نویسی</p>
        </div>
        <div className="w-[309px] h-[230px] pr-[24px] border-[2px] border-[#E9E9E9] rounded-[24px]">
          <div className="flex justify-center items-center w-[56px] h-[56px] mt-[24px] bg-[#F7F7F7] rounded-[50px]">
            <img className="w-[24px] h-[24px]" src="" alt=""/>
            <img className="w-[24px] h-[24px]" src="" alt=""/>
          </div>
          <h3 className="mt-[66px] font-[semibold] text-[24px]">CSS و HTML</h3>
          <p className="mt-[8px] font-[medium] text-[16px] text-[#959595]">ساختار طراحی وب</p>
        </div>
      </div>
    </div>
  )
}

export default Courses
