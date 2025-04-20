import React from 'react'
import { Field } from 'formik'

const Date = () => {
  return (
    <div>
      <label className="block font-[semibold] text-[#1E1E1E]     
        ts:mt-[12px] ts:text-[12px]   
        lg:mt-[16px] lg:text-[16px]">تاریخ</label>
      <Field className="font-[medium] text-[#898989] border border-[#E9E9E9] cursor-pointer     
        ts:w-[224px] ts:h-[40px] ts:mt-[8px] ts:text-[12px] ts:rounded-[16px]   
        lg:w-[268px] lg:h-[48px] lg:mt-[12px] lg:text-[14px] lg:rounded-[16px]" type="date" placeholder="تاریخ برگزاری - تاریخ اتمام"/>
    </div>
  )
}

export default Date