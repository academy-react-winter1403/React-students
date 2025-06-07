import React from 'react'

const CoursesTitle = ({data}) => {
  return (
    <div className='flex items-center mx-auto font-[semibold] text-[#707070] bg-[#F1F1F1]   
      w-[384px] h-6 pr-2 text-xs rounded-[50px]
      lg:w-[624px] lg:h-8 lg:rounded-[50px]
      xl:w-[850px] xl:h-10 xl:rounded-[50px]
      3x:w-[1150px] 3x:h-11 3x:pr-3 3x:text-sm 3x:rounded-[50px]
      dark:text-[#FFFFFF] dark:bg-[#606060]'>
      <span>{data.name1}</span>
      <span className='mr-16   lg:mr-16   xl:mr-24   3x:mr-24'>{data.name2}</span>
      <span className='mr-28   lg:mr-32   xl:mr-36   3x:mr-56'>{data.name3}</span>
      <span className='hidden   lg:block lg:mr-24  xl:mr-28   3x:mr-32'>{data.name4}</span>
      <span className='hidden   xl:block xl:mr-28   3x:mr-32'>{data.name5}</span>
      <span className='hidden   lg:block lg:mr-24  xl:mr-28   3x:mr-32'>{data.name6}</span>
    </div>
  )
}

export default CoursesTitle