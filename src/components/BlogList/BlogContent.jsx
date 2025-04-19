import { React, useState, useEffect, useCallback } from 'react';
import BlogSide from './BlogSide';
import BlogSort from './BlogSort';
import BlogMain from './BlogMain';
import PaginationButtons from '../Common/PaginationButtons/PaginationButtons';
import { useFetchBlogs } from '../../core/Hook/useFetchBlogs/useFetchBlogs';

const BlogContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState('6'); // نمایش پیشفرض 6 خبر
  const [totalPages, setTotalPages] = useState(1);
  const [initialBlogs, setInitialBlogs] = useState([]); // نگهداری 10 خبر اول

  const handlePageChange = useCallback((pageNumber) => setCurrentPage(pageNumber), []);

  const handleItemsPerPageChange = useCallback((value) => {
    setItemsPerPage(value);
    setCurrentPage(1); // بازگشت به صفحه اول بعد از تغییر تعداد نمایش
  }, []);

  const { blogs: allBlogs } = useFetchBlogs();

  useEffect(() => {
    if (allBlogs?.length > 0) {
      setInitialBlogs(allBlogs.slice(0, 10)); // گرفتن 10 خبر اول
    }
  }, [allBlogs]);

  useEffect(() => {
    setTotalPages(Math.ceil((initialBlogs?.length || 0) / parseInt(itemsPerPage, 10)) || 1);
  }, [initialBlogs, itemsPerPage]);

  // محاسبه خبرهای قابل نمایش در صفحه فعلی
  const indexOfLastBlog = currentPage * parseInt(itemsPerPage, 10);
  const indexOfFirstBlog = indexOfLastBlog - parseInt(itemsPerPage, 10);
  const displayedBlogs = initialBlogs?.slice(indexOfFirstBlog, indexOfLastBlog) || [];

  return (
    <div className="flex justify-center w-full border   ts:gap-[4px] ts:mt-[8px] ts:px-[8px]   os:gap-[12px] os:mt-[16px] os:px-[20px]   sm:gap-[24px] sm:mt-[10px] sm:px-[32px]   lg:gap-[40px] lg:mt-[10px] lg:px-[64px]">
      <BlogSide onSearchChange={() => {}} />
      <div>
        <BlogSort
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