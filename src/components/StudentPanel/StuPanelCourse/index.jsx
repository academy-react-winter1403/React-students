import React from 'react'
import MyCourses from '../StuPanelCourse/MyCourses'
import SearchIcon from '../Icons/SearchIcon'
import DateIcon from '../Icons/DateIcon'
import { Field, Formik } from 'formik'



const index = () => {
  return (
    <div className='w-[1230px] pr-6 py-6 bg-[#FCFCFC] rounded-3xl   dark:bg-[#606060]'>
      <h3 className='font-[bold] text-[#2F2F2F]   
        sm:text-base   3x:text-[2xl]   
        dark:text-[#FFFFFF]'>دوره های من</h3>
      <div className='flex justify-start gap-6 mt-8'>
        <div>
          <div className='flex items-center gap-2'>
            <SearchIcon/>
            <span className='font-[medium] text-sm text-[#2F2F2F]   
              3x:text-base    
              dark:text-[#FFFFFF]'>جستجو</span>
          </div>
          <div className='mt-2'>
            <Formik>
              <Field className='font-[medium] text-[#707070] bg-[#F1F1F1] cursor-pointer   
                w-[200px] h-8 indent-3.5 text-xs rounded-xl
                xl:w-[240px] xl:h-10 xl:rounded-2xl
                3x:w-[258px] 3x:h-12 3x:rounded-2xl
                dark:bg-[#404040]' placeholder='دوره موردنظر را جستجو کنید...'/>
            </Formik>
          </div>
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <DateIcon/>
            <span className='font-[medium] text-sm text-[#272727]   
              3x:text-base    
              dark:text-[#FFFFFF]'>تاریخ برگزاری - اتمام</span>
          </div>
          <div className='mt-2'>
            <Formik>
              <Field className='font-[medium] text-[#707070] bg-[#F1F1F1] cursor-pointer 
                w-[200px] h-8 indent-3.5 text-xs rounded-xl
                xl:w-[240px] xl:h-10 xl:rounded-2xl
                3x:w-[258px] 3x:h-12 3x:rounded-2xl
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