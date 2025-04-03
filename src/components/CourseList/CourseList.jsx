import React, { useEffect, useState } from 'react'
import HeroSection from './HeroSection'
import MainContent from './MainContent'
import { getApi } from '../../core/services/api'
import { useFetchCourse } from '../../core/Hook/useFetchCourse/useFetchCourse'

const CourseList = () => {
  
  const { Course } = useFetchCourse();
  

  console.log(Course);



  return (
    <div>
        <HeroSection/>
        <MainContent/>
    </div>
  )
}

export default CourseList