import React from 'react'
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { Outlet } from 'react-router-dom';

const Route = () => {
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

export default Route