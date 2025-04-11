import React from 'react'
import { Link } from 'react-router-dom'
import ArrowLeftIcon from '../../../assets/Icons/arrow-left.svg'


const SeeAll = () => {
  return (
    <div>
        <Link className="flex justify-center items-center mx-[auto] bg-[#A74DD1]   ts:gap-[4px] ts:w-[40px] ts:h-[20px] ts:mt-[16px] ts:px-[8px] ts:py-[4px] ts:rounded-[4px]   os:gap-[4px] os:w-[80px] os:h-[28px] os:mt-[24px] os:px-[12px] os:py-[8px] os:rounded-[8px]   sm:gap-[8px] sm:w-[120px] sm:h-[36px] sm:mt-[32px] sm:px-[16px] sm:py-[12px] sm:rounded-[16px]   lg:gap-[8px] lg:w-[156px] lg:h-[48px] lg:mt-[40px] lg:px-[16px] lg:py-[12px] lg:rounded-[16px]" to={"/courselist"}>
          <span className="font-[semibold] text-white   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">مشاهده همه</span>
          <img className="ts:hidden   lg:flex lg:w-[24px] lg:h-[24px]" src={ArrowLeftIcon} alt="arrowLeftIcon"/>
        </Link>
    </div>
  )
}

export default SeeAll