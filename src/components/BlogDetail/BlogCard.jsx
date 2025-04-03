import React from 'react'
import CourseImage from '../../assets/CourseImg.svg'
import CourseIcon from '../../assets/Icons/CourseIcon'
import CourseIcon2 from '../../assets/Icons/CourseIcon2'
import CourseIcon3 from '../../assets/Icons/CourseIcon3'
import LikeIcon from '../../assets/Icons/LikeIcon'
import Dislike from '../../assets/Icons/Dislike'
import LeftArrow from '../../assets/Icons/LeftArrow'
import BlogCategory from './BlogCategory'

const BlogCard = () => {
  return (
    <div>
        <div className='w-[730px] h-full flex rounded-3xl bg-[#F8F8F8]'>
                         <div className='w-1/2 flex flex-col h-full pr-[24px]'>
                            <BlogCategory/>
        
                            <h2 className='mt-[16px]'>عنوان دوره</h2>
                            <div className='flex w-[150px] h-[20px] mt-[24px]'>
                              <img className='w-6 h-6' src={CourseImage} alt="CourseImageIcon" />
                              <p className='pr-2'>اسم استاد</p>
                            </div>
                            <div className='flex w-[150px] h-[20px] mt-[24px] '>
                              <CourseIcon />
                              <p className='pr-2'>تاریخ</p>
                            </div>
                            <div className='flex w-[150px] h-[20px] mt-[24px] '>
                              <CourseIcon2 />
                              <p className='pr-2'>تعداد نظرات</p>
                            </div>
                            <div className='flex w-[150px] h-[20px] mt-[24px]'>
                              < CourseIcon3 />
                              <p className='pr-2'>تعداد بیننده</p>
                            </div>
        
                            <div className='flex justify-between items-center w-[200px] h-14k mt-[25px] mb-[25px]'>
        
                              <div className= 'flex justify-center items-center gap-[8px] h-full '>
                                <span className='flex justify-center items-center w-[48px] h-[48px] rounded-[100%] bg-[#A74DD0]'>
                                  <LikeIcon />
                                </span>
                                <span>
                                  ۲۰
                                </span>
                              </div>
        
                              <div className='flex justify-center items-center gap-[8px] h-full'>
                                <span className='flex justify-center items-center w-[48px] h-[48px] rounded-[100%]  bg-white'>
                                  <Dislike />
                                </span>
                                <span>
                                  ۳
                                </span>
                              </div>
        
                            </div>
                            
                         </div>
                         <div className='flex flex-col w-1/2  h-full'>
                            <div className='mt-[66px]'>در ادامه بلاگ میخوانید...</div>
                            <div className='w-[315px] h-[150px] text-[#868686] mt-[12px] mb-[12px]'> تمامی مقاله ها و اخبار روز آکادمی در سریع ترین زمان ممکن در اختیار گذاشته میشه تمامی مقاله ها و اخبار روز آکادمی در سریع ترین زمان ممکن در اختیار گذاشته میشه تمامی مقاله ها و اخبار روز آکادمی در سریع ترین زمان ممکن در اختیار گذاشته میشه</div>
                            <div className='flex items-center'>
                              <p className='text-[#A74DD0]'>ادامه</p>
                              <LeftArrow />
                            </div>
                         </div>
        
                        </div>
    </div>
  )
}

export default BlogCard