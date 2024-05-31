'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import MainBackground from '../../../Assets/MaibBG.png';
import CargoImage from '../../../Assets/NewTruck.svg';
import PlaysIcon from '../../../Assets/play.svg';
import 'animate.css';

import TextMoad from '../../../Assets/Moad.svg';
import TextCargo from '../../../Assets/CargoApp.svg';
import WhiteNavbar from '../../Navbar/WhiteNavbar';

import { CustomScrollButton } from '@/Components/Buttons/CustomScrollButton';

const IndexPage: React.FC<{ OnScrollDown: () => void; isInView: boolean }> = ({
  OnScrollDown,
  isInView,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [isInView]);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      <header
        className=' h-[100vh] bg-cover bg-center'
        style={{
          backgroundImage: `url(${MainBackground.src})`,
        }}>
        <WhiteNavbar />

        <div className='flex flex-col justify-center  '>
          {isImageLoaded && isInView && (
            <>
              <div className=''>
                <Image
                  className=' absolute top-[110px] left-[419px] animate__animated animate__fadeInLeft z-[1]'
                  src={TextMoad}
                  alt='Moad--Text'
                />
              </div>
              <div className=' '>
                <Image
                  className='absolute bottom-[120px] left-[150px] animate__animated animate__fadeInRight z-[1] '
                  src={TextCargo}
                  alt='Moad--Text'
                />
              </div>
            </>
          )}
          <div className='shadow-screens  '>
            <Image
              onLoad={handleImageLoad}
              alt='Cargo--image'
              src={CargoImage}
              className='float-animations absolute top-[200px] left-[474px] z-[20]  '
            />
            <div className='shadow-image'></div>
          </div>
        </div>
        <div className='w-[90%] mx-auto flex justify-between items-center '>
          <div className='flex w-[198px] absolute bottom-[20px] justify-center items-center space-x-2 bg-[#561AA4] text-white px-4 py-2 rounded'>
            <Image alt='icon' src={PlaysIcon} />
            <span className='font-bold text-xl'>앱 다운로드</span>
          </div>
          <CustomScrollButton OnScrollDown={OnScrollDown} />
        </div>
      </header>
    </>
  );
};

export default IndexPage;
