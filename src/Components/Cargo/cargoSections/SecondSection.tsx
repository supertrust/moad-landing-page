import Image from 'next/image';
import DownArrow from '../../../Assets/downarrow.svg';
import SectionBackground from '../../../Assets/SecondSectionBg.png';
import SecondMobileIcon from '../../../Assets/SecondMobile.svg';
import ColorNavbar from '../../Navbar/ColorNavbar';
import { CustomScrollButton } from '@/Components/Buttons/CustomScrollButton';
import { useEffect, useState } from 'react';
import 'animate.css'; // Ensure animate.css is imported
import { SecondMobileSvg } from '@/Assets/Svgs';

const IndexPage: React.FC<{ OnScrollDown: () => void; isInView: boolean }> = ({
  OnScrollDown,
  isInView,
}) => {

  const sectionStyle = {
    background: `url(${SectionBackground.src}) center center / cover no-repeat, #EEEFF3`
  };

  return (
    <section
      className=' h-[100vh] bg-cover overflow-hidden bg-center opacity-100'
      style={sectionStyle}>
      <ColorNavbar />
      <div className='grid mb-8 grid-cols-2 h-full justify-center lg:px-10 xl:px-28 items-start'>
        {isInView && (
          <div className={`h-full w-full  max-h-[37.5rem] max-w-[37.5rem] ${isInView ? 'animate__animated animate__fadeInLeft' : ''
            }`}>
            <SecondMobileSvg />
          </div>
        )}
        <div className={`relative ${isInView ? "animate__animated  animate__fadeIn" : "hidden"} h-full flex items-center`}>
          <div className=' flex-col justify-start items-start gap-4 mb-20 inline-flex'>
            <div className="text-daisyBush-60  text-3xl font-extrabold font-Pretendard leading-9">
              화물차 기사님들의 편의와 부가수익,
              <br />
              모드가 자신합니다
            </div>
            <div className="text-text-trout text-xl font-bold font-Pretendard leading-6">
              화물차 기사님들의 편의와 부가수익 창출을 위한 고민,
              <br />
              모드가 대신 했습니다.
            </div>
          </div>
        </div>
      </div>

      <CustomScrollButton OnScrollDown={OnScrollDown} color='#101440' />
    </section>
  );
};

export default IndexPage;
