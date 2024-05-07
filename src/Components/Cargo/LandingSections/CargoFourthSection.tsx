import React from "react";
import steptwo from "../../../Assets/Fr.svg";
import Image from "next/image";

const CargoFourthSection = () => {
  return (
    <div className="w-full h-[900px] relative bg-white">
      <div className="flex">
        <div className="w-[260px] h-[86px] right-[450px] top-[144px] absolute opacity-[30%] bg-gradient-to-r from-gray-300 to-purple-200 rounded-lg blur-sm" />
        <div className="w-[260px] h-[70px] right-[100px] top-[426px] absolute opacity-[30%] bg-gradient-to-r from-zinc-200 to-violet-100 rounded-lg blur-sm" />
        <div className="w-[270px] h-[78px] right-[450px] top-[691.50px] absolute opacity-[30%] bg-gradient-to-r from-slate-400 to-purple-200 rounded-lg blur-sm" />

        <div className="left-[135px] top-[238.50px] absolute flex-col justify-center gap-[60px] flex">
          <div>
            <span className="text-violet-900 text-[68px] font-bold font-['Pretendard'] leading-[100px]">
              이제 커뮤니티도
              <br />
            </span>
            <span className="text-neutral-900 text-[68px] font-bold font-['Pretendard'] leading-[100px]">
              모드에서 이용해 보세요
            </span>
          </div>
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="text-neutral-900 text-[32px] font-bold font-['Pretendard'] leading-[44px]">
              좋은 정보, 좋은 업체 찾기 번거로우셨죠?
              <br />
              다른 화물차 기사님들과 앱 내에 커뮤니티
              <br />
              기능으로 편하게 소통하세요!
            </div>
            <div className="text-gray-400 text-base font-medium font-['Pretendard']">
              추후 업데이트 예정입니다
            </div>
          </div>
        </div>
        <div className="image-container">
          <Image
            alt="new--image"
            className="w-[280px] h-[572.81px] right-[260px] top-[163.60px] absolute"
            src={steptwo}
          />
          <div className="tooltip tooltip1 bg-[#561AA4]  text-white  w-[273px] h-[64px] p-[20px] text-center ">{`다들 오늘 운행은 어떠셨나요?`}</div>
          <div className="tooltip tooltip2  bg-[#9571C3]  text-white  w-[321px] h-[64px] p-[20px] text-center ">
            {`꽃이 많이 폈네요! 꽃 보고 가세요~~`}
          </div>
          <div className="tooltip tooltip3 bg-[#EEEFF3]  text-white  w-[284px] h-[64px] p-[20px]  text-center ">{`364km 운행기록 인증합니다!!`}</div>
        </div>
      </div>
    </div>
  );
};

export default CargoFourthSection;
