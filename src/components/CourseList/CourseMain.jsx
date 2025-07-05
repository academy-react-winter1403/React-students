import React from 'react';
import CourseCard from './CourseCard';

const CourseMain = ({ courses, searchTerm, currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * parseInt(itemsPerPage, 10);
  const endIndex = startIndex + parseInt(itemsPerPage, 10);

  const displayedCourses = (courses || []).filter(item =>
    item.title?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  ).slice(startIndex, endIndex);
  console.log(displayedCourses)

  return (
    <div className="flex flex-row flex-wrap justify-center
      ts:gap-[8px] ts:mt-[8px]
      os:gap-[12px] os:mt-[16px]
      sm:gap-[16px] sm:mt-[24px]
      lg:gap-[33px] lg:mt-[32px]">
      {displayedCourses?.length > 0 ? (
        displayedCourses.map((item) => (
          <CourseCard
          key={item.id}
          Id={item.courseId}
          data={item}
          />
        ))
      ) : searchTerm ? (
        <p>هیچ دوره‌ای با عنوان "{searchTerm}" یافت نشد.</p>
      ) : (
        <p>لیست دوره‌ها خالی است.</p>
      )}
    </div>
  );
};

export default CourseMain;