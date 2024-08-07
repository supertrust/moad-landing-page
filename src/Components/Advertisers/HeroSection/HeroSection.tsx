'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import 'animate.css';
import WhiteNavbar from '../../Navbar/WhiteNavbar';
import { CustomScrollButton } from '@/Components/Buttons/CustomScrollButton';
import { useMediaQuery } from '@/hooks';
import Link from 'next/link';
import { TextMoad } from '@/Assets/Svgs';

const AdvertHeroSection: React.FC<{ OnScrollDown: () => void; isInView: boolean }> = ({
    OnScrollDown,
    isInView,
}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');


    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <>
            <header
                className='h-full flex flex-col overflow-hidden bg-daisyBush-60  relative bg-cover bg-top '
                style={{
                    backgroundImage: `url(/assets/images/bg-2.png)`,
                    zIndex: 0,
                }}>
                <div className="">
                    <WhiteNavbar page="advertisers" section="hero" />
                </div>
                <div className='flex    px-8  relative w-full flex-1 flex-col justify-center  '>
                    {isInView && (
                        <div className='absolute h-full   px-8  mb-8 w-full left-0 flex flex-col justify-center items-center'>
                            <div className='relative px-8 h-full justify-center  flex flex-col items-center '>
                                <div className={`md:max-w-[35.44rem]  max-h-[7rem] ${isImageLoaded ? "animate__animated animate__fadeInLeft" : "invisible"}  z-50`}>
                                    <TextMoad />
                                </div>
                                <div className='shadow-screens px-8 box-border relative -translate-y-10  z-20 '>
                                    <div className='px-8 block relative h-[30vh] md:h-[18.75rem] w-[26.25rem]'>
                                        <Image
                                            onLoad={handleImageLoad}
                                            alt='Cargo--image'
                                            src="/assets/svgs/CargoImage.svg"
                                            className={`${isImageLoaded ? "opacity-100 duration-500 ease-linear float-animations " : "invisible opacity-0"} `}
                                            fill
                                        />
                                    </div>
                                    <div className={`shadow-image ${isImageLoaded ? "opacity-100 duration-500 ease-linear " : "invisible opacity-0"}`}></div>
                                </div>
                                <div className='-translate-y-14 z-10'>
                                    <div className={` max-w-[71.25rem]   max-h-[7rem] ${isImageLoaded ? "animate__animated animate__fadeInRight" : "invisible"} `}>
                                        {
                                            !isMobile ?
                                                <div className=''>
                                                    <Image
                                                        onLoad={handleImageLoad}
                                                        alt='Cargo--image'
                                                        src={'/assets/svgs/ADVERTISEMENT.svg'}
                                                        width={1176}
                                                        height={112}
                                                    />
                                                </div>
                                                :
                                                <div className='relative block w-[71.25rem] h-[7rem]'>
                                                    <Image
                                                        onLoad={handleImageLoad}
                                                        alt='Cargo--image'
                                                        src={'/assets/svgs/Ad_m.svg'}
                                                        fill
                                                        className='z-50'
                                                    />
                                                </div>
                                        }
                                    </div>
                                </div>
                                <div className='md:hidden z-50 w-full flex justify-center'>
                                    <Link href="https://advertiser.moad.live/login" className='flex w-full max-w-[335px] justify-center items-center space-x-2 bg-bunting-60 text-white px-8 py-4 rounded-xl border border-white'>
                                        <span className='font-bold text-xl'>웹 페이지로</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    )}

                </div>
                <div className=' mx-auto flex z-50 justify-between items-center '>
                    <div className='w-full hidden md:block px-8 z-50 md:w-auto md:max-w-[350px] absolute bottom-6 left-8  '>
                        <Link href="https://advertiser.moad.live/login" className='flex w-full justify-center items-center space-x-2 bg-bunting-60 text-white px-8 py-4 rounded-xl border border-white'>

                            <span className='font-bold text-xl'>웹 페이지로</span>
                        </Link>
                    </div>
                    <CustomScrollButton OnScrollDown={OnScrollDown} color='#99A0AE' />
                </div>

            </header>
        </>
    );
};

export default AdvertHeroSection;
