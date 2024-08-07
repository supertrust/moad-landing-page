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

    <section className='overflow-hidden h-full flex flex-col relative bg-[#101440]'>
      <WhiteNavbar />
      <div className='md:grid flex-col-reverse flex-1 justify-center z-50 flex md:grid-cols-2 h-full gap-6  md:gap-16 items-center pb-10 px-4 md:px-6 lg:px-10 xl:px-28'>
        {

          <div className='flex items-start relative w-full justify-end'>
            <div className='relative  block h-[50vh] md:h-[46rem] w-[33rem]'>
              <Image
                src="/assets/svgs/thirdmobile-desktop.svg"
                alt='Mobile--screen'
                className=' z-50'
                onLoad={handleImageLoad}

                fill
              />
              {isImageLoaded && isInView && (
                <>
                  <div className='animate__animated animate__fadeInRight rounded-md absolute top-[15%] md:top-[6.25rem] right-8  bg-daisyBush-60 text-lg text-white  px-4 py-2 text-center z-50 font-semibold'>
                    {`다들 오늘 운행은 어떠셨나요?`}
                  </div>
                  <div className='animate__animated animate__fadeInLeft rounded-md absolute top-[35%] md:top-[15.625rem]  left-4  bg-daisyBush-40 text-lg text-white px-4 py-2 font-semibold  text-center z-50'>
                    {`꽃이 많이 폈네요! 꽃 보고 가세요~~`}
                  </div>
                  <div className='animate__animated animate__fadeInUp  rounded-md absolute top-[60%]  md:top-[24.875rem] right-8   bg-[#EEEFF3] text-lg text-gray-100 font-semibold   px-4 py-2  text-center z-50'>
                    {`364km 운행기록 인증합니다!!`}
                  </div>
                </>
              )}
            </div>
          </div>

        }

        {isInView && (
          <div className='animate__animated z-50 animate__fadeIn '>
            <div className='flex-col justify-start  z-50 items-start gap-2 flex'>
              <h2 className="text-daisyBush-40 text-3xl mb-4 font-extrabold font-Pretendard">
                커뮤니티도 모드에서 이용해 보세요.
              </h2>
              <div className="md:w-[502px] md:h-[196px] text-gray-20 text-xl font-bold font-Pretendard leading-9">
                <p className=''>
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

        <div className='absolute -z-0 left-0 md:left-auto md:right-0 bottom-0 w-[200px] md:w-[600.50px]'>
          <Image
            onLoad={handleImageLoad}
            alt='blur-truck'
            className='transform scale-x-[-1] md:scale-x-100'
            src={SectionBackground}
          />
        </div>
      </div>
      <CustomScrollButton color='#99A0AE' OnScrollDown={OnScrollDown} />
    </section>
  );
};

export default IndexPage;
