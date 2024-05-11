import React from 'react';
import Baloon from '../../../Assets/balloon.svg';
import Image from 'next/image';
import MoadTruck from '../../../Assets/MoadTruck.svg';
const CargoThirSection = () => {
  return (
    <div className=''>
      <div className=' h-[900px] relative bg-gradient-to-r from-white to-slate-100'>
        <div className='left-[135px] top-[100px] absolute'>
          <div className=''>
            <span className="text-neutral-900 text-[68px] font-bold font-['Pretendard'] leading-[100px]">
              차량 랩핑으로
              <br />
            </span>
            <span className="text-violet-900 text-[68px] font-bold font-['Pretendard'] leading-[100px]">
              화물차 보호까지 든든하게
            </span>
          </div>
          <div className="left-0 top-[264px] absolute text-gray-800 text-[32px] font-bold font-['Pretendard'] leading-[44px]">
            랩핑으로 차량을 보호하고 수명을 연장시켜
            <br />
            유지보수 비용을 절감해 보세요.
          </div>
        </div>
        <div className='flex'>
          <div className='bg-violet-900 w-full  h-[220px] absolute top-[685px]  '></div>
        </div>

        <Image
          alt='baloon--image'
          className='w-[168px] h-[206.64px] left-[969.07px] top-[151.55px] absolute'
          src={Baloon}
        />
        <div className='w-[600px] h-[471.79px] left-[646px] top-[368.21px] absolute'>
          <Image alt='image' width={600} height={475} src={MoadTruck} />
        </div>
      </div>
    </div>
  );
};

export default CargoThirSection;
