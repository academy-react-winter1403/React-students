import React from 'react'
import Side from './Side'
import Main from './Main'



const MainContent = () => {
  return (
    <div className="flex justify-center w-full border    gap-[40px] mt-[10px] px-[64px]">
        <Side/>
        <Main/>
    </div>
  )
}

export default MainContent