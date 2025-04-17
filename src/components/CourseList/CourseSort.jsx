import React from 'react';

const CourseSort = ({ onSort, onItemsPerPageChange, currentItemsPerPage }) => {
  return (
    <div className="flex items-center mx-[auto] bg-[#F8F8F8]   
      ts:w-[280px] ts:h-[24px] ts:pr-[12px] ts:pl-[12px] ts:rounded-[24px]   
      os:w-[380px] os:h-[36px] os:pr-[16px] os:pl-[16px] os:rounded-[24px]   
      sm:w-[480px] sm:h-[48px] sm:pr-[20px] sm:pl-[20px] sm:rounded-[24px]   
      lg:w-[640px] lg:h-[60px] lg:pr-[26px] lg:pl-[24px] lg:rounded-[24px]   
      xl:w-[956px] xl:h-[72px] xl:pr-[26px] xl:pl-[24px] xl:rounded-[24px]">
      <h2 className="font-[semibold] text-[#1E1E1E]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">ترتیب</h2>
      <div className="flex justify-center   
        ts:gap-[4px] ts:mr-[12px]   
        os:gap-[8px] os:mr-[16px]   
        sm:gap-[12px] sm:mr-[20px]   
        lg:gap-[12px] lg:mr-[24px]">
        <button
          onClick={() => onSort('popular')}
          className="flex justify-center items-center font-[semibold] text-[#FFFFFF] bg-[#A74DD1]   
          ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[16px]   
          os:px-[12px] os:py-[8px] os:text-[8px] os:rounded-[16px]   
          sm:px-[12px] sm:py-[8px] sm:text-[12px] sm:rounded-[16px]   
          lg:px-[16px] lg:py-[13.5px] lg:text-[16px] lg:rounded-[16px]"
        >
          محبوب ترین
        </button>
        <button
          onClick={() => onSort('cheapest')}
          className="flex justify-center items-center font-[semibold] text-[#1E1E1E] bg-[#FFFFFF]   \
          ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[16px]   
          os:px-[12px] os:py-[8px] os:text-[8px] os:rounded-[16px]   
          sm:px-[12px] sm:py-[8px] sm:text-[12px] sm:rounded-[16px]   
          lg:px-[16px] lg:py-[13.5px] lg:text-[16px] lg:rounded-[16px]"
        >
          ارزان ترین
        </button>
        <button
          onClick={() => onSort('expensive')}
          className="flex justify-center items-center font-[semibold] text-[#1E1E1E] bg-[#FFFFFF]   \
          ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[16px]   
          os:px-[12px] os:py-[8px] os:text-[8px] os:rounded-[16px]   
          sm:px-[12px] sm:py-[8px] sm:text-[12px] sm:rounded-[16px]   
          lg:px-[16px] lg:py-[13.5px] lg:text-[16px] lg:rounded-[16px]"
        >
          گران ترین
        </button>
      </div>
      <div className="flex justify-center items-center mr-[auto]   ts:gap-[8px]   os:gap-[12px]   sm:gap-[16px]   lg:gap-[24px]">
        <label className="block font-[semibold] text-[#1E1E1E]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">تعداد نمایش</label>
        <select
          className="font-[semibold] text-[#1E1E1E] bg-[#FFFFFF]   
          ts:pr-[8px] ts:pl-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[16px]   
          os:pr-[8px] os:pl-[8px] os:py-[4px] os:text-[8px] os:rounded-[16px]   
          sm:pr-[12px] sm:pl-[12px] sm:py-[8px] sm:text-[12px] sm:rounded-[16px]   
          lg:pr-[12px] lg:pl-[16px] lg:py-[12px] lg:text-[16px] lg:rounded-[16px]"
          name="itemsPerPage"
          id="itemsPerPage"
          value={currentItemsPerPage}
          onChange={(e) => onItemsPerPageChange(e.target.value)}
        >
          <option className="font-[semibold]" value="9">9</option>
          <option className="font-[semibold]" value="8">8</option>
          <option className="font-[semibold]" value="7">7</option>
          <option className="font-[semibold]" value="6">6</option>
          <option className="font-[semibold]" value="5">5</option>
          <option className="font-[semibold]" value="4">4</option>
          <option className="font-[semibold]" value="3">3</option>
          <option className="font-[semibold]" value="2">2</option>
          <option className="font-[semibold]" value="1">1</option>
        </select>
      </div>
    </div>
  );
};

export default CourseSort;