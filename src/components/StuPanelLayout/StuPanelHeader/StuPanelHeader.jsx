import React from 'react'
import { Link } from 'react-router-dom'
import UserPhoto from '../../../assets/Icons/StudentPanel/userPhoto.svg'
import NotifeIcon from '../Icons/NotifeIcon'
import DarkMode from '../../DarkMode/DarkMode'


const StuPanelHeader = () => {
  return (
    <div className='flex justify-between items-center h-[67px] px-2'>
        <div className='flex justify-center gap-2 cursor-pointer'>
            <img className='w-12 h-12' src={UserPhoto}/>
            <div>
                <h2 className='font-[semibold] text-[16px] text-[#FCFCFC]'>پارسا آقایی</h2>
                <span className='font-[medium] text-[14px] text-[#F6F6F6]'>دانشجو</span>
            </div>
        </div>
        <div className='flex justify-center gap-16'>
            <Link className='font-[medium] text-[16px] text-[#FCFCFC]' to={"/"}>صفحه اصلی</Link>
            <Link className='font-[medium] text-[16px] text-[#FCFCFC]'>گزارش</Link>
            <Link className='font-[medium] text-[16px] text-[#FCFCFC]'>ارتباط با ما</Link>
        </div>
        <div className='flex justify-center gap-2'>
            <div className='flex justify-center items-center w-[48px] h-[48px] bg-[#2F2F2F] rounded-[50px] cursor-pointer relative'>
                <NotifeIcon/>
                <div className='flex justify-center items-center w-4 h-4 bg-[#FF5E5E] rounded-[50px] absolute right-0 bottom-[-4px]'>
                    <span className='font-[medium] text-[12px] text-[#FCFCFC]'>2</span>
                </div>
            </div>
            <div className='flex justify-center items-center w-[48px] h-[48px] bg-[#2F2F2F] rounded-[50px] cursor-pointer'>
                <DarkMode/>
            </div>
        </div>
    </div>
  )
}

export default StuPanelHeader