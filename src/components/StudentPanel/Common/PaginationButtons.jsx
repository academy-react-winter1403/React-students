import React from 'react'
import RightArrow from '../Icons/RightArrow'
import LeftArrow from '../Icons/LeftArrow'

const PaginationButtons = () => {
  return (
    <div className='flex justify-center items-center w-min h-12 mx-auto mt-20 bg-[#EFEFEF] rounded-2xl   dark:bg-[#606060]'>
      <RightArrow/>
      <div className='flex justify-center items-center mx-4   dark:text-[#FFFFFF]'>
        <span className='flex justify-center items-center border   
          lg:w-10 lg:h-10 lg:rounded-lg
          3x:w-[45px] 3x:h-12 3x:rounded-lg'>
          5
        </span>
        <span className='flex justify-center items-center border   
          lg:w-10 lg:h-10 lg:rounded-lg
          3x:w-[45px] 3x:h-12 3x:rounded-lg'>
          4
        </span>
        <span className='flex justify-center items-center border   
          lg:w-10 lg:h-10 lg:rounded-lg
          3x:w-[45px] 3x:h-12 3x:rounded-lg'>
          3
        </span>
        <span className='flex justify-center items-center border   
          lg:w-10 lg:h-10 lg:rounded-lg
          3x:w-[45px] 3x:h-12 3x:rounded-lg'>
          2
        </span>
        <span className='flex justify-center items-center border   
          lg:w-10 lg:h-10 lg:rounded-lg
          3x:w-[45px] 3x:h-12 3x:rounded-lg'>
          1
        </span>
      </div>
      <LeftArrow/>
    </div>
)
}

export default PaginationButtons