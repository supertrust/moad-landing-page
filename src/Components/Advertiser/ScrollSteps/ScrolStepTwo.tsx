import React from "react";
import Image from "next/image";
import Steoptwo from "../../Assets/steptwo.svg";
import stepUnion from "../../Assets/StepUnion.svg";

const ScrolStepTwo = () => {
  return (
    <>
      <div className="bg-white w-[1240px]  h-[700px] rounded-2xl mt-[50px] transition-all duration-500">
        <div className="flex justify-between">
          <div className=" w-[580px]  mt-[75px] ml-[80px]">
            <h1 className="text-[#561AA4] text-[68px] font-bold ">
              광고 효과는 확실하게, 관리도 간편하게
            </h1>
            <p className="text-[#101440] text-[32px] font-bold w-[480px]">
              빠른 광고 신청과 계약 관리로 간편하게 믿고 관리하세요.
            </p>
          </div>
          <div className="mt-[60px]">
            <Image
              className="w-[510px] h-[578px]"
              src={Steoptwo}
              alt="step-one-Image"
            />
          </div>
        </div>
        <div className="relative   p-4 flex items-center ml-[100px]">
          <Image
            src={stepUnion}
            alt="icon"
            className="w-[20px] h-[24px] mr-1"
          />
          <span className="text-[#717784]">Step 2</span>
        </div>
      </div>
     
    </>
  );
};

export default ScrolStepTwo;
