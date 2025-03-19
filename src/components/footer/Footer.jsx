import React from 'react'

const Footer = () => {
  return (
    <div className="footer  flex justify-center items-center  gap-[350px] h-[100px] border">
        <div className="logo  flex items-center gap-[10px]">
        <img src="../public/9a811899-ceeb-49d4-802d-a96c8ba50aee 1.png"/>
        <h2 className="text-[13px] font-bold">React-students</h2>
      </div>
      <div className="links   flex justify-center items-center gap-[30px] w-[30%] h-[50px] border">
        <a className="px-[10px] py-[5px] text-[13px] font-bold rounded-[10px]  hover:bg-gray-200">خانه</a>
        <a className="px-[10px] py-[5px] text-[13px] font-bold rounded-[10px]  hover:bg-gray-200">دوره ها</a>
        <a className="px-[10px] py-[5px] text-[13px] font-bold rounded-[10px]  hover:bg-gray-200">بلاگ ها</a>
        <a className="px-[10px] py-[5px] text-[13px] font-bold rounded-[10px]  hover:bg-gray-200">درباره ما</a>
        <a className="px-[10px] py-[5px] text-[13px] font-bold rounded-[10px]  hover:bg-gray-200">تماس با ما</a>
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
