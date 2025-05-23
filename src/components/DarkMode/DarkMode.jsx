import React, { useState, useEffect } from 'react';
import DarkModeIcon from '../../assets/Icons/moon.png';
import LightModeIcon from '../../assets/Icons/light-mode.png'; 

const DarkMode = () => {
  // مقدار اولیه از localStorage یا false (اگر هنوز تنظیم نشده) گرفته می‌شود.
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'enabled';
  });

  // `useEffect` برای اعمال/حذف کلاس 'dark' و ذخیره وضعیت در localStorage
  // این Effect هر زمان که `isDarkMode` تغییر کند، اجرا می‌شود.
  useEffect(() => {
    const htmlElement = document.documentElement; // دسترسی به تگ <html>

    if (isDarkMode) {
      htmlElement.classList.add('dark'); 
    } else {
      htmlElement.classList.remove('dark');
    }

    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');

  }, [isDarkMode]); // Dependency Array: این Effect هر زمان که `isDarkMode` تغییر کند، دوباره اجرا می‌شود.

  // تابع برای تغییر حالت دارک مود
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); // معکوس کردن وضعیت فعلی
  };

  return (
    // دکمه‌ای که با کلیک روی آن، تابع `toggleDarkMode` فراخوانی می‌شود.
    <button
      onClick={toggleDarkMode}
      className="relative flex justify-center items-center gap-3 cursor-pointer"
      // کلاس‌های مربوط به استایل خود دکمه دارک مود (می‌توانید اینجا را هم سفارشی کنید)
      // این کلاس‌ها به خود دکمه سوییچ مربوط می‌شوند، نه به استایل‌های کلی هدر.
    >
      <img
        src={DarkModeIcon}
        alt="Dark Mode Icon (Moon)"
        className={`w-6 h-6 transition-opacity duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}
      />
      <img
        src={LightModeIcon}
        alt="Light Mode Icon (Sun)"
        className={`w-6 h-6 transition-opacity duration-300 absolute ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}
        style={{ right: '0' }} // این مقدار ممکن است نیاز به تنظیم دستی داشته باشد تا آیکون‌ها دقیقاً روی هم قرار گیرند
      />
    </button>
  );
};

export default DarkMode;