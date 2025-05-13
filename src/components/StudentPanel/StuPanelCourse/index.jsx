import React from 'react'
import StuPanelSide from './StuPanelSide/StuPanelSide'
import MyCoursesContent from './MyCoursesContent'
import StuPanelHeader from './StuPanelHeader'

const MyCoursesMContent = () => {
  return (
    <div className='flex border'>
      <StuPanelSide className='w-[294px]'/>
      <div className='w-[1250px]'>
        <StuPanelHeader/>
        <MyCoursesContent/>
      </div>
    </div>
  )
}

export default MyCoursesMContent