import React from 'react'
import StarRating from '../../components/BlogDetail/StarRating'

const BlogText = ({describe}) => {

  return (
    <div>
      <div className='lg:w-[854px] md:w-[650px] sm:w-[500px] h-[696px] mr-[30px] '>
        <p className='text-[#111111] pt-[40px]'>
          {describe}
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