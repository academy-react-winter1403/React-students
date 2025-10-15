import React, { useState, useEffect } from 'react';
import DarkModeIcon from '../../assets/Icons/moon.png';
import LightModeIcon from '../../assets/Icons/light-mode.png'; 

const DarkMode = () => {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'enabled';
  });

  useEffect(() => {
    const htmlElement = document.documentElement; 

    if (isDarkMode) {
      htmlElement.classList.add('dark'); 
    } else {
      htmlElement.classList.remove('dark');
    }

    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');

  }, [isDarkMode]); 

  
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); 
  };

  return (

    <button
      onClick={toggleDarkMode}
      className="relative flex justify-center items-center gap-3 cursor-pointer"
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
        style={{ right: '0' }}
      />
    </button>
  );
};

export default DarkMode;