import React, { useRef, useEffect, useState } from 'react';
import WeeklyBlog from '../Common/WeeklyBlog/WeeklyBlog';
import SeeAll from '../Common/SeeAll/SeeAll';
import { useFetchBlogs } from '../../../core/Hook/useFetchBlogs/useFetchBlogs';
import VectorLine3 from '../../../assets/Icons/Group 7.svg';


const WeeklyBlogs = () => {
  const { blogs } = useFetchBlogs();
  const threeBlogs = blogs?.slice(8, 11) || [];
  const containerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    if (containerRef.current && containerRef.current.children.length > 0) {
      const firstChild = containerRef.current.children[0];
      const gapValue = parseInt(getComputedStyle(containerRef.current).gap, 10) || 0;
      setScrollAmount(firstChild.offsetWidth + gapValue);
    }
  }, [threeBlogs]);

  return (
    <div className="ts:pt-[18px] os:pt-[32px] sm:pt-[68px] lg:pt-[112px] relative z-[10]   dark:bg-[#000000]">

      <img className="w-full absolute top-[-16px] z-[100]" src={VectorLine3} alt="vectorLine3Image"/>

      <div className="text-center">
        <button className="mx-[auto] font-[bold] text-[#A74DD1] bg-[#F1D1FF]
          ts:px-[8px] ts:py-[4px] ts:text-[12px] ts:rounded-[8px]
          os:px-[12px] os:py-[4px]
          sm:px-[16px] sm:py-[8px]
          lg:px-[16px] lg:py-[8px]">بلاگ ها</button>
        <h2 className="text-center font-[bold]
          ts:mt-[8px] ts:text-[16px]   os:mt-[8px] os:text-[20px]   sm:mt-[12px] sm:text-[20px]   lg:mt-[12px] lg:text-[24px]
          dark:text-gray-300">بلاگ های این هفته</h2>
      </div>
      <div
        ref={containerRef}
        className="overflow-x-auto flex justify-start items-center scroll-smooth 2x:justify-center
        ts:gap-[16px] ts:mt-[16px]   os:gap-[16px] os:mt-[24px] sm:gap-[24px] sm:mt-[32px]   lg:gap-[26px] lg:mt-[40px]"
      >
        {
          threeBlogs.map((item) => {
            return <WeeklyBlog data={item} key={item.id} className="flex-shrink-0 w-full px-4 snap-start sm:w-[auto]" />
          })
        }
      </div>
      {threeBlogs.length > 0 && scrollAmount > 0 && (
        <>
          <button
            className="absolute right-[5px] -translate-y-1/2 bg-gray-200 rounded-full p-2 opacity-50 hover:opacity-100 2x:hidden
            ts:top-[180px] os:top-[220px]   sm:top-[240px]   lg:top-[280px]"
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
            ts:top-[180px] os:top-[220px]   sm:top-[240px]   lg:top-[280px]"
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
      <SeeAll />
    </div>
  );
};

export default WeeklyBlogs;