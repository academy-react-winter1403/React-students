import {React , useState} from 'react'
import WeeklyBlog from '../../Common/WeeklyBlog/WeeklyBlog'
import SeeAll from '../../Common/SeeAll/SeeAll'
import fetchWeeklyBlogs from '../../../core/Hook/fetchWeeklyBlogs/fetchWeeklyBlogs'
import JsIcon2 from '../../../assets/Icons/java-script2.svg'


const WeeklyBlogs = () => {

  const [weeklyBlogg , setWeeklyBlog] = useState([
    {id:1 , mainIcon: JsIcon2 , backGroundColor: "#DAE01E" , title: "نقشه راه فول استک جاوا اسکریپت" , teacherName: "محمدحسین بحرالعلومی" , likeNumber: "6" , viewNumber: "20"},
    {id:2 , mainIcon: JsIcon2 , backGroundColor: "#DAE01E" , title: "نقشه راه فول استک جاوا اسکریپت" , teacherName: "محمدحسین بحرالعلومی" , likeNumber: "6" , viewNumber: "20"},
    {id:3 , mainIcon: JsIcon2 , backGroundColor: "#DAE01E" , title: "نقشه راه فول استک جاوا اسکریپت" , teacherName: "محمدحسین بحرالعلومی" , likeNumber: "6" , viewNumber: "20"},
  ])

  const { weeklyBlog } = fetchWeeklyBlogs();

  return (
    <div className="border   ts:mt-[18px]   os:mt-[32px]   sm:mt-[68px]   lg:mt-[112px]">
      <div className="text-center border">
        <button className="mx-[auto] font-[bold] text-[#A74DD1] bg-[#F1D1FF]   
          ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[4px]   
          os:px-[12px] os:py-[4px] os:text-[8px] os:rounded-[4px]   
          sm:px-[16px] sm:py-[8px] sm:text-[12px] sm:rounded-[8px]   
          lg:px-[16px] lg:py-[8px] lg:text-[12px] lg:rounded-[8px]">بلاگ ها</button>
        <h2 className="text-center font-[bold]   
          ts:mt-[4px] ts:text-[12px]   
          os:mt-[8px] os:text-[16px]   
          sm:mt-[12px] sm:text-[20px]   
          lg:mt-[12px] lg:text-[24px]">بلاگ های این هفته</h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center border   
        ts:gap-[8px] ts:mt-[16px]   
        os:gap-[12px] os:mt-[24px]   
        sm:gap-[20px] sm:mt-[32px]   
        lg:gap-[26px] lg:mt-[40px]">
        {
          weeklyBlogg.map((item , index) => {
            return <WeeklyBlog data={item} key={index}/>
          })
        }
      </div>
      <SeeAll/>
    </div>
  )
}


export default WeeklyBlogs
