/* eslint-disable prettier/prettier */
import React from 'react';
import CarPlayer from './CarPlayer';
import './PlayerCar.css';
import Multi from '../Multicard/Multi';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';

function PlayerCar() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="car-player">
        <CarPlayer />
      </div>
      <div className="cont">
        <Footer />
      </div>
    </>
  );
}

export default PlayerCar;
