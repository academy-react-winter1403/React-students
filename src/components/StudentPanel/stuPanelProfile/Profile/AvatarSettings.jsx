import React, { useRef } from 'react';
import AddPhoto from '../../Icons/AddPhoto'; 
import { useState } from 'react';
import GreenTick from '../../Icons/GreenTick';
import HappyRabbit from '../../Icons/HappyRabbit';
import BeautyWoman from '../../Icons/BeautyWoman';
import FunnyGirl from '../../Icons/FunnyGirl';
import SmilingFrog from '../../Icons/SmilingFrog';

const AvatarSettings = () => {

  const images = [
    <HappyRabbit />,
    <BeautyWoman />,
    <FunnyGirl />,
    <SmilingFrog />,
  ];

  const fileInputRef = useRef();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('فایل انتخاب شده:', file.name);
    }
  };

  return (
    <div className='w-[95%] h-full pr-5 flex flex-col flex-grow-[3]'>
      <div className='w-full h-[130px] flex items-center justify-start pt-10 pr-5'>
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
        />
        <button
          type='button'
          onClick={handleClick}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full font-[semibold] text-[13px]"
        >
          <AddPhoto />
          اضافه کردن عکس
          
        </button>
      </div>

      <div className='w-fit h-fit flex gap-4 p-4'>
        {images.map((img, index) => (
        <div
          key={index}
          onClick={() => setSelectedIndex(index)}
          className="w-fit h-fit cursor-pointer rounded"
        >
          
          <div className="w-full h-40">{img}</div>

          
          {selectedIndex === index && (
            <div className="relative bottom-[152px] right-[45px]"> 
              <GreenTick className="text-green-500 w-8 h-8 bg-white rounded-full shadow" />
           </div>
          )}
        </div>
      ))}
      </div>
   </div>
  );
};

export default AvatarSettings;
