import React from 'react'

const PanelList = () => {
  return (

    <div className='flex flex-wrap flex-col gap-2 bg-white text-right w-64 rounded-3xl pb-5'>
        <span className='text-xs text-listItem pt-3 pr-3 '>عمومی</span>

        <ul className='flex flex-wrap flex-col gap-3 justify-end p-2'>
            <li className='pr-8 bg-Dashboard bg-no-repeat bg-[98%_110%] bg-[length:24px_24px] cursor-pointer hover:bg-slate-200 rounded-3xl'>داشبرد</li>
            <li className='pr-8 bg-MyCourse bg-no-repeat bg-[98%_110%] bg-[length:24px_24px] cursor-pointer hover:bg-slate-200 rounded-3xl'>دوره من</li>
            <li className='pr-8 bg-MyReserve bg-no-repeat bg-[98%_140%] bg-[length:24px_24px] cursor-pointer hover:bg-slate-200 rounded-3xl'>رزرو من</li>
            <li className='pr-8 bg-MyFavoriteCourse bg-no-repeat bg-[98%_120%] bg-[length:24px_24px] cursor-pointer hover:bg-slate-200 rounded-3xl'>دوره مورد علاقه</li>
            <li className='pr-8 bg-MyFavoriteBlog bg-no-repeat bg-[98%_120%] bg-[length:24px_24px] cursor-pointer hover:bg-slate-200 rounded-3xl'>بلاگ مورد علاقه</li>
        </ul>

        <span className='text-xs text-listItem pr-3'>حساب کاربری</span>

        <ul className='flex flex-wrap flex-col gap-3 justify-end p-2'>
            <li className='pr-8 bg-MyProfile bg-no-repeat bg-[98%_120%] bg-[length:24px_24px] cursor-pointer hover:bg-slate-200 rounded-3xl'>پروفایل من</li>
            <li className='pr-8 bg-Count bg-no-repeat bg-[98%_120%] bg-[length:24px_24px] cursor-pointer hover:bg-slate-200 rounded-3xl'>پرداخت ها</li>
            <li className='pr-8 bg-LeftAccount bg-no-repeat bg-[98%_120%] bg-[length:24px_24px] cursor-pointer text-red-500 hover:bg-red-200 rounded-3xl'>خروج از حساب</li>
        </ul>

    </div>

  )
}

export default PanelList