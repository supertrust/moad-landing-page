import React from 'react';
import Image from 'next/image';
import { CustomScrollButton } from '@/Components/Buttons/CustomScrollButton';
import 'animate.css';
import ThirdBgSections from '../../../Assets/thirdsectionbg.png';
import WhiteUnion from '../../../Assets/whiteUnion.svg';
import WhiteNavbar from '../../Navbar/WhiteNavbar'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const IndexPage: React.FC<{ OnScrollDown: () => void; isInView: boolean }> = ({
  OnScrollDown,
  isInView,
}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cards = [
    {
      id: 1,
      image: '/assets/images/Cargo_3p Step1.png',
      title: 'Step-1',
      description: <span>광고 리스트에서 기사님들의 <br /> 조건에 맞는 광고를 확인하세요.</span>,
    },
    {
      id: 2,
      image: '/assets/images/Cargo_3p Step2.png',
      title: 'Step-2',
      description: <span>마음에 드는 광고 선택 후, <br /> 의뢰하기를 눌러주세요.</span>,
    },
    {
      id: 3,
      image: '/assets/images/Cargo_3p Step3.png',
      title: 'Step-3',
      description: <span>광고 의뢰가 더 궁금하시다면? <br />채팅으로 쉽게 알아볼 수 있어요.</span>,
    },
  ];


  return (
    <section
      className=' bg-daisyBush-60 relative h-[100vh] md:px-10 overflow-hidden bg-cover bg-center'
      style={{
        backgroundImage: `url(${ThirdBgSections.src})`,
      }}>
      <WhiteNavbar />
      <div className='relative h-full  w-full flex flex-col gap-4  px-4 md:px-6 lg:px-10 xl:px-28'>
        <div className='flex flex-col justify-center'>
          <div className='   flex-col gap-4 justify-start items-start inline-flex'>
            <div className="text-gray-0 text-2xl md:text-4xl font-extrabold font-Pretendard ">
              화물차 랩핑으로
              <br />
              사업을 확장시키세요
            </div>
            <div className="text-gray-20 text-lg md:text-2xl font-bold font-Pretendard">
              광고 의뢰의 번거로움을 이제 뒤로하고, <br /> 손쉬운 절차로 화물차 랩핑을
              시작하세요
            </div>
          </div>
        </div>
        <div className='hidden md:flex items-center h-full w-full -translate-y-16'>
          <div className='grid w-full grid-cols-3 px-10 justify-start gap-8 '>
            {cards.map((item) => (
              <div
                key={item.id}
                className={`
           ${item.id === 1
                    ? isInView ? 'animate__animated animate__fadeInLeft' : 'hidden'
                    : item.id === 2
                      ? isInView ? 'animate__animated animate__fadeInDown' : 'hidden'
                      : item.id === 3
                        ? isInView ? 'animate__animated animate__fadeInRight' : 'hidden'
                        : ''
                  }
           flex flex-col gap-4 justify-center items-center group transition-transform duration-500 ease-in-out
         `}
              >
                <div className="relative block  h-[17.5rem] w-[8.5rem] group-hover:-translate-y-28 group-hover:scale-[1.5] duration-500 ease-in-out">
                  <Image src={item.image} fill alt={item.title} />
                </div>
                <div className="w-[15.75rem] py-4 px-6 bg-[#101440] bg-opacity-50  group-hover:bg-opacity-100 z-[1000] rounded-[20px] flex flex-col items-center justify-center group-hover:scale-125 duration-500 ease-in-out">
                  <div className="flex justify-center items-center gap-x-1 ">
                    <Image
                      src={WhiteUnion}
                      className=""
                      alt={`list-${item.id + 1}`}
                    />
                    <span className="text-gray-20 font-bold">{item.title}</span>
                  </div>
                  <div className="text-center text-gray-0 text-sm font-bold font-Pretendard pt-1">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-20 px-8 md:hidden'>
          <Slider {...settings}>
            {
              cards.map((item) => (
                <div
                  key={item.id}
                  className={`flex flex-col gap-4 justify-center items-center group transition-transform duration-500 ease-in-out
          `}
                >
                  <div className='flex justify-center'>

                    <div className="relative block  h-[400px] w-[200px]">
                      <Image src={item.image} fill alt={item.title} />
                    </div>
                  </div>
                  <div className='flex justify-center mt-4'>
                    <div className="w-[250px] py-6 px-6 bg-[#101440] bg-opacity-50 z-[1000] rounded-[20px] flex flex-col items-center justify-center">
                      <div className="flex justify-center items-center gap-x-1 ">
                        <Image
                          src={WhiteUnion}
                          className=""
                          alt={`list-${item.id + 1}`}
                        />
                        <span className="text-gray-20 font-bold">{item.title}</span>
                      </div>
                      <div className="text-center text-gray-0 text-sm font-bold font-Pretendard pt-1">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
      <CustomScrollButton OnScrollDown={OnScrollDown} />
    </section>
  );
};

export default IndexPage;