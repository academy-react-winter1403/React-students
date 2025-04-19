import React from 'react';
import { Formik, Form } from 'formik';
import Search from '../Common/Search/Search';
import DropDownHolder from '../Common/DropDown/DropDownHolder';
import Date from '../Common/Date/Date';


const BlogSide = ({ onSearchChange }) => {
  const sideData = [
    { title: "دسته بندی", placeholder: "دسته‌بندی مورد نظر را انتخاب کنید..." }  
  ];

  return (
    <div className="bg-[#F8F8F8]   
      ts:w-[160px] ts:h-[246px] ts:px-[8px] ts:py-[4px] ts:rounded-[16px]   
      os:w-[240px] os:h-[366px] os:px-[16px] os:py-[12px] os:rounded-[20px]   
      sm:w-[260px] sm:h-[506px] sm:px-[20px] sm:py-[16px]  sm:rounded-[24px]   
      lg:w-[316px] lg:h-[646px] lg:px-[24px] lg:py-[20px] lg:rounded-[24px]">
      <h2 className="font-[semibold] text-[#1E1E1E]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">فیلتر ها</h2>
      <Formik
        initialValues={{search: ''}}
        onSubmit={() => {
        }}
      >
        <Form>
          <Search onSearchChange={onSearchChange} />
          {sideData.map((item, index) => (
            <DropDownHolder key={index} title={item.title} placeholder={item.placeholder} />
          ))}
          <Date />
        </Form>
      </Formik>
    </div>
  );
};

export default BlogSide;