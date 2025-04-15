import React from 'react';
import FrameRightIcon from '../../assets/Icons/frame-right.svg';
import FrameLeftIcon from '../../assets/Icons/frame-left.svg';

const PaginationButtons = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center mx-[auto] border   ts:gap-[8px] ts:w-[220px] ts:mt-[16px]   os:gap-[8px] os:w-[280px] os:mt-[24px]   sm:gap-[12px] sm:w-[340px] sm:mt-[32px]   lg:gap-[12px] lg:w-[404px] lg:mt-[40px]">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="flex justify-center items-center border border-[#A74DD0]     ts:w-[24px] ts:h-[16px] ts:rounded-[4px]   os:w-[32px] os:h-[24px] os:rounded-[4px]   sm:w-[36px] sm:h-[32px] sm:rounded-[8px]   lg:w-[40px] lg:h-[40px] lg:rounded-[8px]"
      >
        <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={FrameRightIcon} alt="frameRightIcon"/>
      </button>
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`flex justify-center items-center font-[semibold] text-[#A74DD0] border border-[#A74DD0]     ts:w-[24px] ts:h-[16px] ts:text-[6px] ts:rounded-[4px]   os:w-[32px] os:h-[24px] os:text-[8px] os:rounded-[4px]   sm:w-[36px] sm:h-[32px] sm:text-[12px] sm:rounded-[8px]   lg:w-[40px] lg:h-[40px] lg:text-[16px] lg:rounded-[8px] ${currentPage === number ? 'bg-[#A74DD0] text-white' : ''}`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="flex justify-center items-center border border-[#A74DD0]       ts:w-[24px] ts:h-[16px] ts:rounded-[4px]   os:w-[32px] os:h-[24px] os:rounded-[4px]   sm:w-[36px] sm:h-[32px] sm:rounded-[8px]   lg:w-[40px] lg:h-[40px] lg:rounded-[8px]"
      >
        <img className="ts:w-[8px] ts:h-[8px]   os:w-[12px] os:h-[12px]   sm:w-[16px] sm:h-[16px]   lg:w-[20px] lg:h-[20px]" src={FrameLeftIcon} alt="frameLeftIcon"/>
      </button>
    </div>
  );
};

export default PaginationButtons;