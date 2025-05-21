import React from 'react'
import { Link } from 'react-router-dom'
import TwitterIcon from '../Icons/TwitterIcon'
import TelegramIcon from '../Icons/TelegramIcon'
import InstagramIcon from '../Icons/InstagramIcon' 
import ReactStudentsLogo from '../../../assets/Icons/react-students.svg'


const Footer = () => {


  return (
    <div className="flex items-center border   
      ts:justify-between ts:px-[4px]   
      os:justify-between os:px-[16px]   
      sm:justify-between sm:px-[28px]   
      lg:justify-between lg:px-[40px]
      3x:gap-[250px] 3x:px-[64px]
      dark:bg-[#000000]">
      <div className="flex items-center   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[12px]">
        <img className="ts:w-[20px] ts:h-[20px]   os:w-[32px] os:h-[32px]   sm:w-[44px] sm:h-[44px]   lg:w-[56px] lg:h-[56px]" src={ReactStudentsLogo} alt="reactStudentsIcon"/>
        <h2 className="font-[semibold]   ts:text-[12px]   os:text-[12px]   sm:text-[16px]   lg:text-[20px]
        dark:text-gray-300">React-students</h2>
      </div>
      <div className="flex justify-center items-center   ts:gap-[8px]   os:gap-[20px]   sm:gap-[32px]   lg:gap-[48px]
      dark:text-gray-300">
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
        <TwitterIcon/>
        <TelegramIcon/>
        <InstagramIcon/>
      </div>
    </div>
  )
}

export default Footer
