import React from 'react'

const StuPanelSideItems = ({data}) => {
  return (
    <div className='flex items-center gap-2 h-[50px] ml-6 pr-6 cursor-pointer   hover:bg-[#383838]'>
      <div>
        {data.itemsIcon && <data.itemsIcon className='w-6 h-6'/>}
      </div>
      <h4 className='font-[medium] text-[18px] text-[#FCFCFC]'>{data.itemsName}</h4>
    </div>
  )
}

export default StuPanelSideItems