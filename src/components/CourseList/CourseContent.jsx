import { React, useState, useEffect, useCallback } from 'react';
import CourseSide from './CourseSide';
import SortShow from './SortShow';
import CourseMain from './CourseMain';
import PaginationButtons from './Common/PaginationButtons/PaginationButtons';
import { useFetchCourses } from '../../core/Hook/useFetchCourses/useFetchCourses';

const CourseContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState('6');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSort, setCurrentSort] = useState('popular'); 
  const [totalPages, setTotalPages] = useState(1); 

  const { courses: fetchedCourses, loading, error } = useFetchCourses(
    searchTerm,
    currentSort,
    parseInt(itemsPerPage, 10) 
  ); 

  const handlePageChange = useCallback((pageNumber) => setCurrentPage(pageNumber), []);

  const handleSearchChange = useCallback((newTerm) => {
    setSearchTerm(newTerm);
    setCurrentPage(1); 
  }, []);

  const handleItemsPerPageChange = useCallback((value) => {
    setItemsPerPage(value); 
    setCurrentPage(1); 
  }, []);

  const handleSortChange = useCallback((newSort) => {
    setCurrentSort(newSort);
    setCurrentPage(1); 
  }, []);

  useEffect(() => {
    const parsedItemsPerPage = parseInt(itemsPerPage, 10);
    if (Array.isArray(fetchedCourses) && parsedItemsPerPage > 0) {
      const newTotalPages = Math.ceil(fetchedCourses.length / parsedItemsPerPage);
      setTotalPages(newTotalPages || 1); 
    } else {
      setTotalPages(1); 
    }
  }, [fetchedCourses, itemsPerPage]); 

  const parsedItemsPerPageForDisplay = parseInt(itemsPerPage, 10);
  const startIndex = (currentPage - 1) * parsedItemsPerPageForDisplay;
  const endIndex = startIndex + parsedItemsPerPageForDisplay;
  const coursesToDisplay = fetchedCourses?.slice(startIndex, endIndex);

  return (
    <div className="flex justify-center w-full 
    ts:gap-[4px] ts:pt-[8px] ts:px-[8px] 
    os:gap-[12px] os:pt-[8px] os:px-[20px] 
    sm:gap-[24px] sm:pt-[10px] sm:px-[32px] 
    lg:gap-[40px] lg:pt-[10px] lg:px-[64px]
    dark:bg-[#000000]">
      <CourseSide onSearchChange={handleSearchChange} />
      <div>
        <SortShow
          onItemsPerPageChange={handleItemsPerPageChange}
          currentItemsPerPage={itemsPerPage}
          onSortChange={handleSortChange}
          currentSort={currentSort}       
        />

        {loading && <p className="text-center mt-4">در حال بارگذاری دوره‌ها...</p>}
        {error && <p className="text-center mt-4 text-red-500">خطا در بارگذاری دوره‌ها: {error.message}</p>}
        
        {!loading && !error && (!coursesToDisplay || coursesToDisplay.length === 0) && (
          <p className="text-center mt-4 text-gray-600">دوره‌ای یافت نشد.</p>
        )}

        <CourseMain
          courses={coursesToDisplay}
          searchTerm={searchTerm}    
          currentPage={currentPage}  
          itemsPerPage={itemsPerPage} 
        />

        {!loading && !error && totalPages > 1 && (
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