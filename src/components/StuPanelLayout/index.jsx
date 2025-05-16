import React from 'react'
import StuPanelSide from './StuPanelSide/StuPanelSide'
import StuPanelHeader from '../StuPanelLayout/StuPanelHeader/StuPanelHeader';
import { Outlet } from 'react-router-dom';

const index = () => {

  return (
    <div className='flex bg-[#242424]'>
      <StuPanelSide className='w-[294px]'/>
      <div className='w-[1250px]'>
        <StuPanelHeader/>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default index