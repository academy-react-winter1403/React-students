import React, { useEffect, useState } from 'react'
import { getApi } from '../../core/services/api'
import HeroSection from '../Landing/HeroSection/HeroSection'
import VectorLines from '../Landing/VectorLines/VectorLines'
import Academy from '../Landing/Academy/Academy'
import Courses from '../Landing/Courses/Courses'
import FallCourses from '../Landing/FallCourses/FallCourses'
import WeeklyBlogs from '../Landing/WeeklyBlogs/WeeklyBlogs'
import WeeklyTeachers from '../Landing/WeeklyTeachers/WeeklyTeachers'

const index = () => {
  return (
    <div>
      <HeroSection/>
      <VectorLines/>
      <Academy/>
      <Courses/>
      <FallCourses/>
      <WeeklyBlogs/>
      <WeeklyTeachers/>
    </div>
  )
}



//https://www.figma.com/design/17vAsBH5Aa6uw69eoq9iP0/React-Students?node-id=0-1&t=YnVcTRpFjO6Y3e9s-1

export default index
