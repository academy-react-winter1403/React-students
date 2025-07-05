import { React, useRef, useEffect, useState } from 'react';
import MonthlyTeacher from '../Common/MonthlyTeacher/MonthlyTeacher';
import useFetchTeachers from '../../../core/Hook/useFetchTeachers/useFetchTeachers';

const MonthlyTeachers = () => {
  const { teachers } = useFetchTeachers();
  const threeTeachers = teachers?.slice(0, 3);
  const containerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    if (containerRef.current && containerRef.current.children.length > 0) {
      const firstChild = containerRef.current.children[0];
      const gapValue = parseInt(getComputedStyle(containerRef.current).gap, 10) || 0;
      setScrollAmount(firstChild.offsetWidth + gapValue);
    }
  }, [threeTeachers]);

  return (
    <div className="relative z-[10]   
    ts:pt-[18px] ts:pb-[28px]   os:pt-[32px] os:pb-[48px]   sm:pt-[68px] sm:pb-[60px]   lg:pt-[112px] lg:pb-[80px]    3x:pb-[106px]
    dark:bg-[#000000]">
      <div className="text-center">
        <button className="mx-[auto] font-[bold] text-[#A74DD1] bg-[#F1D1FF]
          ts:px-[8px] ts:py-[4px] ts:text-[12px] ts:rounded-[8px]
          os:px-[12px] os:py-[4px]
          sm:px-[16px] sm:py-[8px]
          lg:px-[16px] lg:py-[8px]">اساتید</button>
        <h2 className="text-center font-[bold]
          ts:mt-[8px] ts:text-[16px]
          os:mt-[8px] os:text-[20px]
          sm:mt-[12px] sm:text-[20px]
          lg:mt-[12px] lg:text-[24px]
          dark:text-gray-300">اساتید برتر این ماه</h2>
      </div>
      <div
        ref={containerRef}
        className="overflow-x-auto flex justify-start gap-[24px] mt-[40px] scroll-smooth 2x:justify-center"
      >
        {
          threeTeachers?.map((item) => {
            return <MonthlyTeacher data={item} key={item.id} className="flex-shrink-0 w-full px-4 snap-start sm:w-[auto]" />
          })
        }
      </div>
      {threeTeachers?.length > 0 && scrollAmount > 0 && (
        <>
          <button
            className="absolute right-[5px] -translate-y-1/2 bg-gray-200 rounded-full p-2 opacity-50 hover:opacity-100 2x:hidden
            ts:top-[180px] os:top-[200px]   sm:top-[220px]   lg:top-[240px]"
            onClick={() => {
              if (containerRef.current) {
                containerRef.current.scrollLeft += scrollAmount;
              }
            }}
          >
            &lt;
          </button>
          <button
            className="absolute left-[5px] -translate-y-1/2 bg-gray-200 rounded-full p-2 opacity-50 hover:opacity-100 2x:hidden
            ts:top-[180px] os:top-[200px]   sm:top-[220px]   lg:top-[240px]"
            onClick={() => {
              if (containerRef.current) {
                containerRef.current.scrollLeft -= scrollAmount;
              }
            }}
          >
            &gt;
          </button>
        </>
      )}
    </div>
  );
};

export default MonthlyTeachers;