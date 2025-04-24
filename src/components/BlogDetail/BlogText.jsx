import React, { useState } from 'react'
import StarRating from '../../components/BlogDetail/StarRating'

const BlogText = ({coursetext , blogtext }) => {

  return (
    <div>
        <div className='lg:w-[854px] min-h-[500px] md:w-[650px] sm:w-[500px] h-[696px] mr-[30px] border-2 border-orange-500'>
                <p className='text-[#111111] pt-[40px] lg:text-[17px] md:text-[14px] sm:text-[13px]'>
                  {blogtext}
                </p>
                
                <div className='flex justify-start w-[400px] h-[50px] mt-[33px]'>
                    <div className='flex justify-center items-center text-[#717171] w-[200px] h-[50px]'>
                        <div>به این بلاگ امتیاز بدهید</div>
                    </div>
                   <div className='flex items-center w-[190px] justify-center'>
                     <StarRating totalStars={5} />
                   </div>
                </div>
            </div>
    </div>
  )
}

export default BlogText