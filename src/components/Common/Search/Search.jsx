import React, { useState } from 'react';
import { Field } from 'formik';
import SearchIcon from '../../../assets/Icons/search-stroke-rounded.svg';

const Search = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    onSearchChange(searchValue);
  };

  return (
    <div className="ts:mt-[8px] os:mt-[12px] sm:mt-[16px] lg:mt-[24px]">
      <label className="block font-[semibold] text-[#1E1E1E]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">جستجو</label>
      <div className="flex items-center relative   ts:mt-[4px]   os:mt-[4px]   sm:mt-[8px]   lg:mt-[12px]">
        <Field
          className="outline-0 font-[medium] text-[#898989] border border-[#E9E9E9] cursor-pointer
          ts:w-[108px] ts:h-[20px] ts:text-[6px] ts:indent-[4px] ts:rounded-[8px]
          os:w-[148px] os:h-[32px] os:text-[6px] os:indent-[8px] os:rounded-[12px]
          sm:w-[208px] sm:h-[40px] sm:text-[8px] sm:indent-[12px] sm:rounded-[16px]
          lg:w-[268px] lg:h-[48px] lg:text-[14px] lg:indent-[16px] lg:rounded-[16px]"
          type="search"
          placeholder="دوره مورد نظر را جستجو کنید..."
          value={searchValue}
          onChange={handleChange}
          name="search" />
        <span
          className="flex justify-center items-center bg-[#A74DD0] cursor-pointer absolute top-0 left-0
          ts:w-[20px] ts:h-[20px] ts:rounded-[8px]
          os:w-[32px] os:h-[32px] os:rounded-[12px]
          sm:w-[40px] sm:h-[40px] sm:rounded-[16px]
          lg:w-[48px] lg:h-[48px] lg:rounded-[16px]"
          onClick={handleSearchClick}>
          <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={SearchIcon} alt="searchIcon" />
        </span>
      </div>
    </div>
  );
};

export default Search;