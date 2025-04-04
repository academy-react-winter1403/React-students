import React from 'react'
import '../Common/Style/CommonStyle.css'

const Side = () => {
  return (
    <div className="bg-[#F8F8F8]   ts:w-[140px] ts:h-[460px] ts:pt-[8px] ts:pr-[12px] ts:rounded-[16px]   os:w-[200px] os:h-[520px] os:pt-[12px] os:pr-[16px] os:rounded-[20px]   sm:w-[260px] sm:h-[580px] sm:pt-[16px] sm:pr-[20px] sm:rounded-[24px]   lg:w-[316px] lg:h-[646px] lg:pt-[20px] lg:pr-[24px] lg:rounded-[24px]">
      <h2 className="font-[semibold] text-[#1E1E1E]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">فیلتر ها</h2>
      <label className="block font-[semibold] text-[#1E1E1E]   ts:mt-[12px] ts:text-[6px]   os:mt-[16px] os:text-[8px]   sm:mt-[20px] sm:text-[12px]   lg:mt-[24px] lg:text-[16px]">جستجو</label>
      <input className="outline-0 font-[medium] text-[#898989]   ts:w-[128px] ts:h-[24px] ts:mt-[4px] ts:text-[6px] ts:indent-[4px] ts:rounded-[8px]   os:w-[188px] os:h-[32px] os:mt-[4px] os:text-[8px] os:indent-[8px] os:rounded-[12px]   sm:w-[228px] sm:h-[40px] sm:mt-[8px] sm:text-[12px] sm:indent-[12px] sm:rounded-[16px]   lg:w-[268px] lg:h-[48px] lg:mt-[12px] lg:text-[14px] lg:indent-[16px] lg:rounded-[16px]" type="search" placeholder="دوره مورد نظر را جستجو کنید..."/>
      <label className="block font-[semibold] text-[#1E1E1E]   ts:mt-[4px] ts:text-[6px]   os:mt-[8px] os:text-[8px]   sm:mt-[12px] sm:text-[12px]   lg:mt-[16px] lg:text-[16px]">دسته‌بندی</label>
      <select className="font-[medium] text-[#898989] bg-[#FFFFFF]   ts:w-[128px] ts:h-[24px] ts:mt-[4px] ts:text-[6px] ts:indent-[4px] ts:rounded-[8px]   os:w-[188px] os:h-[32px] os:mt-[4px] os:text-[8px] os:indent-[8px] os:rounded-[12px]   sm:w-[228px] sm:h-[40px] sm:mt-[8px] sm:text-[12px] sm:indent-[12px] sm:rounded-[16px]   lg:w-[268px] lg:h-[48px] lg:mt-[12px] lg:text-[14px] lg:indent-[16px] lg:rounded-[16px]" name="" id="">
        <option value="disable selected">دسته‌بندی مورد نظر را انتخاب کنید...</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <label className="block mt-[16px] font-[semibold] text-[#1E1E1E]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">سطح آموزشی</label>
      <select className="font-[medium] text-[#898989] bg-[#FFFFFF]   ts:w-[128px] ts:h-[24px] ts:mt-[4px] ts:text-[6px] ts:indent-[4px] ts:rounded-[8px]   os:w-[188px] os:h-[32px] os:mt-[4px] os:text-[8px] os:indent-[8px] os:rounded-[12px]   sm:w-[228px] sm:h-[40px] sm:mt-[8px] sm:text-[12px] sm:indent-[12px] sm:rounded-[16px]   lg:w-[268px] lg:h-[48px] lg:mt-[12px] lg:text-[14px] lg:indent-[16px] lg:rounded-[16px]" name="" id="">
        <option value="disable selected">سطح مورد نظر را انتخاب کنید...</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <label className="block mt-[16px] font-[semibold] text-[#1E1E1E]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">استاد</label>
      <select className="font-[medium] text-[#898989] bg-[#FFFFFF]   ts:w-[128px] ts:h-[24px] ts:mt-[4px] ts:text-[6px] ts:indent-[4px] ts:rounded-[8px]   os:w-[188px] os:h-[32px] os:mt-[4px] os:text-[8px] os:indent-[8px] os:rounded-[12px]   sm:w-[228px] sm:h-[40px] sm:mt-[8px] sm:text-[12px] sm:indent-[12px] sm:rounded-[16px]   lg:w-[268px] lg:h-[48px] lg:mt-[12px] lg:text-[14px] lg:indent-[16px] lg:rounded-[16px]" name="" id="">
        <option value="disable selected">استاد مورد نظر را انتخاب کنید...</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <label className="block font-[semibold] text-[#1E1E1E]   ts:mt-[4px] ts:text-[6px]   os:mt-[8px] os:text-[8px]   sm:mt-[12px] sm:text-[12px]   lg:mt-[16px] lg:text-[16px]">قیمت</label>
      <input className="inputRange bg-[#707070] outline-0 appearance-none   ts:w-[128px] ts:h-[4px] ts:rounded-[4px]   os:w-[188px] os:h-[4px] os:rounded-[4px]   sm:w-[228px] sm:h-[8px] sm:rounded-[8px]   lg:w-[268px] lg:h-[8px] lg:rounded-[11px]" type="range"/>
      <label className="block font-[semibold] text-[#1E1E1E]   ts:mt-[4px] ts:text-[6px]   os:mt-[8px] os:text-[8px]   sm:mt-[12px] sm:text-[12px]   lg:mt-[16px] lg:text-[16px]">تاریخ</label>
      <input className="font-[medium] text-[#898989]   ts:w-[128px] ts:h-[24px] ts:mt-[4px] ts:text-[6px] ts:rounded-[8px]   os:w-[188px] os:h-[32px] os:mt-[4px] os:text-[8px] os:rounded-[12px]   sm:w-[188px] sm:h-[40px] sm:mt-[8px] sm:text-[12px] sm:rounded-[16px]   lg:w-[268px] lg:h-[48px] lg:mt-[12px] lg:text-[14px] lg:rounded-[16px]" type="date" placeholder="تاریخ برگزاری - تاریخ اتمام"/>
    </div>
  )
}

export default Side