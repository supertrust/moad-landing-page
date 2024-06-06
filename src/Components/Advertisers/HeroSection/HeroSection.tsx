'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import MainBackground from '../../../Assets/MaibBG.png';
import CargoImage from '../../../Assets/NewTruck.svg';
import PlaysIcon from '../../../Assets/play.svg';
// import AdvertText from '/assets/svgs/ADVERTISEMENT.svg';
import 'animate.css';
import WhiteNavbar from '../../Navbar/WhiteNavbar';
import { CustomScrollButton } from '@/Components/Buttons/CustomScrollButton';
import ServiceBackground from '../../../Assets/thirdsectionbg.png'

const AdvertHeroSection: React.FC<{ OnScrollDown: () => void; isInView: boolean }> = ({
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
                className='pt-4 h-[100vh] overflow-hidden bg-daisyBush-60  relative bg-cover '
                style={{
                    backgroundImage: `url(/assets/images/bg-2.png)`,
                    zIndex: 0,
                }}>
                <WhiteNavbar />
                <div className='flex  relative w-full h-full flex-1 flex-col justify-center  '>
                    {isInView && (
                        <div className='absolute h-full  mb-8 w-full left-0 flex flex-col justify-between items-center'>
                            <div className='relative h-full justify-center  flex flex-col items-center '>
                                <div className={`max-w-[35.44rem]  max-h-[7rem] ${isImageLoaded ? "animate__animated animate__fadeInLeft" : "invisible"}  z-50`}>
                                    <Image
                                        onLoad={handleImageLoad}
                                        alt='Cargo--image'
                                        src={'/assets/svgs/MOAD.svg'}
                                        width={1296}
                                        height={116}
                                    />
                                </div>
                                <div className='shadow-screens box-border relative -translate-y-10  z-20 '>
                                    <Image
                                        onLoad={handleImageLoad}
                                        alt='Cargo--image'
                                        src={CargoImage}
                                        className={`${isImageLoaded ? "opacity-100 duration-500 ease-linear float-animations " : "invisible opacity-0"} `}
                                    />
                                    <div className={`shadow-image ${isImageLoaded ? "opacity-100 duration-500 ease-linear " : "invisible opacity-0"}`}></div>
                                </div>
                                <div className='-translate-y-20 z-10'>
                                    <div className={` max-w-[71.25rem]  max-h-[7rem] ${isImageLoaded ? "animate__animated animate__fadeInRight" : "invisible"} `}>
                                        <Image
                                            onLoad={handleImageLoad}
                                            alt='Cargo--image'
                                            src={'/assets/svgs/ADVERTISEMENT.svg'}
                                            width={1296}
                                            height={116}

                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
                <div className='w-[90%] mx-auto flex justify-between items-center '>
                    <div className='flex w-auto max-w-[200px] absolute bottom-[20px] justify-center items-center space-x-2 bg-bunting-60 text-white px-4 py-2 rounded'>
                        <Image alt='icon' src={PlaysIcon} />
                        <span className='font-bold text-xl'>앱 다운로드</span>
                    </div>
                    <CustomScrollButton OnScrollDown={OnScrollDown} color='#99A0AE' />
                </div>
            </header>
        </>
    );
};

export default AdvertHeroSection;
