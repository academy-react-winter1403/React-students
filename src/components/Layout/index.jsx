import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { Outlet } from 'react-router-dom'
import CourseDetail from '../CourseDetail/CourseDetail'


const Route = () => {
  return (
    <div>
        <Header />
        <div>
            <Outlet />
            {/* <CourseDetail /> */}
            
        </div>
        <Footer />
    </div>

  )
}

export default Route