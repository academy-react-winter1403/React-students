import React, { useEffect, useState } from 'react';
import ListHeroSection from '../Common/ListHeroSection/ListHeroSection';
import CourseContent from './CourseContent';
import CourseMain from './CourseMain';
import CourseMain2 from './CourseMain2';
import { useFetchCourse } from '../../core/Hook/useFetchCourse/useFetchCourse';
import CodingImage from '../../assets/Icons/Coding-A-Website-Streamline.svg';
import Icons from '../../assets/Icons/4icons.svg';
import PaginationButtons from './PaginationButtons'; // Import کامپوننت جدید

const CourseList = () => {
  const { course, loading, error } = useFetchCourse();
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6; // Number of courses to display per page

  // Calculate the index of the first and last course on the current page
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = course?.slice(indexOfFirstCourse, indexOfLastCourse) || [];

  const totalPages = Math.ceil((course?.length || 0) / coursesPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const data1 = {
    button: "دوره ها",
    heading: "آموزش رو از همین حالا شروع کن",
    desc: "تمامی دوره های آموزشی آکادمی به همراه تمامی سطح ها و دسته بندی ها و فیلتر ها",
    rightImg: CodingImage,
    leftImg: Icons
  };

  if (loading) {
    return <div>در حال بارگذاری دوره ها...</div>;
  }

  if (error) {
    return <div>خطا در بارگذاری دوره ها.</div>;
  }

  return (
    <div>
      <ListHeroSection data={data1}/>
      {currentPage === 1 && <CourseContent courses={currentCourses} showMain={1} />}
      {currentPage === 2 && <CourseContent courses={currentCourses} showMain={2} />}
      {currentPage > 2 && <CourseContent courses={currentCourses} showMain={2} />}

      <div className="flex">
        <div className="border   ts:w-[140px]   os:w-[200px]   sm:w-[260px]   lg:w-[421px]">

        </div>
        <div className="border   ts:w-[360px]  os:w-[500px] sm:w-[640px]   lg:w-[1050px]">
          <PaginationButtons
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseList;