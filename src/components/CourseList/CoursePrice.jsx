import React, { useState, useEffect } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';



const CoursePrice = ({ onPriceFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 100000]); // مقدار اولیه محدوده قیمت
  const [minPriceDisplay, setMinPriceDisplay] = useState(0);
  const [maxPriceDisplay, setMaxPriceDisplay] = useState(100000);

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
  };

  useEffect(() => {
    setMinPriceDisplay(priceRange[0]);
    setMaxPriceDisplay(priceRange[1]);
    onPriceFilterChange({ min: priceRange[0], max: priceRange[1] });
  }, [priceRange, onPriceFilterChange]);

  return (
    <div className="mt-4">
      <h3 className="font-[medium] text-[#1E1E1E] ts:text-[6px] os:text-[8px] sm:text-[10px] lg:text-[14px] mb-2">
        قیمت
      </h3>
      <div className="flex flex-col items-center">
        <div className="flex justify-between w-full mb-2">
          <span className="text-[#707070] ts:text-[5px] os:text-[7px] sm:text-[9px] lg:text-[12px]">
            {minPriceDisplay.toLocaleString()}
          </span>
          <span className="text-[#707070] ts:text-[5px] os:text-[7px] sm:text-[9px] lg:text-[12px]">
            {maxPriceDisplay.toLocaleString()}
          </span>
        </div>
        <div className="w-full">
          <Range
            min={0} // حداقل مقدار قیمت
            max={100000} // حداکثر مقدار قیمت
            defaultValue={[0, 100000]} // مقدار اولیه محدوده
            onChange={handlePriceChange}
            handleStyle={[
              { backgroundColor: '#8E24AA', borderColor: '#8E24AA', width: 16, height: 16, top: -6 }, // استایل دستگیره اول
              { backgroundColor: '#8E24AA', borderColor: '#8E24AA', width: 16, height: 16, top: -6 }, // استایل دستگیره دوم
            ]}
            trackStyle={[{ backgroundColor: '#8E24AA', height: 4 }]} // استایل نوار بین دستگیره‌ها
            railStyle={{ backgroundColor: '#d3d3d3', height: 4 }} // استایل نوار پس زمینه
          />
        </div>
      </div>
    </div>
  );
};

export default CoursePrice;