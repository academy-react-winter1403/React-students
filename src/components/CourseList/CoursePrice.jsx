import React from 'react'
import { Field } from 'formik'

const CoursePrice = () => {
  return (
    <div>
      <label className="block font-[semibold] text-[#1E1E1E]   ts:mt-[4px] ts:text-[6px]   os:mt-[8px] os:text-[8px]   sm:mt-[12px] sm:text-[12px]   lg:mt-[16px] lg:text-[16px]">قیمت</label>
      <Field className="inputRange bg-[#707070] outline-0 appearance-none cursor-pointer   ts:w-[128px] ts:h-[4px] ts:rounded-[4px]   os:w-[188px] os:h-[4px] os:rounded-[4px]   sm:w-[228px] sm:h-[8px] sm:rounded-[8px]   lg:w-[268px] lg:h-[8px] lg:rounded-[11px]" type="range"/>
    </div>
  )
}

export default CoursePrice