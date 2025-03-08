import React from 'react';
import Banner from '../Components/Banner/Banner';
import Wave from '../assets/wave.svg'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)] relative">
      <Banner></Banner>
      <img className='absolute sm:bottom-0 w-full' src={Wave} alt="" />
    </div>
  );
};

export default Home;