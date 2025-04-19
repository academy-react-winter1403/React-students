import React from 'react'
import { Link } from 'react-router-dom'
import ArrowLeftIcon from '../../../assets/Icons/arrow-left.svg'


const SeeAll = () => {
  return (
    <div>
        <Link className="flex justify-center items-center mx-[auto] bg-[#A74DD1]   
          ts:gap-[4px] ts:w-[100px] ts:h-[36px] ts:mt-[16px] ts:px-[12px] ts:py-[8px] ts:rounded-[12px]   
          os:gap-[4px] os:w-[120px] os:h-[40px] os:mt-[24px] os:px-[12px] os:py-[8px] os:rounded-[12px]   
          sm:gap-[8px] sm:w-[140px] sm:h-[44px] sm:mt-[32px] sm:px-[16px] sm:py-[12px] sm:rounded-[16px]   
          lg:gap-[8px] lg:w-[156px] lg:h-[48px] lg:mt-[40px] lg:px-[16px] lg:py-[12px] lg:rounded-[16px]" 
          to={"/courselist"}
        >
          <span className="font-[semibold] text-white   ts:text-[12px]   os:text-[12px]   sm:text-[16px]   lg:text-[16px]">مشاهده همه</span>
          <img className="ts:hidden   lg:flex lg:w-[24px] lg:h-[24px]" src={ArrowLeftIcon} alt="arrowLeftIcon"/>
        </Link>
    </div>
  )
}

export default SeeAll