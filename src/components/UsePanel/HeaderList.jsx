import React from 'react';
import LinkPanel from './LinkPanel';
import ImgPanel from './ImgPanel';
import DarkMode from '../DarkMode/DarkMode';

const Header = () => {
  return (
    <div  className='flex items-center justify-between px-8 mt-4'>
      
        <ImgPanel address={"#"} alt={"Profile"}/>

      <div className="flex items-center w-[350px] text-center justify-between">
        <LinkPanel title={"صفحه اصلی"} address={"/"} />
        <LinkPanel title={"گزارش"} address={"#"} />
        <LinkPanel title={"ارتباط باما"} address={"#"} />
      </div>

      <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
        <DarkMode />
      </div>
      
    </div>
  );
};

export default Header;
