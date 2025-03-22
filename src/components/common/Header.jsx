import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <div className="header  flex justify-center items-center  gap-[350px] h-[100px] border">
      <div className="logo  flex items-center gap-[10px]">
        <img src="" alt=""/>
        <h2 className="text-[14px]">React-students</h2>
      </div>
      <div className="links   flex justify-center items-center gap-[30px] w-[30%] h-[50px] border">
        <a className="px-[10px] py-[5px] text-[16px] rounded-[10px]  hover:bg-gray-200">خانه</a>
        <a className="px-[10px] py-[5px] text-[16px] rounded-[10px]  hover:bg-gray-200">دوره ها</a>
        <a className="px-[10px] py-[5px] text-[16px] rounded-[10px]  hover:bg-gray-200">بلاگ ها</a>
        <a className="px-[10px] py-[5px] text-[16px] rounded-[10px]  hover:bg-gray-200">درباره ما</a>
      </div>
      <div className="loginSignup  w-[9%] h-[60px] flex justify-center items-center gap-[10px] border">
        <a className="flex justify-center items-center w-[31px] h-[21px] text-[16px] border">ورود</a>
        <a className="flex justify-center items-center w-[83px] h-[37px] px-[16px] py-[8px] text-[16px] text-white bg-[#A74DD1] rounded-[12px]">ثبت نام</a>
      </div>
    </div>
  )
}

export default Header
