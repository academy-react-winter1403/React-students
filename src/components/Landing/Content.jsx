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

<<<<<<< HEAD:src/components/Landing/Content.jsx
export default Content
=======
export default Content
>>>>>>> 779cf64b6ecbd9c6f8e38f09be3a25629d4b501b:src/components/content/Content.jsx
