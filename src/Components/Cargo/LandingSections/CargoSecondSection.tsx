import React from "react";
import MobileImage from "../../../Assets/mobilecard.svg";
import Truck from "../../../Assets/Frame.svg";
import Image from "next/image";
const CargoSecondSection = () => {
  return (
    <div className="flex">
      <div className="w-full h-[900px] relative bg-indigo-950">
        <div className="w-[1080px] h-[820px] px-[135px] py-[120px] left-0 top-0 absolute bg-white rounded-tr-[60px] rounded-br-[60px] flex-col justify-center items-start gap-2.5 inline-flex">
          <div className="justify-center items-center gap-2.5 ">
            <div>
              <span className="text-neutral-900 text-[68px] font-bold font-['Pretendard'] leading-[100px]">
                화물차 기사님들을 위한
                <br />
              </span>
              <span className="text-violet-900 text-[68px] font-bold font-['Pretendard'] leading-[100px]">
                혁신적인 앱
              </span>
            </div>
            <div className="text-gray-800 text-[32px] font-bold font-['Pretendard'] leading-[44px]">
              광고 업계가 주목하는 트럭 · 화물차 랩핑 광고,
              <br />
              이제 모드가 도와드릴게요.
              <br />
              기존처럼 운행하시고 간편하게 수익을 창출하세요.
            </div>
          </div>
        </div>
        <div className="w-[280px] h-[134.78px] left-[135px] top-[725.22px] absolute ">
          <div className="w-[180px] h-[33px] left-[38.81px] top-[41.98px] absolute z-10">
           
            <Image alt="Mobile--Image" width={280} height={140} src={Truck} />
          </div>
          
        </div>
        <Image
        
          alt="Truck--icon"
          className="w-[280px] h-[572.81px] left-[960px] top-[287.19px] absolute z-10"
          src={MobileImage}
        />
        <div className="relative">
        <div className="bg-violet-900  h-[80px] w-full absolute top-[820px] "></div>
        </div>
       
      </div>
    </div>
  );
};

export default CargoSecondSection;
