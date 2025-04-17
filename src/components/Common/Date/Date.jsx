import React from 'react'
import { Field } from 'formik'

const Date = () => {
  return (
    <div>
      <label className="block font-[semibold] text-[#1E1E1E]   
        ts:mt-[4px] ts:text-[6px]   
        os:mt-[8px] os:text-[8px]   
        sm:mt-[12px] sm:text-[12px]   
        lg:mt-[16px] lg:text-[16px]">تاریخ</label>
      <Field className="font-[medium] text-[#898989] border border-[#E9E9E9] cursor-pointer   
        ts:w-[108px] ts:h-[20px] ts:mt-[4px] ts:text-[6px] ts:rounded-[8px]   
        os:w-[148px] os:h-[32px] os:mt-[4px] os:text-[6px] os:rounded-[12px]   
        sm:w-[208px] sm:h-[40px] sm:mt-[8px] sm:text-[8px] sm:rounded-[16px]   
        lg:w-[268px] lg:h-[48px] lg:mt-[12px] lg:text-[14px] lg:rounded-[16px]" type="date" placeholder="تاریخ برگزاری - تاریخ اتمام"/>
    </div>
  )
}

export default Date