import React, { useEffect, useState } from 'react'
import { getApi } from '../../core/services/api'
import HeroSection from './HeroSection'
import VectorLines from './VectorLines'
import Academy from './Academy'
import Courses from './Courses'
import FallCourses from './FallCourses'
import WeeklyBlogs from './WeeklyBlogs'
import WeeklyTeachers from './WeeklyTeachers'

const Content = () => {
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

export default Content