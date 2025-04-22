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

const BlogCard = ({title, name , date , comments, floor}) => {
  
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(20);
  const [dislikeCount, setDislikeCount] = useState(3);

  const handleLikes = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
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
    } else {
      setDisliked(true);
      setDislikeCount(dislikeCount + 1);
      if (liked) {
        setLiked(false);
        setLikeCount(likeCount - 1);
      }
    }
  };

  return (
    <div>
    <div className='lg:w-[700px] md:w-[100%] sm:w-[100%] lg:h-full md:h-[300px] sm:h-[250px] flex lg:flex-row rounded-3xl bg-[#F8F8F8] p-4'>
      
      <div className='lg:w-1/2  md:mb-[40px] flex flex-col h-full lg:pr-[24px] border-2 border-pink-600'>
        <BlogCategory />
        <h2 className='mt-4 font-bold'>{title}</h2>

        <div className='flex lg:w-fit md:w-[200px] items-center lg:mt-6 md:mt-0'>
          <img className='w-6 h-6' src={CourseImage} alt="CourseImageIcon" />
          <p className='pr-2'>{name}</p>
        </div>
        <div className='flex lg:w-fit md:w-[200px] items-center mt-6'>
          <CourseIcon  />
          <p className='pr-2'>{date}</p>
        </div>
        <div className='flex w-fit items-center mt-6'>
          <CourseIcon2 />
          <p className='pr-2'>{comments}</p>
        </div>
        <div className='flex w-fit items-center mt-6'>
          <CourseIcon3 />
          <p className='pr-2'>{floor}</p>
        </div>
  
        <div className='flex justify-between items-center lg:w-[200px] md:w-[150px] border-2 border-red-500 lg:mt-6 md:mt-3 mb-6'>
          {/* Like */}
          <div className='flex justify-center items-center gap-2 md:text-[15px] sm:text-[13px] w-[50%] h-full border-2 border-gray-800' onClick={handleLikes}>
            <span className='flex justify-center items-center lg:w-11 md:w-8 md:h-8 lg:h-full rounded-full bg-[#A74DD0]'>
              {liked ? <FilledLike /> : <LikeIcon />}
            </span>
            <span>{likeCount}</span>
          </div>
  
          {/* Dislike */}
          <div className='flex justify-center items-center gap-2 h-full w-[50%] md:text-[15px] sm:text-[13px]' onClick={handleDislikes}>
            <span className='flex justify-center items-center lg:w-12 md:w-8 md:h-8 lg:h-12 rounded-full bg-white'>
              {disliked ? <FilledDislike /> : <Dislike />}
            </span>
            <span>{dislikeCount}</span>
          </div>
        </div>
      </div>
  
      
      <div className='lg:w-[320px] md:w-[250px] md:mt-8 flex flex-col justify-center items-start lg:h-full sm:h-[200px] border-2 border-orange-300'>
        <div className='font-bold lg:text-[17px] sm:text-[15px]'>در ادامه بلاگ می‌خوانید...</div>
        <div className='text-[#868686] mt-3 mb-3 lg:text-[16px] lg:w-[80%] sm:text-[12px] sm:w-[250px]'>
          تمامی مقاله ها و اخبار روز آکادمی در سریع ترین زمان ممکن در اختیار گذاشته میشه تمامی مقاله ها و اخبار روز آکادمی در سریع ترین زمان ممکن در اختیار گذاشته میشه تمامی مقاله ها و اخبار روز آکادمی در سریع ترین زمان ممکن در اختیار گذاشته میشه
        </div>
        <div className='flex items-center'>
          <p className='text-[#A74DD0]'>ادامه</p>
          <LeftArrow />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default BlogCard;
