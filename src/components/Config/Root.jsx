import React from 'react'
import Header from '../Common/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default Root