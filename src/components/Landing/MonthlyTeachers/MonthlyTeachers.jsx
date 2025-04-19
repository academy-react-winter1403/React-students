import {React , useState} from 'react'
import MonthlyTeacher from '../../Common/MonthlyTeacher/MonthlyTeacher'
import useFetchTeachers from '../../../core/Hook/useFetchTeachers/useFetchTeachers'


const MonthlyTeachers = () => {

  const {teachers} = useFetchTeachers();

  const threeTeachers = teachers.slice(0 , 3);

  return (
    <div className="border   ts:mt-[18px]   os:mt-[32px]   sm:mt-[68px]   lg:mt-[112px]">
      <div className="text-center border">
        <button className="mx-[auto] font-[bold] text-[#A74DD1] bg-[#F1D1FF]   
          ts:px-[8px] ts:py-[4px] ts:text-[12px] ts:rounded-[8px]   
          os:px-[12px] os:py-[4px]  
          sm:px-[16px] sm:py-[8px]   
          lg:px-[16px] lg:py-[8px]">اساتید</button>
        <h2 className="text-center font-[bold]   
          ts:mt-[8px] ts:text-[16px]   
          os:mt-[8px] os:text-[20px]   
          sm:mt-[12px] sm:text-[20px]   
          lg:mt-[12px] lg:text-[24px]">اساتید برتر این ماه</h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-[24px] mt-[40px] border">
        {
          threeTeachers.map((item) => {
            return <MonthlyTeacher data={item}/>
          })
        }
      </div>
    </div>
  )
}


export default MonthlyTeachers

