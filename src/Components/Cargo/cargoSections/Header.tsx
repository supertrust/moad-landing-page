'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import MainBackground from '../../../Assets/MaibBG.png';
import CargoImage from '../../../Assets/NewTruck.svg';
import PlaysIcon from '../../../Assets/play.svg';
import 'animate.css';
import WhiteNavbar from '../../Navbar/WhiteNavbar';
import { CustomScrollButton } from '@/Components/Buttons/CustomScrollButton';
import { TextCargo, TextMoad } from '@/Assets/Svgs';

const IndexPage: React.FC<{ OnScrollDown: () => void; isInView: boolean }> = ({
  OnScrollDown,
  isInView,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);


  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      <header
        className=' h-[100vh] overflow-hidden  relative bg-cover bg-center'
        style={{
          backgroundImage: `url(${MainBackground.src})`,
          zIndex: 0,
        }}>
        <WhiteNavbar />
        <div className='flex  px-8 relative w-full h-full flex-1 flex-col justify-center  '>
          {isInView && (
            <div className='absolute h-full top-0 -translate-y-10  mb-8 w-full left-0 flex flex-col justify-between items-center'>
              <div className='relative px-8 h-full justify-center  flex flex-col items-center '>
                <div className={`md:max-w-[35.44rem]  max-h-[7rem] ${isImageLoaded ? "animate__animated animate__fadeInLeft" : "invisible"}  z-50`}>
                  <TextMoad />
                </div>
                <div className='shadow-screens relative -translate-y-10  z-20 '>
                  <Image
                    onLoad={handleImageLoad}
                    alt='Cargo--image'
                    src={CargoImage}
                    className={`${isImageLoaded ? "opacity-100 duration-500 ease-linear float-animations " : "invisible opacity-0"} `}
                  />
                  <div className={`shadow-image ${isImageLoaded ? "opacity-100 duration-500 ease-linear " : "invisible opacity-0"}`}></div>
                </div>
                <div className='-translate-y-20 z-10'>
                  <div className={`  text-white  ${isImageLoaded ? "animate__animated animate__fadeInRight" : "invisible"} `}>
                    <TextCargo />

                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
        <div className=' mx-auto flex  justify-between items-center '>
          <div className='w-full px-8  md:w-auto md:max-w-[350px] bottom-40 absolute md:bottom-[20px]'>
            <div className='flex w-full justify-center items-center space-x-2 bg-[#561AA4] text-white px-8 py-4 rounded-xl border border-white'>
              <Image alt='icon' src={PlaysIcon} />
              <span className='font-bold text-xl'>앱 다운로드</span>
            </div>
          </div>
          <CustomScrollButton OnScrollDown={OnScrollDown} />
        </div>
      </header>
    </>
  );
};

export default IndexPage;
