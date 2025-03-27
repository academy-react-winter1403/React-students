import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer  flex justify-center items-center  gap-[350px] h-[100px] border">
        <div className="logo  flex items-center gap-[10px]">
        <img src="../public/9a811899-ceeb-49d4-802d-a96c8ba50aee 1.png"/>
        <h2 className="text-[13px]">React-students</h2>
      </div>
      <div className="links   flex justify-center items-center gap-[30px] w-[30%] h-[50px] border">
        <Link to="" className="px-[10px] py-[5px] text-[13px] rounded-[10px]  hover:bg-gray-200">خانه</Link>
        <Link to="" className="px-[10px] py-[5px] text-[13px] rounded-[10px]  hover:bg-gray-200">دوره ها</Link>
        <Link to="" className="px-[10px] py-[5px] text-[13px] rounded-[10px]  hover:bg-gray-200">بلاگ ها</Link>
        <Link to="" className="px-[10px] py-[5px] text-[13px] rounded-[10px]  hover:bg-gray-200">درباره ما</Link>
        <Link to="" className="px-[10px] py-[5px] text-[13px] rounded-[10px]  hover:bg-gray-200">تماس با ما</Link>
      </div>
      <div className="socialMedia  w-[9%] h-[30px] flex justify-center items-center gap-[10px] border">
        <img className="w-[12%] h-[15px]" src="../public/twitter.png" alt=""/>
        <img className="w-[12%] h-[15px]" src="../public/telegram.png" alt=""/>
        <img className="w-[12%] h-[15px]" src="../public/instagram.png" alt=""/>
      </div>
    </div>
  )
}

export default Footer
