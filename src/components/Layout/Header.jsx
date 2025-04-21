import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <div className="header  flex justify-center items-center  gap-[350px] h-[100px] border">
      <div className="logo  flex items-center gap-[10px]">
        <img src="/9a811899-ceeb-49d4-802d-a96c8ba50aee.png"/> 
        <h2 className="text-[13px]">React-students</h2>
      </div>
      <div className="links   flex justify-center items-center gap-[30px] w-[30%] h-[50px] border">
        <Link to="#" className="px-[10px] py-[5px] text-[13px] rounded-[10px]  hover:bg-gray-200">خانه</Link>
        <Link to="#" className="px-[10px] py-[5px] text-[13px] rounded-[10px]  hover:bg-gray-200">دوره ها</Link>
        <Link to="#" className="px-[10px] py-[5px] text-[13px] rounded-[10px]  hover:bg-gray-200">بلاگ ها</Link>
        <Link to="#" className="px-[10px] py-[5px] text-[13px] rounded-[10px]  hover:bg-gray-200">درباره ما</Link>
      </div>
      <div className="loginSignup  w-[9%] h-[60px] flex justify-center items-center gap-[10px] border">
        <Link to="/Login" className="flex justify-center items-center w-[35%] h-[30px] text-[13px] border rounded-[10px] cursor-pointer">ورود</Link>
        <Link to="/SignUp" className="flex justify-center items-center w-[55%] h-[30px] text-[13px] text-white bg-[#A74DD1] rounded-[10px] cursor-pointer">ثبت نام</Link>
      </div>
    </div>
  )
}

export default Header
