import {React , useState} from 'react'
import ReactIcon1 from '../../../assets/Icons/react.svg'
import JsIcon1 from '../../../assets/Icons/java-script.svg'
import HtmlIcon1 from '../../../assets/Icons/html-5.svg'
import CssIcon1 from '../../../assets/Icons/css-3.svg'
import PythonIcon from '../../../assets/Icons/python.svg'
import VectorLine2 from '../../../assets/Icons/Vector 6.svg'
import CategoryCourse from '../../Common/CategoryCourse/CategoryCourse'





const Courses = () => {

  const [catCourseData , setCatCourseData] = useState([
    {id:1, img:ReactIcon1, title:"ری اکت جی‌اس", desc:"کتابخانه جاوااسکریپت"},
    {id:2, img:JsIcon1, title:"جاوا اسکریپت", desc:"زبان برنامه نویسی"},
    {id:3, img:PythonIcon, title:"پایتون", desc:"زبان برنامه نویسی"}, 
    {id:4, img:HtmlIcon1, title:"Html و CSS", desc:"ساختار طراحی وب"}
  ])

  
  return (  
    <div className="border relative z-[10]   ts:mt-[18px]   os:mt-[32px]   sm:mt-[68px]   lg:mt-[112px]">
      <div className="text-center border">
        <button className="flex justify-center items-center mx-[auto] font-[bold] text-[#A74DD1] bg-[#F1D1FF]   ts:px-[8px] ts:py-[4px] ts:text-[8px] ts:rounded-[4px]   os:px-[8px] os:py-[4px] os:text-[6px] os:rounded-[4px]   sm:px-[16px] sm:py-[8px] sm:text-[10px] sm:rounded-[8px]   lg:px-[16px] lg:py-[8px] lg:text-[12px] lg:rounded-[8px]">دسته بندی</button>
        <h2 className="text-center font-[bold]    ts:mt-[4px] ts:text-[12px]   os:mt-[8px] os:text-[16px]    sm:mt-[12px] sm:text-[18px]   lg:mt-[12px] lg:text-[24px]">دسته بندی دوره های ما</h2>
      </div>
      <div className="flex justify-center border   ts:gap-[12px] ts:mt-[16px]   os:gap-[16px] os:mt-[24px]   sm:gap-[20px] sm:mt-[32px]   lg:gap-[25px] lg:mt-[41px]">
        {
          catCourseData.map((item , index) => {
            return <CategoryCourse data={item} key={index}/>
          })
        }
      </div>
      <img className="w-full absolute bottom-[-174px] z-[5]" src={VectorLine2} alt="vectorLine2Image"/>
    </div>
  )
}

export default Courses
