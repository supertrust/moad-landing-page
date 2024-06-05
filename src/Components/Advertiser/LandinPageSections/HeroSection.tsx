import React, { useState } from 'react';
import { ReuseableNavbar } from '@/Components/Navbar';

interface Props {
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
}

const HeroSection = ({isHovered, setIsHovered}:Props) => {

  const buttonsConfig = [
    {
        id: 1,
        label: '앱 다운로드',
        link: "/"
    },
    {
        id: 2,
        label: '화물주 페이지 가기',
        link: '/shippers'
    },
];

  const mouseEnter = () => {
    setIsHovered(true);
  }


  const mouseLeave = () => {
    setIsHovered(false);
  }


  return (
    <div
      className="relative h-full flex-col flex items-center justify-center"
    >
      <div className="absolute top-0 left-0 w-full z-50">
        <ReuseableNavbar color={isHovered ? "#fff" : "#101440"} buttonsConfig={buttonsConfig}/>
      </div>
      <div className="hero-section" onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}>
        <div className="max-w-[49.5rem]">
          <h2 className="text-5xl font-bold text-white font-Pretendard">
            이젠 광고도 효율적으로!
          </h2>
          <h2 className="text-5xl my-6 font-bold text-white font-Pretendard">
            움직이는 랩핑 광고로 주목 up
          </h2>
          <p className="mt-16 text-3xl font-bold text-white font-Pretendard">
            더 많은 광고 주목과 효과를 누리실 수 있게 모드가 화물차 랩핑
            광고의 자부심을 보여드릴게요.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
