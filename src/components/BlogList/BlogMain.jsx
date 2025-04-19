import React from 'react';
import BlogCard from './BlogCard';

const BlogMain = ({ displayedBlogs }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center
      ts:gap-[8px] ts:mt-[8px]
      os:gap-[12px] os:mt-[16px]
      sm:gap-[16px] sm:mt-[24px]
      lg:gap-[33px] lg:mt-[32px]">
      {displayedBlogs?.length > 0 ? (
        displayedBlogs.map((item) => (
          <BlogCard
            data={item}
            key={item.id}
          />
        ))
      ) : (
        <p>لیست خبرها خالی است.</p>
      )}
    </div>
  );
};

export default BlogMain;