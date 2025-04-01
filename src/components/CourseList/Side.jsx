import React from 'react'

const Side = () => {
  return (
    <div className="bg-[#F8F8F8]   ts:w-[140px] ts:h-[460px] ts:pt-[8px] ts:pr-[12px] ts:rounded-[16px]   os:w-[200px] os:h-[520px] os:pt-[12px] os:pr-[16px] os:rounded-[20px]   sm:w-[260px] sm:h-[580px] sm:pt-[16px] sm:pr-[20px] sm:rounded-[24px]   lg:w-[316px] lg:h-[646px] lg:pt-[20px] lg:pr-[24px] lg:rounded-[24px]">
      <h2 className="font-[semibold] text-[#1E1E1E]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">فیلتر ها</h2>
      <label className="block font-[semibold] text-[#1E1E1E]   mt-[24px] text-[16px]">جستجو</label>
      <input className="font-[medium] text-[#898989]   w-[268px] h-[48px] mt-[12px] text-[14px] indent-[16px] rounded-[16px]" type="search" placeholder="دوره مورد نظر را جستجو کنید..."/>
      <label className="block font-[semibold] text-[#1E1E1E]   mt-[16px] text-[16px]">دسته‌بندی</label>
      <select className="font-[medium] text-[#898989] bg-[#FFFFFF]   w-[268px] h-[48px] mt-[12px] text-[14px] indent-[16px] rounded-[16px]" name="" id="">
        <option value="disable selected">دسته‌بندی مورد نظر را انتخاب کنید...</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <label className="block mt-[16px] font-[semibold] text-[#1E1E1E] text-[16px]">سطح آموزشی</label>
      <select className="font-[medium] text-[#898989] bg-[#FFFFFF]   w-[268px] h-[48px] mt-[12px] text-[14px] indent-[16px] rounded-[16px]" name="" id="">
        <option value="disable selected">سطح مورد نظر را انتخاب کنید...</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <label className="block mt-[16px] font-[semibold] text-[#1E1E1E] text-[16px]">استاد</label>
      <select className="font-[medium] text-[#898989] bg-[#FFFFFF]   w-[268px] h-[48px] mt-[12px] text-[14px] indent-[16px] rounded-[16px]" name="" id="">
        <option value="disable selected">استاد مورد نظر را انتخاب کنید...</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <label className="block mt-[16px] font-[semibold] text-[#1E1E1E] text-[16px]">قیمت</label>
      <input className="bg-[#707070] outline-0   w-[268px] h-[8px] rounded-[11px]" type="range"/>
      <label className="block mt-[16px] font-[semibold] text-[#1E1E1E] text-[16px]">تاریخ</label>
      <input className="font-[medium] text-[#898989]   w-[268px] h-[48px] mt-[12px] text-[14px] rounded-[16px]" type="date" placeholder="تاریخ برگزاری - تاریخ اتمام"/>
    </div>
  )
}

export default Side