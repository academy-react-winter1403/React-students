import {React , useState} from 'react'
import BlogSide from './BlogSide'
import BlogMain from './BlogMain'



const BlogContent = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (newTerm) => {
    setSearchTerm(newTerm);
  };


  return (
    <div className="flex justify-center w-full border   ts:gap-[4px] ts:mt-[4px] ts:px-[8px]   os:gap-[12px] os:mt-[8px] os:px-[20px]   sm:gap-[24px] sm:mt-[8px] sm:px-[32px]   lg:gap-[40px] lg:mt-[10px] lg:px-[64px]">
      <BlogSide onSearchChange={handleSearchChange}/>
      <BlogMain searchTerm={searchTerm}/>
    </div>
  )
}

export default BlogContent