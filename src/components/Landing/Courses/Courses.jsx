import { React, useRef, useEffect, useState } from 'react';
import ReactIcon1 from '../../../assets/Icons/react.svg';
import JsIcon1 from '../../../assets/Icons/java-script.svg';
import HtmlIcon1 from '../../../assets/Icons/html-5.svg';
import PythonIcon from '../../../assets/Icons/python.svg';
import VectorLine2 from '../../../assets/Icons/Vector 6.svg';
import CategoryCourse from '../Common/CategoryCourse/CategoryCourse';

const Courses = () => {
  const containerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  const [catCourseData, setCatCourseData] = useState([
    { id: 1, img: ReactIcon1, title: 'ری اکت جی‌اس', desc: 'کتابخانه جاوااسکریپت' },
    { id: 2, img: JsIcon1, title: 'جاوا اسکریپت', desc: 'زبان برنامه نویسی' },
    { id: 3, img: PythonIcon, title: 'پایتون', desc: 'زبان برنامه نویسی' },
    { id: 4, img: HtmlIcon1, title: 'Html و CSS', desc: 'ساختار طراحی وب' },
  ]);

  useEffect(() => {
    if (containerRef.current && containerRef.current.children.length > 0) {
      const firstChild = containerRef.current.children[0];
      const gapValue = parseInt(getComputedStyle(containerRef.current).gap, 10) || 0;
      setScrollAmount(firstChild.offsetWidth + gapValue);
    }
  }, [catCourseData]);

  return (
    <div className="relative z-[10] ts:pt-[18px] os:pt-[32px] sm:pt-[68px] lg:pt-[112px]   dark:bg-[#000000]">
      <div className="text-center">
        <button className="flex justify-center items-center mx-[auto] font-[bold] text-[#A74DD1] bg-[#F1D1FF]
          ts:px-[8px] ts:py-[4px] ts:text-[12px] ts:rounded-[8px]
          os:px-[12px] os:py-[4px]
          sm:px-[16px] sm:py-[8px]
          lg:px-[16px] lg:py-[8px]">دسته بندی</button>
        <h2 className="text-center font-[bold]
          ts:mt-[8px] ts:text-[16px]
          os:mt-[8px] os:text-[20px]
          sm:mt-[12px] sm:text-[20px]
          lg:mt-[12px] lg:text-[24px]
          dark:text-gray-300">دسته بندی دوره های ما</h2>
      </div>
      <div
        className="overflow-x-auto flex justify-start gap-[25px] snap-x scroll-smooth 2x:justify-center
          ts:mt-[16px]
          os:mt-[24px]
          sm:mt-[32px]
          lg:mt-[41px]"
        ref={containerRef}
      >
        {
          catCourseData.map((item, index) => {
            return  <CategoryCourse data={item} key={index} className="flex-shrink-0 w-full px-4 snap-start sm:w-[auto]"/>
          })
        }
      </div>
      {catCourseData.length > 0 && scrollAmount > 0 && (
        <>
          <button
            className="absolute right-[5px] -translate-y-1/2 bg-gray-200 rounded-full p-2 opacity-50 hover:opacity-100 2x:hidden
            ts:top-[160px] os:top-[180px]   sm:top-[220px]   lg:top-[240]"
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
            ts:top-[160px] os:top-[180px]   sm:top-[220px]   lg:top-[240]"
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
      <img className="w-full absolute bottom-[-174px] z-[5]" src={VectorLine2} alt="vectorLine2Image" />
    </div>
  );
};

export default Courses;