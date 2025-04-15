// CourseCard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JsIcon2 from '../../assets/Icons/java-script2.svg';
import MortarBoardIcon from '../../assets/Icons/mortarboard.svg';
import FloorIcon from '../../assets/Icons/Frame.svg';
import DateIcon from '../../assets/Icons/calendar-02-stroke-rounded 3.svg';
import ThumbsUpIcon from '../../assets/Icons/thumbs-up.svg';
import ThumbsDownIcon from '../../assets/Icons/thumbs-down.svg';

const CourseCard = ({ data }) => {
  const navigate = useNavigate();
  const [likes, setLikes] = useState(data.likeCount || 0);
  const [dislikes, setDislikes] = useState(data.dissLikeCount || 0);
  const [interaction, setInteraction] = useState(null); // 'like', 'dislike' یا null
  const { id } = data; // فرض بر این است که هر دوره یک id یکتا دارد

  const handleLike = () => {
    if (interaction === 'like') {
      setLikes(likes - 1);
      setInteraction(null);
      // درخواست API برای حذف لایک با id
      console.log(`حذف لایک برای دوره با ID: ${id}`);
      // fetch(`/api/courses/${id}/like`, { method: 'DELETE' });
    } else if (interaction === 'dislike') {
      setDislikes(dislikes - 1);
      setLikes(likes + 1);
      setInteraction('like');
      // درخواست API برای ثبت لایک و حذف دیسلایک با id
      console.log(`تغییر به لایک برای دوره با ID: ${id}`);
      // fetch(`/api/courses/${id}/like`, { method: 'POST' });
      // fetch(`/api/courses/${id}/dislike`, { method: 'DELETE' });
    } else {
      setLikes(likes + 1);
      setInteraction('like');
      // درخواست API برای ثبت لایک با id
      console.log(`لایک برای دوره با ID: ${id}`);
      // fetch(`/api/courses/${id}/like`, { method: 'POST' });
    }
  };

  const handleDislike = () => {
    if (interaction === 'dislike') {
      setDislikes(dislikes - 1);
      setInteraction(null);
      // درخواست API برای حذف دیسلایک با id
      console.log(`حذف دیسلایک برای دوره با ID: ${id}`);
      // fetch(`/api/courses/${id}/dislike`, { method: 'DELETE' });
    } else if (interaction === 'like') {
      setLikes(likes - 1);
      setDislikes(dislikes + 1);
      setInteraction('dislike');
      // درخواست API برای ثبت دیسلایک و حذف لایک با id
      console.log(`تغییر به دیسلایک برای دوره با ID: ${id}`);
      // fetch(`/api/courses/${id}/dislike`, { method: 'POST' });
      // fetch(`/api/courses/${id}/like`, { method: 'DELETE' });
    } else {
      setDislikes(dislikes + 1);
      setInteraction('dislike');
      // درخواست API برای ثبت دیسلایک با id
      console.log(`دیسلایک برای دوره با ID: ${id}`);
      // fetch(`/api/courses/${id}/dislike`, { method: 'POST' });
    }
  };

  return (
    <div
      onClick={() => navigate(`/detail/${id}`)}
      className="overflow-hidden bg-[#EAEAEA]   ts:w-[120px] ts:h-[200px] ts:rounded-[16px]   os:w-[180px] os:h-[280px] os:rounded-[20px]   sm:w-[240px] sm:h-[360px] sm:rounded-[24px]   lg:w-[297px] lg:h-[441px] lg:rounded-[24px]"
    >
      <div className="flex justify-center bg-[#DAE01E]   ts:h-[80px] ts:pt-[24px] ts:rounded-b-[24px]   os:h-[120px] os:pt-[32px] os:rounded-b-[28px]   sm:h-[160px] sm:pt-[40px] sm:rounded-b-[32px]   lg:h-[191px] lg:pt-[48px] lg:rounded-b-[32px]">
        <img
          className="ts:w-[14px] ts:h-[14px]   os:w-[28px] os:h-[28px]   sm:w-[56px] sm:h-[56px]   lg:w-[112px] lg:h-[112px]"
          src={JsIcon2}
          alt="javaScriptIcon"
        />
      </div>
      <div className="ts:mt-[4px] ts:pr-[4px]   os:mt-[4px] os:pr-[8px]   sm:mt-[8px] sm:pr-[12px]   lg:mt-[8px] lg:pr-[16px]">
        <div className="flex   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[8px]">
          <button className="font-[semibold] text-[#A74DD0] bg-[#F1D1FF]   ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[4px]   os:px-[8px] os:py-[4px] os:text-[8px] os:rounded-[4px]   sm:px-[8px] sm:py-[4px] sm:text-[12px] sm:rounded-[8px]   lg:px-[8px] lg:py-[5px] lg:text-[12px] lg:rounded-[8px]">
            {data.levelName}
          </button>
          <button className="font-[semibold] text-[#A74DD0] bg-[#F1D1FF]   ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[4px]   os:px-[8px] os:py-[4px] os:text-[8px] os:rounded-[4px]   sm:px-[8px] sm:py-[4px] sm:text-[12px] sm:rounded-[8px]   lg:px-[8px] lg:py-[5px] lg:text-[12px] lg:rounded-[8px]">
            {data.statusName}
          </button>
        </div>
        <h2 className="font-[semibold]   ts:mt-[4px] ts:text-[8px]   os:mt-[4px] os:text-[12px]   sm:mt-[8px] sm:text-[16px]   lg:mt-[8px] lg:text-[20px]">
          {data.title}
        </h2>
        <div className="flex items-center   ts:gap-[4px] ts:mt-[4px]   os:gap-[4px] os:mt-[4px]   sm:gap-[8px] sm:mt-[8px]   lg:gap-[8px] lg:mt-[16px]">
          <img
            className="ts:w-[12px] ts:h-[12px]   os:w-[16px] os:h-[16px]   sm:w-[20px] sm:h-[20px]   lg:w-[24px] lg:h-[24px]"
            src={MortarBoardIcon}
            alt="mortarBoardIcon"
          />
          <span className="font-[semibold] text-[#1E1E1E]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[14px]">
            {data.teacherName}
          </span>
        </div>
        <div className="flex items-center   ts:gap-[4px] ts:mt-[4px]   os:gap-[4px] os:mt-[4px]   sm:gap-[8px] sm:mt-[8px]   lg:gap-[8px] lg:mt-[12px]">
          <img
            className="ts:w-[12px] ts:h-[12px]   os:w-[16px] os:h-[16px]   sm:w-[20px] sm:h-[20px]   lg:w-[24px] lg:h-[24px]"
            src={FloorIcon}
            alt="floorIcon"
          />
          <span className="font-[semibold] text-[#1E1E1E]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[14px]">
            {data.classRoomName}
          </span>
        </div>
        <div className="flex items-center   ts:gap-[4px] ts:mt-[4px]   os:gap-[4px] os:mt-[4px]   sm:gap-[8px] sm:mt-[8px]   lg:gap-[8px] lg:mt-[12px]">
          <img
            className="ts:w-[12px] ts:h-[12px]   os:w-[16px] os:h-[16px]   sm:w-[20px] sm:h-[20px]   lg:w-[24px] lg:h-[24px]"
            src={DateIcon}
            alt="dateIcon"
          />
          <span className="font-[semibold] text-[#1E1E1E]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[14px]">
            {data.lastUpdate}
          </span>
        </div>
        <div className="flex items-center   ts:gap-[8px] ts:mt-[12px]   os:gap-[16px] os:mt-[16px]   sm:gap-[24px] sm:mt-[20px]   lg:gap-[38px] lg:mt-[26px]">
          <div className="flex   ts:gap-[4px]   os:gap-[8px]   sm:gap-[12px]   lg:gap-[16px]">
            <div className="flex items-center   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[8px]">
              <button onClick={handleLike}>
                <img
                  className="ts:w-[12px] ts:h-[12px]   os:w-[16px] os:h-[16px]   sm:w-[20px] sm:h-[20px]   lg:w-[24px] lg:h-[24px]"
                  src={ThumbsUpIcon}
                  alt="thumbsUpIcon"
                />
              </button>
              <span className="font-[medium]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">
                {likes}
              </span>
            </div>
            <div className="flex items-center   ts:gap-[4px]   os:gap-[4px]   sm:gap-[8px]   lg:gap-[8px]">
              <button onClick={handleDislike}>
                <img
                  className="ts:w-[12px] ts:h-[12px]   os:w-[16px] os:h-[16px]   sm:w-[20px] sm:h-[20px]   lg:w-[24px] lg:h-[24px]"
                  src={ThumbsDownIcon}
                  alt="thumbsDownIcon"
                />
              </button>
              <span className="font-[medium]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">
                {dislikes}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-[4px]   ts:ml-[4px]   os:ml-[8px]   sm:ml-[12px]   lg:ml-[16px]">
            <span className="font-[semibold]   text-[8px]   os:text-[12px]   sm:text-[16px]   lg:text-[20px]">
              {data.cost}
            </span>
            <span className="font-[semibold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[14px]">
              تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;