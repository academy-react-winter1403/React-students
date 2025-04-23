import React ,{useState} from 'react'
import WeeklyBlog from '../../Common/WeeklyBlog/WeeklyBlog'
import SeeAll from '../../Common/SeeAll/SeeAll'
import { useFetchBlogs } from '../../../core/Hook/useFetchBlogs/useFetchBlogs'


const WeeklyBlogs = () => {

  const { blogs } = useFetchBlogs();

  // const threeBlogs = blogs.slice(8 , 11);
  const threeBlogs = blogs?.slice(8, 11) || [];

  return (
    <div className="border   ts:mt-[18px]   os:mt-[32px]   sm:mt-[68px]   lg:mt-[112px]">
      <div className="text-center border">
        <button className="mx-[auto] font-[bold] text-[#A74DD1] bg-[#F1D1FF]   
          ts:px-[8px] ts:py-[4px] ts:text-[12px] ts:rounded-[8px]   
          os:px-[12px] os:py-[4px]   
          sm:px-[16px] sm:py-[8px]   
          lg:px-[16px] lg:py-[8px]">بلاگ ها</button>
        <h2 className="text-center font-[bold]   
          ts:mt-[8px] ts:text-[16px]   
          os:mt-[8px] os:text-[20px]   
          sm:mt-[12px] sm:text-[20px]   
          lg:mt-[12px] lg:text-[24px]">بلاگ های این هفته</h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center border   
        ts:gap-[16px] ts:mt-[16px]   
        os:gap-[16px] os:mt-[24px]   
        sm:gap-[24px] sm:mt-[32px]   
        lg:gap-[26px] lg:mt-[40px]">
        {
          threeBlogs.map((item) => (
            <WeeklyBlog data={item} key={item.id}/>
          ))
        }
      </div>
      <SeeAll/>
    </div>
  )
}


export default WeeklyBlogs
