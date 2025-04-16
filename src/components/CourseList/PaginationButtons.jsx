import React from 'react';
import FrameRightIcon from '../../assets/Icons/frame-right.svg';
import FrameLeftIcon from '../../assets/Icons/frame-left.svg';


const PaginationButtons = ({ currentPage, totalPages, onPageChange }) => {

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="border">
      <div className="flex justify-center items-center mx-[auto] border   ts:gap-[8px] ts:mt-[16px]   os:gap-[8px] os:mt-[24px]   sm:gap-[12px] sm:mt-[32px]   lg:gap-[12px] lg:mt-[40px]">
        <button
          className="flex justify-center items-center font-[semibold] border border-[#A74DD0]   w-[40px] h-[40px] text-[16px] rounded-[8px]"
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}>
          <img className="w-[20px] h-[20px]" src={FrameRightIcon} alt="frameRightIcon"/>
        </button>
        {pageNumbers.map(number => (
          <button
            className={`flex justify-center items-center font-[semibold] text-[#A74DD0] border border-[#A74DD0]   w-[40px] h-[40px] rounded-[8px] ${currentPage === number ? 'bg-[#F5DDFF]' : ''}`}
            key={number}
            onClick={() => onPageChange(number)}>
            {number}
          </button>
        ))}
        <button
          className="flex justify-center items-center font-[semibold] border border-[#A74DD0]   w-[40px] h-[40px] text-[16px] rounded-[8px] "
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}>
          <img className="w-[20px] h-[20px]" src={FrameLeftIcon} alt="frameLeftIcon"/>
        </button>
      </div>
    </div>
  );
};

export default PaginationButtons;