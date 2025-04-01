import React, { useEffect, useState } from 'react'
import { getApi } from '../../core/services/api'
<<<<<<< HEAD
import HeroSection from './HeroSection'
import VectorLines from './VectorLines'
import Academy from './Academy'
import Courses from './Courses'
import FallCourses from './FallCourses'
import WeeklyBlogs from './WeeklyBlogs'
import WeeklyTeachers from './WeeklyTeachers'
=======
import React from 'react'
import HeroSection from './HeroSection.jsx'
import VectorLines from './VectorLines.jsx'
import AboutAcademy from './AboutAcademy.jsx'
import Courses from './Courses.jsx'
import FallCourses from './FallCourses.jsx'
import WeeklyBlogs from './WeeklyBlogs.jsx'
import WeeklyTeachers from './WeeklyTeachers.jsx'
>>>>>>> 7b22063b3f379e17e7236f75766b11569e7708ad

const Content = () => {
  return (
    <div>
      <HeroSection/>
      <VectorLines/>
<<<<<<< HEAD
      <Academy/>
=======
      <AboutAcademy/>
>>>>>>> 7b22063b3f379e17e7236f75766b11569e7708ad
      <Courses/>
      <FallCourses/>
      <WeeklyBlogs/>
      <WeeklyTeachers/>
    </div>
  )
}



//https://www.figma.com/design/17vAsBH5Aa6uw69eoq9iP0/React-Students?node-id=0-1&t=YnVcTRpFjO6Y3e9s-1

<<<<<<< HEAD
export default Content
=======
export default Content
>>>>>>> 7b22063b3f379e17e7236f75766b11569e7708ad
