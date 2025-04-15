import React from 'react';
import CourseCard from './CourseCard';

const CourseMain = ({ courses, searchTerm }) => {
  const filteredCourses = courses?.filter(item =>
    item.title?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  return (
    <div className="border">
      <div className="flex flex-row flex-wrap justify-center   ts:gap-[8px] ts:mt-[8px]   os:gap-[16px] os:mt-[16px]   sm:gap-[24px] sm:mt-[24px]   lg:gap-[33px] lg:mt-[32px]">
        {
          filteredCourses.map((item) => (
            <CourseCard
              data={item}
              key={item.id}
            />
          ))
        }
      </div>
    </div>
  );
};

export default CourseMain;