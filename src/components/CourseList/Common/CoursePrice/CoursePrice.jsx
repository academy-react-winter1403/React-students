import React from 'react'
import Slider from 'react-slider'
import Styles from './CoursePrice.module.css'

const CoursePrice = ({ min, max, values, setValues }) => {
  return (
    <div className='w-full rounded-[10px]'>
      <span className='mb-5 font-bold text-xl text-[#3f4656]'>قیمت</span>
      <div className='flex-row-reverse font-medium text-[#275efe]'>${values[1]} - ${values[0]}</div>
      <small className='block mt-2 text-sm text-[#99a3ba]'>
        Current Range: ${values[0]} - ${values[1]}
      </small>
      <Slider className={Styles.slider} value={values} min={min} max={max} onChange={setValues}/>
    </div>
  )
}

export default CoursePrice