import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '../components/config/route'
// import BlogDetail from '../components/BlogDetail/BlogDetail'
// import CourseDetail from '../components/CourseDetail/CourseDetail'



const App = () => {
  return (
    <div>
      <RouterProvider router={router} />     
      {/* <CourseDetail />      */}
    </div>

    
  )
}

export default App