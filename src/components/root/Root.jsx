import React from 'react'
import Header from '../common/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Layout/Footer';


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
