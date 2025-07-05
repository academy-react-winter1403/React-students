import { React, useState, useEffect, useCallback } from 'react';
import BlogSide from './BlogSide';
import SortShow from '../CourseList/SortShow';
import BlogMain from './BlogMain';
import PaginationButtons from '../CourseList/Common/PaginationButtons/PaginationButtons';
import { useFetchBlogs } from '../../core/Hook/useFetchBlogs/useFetchBlogs';

const BlogContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState('6'); 
  const [totalPages, setTotalPages] = useState(1);
  const [initialBlogs, setInitialBlogs] = useState([]);

  const handlePageChange = useCallback((pageNumber) => setCurrentPage(pageNumber), []);

  const handleItemsPerPageChange = useCallback((value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  }, []);

  const { blogs: allBlogs } = useFetchBlogs();
  console.log(allBlogs)

  useEffect(() => {
    if (allBlogs?.length > 0) {
      setInitialBlogs(allBlogs.slice(0, 10));
    }
  }, [allBlogs]);

  useEffect(() => {
    setTotalPages(Math.ceil((initialBlogs?.length || 0) / parseInt(itemsPerPage, 10)) || 1);
  }, [initialBlogs, itemsPerPage]);

  const indexOfLastBlog = currentPage * parseInt(itemsPerPage, 10);
  const indexOfFirstBlog = indexOfLastBlog - parseInt(itemsPerPage, 10);
  const displayedBlogs = initialBlogs?.slice(indexOfFirstBlog, indexOfLastBlog) || [];

  return (
    <div className="flex justify-center w-full   
    ts:gap-[4px] ts:pt-[8px] ts:px-[8px]   
    os:gap-[12px] os:pt-[16px] os:px-[20px]   
    sm:gap-[24px] sm:pt-[10px] sm:px-[32px]   
    lg:gap-[40px] lg:pt-[10px] lg:px-[64px]
    dark:bg-[#000000]">
      <BlogSide onSearchChange={() => {}} />
      <div>
        <SortShow
          onSort={() => {}}
          onItemsPerPageChange={handleItemsPerPageChange}
          currentItemsPerPage={itemsPerPage}
        />
        <BlogMain displayedBlogs={displayedBlogs} />
        {initialBlogs?.length > parseInt(itemsPerPage, 10) && (
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

export default BlogContent;