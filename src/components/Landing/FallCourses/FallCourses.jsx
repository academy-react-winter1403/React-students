import {React , useState } from 'react'
import FallCourse from '../../Common/FallCourse/FallCourse'
import SeeAll from '../../Common/SeeAll/SeeAll'
import HtmlIcon2 from '../../../assets/Icons/html-5-2.svg'
import JsIcon2 from '../../../assets/Icons/java-script2.svg'
import ReactIcon2 from '../../../assets/Icons/react2.svg'
import VectorLine3 from '../../../assets/Icons/Group 7.svg'






const FallCourses = () => {

  const [fallcourse , setFallCourse] = useState([
    {id:1 , mainImg:ReactIcon2 , backGroundColor:"#6F8EFF" , title:"دوره جاوااسکریپت" , teacher:"محمدحسین بحرالعلومی" , price:"4،200،000"},
    {id:2 , mainImg:HtmlIcon2 , backGroundColor:"#EEEEEE" , title:"دوره جاوااسکریپت" , teacher:"محمدحسین بحرالعلومی" , price:"500،000"},
    {id:3 , mainImg:JsIcon2 , backGroundColor:"#DAE01E" , title:"دوره جاوااسکریپت" , teacher:"محمدحسین بحرالعلومی" , price:"2،000،000"}
  ]);



  return (
    <div className="border relative z-[10]     ts:mt-[18px]   os:mt-[32px]   sm:mt-[68px]   lg:mt-[112px]">
      <div className="text-center border">
        <button className="mx-[auto] font-[bold] text-[#A74DD1] bg-[#F1D1FF]   ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[4px]   os:px-[12px] os:py-[4px] os:text-[8px] os:rounded-[4px]   sm:px-[16px] sm:py-[8px] sm:text-[12px] sm:rounded-[8px]   lg:px-[16px] lg:py-[8px] lg:text-[12px] lg:rounded-[8px]">دوره ها</button>
        <h2 className="text-center font-[bold]   ts:mt-[4px] ts:text-[12px]   os:mt-[8px] os:text-[16px]   sm:mt-[12px] sm:text-[20px]   lg:mt-[12px] lg:text-[24px]">دوره های جدید پاییزه</h2>
      </div>
      <div className="flex justify-center items-center border   ts:gap-[8px] ts:mt-[16px]   os:gap-[12px] os:mt-[24px]   sm:gap-[18px] sm:mt-[32px]   lg:gap-[26px] lg:mt-[40px]">
        {
          fallcourse.map((item , index) => {
            return <FallCourse 
              data={item}
              key={index}/>
          })
        }
      </div>
      <SeeAll/>
      <img className="w-full absolute bottom-[-165px] z-[5]" src={VectorLine3} alt="vectorLine3Image"/>
    </div>
  )
}

export default FallCourses

