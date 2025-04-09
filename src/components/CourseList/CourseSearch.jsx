import React from 'react'

const CourseSearch = () => {
  return (
    <div>
        <label className="block font-[semibold] text-[#1E1E1E]   ts:mt-[12px] ts:text-[6px]   os:mt-[16px] os:text-[8px]   sm:mt-[20px] sm:text-[12px]   lg:mt-[24px] lg:text-[16px]">جستجو</label>
        <Field className="outline-0 font-[medium] text-[#898989]   ts:w-[128px] ts:h-[24px] ts:mt-[4px] ts:text-[6px] ts:indent-[4px] ts:rounded-[8px]   os:w-[188px] os:h-[32px] os:mt-[4px] os:text-[8px] os:indent-[8px] os:rounded-[12px]   sm:w-[228px] sm:h-[40px] sm:mt-[8px] sm:text-[12px] sm:indent-[12px] sm:rounded-[16px]   lg:w-[268px] lg:h-[48px] lg:mt-[12px] lg:text-[14px] lg:indent-[16px] lg:rounded-[16px]" type="search" placeholder="دوره مورد نظر را جستجو کنید..."/>
    </div>
  )
}

export default CourseSearch