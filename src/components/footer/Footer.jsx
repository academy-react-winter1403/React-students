import React from 'react'

const Footer = () => {
  return (
    <div className="footer   flex justify-between mt-[106px] mb-[75px] pr-[64px] pl-[64px] border">
      <div className="logo  flex items-center gap-[12px]">
        <img className="w-[56px] h-[56px]" src="../public/9a811899-ceeb-49d4-802d-a96c8ba50aee 1.png"/>
        <h2 className="font-[semibold] text-[20px]">React-students</h2>
      </div>
      <div className="links   flex justify-center items-center gap-[48px] mr-[199px] border">
        <a className="font-[medium] text-[20px]">خانه</a>
        <a className="font-[medium] text-[20px]">دوره ها</a>
        <a className="font-[medium] text-[20px]">بلاگ ها</a>
        <a className="font-[medium] text-[20px]">درباره ما</a>
        <a className="font-[medium] text-[20px]">تماس با ما</a>
      </div>
      <div className="socialMedia   flex justify-center items-center gap-[16px] mr-[302px] border">
        <img className="w-[24px] h-[24px]" src="../public/twitter.png" alt=""/>
        <img className="w-[24px] h-[24px]" src="../public/telegram.png" alt=""/>
        <img className="w-[24px] h-[24px]" src="../public/instagram.png" alt=""/>
      </div>
    </div>
  )
}

export default Footer
