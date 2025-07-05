import React from 'react'
import Slider from 'react-slider'
import Styles from './CoursePrice.module.css'

const CoursePrice = ({ min, max, values, setValues }) => {
  return (
    <div className='w-full rounded-[10px]'>
      <span className='mb-5 font-[semibold] text-base text-[#1E1E1E]   dark:text-[#FFFFFF]'>قیمت</span>
      <div className='flex-row-reverse font-medium text-[#1E1E1E]'>{values[1]} تومان - {values[0]} تومان</div>
      <small className='block mt-2 text-sm text-[#99a3ba]'>
        قیمت فعلی : {values[1]} تومان - {values[0]} تومان
      </small>
      <Slider className={Styles.slider} value={values} min={min} max={max} onChange={setValues ?? null}/>
    </div>
  )
}

export default CoursePrice