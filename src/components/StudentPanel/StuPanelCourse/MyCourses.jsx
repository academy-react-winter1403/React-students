import React from 'react'
import CoursesTitle from '../Common/CoursesTitle'
import MyCourse from './Common/MyCourse'
import PaginationButtons from '../Common/PaginationButtons'
import { useFetchMyCourses } from '../../../core/Hook/useFetchMyCourses/useFetchMyCourses'


const MyCourses = () => {

  const { myCourses } = useFetchMyCourses();

  const titleItems = [
    {id:1 , name1: '#' , name2: 'نام' , name3: 'مدرس' , name4: 'تاریخ برگزاری' , name5: 'تاریخ اتمام' , name6: 'سطح'},
  ]


  return (
    <div className='bg-[#F6F6F6]
      os:w-[240px] os:mt-4 os:pt-2 os:rounded-xl 
      sm:w-[352px] sm:mt-4 sm:pt-2 sm:rounded-2xl 
      lg:w-[640px] lg:mt-6 lg:pt-4 lg:rounded-3xl     
      xl:w-[880px]      
      3x:w-[1180px]    
      dark:bg-[#404040]'>
      {
        titleItems.map((item , index) => {
          return <CoursesTitle data={item} key={index}/>
        })
      }
      <div className='w-[1150px]'>
        {/* {
          myCourses.map((item , index) => {
            return <MyCourse data={item} key={index}/>
          })
        } */}
        <MyCourse/>
      </div>
      <PaginationButtons/>
    </div>
  )
}

export default MyCourses