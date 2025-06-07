import React from 'react'
import LocationMap from '../LocationMap'

const locations = () => {
  return (
    <div className='w-[95%] h-full flex gap-4 flex-col py-16 pr-5'>
      <p className='text-[#3772FF] font-[semibold] text-[13px] pr-2'>داخل نقشه موقعیت مکانی محل سکونت خود را انتخاب کنید</p>
      <div className='rounded-2xl w-[98%] h-[65%] border'>
        <LocationMap />
      </div>
    </div>
  )
}

export default locations