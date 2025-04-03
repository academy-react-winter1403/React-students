import React from 'react'

const BlogImg = ({image}) => {
  return (
    <div>
        <div className='w-[440px] h-full border-2 border-fuchsia-600 '>
         <img src={image} alt="" />
           
        </div>
    </div>
  )
}

export default BlogImg