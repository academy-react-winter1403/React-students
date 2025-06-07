import React from 'react'
import CoursesTitle from '../Common/CoursesTitle'
import MyReservedCourse from './Common/MyReservedCourse'
import PaginationButtons from '../Common/PaginationButtons' 
import { useFetchMyReserveds } from '../../../core/Hook/useFetchMyReserveds/useFetchMyReserveds'


const MyReserveds = () => {

  const { myReserveds} = useFetchMyReserveds();

  const titleItems = [
    {id:1 , name1: '#' ,  name2: 'نام' , name3: 'مدرس' , name4: 'تاریخ برگزاری' , name5: 'تاریخ اتمام' , name6: 'وضعیت'},
  ]

  return (
    <div className='w-[1180px] mt-6 pt-4 bg-[#F6F6F6] rounded-3xl   dark:bg-[#404040]'>
      {
        titleItems.map((item , index) => {
          return <CoursesTitle data={item} key={index}/>
        })
      }
      <div className='w-[1150px]'>
        {/* {
          myReserveds.map((item , index) => {
            return <MyReservedCourse data={item} key={index}/>
          })
        } */}
      </div>
      <PaginationButtons/>
    </div>
  )
}

export default MyReserveds