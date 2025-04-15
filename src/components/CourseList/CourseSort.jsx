// CourseSort.js
import React from 'react';

const CourseSort = ({ onSort }) => {
  return (
    <div>
      <div className="flex items-center mx-[auto] bg-[#F8F8F8]   ts:w-[360px] ts:h-[36px] ts:pr-[12px] ts:pl-[12px] ts:rounded-[24px]   os:w-[500px] os:h-[48px] os:pr-[16px] os:pl-[16px] os:rounded-[24px]   sm:w-[640px] sm:h-[60px] sm:pr-[20px] sm:pl-[20px] sm:rounded-[24px]   lg:w-[956px] lg:h-[72px] lg:pr-[26px] lg:pl-[24px] lg:rounded-[24px]">
        <h2 className="font-[semibold] text-[#1E1E1E]   ts:text-[8px]   os:text-[12px]   sm:text-[16px]   lg:text-[16px]">ترتیب</h2>
        <div className="flex justify-center   ts:gap-[4px] ts:mr-[12px]   os:gap-[8px] os:mr-[16px]   sm:gap-[12px] sm:mr-[20px]   lg:gap-[12px] lg:mr-[24px]">
          <button
            onClick={() => onSort('popular')}
            className="flex justify-center items-center font-[semibold] text-[#FFFFFF] bg-[#A74DD1]   ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[16px]   os:px-[12px] os:py-[8px] os:text-[8px] os:rounded-[16px]   sm:px-[16px] sm:py-[12px] sm:text-[12px] sm:rounded-[16px]   lg:px-[16px] lg:py-[13.5px] lg:text-[16px] lg:rounded-[16px]"
          >
            محبوب ترین
          </button>
          <button
            onClick={() => onSort('cheapest')}
            className="flex justify-center items-center font-[semibold] text-[#1E1E1E] bg-[#FFFFFF]   ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[16px]   os:px-[12px] os:py-[8px] os:text-[8px] os:rounded-[16px]   sm:px-[16px] sm:py-[12px] sm:text-[12px] sm:rounded-[16px]   lg:px-[16px] lg:py-[13.5px] lg:text-[16px] lg:rounded-[16px]"
          >
            ارزان ترین
          </button>
          <button
            onClick={() => onSort('expensive')}
            className="flex justify-center items-center font-[semibold] text-[#1E1E1E] bg-[#FFFFFF]   ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[16px]   os:px-[12px] os:py-[8px] os:text-[8px] os:rounded-[16px]   sm:px-[16px] sm:py-[12px] sm:text-[12px] sm:rounded-[16px]   lg:px-[16px] lg:py-[13.5px] lg:text-[16px] lg:rounded-[16px]"
          >
            گران ترین
          </button>
        </div>
        <div className="flex justify-center items-center mr-[auto]   ts:gap-[12px]   os:gap-[16px]   sm:gap-[20px]   lg:gap-[24px]">
          <label className="block font-[semibold] text-[#1E1E1E]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">تعداد نمایش</label>
          <select
            className="font-[semibold] text-[#1E1E1E] bg-[#FFFFFF]   ts:pr-[8px] ts:pl-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[16px]   os:pr-[8px] os:pl-[8px] os:py-[4px] os:text-[8px] os:rounded-[16px]   sm:pr-[12px] sm:pl-[12px] sm:py-[8px] sm:text-[12px] sm:rounded-[16px]   lg:pr-[12px] lg:pl-[16px] lg:py-[12px] lg:text-[16px] lg:rounded-[16px]"
            name=""
            id=""
          >
            <option value="disable selected">9</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CourseSort;