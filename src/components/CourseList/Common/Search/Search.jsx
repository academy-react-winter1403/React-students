import React, { useState, useCallback } from 'react';
import { Field } from 'formik';
import SearchIcon from '../../../../assets/Icons/search-stroke-rounded.svg';

const Search = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  const handleSearchClick = useCallback(() => {
    onSearchChange(searchValue);
  }, [onSearchChange, searchValue]);

  // اگر میخواهید با هر تغییر در اینپوت جستجو انجام شود (بدون دکمه)
  // const handleInputChange = useCallback((event) => {
  //   setSearchValue(event.target.value);
  //   onSearchChange(event.target.value);
  // }, [onSearchChange]);

  return (
    <div className="ts:mt-[16px] lg:mt-[24px]">
      <label className="block font-[semibold] text-[#1E1E1E]   ts:text-[12px]   lg:text-[16px]   dark:text-[#FFFFFF]">جستجو</label>
      <div className="flex items-center relative   ts:mt-[8px]   lg:mt-[12px]">
        <Field
          className="outline-0 font-[medium] text-[#898989] border border-[#E9E9E9] cursor-pointer   dark:bg-[#404040]
          ts:w-[224px] ts:h-[40px] ts:text-[12px] ts:indent-[12px] ts:rounded-[16px]
          lg:w-[268px] lg:h-[48px] lg:text-[14px] lg:indent-[16px] lg:rounded-[16px]"
          type="search"
          placeholder="دوره مورد نظر را جستجو کنید..."
          value={searchValue}
          onChange={handleChange}
          name="search"
        />
        <span
          className="flex justify-center items-center bg-[#A74DD0] cursor-pointer absolute top-0 left-0   
          ts:w-[40px] ts:h-[40px] ts:rounded-[16px]
          lg:w-[48px] lg:h-[48px] lg:rounded-[16px]"
          onClick={handleSearchClick}>
          <img className="ts:w-[16px] ts:h-[16px]   lg:w-[20px] lg:h-[20px]" src={SearchIcon} alt="searchIcon" />
        </span>
      </div>
    </div>
  );
};

export default Search;