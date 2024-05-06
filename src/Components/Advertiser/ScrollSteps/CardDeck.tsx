import React from "react";

import "../../../app/styles/cards.css";
import stepOne from "../../../Assets/stepone.svg";
import steptwo from "../../../Assets/steptwo.svg";
import stepUnion from "../../../Assets/StepUnion.svg";
import Image from "next/image";
const CardDeck = () => {
  return (
    <>
      <div className="wrap">
        <div className="section-wrap section-wrap-01" id="service">
          <section className="section-02 bg-gradient-to-br from-purple-600 to-purple-300  absolute py-10">
            <ul className="step-card-list  ">
              <li className="reactive h-[700px]">
                <div className="contents">
                  <div className="w-[580px] mt-[75px]  ml-[80px]">
                    <h1 className=" text-[68px] font-bold  text-[#561AA4]">
                      광고 효과는 확실하게, 관리도 간편하게
                    </h1>
                    <p className="text-[#101440] text-[32px] font-bold w-[480px]">
                      빠른 광고 신청과 계약 관리로 간편하게 믿고 관리하세요.
                    </p>
                  </div>

                  <div className="mt-16">
                    <Image
                      src={stepOne}
                      alt="Step 1 image"
                      className="w-[510px] h-[578px]"
                    />
                  </div>
                </div>
                <div className="step-num flex justify-center items-center">
                  <div>
                  <Image
                    src={stepUnion}
                    alt="icon"
                    className="w-[20px] h-[24px] mr-1"
                  />
                  </div>
                 <div>
                 STEP-1
                 </div>
                
                </div>
              </li>
              <li className="reactive h-[700px]">
                <div className="contents">
                  <div className="w-[580px] mt-[75px]  ml-[80px]">
                    <h1 className=" text-[68px] font-bold  text-[#561AA4]">
                      광고 효과는 확실하게, 관리도 간편하게
                    </h1>
                    <p className="text-[#101440] text-[32px] font-bold w-[480px]">
                      빠른 광고 신청과 계약 관리로 간편하게 믿고 관리하세요.
                    </p>
                  </div>
                  <div className="mt-16">
                    <Image
                      src={steptwo}
                      alt="Step 2 image"
                      className="w-[510px] h-[578px]"
                    />
                  </div>
                </div>
                <div className="step-num flex justify-center items-center">
                  <div>
                  <Image
                    src={stepUnion}
                    alt="icon"
                    className="w-[20px] h-[24px] mr-1"
                  />
                  </div>
                 <div>
                 STEP-2
                 </div>
                
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default CardDeck;
