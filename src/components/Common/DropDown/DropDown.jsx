import React, { useState } from 'react'

const Dropdown = ({ options, onSelect, data }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    onSelect(option); // اطلاع دادن به کامپوننت والد از انتخاب
    setIsOpen(false);
  };

  return (
    <div>
      <label className="block font-[semibold] text-[#1E1E1E]   ts:mt-[4px] ts:text-[6px]   os:mt-[8px] os:text-[8px]   sm:mt-[12px] sm:text-[12px]   lg:mt-[16px] lg:text-[16px]" htmlFor="">{data.title}</label>
      <button className="font-[medium] text-[#898989] bg-[#FFFFFF]   ts:w-[128px] ts:h-[24px] ts:mt-[4px] ts:text-[6px] ts:indent-[4px] ts:rounded-[8px]   os:w-[188px] os:h-[32px] os:mt-[4px] os:text-[8px] os:indent-[8px] os:rounded-[12px]   sm:w-[228px] sm:h-[40px] sm:mt-[8px] sm:text-[12px] sm:indent-[12px] sm:rounded-[16px]   lg:w-[268px] lg:h-[48px] lg:mt-[12px] lg:text-[14px] lg:indent-[16px] lg:rounded-[16px]" onClick={toggleDropdown}>
        {selectedValue ? selectedValue : `${data.placeholder}`}
        <span>▼</span>
      </button>
      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;