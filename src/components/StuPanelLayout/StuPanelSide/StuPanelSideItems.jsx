import React from 'react'
import { Link } from 'react-router-dom'


const StuPanelSideItems = ({data}) => {
  return (
    <Link className='flex items-center gap-2 h-[50px] ml-6 pr-6 cursor-pointer   hover:bg-[#383838]' to={data.to}>
      <div>
        {data.itemsIcon && <data.itemsIcon className='w-6 h-6'/>}
      </div>
      <h4 className='font-[medium] text-[18px] text-[#FCFCFC]'>{data.itemsName}</h4>
    </Link>
  )
}

export default StuPanelSideItems