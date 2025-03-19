import React from 'react'
import HeroSection from './HeroSection.jsx'
import VectorLines from './VectorLines.jsx'
import AboutAcademy from './AboutAcademy.jsx'
import Courses from './Courses.jsx'
import FallCourses from './FallCourses.jsx'
import WeeklyBlogs from './WeeklyBlogs.jsx'
import WeeklyTeachers from './WeeklyTeachers.jsx'

const Content = () => {
  return (
    <div>
      <HeroSection/>
      <VectorLines/>
      <AboutAcademy/>
      <Courses/>
      <FallCourses/>
      <WeeklyBlogs/>
      <WeeklyTeachers/>
    </div>
  )
}

export default Content
