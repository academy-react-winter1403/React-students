import React from 'react'

const Footer = () => {
  return (
    <div className="footer  flex justify-center items-center  gap-[350px] h-[100px] border">
        <div className="logo  flex items-center gap-[10px]">
        <img className="w-[56px] h-[56px]" src="../public/9a811899-ceeb-49d4-802d-a96c8ba50aee 1.png"/>
        <h2 className="text-[20px]">React-students</h2>
      </div>
      <div className="links   flex justify-center items-center gap-[30px] w-[30%] h-[50px] border">
        <a className="text-[20px] rounded-[10px]  hover:bg-gray-200">خانه</a>
        <a className="text-[20px] rounded-[10px]  hover:bg-gray-200">دوره ها</a>
        <a className="text-[20px] rounded-[10px]  hover:bg-gray-200">بلاگ ها</a>
        <a className="text-[20px] rounded-[10px]  hover:bg-gray-200">درباره ما</a>
        <a className="text-[20px] rounded-[10px]  hover:bg-gray-200">تماس با ما</a>
      </div>
      <div className="socialMedia  w-[9%] h-[30px] flex justify-center items-center gap-[10px] border">
        <img className="w-[24px] h-[24px]" src="../public/twitter.png" alt=""/>
        <img className="w-[24px] h-[24px]" src="../public/telegram.png" alt=""/>
        <img className="w-[24px] h-[24px]" src="../public/instagram.png" alt=""/>
      </div>
    </div>
  )
}

export default Footer
