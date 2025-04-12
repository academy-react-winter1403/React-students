import {React , useState} from 'react'
import WeeklyTeacher from '../../Common/WeeklyTeacher/WeeklyTeacher'
import ProfileImg from '../../../assets/Icons/profile-picture.svg'
import MedalFirstIcon from '../../../assets/Icons/medal-first-place.svg'
import MedalSecondIcon from '../../../assets/Icons/medal-second-place.svg'
import MedalThirdIcon from '../../../assets/Icons/medal-third-place.svg'


const WeeklyTeachers = () => {

  const [weeklyTeachers , setWeeklyTeachers] = useState([
    {id:1 , rank:"رتبه اول" , profileImg: ProfileImg, teacherName: "علی رمضانی" , description: "دکترای هوش مصنوعی" , medalImg:MedalFirstIcon},
    {id:2 , rank:"رتبه دوم" , profileImg: ProfileImg, teacherName: "علی رمضانی" , description: "دکترای هوش مصنوعی" , medalImg:MedalSecondIcon},
    {id:3 , rank:"رتبه سوم" , profileImg: ProfileImg, teacherName: "علی رمضانی" , description: "دکترای هوش مصنوعی" , medalImg:MedalThirdIcon}
  ])


  return (
    <div className="border   ts:mt-[18px]   os:mt-[32px]   sm:mt-[68px]   lg:mt-[112px]">
      <div className="text-center border">
        <button className="mx-[auto] font-[bold] text-[#A74DD1] bg-[#F1D1FF]   ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[4px]   os:px-[12px] os:py-[4px] os:text-[8px] os:rounded-[4px]   sm:px-[16px] sm:py-[8px] sm:text-[12px] sm:rounded-[8px]   lg:px-[16px] lg:py-[8px] lg:text-[12px] lg:rounded-[8px]">اساتید</button>
        <h2 className="text-center font-[bold]   ts:mt-[4px] ts:text-[12px]   os:mt-[8px] os:text-[16px]   sm:mt-[12px] sm:text-[20px]   lg:mt-[12px] lg:text-[24px]">اساتید برتر این ماه</h2>
      </div>
      <div className="flex justify-center gap-[24px] mt-[40px] border">
        {
          weeklyTeachers.map((item , index) => {
            return <WeeklyTeacher data={item} key={index}/>
          })
        }
      </div>
    </div>
  )
}


export default WeeklyTeachers

