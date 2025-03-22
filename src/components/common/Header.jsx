import React from 'react'



const Header = () => {
  return (
    <div className="header   flex justify-between border mt-[20px] pr-[64px] pl-[64px]">
      <div className="logo   flex gap-[8px]">
        <img className="w-[44px] h-[44px]" src="" alt=""/>
        <h2 className="mt-[13px] font-[semibold] text-[14px]">React-students</h2>
      </div>
      <div className="links   flex justify-center gap-[48px] border">
        <div className="mt-[12px]">
          <a className="font-[medium] text-[16px]">خانه</a>
          <div className="w-[40.3%] h-[3px] mx-[auto] bg-[#A74DD1] rounded-[1.5px]"></div>
        </div>
        <div className="mt-[12px]">
          <a className="font-[medium] text-[16px]">دوره ها</a>
          <div></div>
        </div>
        <div className="mt-[12px]">
          <a className="font-[medium] text-[16px]">بلاگ ها</a>
          <div></div>
        </div>
        <div className="mt-[12px]">
          <a className="font-[medium] text-[16px]">درباره ما</a>
          <div></div>
        </div>
      </div>
      <div className="loginSignup   flex justify-center gap-[24px] border">
        <a className="flex justify-center items-center mt-[12px] font-[semibold] text-[16px] border">ورود</a>
        <a className="flex justify-center items-center mt-[4px] px-[16px] py-[8px] font-[semibold] text-[16px] text-white bg-[#A74DD1] rounded-[12px]">ثبت نام</a>
      </div>
    </div>
  )
}

export default Header
