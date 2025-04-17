import {React , useState } from 'react'
import FrameDownIcon from '../../../assets/Icons/frame-down.svg'
import FrameUpIcon from '../../../assets/Icons/frame-up.svg'



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
      <label className="block font-[semibold] text-[#1E1E1E]   
      ts:mt-[4px] ts:text-[6px]   
      os:mt-[8px] os:text-[8px]   
      sm:mt-[12px] sm:text-[12px]   
      lg:mt-[16px] lg:text-[16px]">{title}</label>
      <div className="relative">
        <div className="flex items-center font-[medium] text-[#898989] bg-[#FFFFFF] border border-[#E9E9E9] cursor-pointer   
          ts:w-[108px] ts:h-[20px] ts:mt-[4px] ts:text-[6px] ts:indent-[4px] ts:rounded-[8px]   
          os:w-[148px] os:h-[32px] os:mt-[4px] os:text-[6px] os:indent-[8px] os:rounded-[12px]   
          sm:w-[208px] sm:h-[40px] sm:mt-[8px] sm:text-[8px] sm:indent-[12px] sm:rounded-[16px]   
          lg:w-[268px] lg:h-[48px] lg:mt-[12px] lg:text-[14px] lg:indent-[16px] lg:rounded-[16px]" onClick={toggleDropDown}>
          {selectedValue ? selectedValue : `${placeholder}`}
          <span className="mr-[auto]   ts:ml-[4px]   os:ml-[8px]   sm:ml-[12px]   lg:ml-[14px]">
            {isOpen ? <img className="w-[20px] h-[20px]" src={FrameUpIcon}/> : <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={FrameDownIcon}/>}
          </span>
        </div>
        <div className="bg-[#F8F8F8] border border-[#E9E9E9] absolute z-[50]   rounded-[16px] top-[48px]">
          {isOpen && (
            <ul>
              {options.map((option) => (
                <li
                  className="flex items-center font-[medium] text-[#898989] bg-[#FFFFFF] border border-[#E9E9E9] cursor-pointer   
                  ts:w-[108px] ts:h-[20px] ts:mt-[4px] ts:text-[6px] ts:indent-[4px] ts:rounded-[8px]   
                  os:w-[148px] os:h-[32px] os:mt-[4px] os:text-[6px] os:indent-[8px] os:rounded-[12px]   
                  sm:w-[208px] sm:h-[40px] sm:mt-[8px] sm:text-[8px] sm:indent-[12px] sm:rounded-[16px]   
                  lg:w-[268px] lg:h-[48px] lg:mt-[8px] lg:text-[14px] lg:indent-[16px] lg:rounded-[16px]"                
                  // className={`dropdown-item ${selectedValue === option ? 'selected' : ''}`}
                  key={option}
                  onClick={() => handleOptionClick(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;