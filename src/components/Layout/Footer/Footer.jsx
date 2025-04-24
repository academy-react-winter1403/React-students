import React from 'react'
import { Link } from 'react-router-dom'
import ReactStudentsIcon from '../../../assets/Icons/react-students.svg'
import TwitterIcon from '../../../assets/Icons/twitter.svg'
import TelegramIcon from '../../../assets/Icons/telegram.svg'
import InstagramIcon from '../../../assets/Icons/instagram.svg'


const Footer = () => {


  return (
    <div className="flex items-center border   
      ts:justify-between ts:mt-[28px] ts:mb-[20px] ts:px-[4px]   
      os:justify-between os:mt-[48px] os:mb-[32px] os:px-[16px]   
      sm:justify-between sm:mt-[60px] sm:mb-[44px] sm:px-[28px]   
      lg:justify-between lg:mt-[80px] lg:mb-[68px] lg:px-[40px]
      3x:gap-[250px] 3x:mt-[106px] 3x:mb-[75px] 3x:px-[64px]">
      <div className="flex items-center   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[12px]">
        <img className="ts:w-[20px] ts:h-[20px]   os:w-[32px] os:h-[32px]   sm:w-[44px] sm:h-[44px]   lg:w-[56px] lg:h-[56px]" src={ReactStudentsIcon} alt="reactStudentsIcon"/>
        <h2 className="font-[semibold]   ts:text-[12px]   os:text-[12px]   sm:text-[16px]   lg:text-[20px]">React-students</h2>
      </div>
      <div className="flex justify-center items-center   ts:gap-[8px]   os:gap-[20px]   sm:gap-[32px]   lg:gap-[48px]">
        <div>
          <Link className="hidden font-[medium]   os:block os:text-[12px]   sm:text-[16px]   lg:text-[20px]" to="/">خانه</Link>
        </div>
        <div>
          <Link className="hidden font-[medium]   os:block os:text-[12px]   sm:text-[16px]   lg:text-[20px]" to="/courselist">دوره ها</Link>
        </div>
        <div>
          <Link className="hidden font-[medium]   os:block os:text-[12px]   sm:text-[16px]   lg:text-[20px]" to="/bloglist">بلاگ ها</Link>
        </div>
        <div>
          <Link className="block font-[medium]   ts:text-[12px]   os:text-[12px]   sm:text-[16px]   lg:text-[20px]" to="/">درباره ما</Link>
        </div>
        <div>
          <Link className="block font-[medium]   ts:text-[12px]   os:text-[12px]   sm:text-[16px]   lg:text-[20px]" to="/">تماس با ما</Link>
        </div>
      </div>
      <div className="flex justify-center items-center   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[16px]">
        <Link to={"/"}>
          <img className="ts:w-[12px] ts:h-[12px]   os:w-[16px] os:h-[16px]   sm:w-[20px] sm:h-[20px]   lg:w-[24px] lg:h-[24px]" src={TwitterIcon} alt="twitterIcon"/>
        </Link>
        <Link to={"/"}>
          <img className="ts:w-[12px] ts:h-[12px]   os:w-[16px] os:h-[16px]   sm:w-[20px] sm:h-[20px]   lg:w-[24px] lg:h-[24px]" src={TelegramIcon} alt="telegramIcon"/>
        </Link>
        <Link to={"/"}>
          <img className="ts:w-[12px] ts:h-[12px]   os:w-[16px] os:h-[16px]   sm:w-[20px] sm:h-[20px]   lg:w-[24px] lg:h-[24px]" src={InstagramIcon} alt="instagramIcon"/>
        </Link>
      </div>
    </div>
  )
}

export default Footer
