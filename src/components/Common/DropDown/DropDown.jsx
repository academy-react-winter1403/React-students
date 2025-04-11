import {React , useState } from 'react'
import FrameDownIcon from '../../../assets/Icons/frame-down.svg'



const DropDown = ({ options, onSelect, title, placeholder }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div>
      <label className="block font-[semibold] text-[#1E1E1E]   ts:mt-[4px] ts:text-[6px]   os:mt-[8px] os:text-[8px]   sm:mt-[12px] sm:text-[12px]   lg:mt-[16px] lg:text-[16px]">{title}</label>
      <div className="flex items-center font-[medium] text-[#898989] bg-[#FFFFFF] cursor-pointer   ts:w-[128px] ts:h-[24px] ts:mt-[4px] ts:text-[6px] ts:indent-[4px] ts:rounded-[8px]   os:w-[188px] os:h-[32px] os:mt-[4px] os:text-[8px] os:indent-[8px] os:rounded-[12px]   sm:w-[228px] sm:h-[40px] sm:mt-[8px] sm:text-[12px] sm:indent-[12px] sm:rounded-[16px]   lg:w-[268px] lg:h-[48px] lg:mt-[12px] lg:text-[14px] lg:indent-[16px] lg:rounded-[16px]" onClick={toggleDropDown}>
        {selectedValue ? selectedValue : `${placeholder}`}
        <span className="mr-[auto]   ts:ml-[4px]   os:ml-[8px]   sm:ml-[12px]   lg:ml-[14px]">{isOpen ? '▲' : <img src={FrameDownIcon}/>}</span>
      </div>
      {isOpen && (
        <ul>
          {options.map((option) => (
            <li
              key={option}
              // className={`dropdown-item ${selectedValue === option ? 'selected' : ''}`}
              className="flex items-center font-[medium] text-[#898989] bg-[#FFFFFF] cursor-pointer   ts:w-[128px] ts:h-[24px] ts:mt-[4px] ts:text-[6px] ts:indent-[4px] ts:rounded-[8px]   os:w-[188px] os:h-[32px] os:mt-[4px] os:text-[8px] os:indent-[8px] os:rounded-[12px]   sm:w-[228px] sm:h-[40px] sm:mt-[8px] sm:text-[12px] sm:indent-[12px] sm:rounded-[16px]   lg:w-[268px] lg:h-[48px] lg:mt-[12px] lg:text-[14px] lg:indent-[16px] lg:rounded-[16px]"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;