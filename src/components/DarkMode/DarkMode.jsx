import React, { useEffect } from 'react';
import DarkModeIcon from '../../assets/Icons/dark-mode-100.png';
import LightModeIcon from '../../assets/Icons/sun-100.png';

const DarkMode = () => {
  useEffect(() => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    function updateDarkMode(isDarkMode) {
      htmlElement.classList.toggle('dark', isDarkMode);
      localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
      updateIconVisibility(isDarkMode);
    }

    function updateIconVisibility(isDarkMode) {
      if (moonIcon && sunIcon) {
        moonIcon.style.display = isDarkMode ? 'none' : 'block';
        sunIcon.style.display = isDarkMode ? 'block' : 'none';
      }
    }

    if (darkModeToggle && moonIcon && sunIcon) {
      darkModeToggle.addEventListener('click', () => {
        const isDarkMode = htmlElement.classList.contains('dark');
        updateDarkMode(!isDarkMode);
      });
    }

    // بررسی وضعیت ذخیره شده در localStorage هنگام بارگیری صفحه
    if (localStorage.getItem('darkMode') === 'enabled') {
      updateDarkMode(true);
    } else {
      updateDarkMode(false);
    }
  }, []);

  return (
    <button id="dark-mode-toggle" className="flex justify-center items-center gap-3">
      <img id="moon-icon" className='w-6 h-6' src={DarkModeIcon} alt="darkModeIcon" style={{ display: localStorage.getItem('darkMode') === 'enabled' ? 'none' : 'block' }} />
      <img id="sun-icon" className='w-6 h-6' src={LightModeIcon} alt="lightModeIcon" style={{ display: localStorage.getItem('darkMode') === 'enabled' ? 'block' : 'none' }} />
    </button>
  );
};

export default DarkMode;