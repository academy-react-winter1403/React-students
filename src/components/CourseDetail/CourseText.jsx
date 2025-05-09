import React from 'react'

const CourseText = ({category}) => {
  return (
    <div>
        <p className='lg:mt-[24px] md:mt-[10px] sm:w-[57px] sm:h-[25px] sm:text-[10px] md:w-[66px] flex items-center justify-center lg:w-[69px] lg:text-[13px] md:text-[12px] h-[26px] text-[#A74DD0] bg-[#F1D1FF] rounded-lg text-[12px]'>
          {category}
        </p>
    </div>
  )
}

export default CourseText