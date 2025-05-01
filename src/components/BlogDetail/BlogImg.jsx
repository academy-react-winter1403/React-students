import React from 'react'
import jspic from '../../assets/jspic.png'


const BlogImg = ({image}) => {
  return (
    <div>
        <div className='lg:w-[350px] md:w-[270px] sm:w-[200px] rounded-3xl bg-[#DAE01E] lg:h-full md:h-[296px] sm:h-[250px] flex items-center justify-center '>
          <img className='lg:w-[auto] md:w-20 sm:w-12' src={jspic} alt="javascript pics" />
           
        </div>
    </div>
  )
}

export default BlogImg