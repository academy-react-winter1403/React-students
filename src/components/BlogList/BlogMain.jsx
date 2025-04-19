import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import { useFetchBlogs } from '../../core/Hook/useFetchBlogs/useFetchBlogs';

const BlogMain = () => {

  const { blogs } = useFetchBlogs();
  const tenBlogs = blogs.slice(0 , 10);

  return (
    <div className="flex flex-row flex-wrap justify-center   
      ts:gap-[8px] ts:mt-[8px]   
      os:gap-[12px] os:mt-[16px]   
      sm:gap-[16px] sm:mt-[24px]   
      lg:gap-[33px] lg:mt-[32px]">
      {tenBlogs.map((item) => (
          <BlogCard
            data={item}
            key={item.id}
          />
        ))}
    </div>
  );
};

export default BlogMain;