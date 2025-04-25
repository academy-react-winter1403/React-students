import React from 'react'
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
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