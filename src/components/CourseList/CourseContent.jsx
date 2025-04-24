import {React , useState, useEffect, useCallback } from 'react';
import CourseSide from './CourseSide';
import CourseSort from './CourseSort';
import CourseMain from './CourseMain';
import PaginationButtons from '../Common/PaginationButtons/PaginationButtons';
import { useFetchCourses } from '../../core/Hook/useFetchCourses/useFetchCourses';

const CourseContent = () => {
  const { courses: allCourses } = useFetchCourses();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState('6');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [totalPages, setTotalPages] = useState(1);
  const handlePageChange = useCallback((pageNumber) => setCurrentPage(pageNumber), []);

  const handleSearchChange = useCallback((newTerm) => {
    setSearchTerm(newTerm);
    setCurrentPage(1);
  }, []);


  const handleItemsPerPageChange = useCallback((value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    const results = allCourses?.filter(courseItem =>
      courseItem.title?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
    ) || [];
    setFilteredCourses(results);
    setCurrentPage(1);
  }, [allCourses, searchTerm]);

  useEffect(() => {
    setTotalPages(Math.ceil((filteredCourses?.length || 0) / parseInt(itemsPerPage, 10)) || 1);
  }, [filteredCourses, itemsPerPage]);

  useEffect(() => {
    setFilteredCourses(allCourses); 
  }, [allCourses]);

  return (
    <div className="flex justify-center w-full   ts:gap-[4px] ts:mt-[8px] ts:px-[8px]   os:gap-[12px] os:mt-[8px] os:px-[20px]   sm:gap-[24px] sm:mt-[10px] sm:px-[32px]   lg:gap-[40px] lg:mt-[10px] lg:px-[64px]">
      <CourseSide onSearchChange={handleSearchChange} />
      <div>
        <CourseSort
          onItemsPerPageChange={handleItemsPerPageChange}
          currentItemsPerPage={itemsPerPage}
        />
        <CourseMain 
          courses={filteredCourses} 
          searchTerm={searchTerm} 
          currentPage={currentPage} 
          itemsPerPage={itemsPerPage}
          />
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