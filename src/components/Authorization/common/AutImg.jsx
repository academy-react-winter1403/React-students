import React from 'react'

const AutImg = ({Address , alt}) => {
  return (
    <div className="hidden md:flex md:w-[800px] bg-login items-center justify-center p-12 border2 rounded-3xl">
    <div className="max-w-lg w-full">
      <img 
        src={Address}
        alt={alt}
      />
    </div>
  </div>
  )
}

export default AutImg