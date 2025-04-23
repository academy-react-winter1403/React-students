import React, { useEffect, useState } from 'react'
import { getApi } from '../../core/services/api'
import HeroSection from './HeroSection/HeroSection'
import VectorLines from './VectorLines/VectorLines'
import Academy from './Academy/Academy'
import Courses from './Courses/Courses'
import FallCourses from './FallCourses/FallCourses'
import WeeklyBlogs from './WeeklyBlogs/WeeklyBlogs'
import WeeklyTeachers from '../content/WeeklyTeachers'


const Content = () => {
  return (
    <div>
      <HeroSection />
      <VectorLines />
      <Academy />
      <Courses />
      <FallCourses />
      <WeeklyBlogs />
      <WeeklyTeachers />
    </div>
  )
}

export default Content


