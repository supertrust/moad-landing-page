import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CustomScrollButton } from '@/Components/Buttons/CustomScrollButton';

import 'animate.css';

import ThirdBgSections from '../../../Assets/thirdsectionbg.png';
import Listone from '../../../Assets/MobileOne.svg';
import ListTwo from '../../../Assets/MobilTwo.svg';
import ListThree from '../../../Assets/Mobilethree.svg';
import WhiteUnion from '../../../Assets/whiteUnion.svg';
import WhiteNavbar from '../../Navbar/WhiteNavbar'

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


 
  const cards = [
    {
      id: 1,
      image: Listone,
      title: 'Step-1',
      description: '광고 리스트에서 기사님들의 조건에 맞는 광고를 확인하세요.',
    },
    {
      id: 2,
      image: ListTwo,
      title: 'Step-2',
      description: '마음에 드는 광고 선택 후, 의뢰하기를 눌러주세요.',
    },
    {
      id: 3,
      image: ListThree,
      title: 'Step-3',
      description:
        '광고 의뢰가 더 궁금하시다면? 채팅으로 쉽게 알아볼 수 있어요.',
    },
  ];

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      <section
        className=' bg-[#561AA4] relative h-[100vh] bg-cover bg-center'
        style={{
          backgroundImage: `url(${ThirdBgSections.src})`,
        }}>
<WhiteNavbar/>
     
        <div className='relative'>
          <div className='absolute top-[100px] left-[100px]  w-[375px] h-[196px] flex-col justify-start items-start gap-4 inline-flex'>
            <div className="text-slate-100 text-4xl font-extrabold font-['Pretendard'] ">
              화물차 랩핑으로
              <br />
              사업을 확장시키세요
            </div>
            <div className="text-zinc-200 text-2xl font-bold font-['Pretendard']">
              광고 의뢰의 번거로움을 이제 뒤로하고,  손쉬운 절차로 화물차 랩핑을
              시작하세요
            </div>
          </div>
        </div>
        {/* //Card--cdoe */}
        <div className='flex  gap-x-[200px] absolute left-[100px] top-[300px] '>
          {
            isInView && (
              <>
               {cards.map((item) => (
            <div
              key={item.id}
              className={`
              ${
                animate && (
                  item.id === 1
                    ? 'animate__animated animate__fadeInLeft'
                    : item.id === 2
                    ? 'animate__animated animate__fadeInDown'
                    : item.id === 3
                    ? 'animate__animated animate__fadeInRight'
                    : ''
                )
              }
              flex flex-col justify-center items-center ${item.id === 3 ? 'gap-y-8' : 'gap-y-0'}
            `}
              
              
              
              >
              <div>
                <Image
                  src={item.image}
               
                  className={`w-[280px]  ${item.id === 3 ? 'h-[260px] mt-[10px]' : 'h-[300px]'}`}
                  alt='list-1'
                />
              </div>
              <div className={` h-[113px] w-[280px] p-2 bg-[#101440] bg-opacity-50 z-10 rounded-[20px] flex flex-col items-center justify-center  `}>
                <div className='flex justify-center items-center gap-x-1 pt-3'>
                  <Image
                    src={WhiteUnion}
                    className=''
                    alt={`list-${item.id + 1}`}
                  />
                  <span className='text-[#E4DEEB]'>{item.title}</span>
                </div>

                <div className="  text-center text-slate-100 text-base font-bold font-['Pretendard'] pt-1">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
              </>
            )
          }
         
        </div>

        <CustomScrollButton  OnScrollDown={OnScrollDown} />
      </section>
    </>
  );
};

export default IndexPage;
