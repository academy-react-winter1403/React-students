import React from 'react'

const ImgPanel = ({address,alt}) => {
  return (
    <>
        <img src={address} alt={alt} className="w-10 h-10" />
    </>
  )
}

export default ImgPanel