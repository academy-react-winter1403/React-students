import React from 'react'
import AcademyLogo from '../../../assets/Icons/StudentPanelIcons/Untitled-1 4.svg'
import AcademuName from '../../../assets/Icons/StudentPanelIcons/Untitled-1 3.svg'
import DashboardIcon from '../Icons/DashboardIcon'
import MyCourseIcon from '../Icons/MyCourseIcon'
import MyReserveIcon from '../Icons/MyReserveIcon'
import FavoriteCoursesIcon from '../Icons/FavoriteCoursesIcon'
import FavoriteBlogsIcon from '../Icons/FavoriteBlogsIcon'
import ProfileIcon from '../Icons/ProfileIcon'
import PaymentsIcon from '../Icons/PaymentsIcon'
import StuPanelSideItems from './StuPanelSideItems'
import LogOutIcon from '../Icons/LogOutIcon'

const StuPanelSide = () => {

    const sideItems = [
        {id:1 , itemsName:"داشبرد" , itemsIcon: DashboardIcon},
        {id:2 , itemsName:"دوره من" , itemsIcon: MyCourseIcon},
        {id:3 , itemsName:"رزرو من" , itemsIcon: MyReserveIcon},
        {id:4 , itemsName:"دوره های مورد علاقه" , itemsIcon: FavoriteCoursesIcon},
        {id:5 , itemsName:"بلاگ های مورد علاقه" , itemsIcon: FavoriteBlogsIcon},
        {id:6 , itemsName:"پروفایل" , itemsIcon: ProfileIcon},
        {id:7 , itemsName:"پرداخت ها" , itemsIcon: PaymentsIcon}
    ]

  return (
    <div className='w-[290px] pt-6 pb-12 text-center'>
        <div className='flex justify-center items-center gap-1 cursor-pointer'>
            <img className='w-[42px] h-10' src={AcademyLogo} alt='academyLogo'/>
            <img className='w-[189px] h-[38px]' src={AcademuName} alt='academyName'/>
        </div>
        <div className='mt-[54px]'>
            {
                sideItems.map((item , index) => {
                    return <StuPanelSideItems data={item} key={index}/>
                })
            }
        </div>
        <div className='flex items-center gap-2 w-[258px] h-[57px] mt-40 mr-2 pr-4 bg-[#271F26] border border-[#FF5353] rounded-[50px]   hover:bg-[#383838]'>
            <LogOutIcon/>
            <span className='font-[medium] text-[16px] text-[#FF5353]'>خروج از حساب کاربری</span>
        </div>
    </div>
  )
}

export default StuPanelSide