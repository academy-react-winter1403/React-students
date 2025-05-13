import CourseImage from '../../assets/CourseImg.svg'
import CourseIcon from '../../assets/Icons/CourseIcon'
import CourseIcon2 from '../../assets/Icons/CourseIcon2'
import CourseIcon3 from '../../assets/Icons/CourseIcon3'
import LeftArrow from '../../assets/Icons/LeftArrow'
import BlogCategory from './BlogCategory'
import React, { useState } from "react";
import FilledLike from '../../assets/Icons/FilledLike'
import FilledDislike from '../../assets/Icons/FilledDislike'
import LikeIcon from '../../assets/Icons/LikeIcon'
import Dislike from '../../assets/Icons/Dislike'
import CourseText from '../CourseDetail/CourseText'
import { useFetchBlog } from '../../core/hooks/useFetchCourseDetail/useFetchBlog'

const BlogCard = ({title, name , date , comments, showCourseText = false , floor , minidescribe , currentLikeCount , currentDissLikeCount }) => {
  
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(20);
  const [dislikeCount, setDislikeCount] = useState(3);

  const handleLikes = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } 
    else{
      setLiked(true);
      setLikeCount(likeCount + 1);
      if (disliked) {
        setDisliked(false);
        setDislikeCount(dislikeCount - 1);
      }
    }
  };

  const handleDislikes = () => {
    if (disliked) {
      setDisliked(false);
      setDislikeCount(dislikeCount - 1);
    } 
    else{
      setDisliked(true);
      setDislikeCount(dislikeCount + 1);
      if (liked) {
        setLiked(false);
        setLikeCount(likeCount - 1);
      }
    }
  };

  const { blog } = useFetchBlog();

  return (

   <div>
      <div className='lg:min-w-[400px] md:max-w-[550px]  lg:justify-around md:w-[100%] sm:w-[370px] sm:justify-between lg:h-[362px] md:h-[300px] sm:h-[250px] flex lg:flex-row rounded-3xl bg-[#F8F8F8]'>
        
        <div className='lg:w-[290px]  md:mb-[40px] sm:w-[200px] flex flex-col h-[auto] lg:relative lg:top-3 lg:pr-[24px] md:pr-5 md:w-[230px]'>
          <div className='flex lg:gap-4 md:gap-4 w-[auto] h-fit'>
          <BlogCategory />
          {showCourseText && <CourseText />}
          </div>
          <h2 className='mt-4 font-bold'>{title}</h2>

          <div className='flex lg:w-fit md:w-[200px] items-center mt-3'>
            <img className='w-6 h-6' src={CourseImage} alt="CourseImageIcon" />
            <p className='pr-2'>{name}</p>
          </div>
          <div className='flex lg:w-fit md:w-[200px] items-center mt-3'>
            <CourseIcon  />
            <p className='pr-2'>{date}</p>
          </div>
          <div className='flex w-fit items-center mt-3'>
            <CourseIcon2 />
            <p className='pr-2'>{comments}</p>
          </div>
          <div className='flex w-fit items-center mt-3'>
            <CourseIcon3 />
            <p className='pr-2'>{floor}</p>
          </div>
    
          <div className='md:hidden lg:flex sm:hidden justify-between items-center lg:w-[200px] lg:relative lg:bottom-2 lg:left-6 md:w-[150px] lg:mt-6 md:mt-6 mb-6'>
            
             <div className='flex justify-center items-center gap-2 md:text-[15px] sm:text-[13px] w-[50%] h-full ' onClick={handleLikes}>
              <span className='flex justify-center items-center lg:w-11 md:w-8 md:h-8 lg:h-[90%] rounded-full bg-[#A74DD0]'>
                {liked ? <FilledLike /> : <LikeIcon />}
              </span>
              <span>{blog?.currentLikeCount}</span>
            </div>
    
            
            <div className='flex justify-center items-center gap-2 h-full w-[50%] md:text-[15px] sm:text-[13px]' onClick={handleDislikes}>
              <span className='flex justify-center items-center lg:w-12 md:w-8 md:h-8 lg:h-12 rounded-full bg-white'>
                {disliked ? <FilledDislike /> : <Dislike />}
              </span>
              <span>{blog?.currentDislikeCount}</span>
            </div> 
          </div>
          
        </div>
    
        
        <div className='lg:min-w-[300px] lg:mb-12 md:w-[370px] md:h-[auto] lg:pr-[36px] sm:mt-4 sm:ml-8 pt-6 sm:w-[auto] flex flex-col justify-center items-start lg:h-[285px] sm:h-[200px] lg:pt-16'>
          <div className='font-bold lg:text-[17px] md:text-[15px] sm:text-[14px]'>در ادامه بلاگ می‌خوانید...</div>
          <p className='text-[#868686] pt-4 mb-3 lg:text-[16px] lg:w-[85%] md:text-[14px] md:w-[100%] sm:text-[12px] sm:w-[220px]'>
            {minidescribe}
          </p>
          <div className='flex items-center cursor-pointer'>
            <p className='text-[#A74DD0]'>ادامه</p>
            <LeftArrow />
          </div>
        </div>
      </div>
      
  </div>
  
  );
};

export default BlogCard;