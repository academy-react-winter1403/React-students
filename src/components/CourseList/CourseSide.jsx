import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Search from './Common/Search/Search';
import DropDownHolder from './Common/DropDown/DropDownHolder';
import CoursePrice from './Common/CoursePrice/CoursePrice';
import Date from './Common/Date/Date';

const CourseSide = ({ onSearchChange }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // document.body.classList.toggle('overflow-hidden', !isMenuOpen);
  };
  
  const sideData = [
    { title: "دسته بندی", placeholder: "دسته‌بندی مورد نظر را انتخاب کنید..." },
    { title: "سطح آموزشی", placeholder: "سطح مورد نظر را انتخاب کنید..." },
    { title: "استاد", placeholder: "استاد مورد نظر را انتخاب کنید..." }
  ];



  return (
    <div className="relative">
      {!isMenuOpen && (
        <button
          className="md:hidden p-[8px] shadow-md bg-gray-200 rounded-md fixed top-[65px] right-[16px] z-50"
          onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}



      <div
        className={`md:hidden w-[300px] h-full transform transition-transform duration-300 ease-in-out shadow-md bg-[#F8F8F8] fixed top-0 right-0 z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-[300px]'}`}>
        <div className="flex items-center justify-end mb-[16px] px-[16px] pt-[16px]">
          <button onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-[16px]">
          <h2 className="mb-[16px] font-[semibold] text-lg text-[#1E1E1E]">فیلتر ها</h2>
          <Formik initialValues={{ search: '' }} onSubmit={() => {}}>
            <Form>
              <Search onSearchChange={onSearchChange} />
              {sideData.map((item, index) => (
                <DropDownHolder key={index} title={item.title} placeholder={item.placeholder} />
              ))}
              <CoursePrice />
              <Date />
            </Form>
          </Formik>
        </div>
      </div>






      <div className="hidden md:block bg-[#F8F8F8] 
        os:w-[240px] os:h-[366px] os:px-[16px] os:py-[12px] os:rounded-[20px] 
        sm:w-[260px] sm:h-[506px] sm:px-[20px] sm:py-[16px] sm:rounded-[24px] 
        lg:w-[316px] lg:h-[646px] lg:px-[24px] lg:py-[20px] lg:rounded-[24px]">
        <h2 className="font-[semibold] text-[#1E1E1E] ts:text-[6px] os:text-[8px] sm:text-[12px] lg:text-[16px]">فیلتر ها</h2>
        <Formik initialValues={{ search: '' }} onSubmit={() => {}}>
          <Form>
            <Search onSearchChange={onSearchChange} />
            {sideData.map((item, index) => (
              <DropDownHolder key={index} title={item.title} placeholder={item.placeholder} />
            ))}
            <CoursePrice />
            <Date />
          </Form>
        </Formik>
      </div>





      {isMenuOpen && (
        <div
          className="md:hidden opacity-60 bg-[#000000] fixed top-0 right-0 bottom-0 left-0 z-30 "
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default CourseSide;