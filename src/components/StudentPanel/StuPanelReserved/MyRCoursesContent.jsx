import React from 'react'
import { Field, Formik } from 'formik'
import MyReservedCourses from './MyReservedCourses'
import SearchIcon from '../Icons/SearchIcon'
import DateIcon from '../Icons/DateIcon'
import RemoveIcon from '../Icons/RemoveIcon'

const MyRCoursesContent = () => {
  return (
    <div className='w-[1230px] pr-6 py-6 bg-[#FCFCFC] rounded-3xl'>
      <h3 className='font-[bold] text-[24px] text-[#2F2F2F]'>رزرو من</h3>
      <div className='flex justify-start items-end gap-6 mt-8'>
        <div>
          <div className='flex gap-2'>
            <SearchIcon/>
            <span className='font-[medium] text-[16px] text-[#2F2F2F]'>جستجو</span>
          </div>
          <div className='mt-2'>
            <Formik>
              <Field className='w-[258px] h-12 indent-3.5 font-[medium] text-[12px] text-[#707070] bg-[#F1F1F1] rounded-2xl cursor-pointer' placeholder='دوره موردنظر را جستجو کنید...'/>
            </Formik>
          </div>
        </div>
        <div>
          <div className='flex gap-2'>
            <DateIcon/>
            <span className='font-[medium] text-[16px] text-[#272727]'>تاریخ برگزاری - اتمام</span>
          </div>
          <div className='mt-2'>
            <Formik>
              <Field className='w-[258px] h-12 indent-3.5 font-[medium] text-[12px] text-[#707070] bg-[#F1F1F1] rounded-2xl cursor-pointer'/>
            </Formik>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <span className='font-[bold] text-[16px] text-[#2F2F2F]'>ترتیب</span>
          <div className='flex justify-center items-center gap-2'>
            <div className='flex justify-center items-center gap-2 w-[126px] h-[37px] border border-[#Ff5353] rounded-[32px] cursor-pointer'>
              <RemoveIcon/>
              <span className='font-[medium] text-[16px] text-[#FF5353]'>تایید نشده</span>
            </div>
            <div className='flex justify-center items-center w-[103px] h-[37px] border border-[#2F2F2F] rounded-[32px] cursor-pointer'> 
              <span className='font-[medium] text-[16px] text-[#2F2F2F]'>تایید شده</span>
            </div>
          </div>
        </div>
      </div>
      <MyReservedCourses/>
    </div>
  )
}

export default MyRCoursesContent