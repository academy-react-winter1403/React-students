import React, { useState } from 'react';
import CourseSide from './CourseSide';
import CourseMain from './CourseMain';
import CourseMain2 from './CourseMain2';
import CourseSort from './CourseSort';

const CourseContent = ({ courses, showMain }) => {
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (newTerm) => {
    setSearchTerm(newTerm);
  };

  return (
    <div className="flex justify-center w-full border   ts:gap-[4px] ts:mt-[4px] ts:px-[8px]   os:gap-[12px] os:mt-[8px] os:px-[20px]   sm:gap-[24px] sm:mt-[8px] sm:px-[32px]   lg:gap-[40px] lg:mt-[10px] lg:px-[64px]">
      <CourseSide onSearchChange={handleSearchChange} />
      <div>
        <CourseSort/>
        {showMain === 1 && <CourseMain courses={courses} searchTerm={searchTerm} />}
        {showMain === 2 && <CourseMain2 courses={courses} searchTerm={searchTerm} />}
      </div>
    </div>
  );
};

export default CourseContent;