import React from 'react'
import MyCourses from '../StuPanelCourse/MyCourses'
import SearchIcon from '../Icons/SearchIcon'
import DateIcon from '../Icons/DateIcon'
import { Field, Formik } from 'formik'



const index = () => {
  return (
    <div className='w-[1230px] pr-6 py-6 bg-[#FCFCFC] rounded-3xl   dark:bg-[#606060]'>
      <h3 className='font-[bold] text-[24px] text-[#2F2F2F]   dark:text-[#FFFFFF]'>دوره های من</h3>
      <div className='flex justify-start gap-6 mt-8'>
        <div>
          <div className='flex gap-2'>
            <SearchIcon/>
            <span className='font-[medium] text-[16px] text-[#2F2F2F]   dark:text-[#FFFFFF]'>جستجو</span>
          </div>
          <div className='mt-2'>
            <Formik>
              <Field className='w-[258px] h-12 indent-3.5 font-[medium] text-[12px] text-[#707070] bg-[#F1F1F1] rounded-2xl cursor-pointer
                dark:bg-[#404040]' placeholder='دوره موردنظر را جستجو کنید...'/>
            </Formik>
          </div>
        </div>
        <div>
          <div className='flex gap-2'>
            <DateIcon/>
            <span className='font-[medium] text-[16px] text-[#272727]   dark:text-[#FFFFFF]'>تاریخ برگزاری - اتمام</span>
          </div>
          <div className='mt-2'>
            <Formik>
              <Field className='w-[258px] h-12 indent-3.5 font-[medium] text-[12px] text-[#707070] bg-[#F1F1F1] rounded-2xl cursor-pointer
                dark:bg-[#404040]'/>
            </Formik>
          </div>
        </div>
      </div>
      <MyCourses/>
    </div>
  )
}

export default index