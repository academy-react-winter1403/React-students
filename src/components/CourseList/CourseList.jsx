import React, { useEffect, useState } from 'react'
import ListHeroSection from '../Common/ListHeroSection/ListHeroSection'
import CourseContent from './CourseContent'
import { getApi } from '../../core/services/api'
import { useFetchCourse } from '../../core/Hook/useFetchCourse/useFetchCourse'
import CodingImage from '../../assets/Icons/Coding-A-Website-Streamline.svg'
import Icons from '../../assets/Icons/4icons.svg'

const CourseList = () => {
  
  const { Course } = useFetchCourse();
  

  
  const data1 = {
    button: "دوره ها", 
    heading: "آموزش رو از همین حالا شروع کن",           
    desc: "تمامی دوره های آموزشی آکادمی به همراه تمامی سطح ها و دسته بندی ها و فیلتر ها",
    rightImg: CodingImage,
    leftImg: Icons
  }



  return (
    <div>
        <ListHeroSection data={data1}/>
        <CourseContent/>
    </div>
  )
}

export default CourseList