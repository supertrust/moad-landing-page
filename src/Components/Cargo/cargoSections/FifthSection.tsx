'use client';
import React, { useState, useRef } from 'react';
import "../../../app/styles/FaqCards.css";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import 'animate.css';
import SectionBackground from '../../../Assets/lastsection.png';
import ArrowsIcon from '../../../Assets/horizantalarrow.svg';
import ColorNavbar from '../../Navbar/ColorNavbar';

const IndexPage: React.FC = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const FaqCards = [
    {
      id: 1,
      head: '광고 비용은 어떻게 되나요?',
      subtext: <span> 광고비용은 광고주가 계약한 내용마다 다릅니다. <br />
        화물주들의 이러한 광고단가 비용의 고민을 위해, <br />
        광고 신청전에 광고비용에대한 의뢰를 할수 있습니다. <br />
        의뢰후에 알맞은 광고를 신청해보세요!
      </span>
    },
    {
      id: 2,
      head: '광고를 진행하는 과정은 어떻게 되나요?',
      subtext: <span>
        광고비용은 광고주가 계약한 내용마다 다릅니다 <br /> 화물주들의 이러한 광고단가 비용의 고민을 위해, <br /> 광고 신청전에 광고비용에대한 의뢰를 할 수 있습니다.<br /> 의뢰후에 알맞은 광고를 신청해보세요!
      </span>,
    },
    {
      id: 3,
      head: '광고 기간은 어느정도 되나요?',
      subtext: <span>
        광고 기간은, 광고주와 계약한 내용마다 기간이 달라지게 됩니다. <br /> 기본적으로 6개월, 1년등으로 다양하게 설정될 수 있습니다. <br /> 랩핑의 시간이나 비용등을 고려해봤을때, <br /> 단기간보단 장기간 운행하시는것을 추천 드립니다!
      </span>
    },
    {
      id: 4,
      head: '제가 운행하는 지역은 도심권이 아닌데, 신청할수 있나요?',
      subtext:
        <span>
          네, 물론입니다! <br />  광고별로 모집하는  지역이 다양하기때문에, <br /> 해당 지역에 맞는 광고를 신청하시면 됩니다!
        </span>
    },
  ];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollbarThumbRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current && scrollbarThumbRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
      const thumbWidth = clientWidth * scrollPercentage;
      scrollbarThumbRef.current.style.width = `${thumbWidth + 50}px`;
    }
  };
  return (
    <>
      <section className=' h-[100vh] z-50 pb-8 relative  overflow-hidden bg-[#EEEFF3]'>
        <ColorNavbar />

        <div className='z-0'>
          <Image
            src={SectionBackground}
            onLoad={handleImageLoad}
            alt='Section--Background'
            className='absolute right-0 bottom-0'
          />
        </div>
        <div className=' space-y-6 mt-6'>
          <div className='px-4 md:px-6 lg:px-10 xl:px-28 flex-col justify-start items-start gap-2 inline-flex'>
            <div className="text-daisyBush-60 text-3xl font-extrabold font-Pretendard  leading-9">
              자주하는 질문
            </div>
            <div className='flex gap-4 items-center'>
              <div className=" text-gray-60 text-2xl font-bold font-Pretendard underline">
                다른 질문이 있으신가요
              </div>
              <div>
                <Image src={ArrowsIcon} alt='Arrow--icon' className='h-5 w-5' />
              </div>
            </div>
          </div>
          <div className='px-4 md:pl-6 lg:pl-10 xl:pl-28'>
            <div className="container max-w-full w-full ">
              <div ref={scrollContainerRef} className="scroll-container gap-8" onScroll={handleScroll}>
                {FaqCards.map((item, index) => (
                  <div key={index} className="bg-white p-5 rounded-3xl border-2">
                    <div className=" w-full space-y-10 min-w-[22rem]  max-h-[20rem] h-auto  ">
                      <div>
                        <span className="text-daisyBush-60 font-bold">0{item.id}</span>
                        <h3 className="text-bunting-60 h-8 mb-12 text-[20px] font-bold font-Pretendard  mt-1">
                          {item.head}
                        </h3>
                      </div>
                      <div className="text-gray-60 mt-8 text-base font-normal font-Pretendard  leading-normal">
                        {item.subtext}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="custom-scrollbar-container">
                <div className="custom-scrollbar-track">
                  <div ref={scrollbarThumbRef} className="custom-scrollbar-thumb"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
