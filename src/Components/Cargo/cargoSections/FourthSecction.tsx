'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DownArrow from '../../../Assets/downarrow.svg';
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
      <section className=' h-[100vh]  bg-[#101440]'>
        <WhiteNavbar />
        <div className='flex relative justify-center items-center '>
          {
            <>
              <div className=''>
                <Image
                  src={SecondMobileIcon}
                  alt='Mobile--screen'
                  className=' w-[533px] h-[690px] absolute left-[128px] top-[80px]'
                  onLoad={handleImageLoad}
                />
                {isImageLoaded && isInView && (
                  <>
                    <div className='animate__animated animate__fadeInRight rounded-md absolute  top-[180px] left-[400px]  bg-[#561AA4] text-[20px] text-white w-[273px] h-[64px] p-[16px] text-center'>
                      {`다들 오늘 운행은 어떠셨나요?`}
                    </div>
                    <div className='animate__animated animate__fadeInLeft rounded-md absolute  top-[280px] left-[100px]  bg-[#9571C3] text-[20px] text-white w-[321px] h-[64px] p-[16px] text-center'>
                      {`꽃이 많이 폈네요! 꽃 보고 가세요~~`}
                    </div>
                    <div className='animate__animated animate__fadeInUp  rounded-md absolute  top-[430px] left-[400px]  bg-[#EEEFF3] text-[20px] text-[#0E121B] w-[284px] h-[64px] p-[16px] text-center'>
                      {`364km 운행기록 인증합니다!!`}
                    </div>
                  </>
                )}
              </div>
            </>
          }

          {isImageLoaded && isInView && (
            <>
              <div className='absolute top-[280px] right-[120px] animate__animated  animate__fadeIn z-[1]'>
                <div className='flex-col justify-start items-start gap-2 inline-flex'>
                  <div className="text-[#9571C3] text-[36px] font-extrabold font-['Pretendard']">
                    커뮤니티도 모드에서 이용해 보세요.
                  </div>
                  <div className="w-[502px] h-[196px] text-white text-2xl font-bold font-['Pretendard'] leading-9">
                    좋은 정보, 좋은 업체 찾기 번거로우셨죠? 다른 화물차
                    기사님들과 앱 내에 커뮤니티 기능으로  편하게 소통하세요!
                  </div>
                </div>
              </div>
            </>
          )}

          <div className='absolute right-0 top-[300px] w-[712.50px]'>
            <Image
              onLoad={handleImageLoad}
              className='w-[712.50px] h-[480px]'
              alt='blur-truck'
              src={SectionBackground}
            />
          </div>
        </div>
        <CustomScrollButton OnScrollDown={OnScrollDown} />
      </section>
    </>
  );
};

export default IndexPage;
