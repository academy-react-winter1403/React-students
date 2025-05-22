import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkMode from '../../DarkMode/DarkMode'; 
import ReactStudentsLogo from '../../../assets/Icons/react-students.svg';

const Header = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path; 

  return (
    <div className="flex justify-between items-center border-b ts:px-[16px] ts:pt-[8px] sm:px-[32px] sm:pt-[16px] 3x:gap-[350px] 3x:px-[64px] 3x:pt-[20px]
    dark:bg-[#000000]">
      <div className="flex justify-center items-center   ts:gap-[4px]   sm:gap-[8px]   3x:gap-[8px]">
        <img className="ts:w-[32px] ts:h-[32px]   os:w-[36px] os:h-[36px]   sm:w-[40px]   sm:h-[40px]   3x:w-[44px] 3x:h-[44px]" src={ReactStudentsLogo} alt="reactStudentsIcon" />
        <h2 className="font-[semibold]   ts:text-[10px]   sm:text-[12px]   3x:text-[14px]
        dark:text-gray-300">React-students</h2>
      </div>
      <div className="flex justify-center items-center font-[medium]   ts:gap-[20px]   os:gap-[32px]   sm:gap:[40px]     3x:gap-[48px]
      dark:text-gray-300">
        <div>
          <Link className="hidden   os:block os:text-[12px]   sm:text-[14px]   3x:text-[16px]" to="/">
            خانه
          </Link>
          <div
            className={`mx-[auto] rounded-[1.5px] ${
              isActive('/') ? 'bg-[#A74DD1]' : 'bg-white'
            } ts:w-[25%] ts:h-[1px]   os:w-[30%] os:h-[1px]   sm:w-[35%] sm:h-[2px]   3x:w-[40.3%] 3x:h-[3px]`}
          ></div>
        </div>
        <div>
          <Link className="block   ts:text-[10px]   os:text-[12px]   sm:text-[14px]   3x:text-[16px]" to="/courselist">
            دوره‌ ها
          </Link>
          <div
            className={`mx-[auto] rounded-[1.5px] ${
              isActive('/courselist') ? 'bg-[#A74DD1]' : 'bg-white'
            } ts:w-[25%] ts:h-[1px]   os:w-[30%] os:h-[1px]   sm:w-[35%] sm:h-[2px]   3x:w-[40.3%] 3x:h-[3px]`}
          ></div>
        </div>
        <div>
          <Link className="block   ts:text-[10px]   os:text-[12px]   sm:text-[14px]   3x:text-[16px]" to="/bloglist">
            بلاگ‌ ها
          </Link>
          <div
            className={`mx-[auto] rounded-[1.5px] ${
              isActive('/bloglist') ? 'bg-[#A74DD1]' : 'bg-white'
            } ts:w-[25%] ts:h-[1px]   os:w-[30%] os:h-[1px]   sm:w-[35%] sm:h-[2px]   3x:w-[40.3%] 3x:h-[3px]`}
          ></div>
        </div>
        <div>
          <Link className="hidden   os:block os:text-[12px]   sm:text-[16px]   3x:text-[16px]" to="/about">
            درباره ما
          </Link>
          <div
            className={`mx-[auto] rounded-[1.5px] ${
              isActive('/about-us') ? 'bg-[#A74DD1]' : 'bg-white'
            } ts:w-[25%] ts:h-[1px]   os:w-[30%] os:h-[1px]   sm:w-[35%] sm:h-[2px]   3x:w-[40.3%] 3x:h-[3px]`}
          ></div>
        </div>
      </div>
      <div className="flex justify-center items-center   ts:gap-[4px]   os:gap-[8px]   sm:gap-[16px]   3x:gap-[24px]">
        <Link className="flex justify-center items-center font-[semibold]
          ts:text-[10px] os:text-[12] sm:text-[14px] 3x:text-[16px]   dark:text-gray-300" to="/login">
          ورود
        </Link>
        <Link
          className="flex justify-center items-center font-[semibold] text-white bg-[#A74DD1] 
          ts:px-[8px] ts:py-[4px] ts:text-[10px] ts:rounded-[4px] 
          os:px-[12px] os:py-[4px] os:text-[12px] os:rounded-[8px] 
          sm:px-[16px] sm:py-[8px] sm:text-[14px] sm:rounded-[10px] 
          3x:px-[16px] 3x:py-[8px] 3x:text-[16px] 3x:rounded-[12px]"
          to="/registerstepone"
        >
          ثبت‌ نام
        </Link>
        {/* کامپوننت DarkMode اینجا رندر می‌شود */}
        <DarkMode/>
      </div>
    </div>
  );
};

export default Header;