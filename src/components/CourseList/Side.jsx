import React from 'react'

const Side = () => {
  return (
    <div className="bg-[#F8F8F8]   w-[316px] h-[646px] pt-[20px] pr-[24px] rounded-[24px]">
      <h2 className="font-[semibold] text-[#1E1E1E]   text-[16px]">فیلتر ها</h2>
      <label className="block font-[semibold] text-[#1 E1E1E]   mt-[24px] text-[16px]">جستجو</label>
      <input className="font-[medium] text-[#898989]   w-[268px] h-[48px] mt-[12px] text-[14px] indent-[16px] rounded-[16px]" type="search" placeholder="دوره مورد نظر را جستجو کنید..."/>
      <label className="block font-[semibold] text-[#1 E1E1E]   mt-[16px] text-[16px]">دسته‌بندی</label>
      <select className="font-[medium] text-[#898989] bg-[#FFFFFF]   w-[268px] h-[48px] mt-[12px] text-[14px] indent-[16px] rounded-[16px]" name="" id="">
        <option value="disable selected">دسته‌بندی مورد نظر را انتخاب کنید...</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <label className="block mt-[16px] font-[semibold] text-[#1 E1E1E] text-[16px]">سطح آموزشی</label>
      <select className="font-[medium] text-[#898989] bg-[#FFFFFF]   w-[268px] h-[48px] mt-[12px] text-[14px] indent-[16px] rounded-[16px]" name="" id="">
        <option value="disable selected">سطح مورد نظر را انتخاب کنید...</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <label className="block mt-[16px] font-[semibold] text-[#1 E1E1E] text-[16px]">استاد</label>
      <select className="font-[medium] text-[#898989] bg-[#FFFFFF]   w-[268px] h-[48px] mt-[12px] text-[14px] indent-[16px] rounded-[16px]" name="" id="">
        <option value="disable selected">استاد مورد نظر را انتخاب کنید...</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <label className="block mt-[16px] font-[semibold] text-[#1 E1E1E] text-[16px]">قیمت</label>
      <input className="bg-[#707070] outline-0   w-[268px] h-[8px] rounded-[11px]" type="range"/>
      <label className="block mt-[16px] font-[semibold] text-[#1 E1E1E] text-[16px]">تاریخ</label>
      <input className="font-[medium] text-[#898989]   w-[268px] h-[48px] mt-[12px] text-[14px] rounded-[16px]" type="date" placeholder="تاریخ برگزاری - تاریخ اتمام"/>
    </div>
  )
}

export default Side