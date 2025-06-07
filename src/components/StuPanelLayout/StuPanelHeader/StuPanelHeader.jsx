import React from 'react'
import { Link } from 'react-router-dom'
import UserPhoto from '../../../assets/Icons/StudentPanel/userPhoto.svg'
import NotifeIcon from '../Icons/NotifeIcon'
import DarkMode from '../../DarkMode/DarkMode'


const StuPanelHeader = () => {
  return (
    <div className='flex justify-between items-center px-2
        sm:w-[70%] sm:h-16   xl:w-[76%]   3x:w-full 3x:h-[67px]'>
        <div className='flex justify-center cursor-pointer gap-2'>
            <img className='w-12 h-12' src={UserPhoto}/>
            <div>
                <h2 className='font-[semibold] text-[#FCFCFC]   sm:text-xs   xl:text-sm   3x:text-base'>پارسا آقایی</h2>
                <span className='font-[medium] text-[#F6F6F6]   sm:text-xs   3x:text-sm'>دانشجو</span>
            </div>
        </div>
        <div className='flex justify-center gap-16'>
            <Link className='font-[medium] text-[#FCFCFC]   sm:text-xs   xl:text-sm   3x:text-base' to={"/"}>صفحه اصلی</Link>
            <Link className='font-[medium] text-[#FCFCFC]   sm:text-xs   xl:text-sm   3x:text-base' to={"*"}>گزارش</Link>
            <Link className='font-[medium] text-[#FCFCFC]   sm:text-xs   xl:text-sm   3x:text-base' to={"*"}>ارتباط با ما</Link>
        </div>
        <div className='flex justify-center gap-2'>
            <div className='flex justify-center items-center bg-[#2F2F2F] rounded-[50px] cursor-pointer relative 
                sm:w-10 sm:h-10   3x:w-12 3x:h-12'>
                <NotifeIcon/>
                <div className='flex justify-center items-center w-4 h-4 bg-[#FF5E5E] rounded-[50px] absolute right-0 bottom-[-4px]'>
                    <span className='font-[medium] text-[#FCFCFC] text-xs'>2</span>
                </div>
            </div>
            <div className='flex justify-center items-center bg-[#2F2F2F] rounded-[50px] cursor-pointer 
                sm:w-10 sm:h-10   3x:w-12 3x:h-12'>
                <DarkMode/>
            </div>
        </div>
    </div>
  )
}

export default StuPanelHeader