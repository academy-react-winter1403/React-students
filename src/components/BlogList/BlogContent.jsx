import {React , useState, useEffect } from 'react';
import BlogSide from './BlogSide';
import BlogSort from './BlogSort';
import BlogMain from './BlogMain';
import PaginationButtons from '../Common/PaginationButtons/PaginationButtons';
import { useFetchBlogs } from '../../core/Hook/useFetchBlogs/useFetchBlogs';

const BlogContent = () => {
  const { blogs: allBlogs } = useFetchBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState('6'); // State برای تعداد نمایش در هر صفحه (پیشفرض 6)
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs); // نگهداری لیست فیلتر شده
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
    let sortedBlogs = [...(filteredBlogs || [])];
    if (sortBy === 'popular') {
    } else if (sortBy === 'cheapest') {
      sortedBlogs.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === 'expensive') {
      sortedBlogs.sort((a, b) => (b.price || 0) - (a.price || 0));
    }
    setFilteredBlogs(sortedBlogs);
    setCurrentPage(1);
  };

  useEffect(() => {
    const results = allBlogs?.filter(BlogItem =>
      BlogItem.title?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
    ) || [];
    setFilteredBlogs(results);
    setCurrentPage(1); // بازگشت به صفحه اول پس از تغییر فیلتر
  }, [allBlogs, searchTerm]);

  useEffect(() => {
    setTotalPages(Math.ceil((filteredBlogs?.length || 0) / parseInt(itemsPerPage, 10)) || 1);
  }, [filteredBlogs, itemsPerPage]);

  // محاسبه دوره‌های قابل نمایش برای صفحه فعلی از آرایه فیلتر شده
  const indexOfLastBlog = currentPage * parseInt(itemsPerPage, 10);
  const indexOfFirstBlog = indexOfLastBlog - parseInt(itemsPerPage, 10);
  const displayedBlogs = filteredBlogs?.slice(indexOfFirstBlog, indexOfLastBlog) || [];

  return (
    <div className="flex justify-center w-full border   ts:gap-[4px] ts:mt-[8px] ts:px-[8px]   os:gap-[12px] os:mt-[8px] os:px-[20px]   sm:gap-[24px] sm:mt-[10px] sm:px-[32px]   lg:gap-[40px] lg:mt-[10px] lg:px-[64px]">
      <BlogSide onSearchChange={handleSearchChange} />
      <div>
        <BlogSort
          onSort={handleSort}
          onItemsPerPageChange={handleItemsPerPageChange}
          currentItemsPerPage={itemsPerPage}
        />
        <BlogMain blogs={displayedBlogs} searchTerm={searchTerm} itemsPerPage={itemsPerPage} />
        {filteredBlogs?.length > parseInt(itemsPerPage, 10) && (
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