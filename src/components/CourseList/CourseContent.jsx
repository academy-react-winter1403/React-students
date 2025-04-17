import {React , useState, useEffect } from 'react';
import CourseSide from './CourseSide';
import CourseSort from './CourseSort';
import CourseMain from './CourseMain';
import PaginationButtons from './PaginationButtons';
import { useFetchCourse } from '../../core/Hook/useFetchCourse/useFetchCourse';

const CourseContent = () => {
  const { course: allCourses } = useFetchCourse();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState('6'); // State برای تعداد نمایش در هر صفحه (پیشفرض 6)
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(allCourses); // نگهداری لیست فیلتر شده
  const [totalPages, setTotalPages] = useState(1); 
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearchChange = (newTerm) => {
    setSearchTerm(newTerm);
    setCurrentPage(1); // بازگشت به صفحه اول پس از جستجو
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1); // بازگشت به صفحه اول پس از تغییر تعداد نمایش
  };

  const handleSort = (sortBy) => {
    // console.log('مرتب سازی بر اساس:', sortBy);
    let sortedCourses = [...(filteredCourses || [])];
    if (sortBy === 'popular') {
    } else if (sortBy === 'cheapest') {
      sortedCourses.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === 'expensive') {
      sortedCourses.sort((a, b) => (b.price || 0) - (a.price || 0));
    }
    setFilteredCourses(sortedCourses);
    setCurrentPage(1);
  };

  useEffect(() => {
    const results = allCourses?.filter(courseItem =>
      courseItem.title?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
    ) || [];
    setFilteredCourses(results);
    setCurrentPage(1); // بازگشت به صفحه اول پس از تغییر فیلتر
  }, [allCourses, searchTerm]);

  useEffect(() => {
    setTotalPages(Math.ceil((filteredCourses?.length || 0) / parseInt(itemsPerPage, 10)) || 1);
  }, [filteredCourses, itemsPerPage]);

  // محاسبه دوره‌های قابل نمایش برای صفحه فعلی از آرایه فیلتر شده
  const indexOfLastCourse = currentPage * parseInt(itemsPerPage, 10);
  const indexOfFirstCourse = indexOfLastCourse - parseInt(itemsPerPage, 10);
  const displayedCourses = filteredCourses?.slice(indexOfFirstCourse, indexOfLastCourse) || [];

  return (
    <div className="flex justify-center w-full border   ts:gap-[4px] ts:mt-[8px] ts:px-[8px]   os:gap-[12px] os:mt-[8px] os:px-[20px]   sm:gap-[24px] sm:mt-[10px] sm:px-[32px]   lg:gap-[40px] lg:mt-[10px] lg:px-[64px]">
      <CourseSide onSearchChange={handleSearchChange} />
      <div>
        <CourseSort
          onSort={handleSort}
          onItemsPerPageChange={handleItemsPerPageChange}
          currentItemsPerPage={itemsPerPage}
        />
        <CourseMain courses={displayedCourses} searchTerm={searchTerm} itemsPerPage={itemsPerPage} />
        {filteredCourses?.length > parseInt(itemsPerPage, 10) && (
          <PaginationButtons
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default CourseContent;