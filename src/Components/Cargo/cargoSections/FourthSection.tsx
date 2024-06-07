'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionBackground from '../../../Assets/BlurTruck.svg';
import SecondMobileIcon from '../../../Assets/Mobiletooltip.svg';
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
      <section className='overflow-hidden h-[100vh]  bg-[#101440]'>
        <WhiteNavbar />
        <div className='grid grid-cols-2 h-full relative gap-16 items-center pb-10 px-4 md:px-6 lg:px-10 xl:px-28'>
          {
            <>
              <div className='flex items-start relative w-full justify-end'>
                <div className='relative mt-10'>
                  <Image
                    src={SecondMobileIcon}
                    alt='Mobile--screen'
                    className=' w-[500px] h-[600px] '
                    onLoad={handleImageLoad}
                  />
                  {isImageLoaded && isInView && (
                    <>
                      <div className='animate__animated animate__fadeInRight rounded-md absolute  top-[100px] -right-4  bg-daisyBush-60 text-lg text-white  px-4 py-2 text-center z-50 font-semibold'>
                        {`다들 오늘 운행은 어떠셨나요?`}
                      </div>
                      <div className='animate__animated animate__fadeInLeft rounded-md absolute  top-[250px] left-[-30px]  bg-daisyBush-40 text-lg text-white px-4 py-2 font-semibold  text-center z-50'>
                        {`꽃이 많이 폈네요! 꽃 보고 가세요~~`}
                      </div>
                      <div className='animate__animated animate__fadeInUp  rounded-md absolute  top-[350px] -right-4   bg-[#EEEFF3] text-lg text-gray-100 font-semibold   px-4 py-2  text-center z-50'>
                        {`364km 운행기록 인증합니다!!`}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          }

          {isInView && (
            <div className='animate__animated  animate__fadeIn z-[1]'>
              <div className='flex-col justify-start items-start gap-2 inline-flex'>
                <h2 className="text-daisyBush-40 text-3xl font-extrabold font-Pretendard">
                  커뮤니티도 모드에서 이용해 보세요.
                </h2>
                <div className="w-[502px] h-[196px] text-gray-20 text-xl font-bold font-Pretendard leading-9">
                  <p>
                    좋은 정보, 좋은 업체 찾기 번거로우셨죠?
                  </p>
                  <p>
                    다른 화물차 기사님들과 앱 내에 커뮤니티 기능으로
                  </p>
                  <p>
                    편하게 소통하세요!
                  </p>
                  <p className='text-sm mt-4 font-Pretendard font-normal'>
                    추후 업데이트 예정입니다
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className='absolute right-0 bottom-20 w-[600.50px]'>
            <Image
              onLoad={handleImageLoad}
              alt='blur-truck'
              src={SectionBackground}
            />
          </div>
        </div>
        <CustomScrollButton color='#99A0AE' OnScrollDown={OnScrollDown} />
      </section>
    </>
  );
};

export default IndexPage;
