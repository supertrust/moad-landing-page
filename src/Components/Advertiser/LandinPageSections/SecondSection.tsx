'use client'
import React, { useState } from "react";
import Image from "next/image";
import Truckimage from '../../../Assets/truck.svg'
import Busimage from '../../../Assets/bus.svg'
import Carimage from '../../../Assets/car.svg'
import CardsSection from "./CardsSection";

const SecondSection = () => {

  const CardData = [
    {
      id: 1,
      headText: "랩핑 차량",
      ImgSrc: Truckimage,
      CardText_1: "지난 달",
      CardPercentage_1: "64%",
      cardText_2: "지난 주",
      Cardpercentage_2: "44%",
    },
    {
      id: 2,
      headText: "모바일 광고판",
      ImgSrc: Truckimage,
      CardText_1: "지난 달",
      CardPercentage_1: "27%",
      cardText_2: "지난 주",
      Cardpercentage_2: "14%",
    },
    {
      id: 3,
      headText: "공공 버스",
      ImgSrc: Busimage,
      CardText_1: "지난 달",
      CardPercentage_1: "55%",
      cardText_2: "지난 주",
      Cardpercentage_2: "39%",
    },
    {
      id: 4,
      headText: "택시 차량",
      ImgSrc: Carimage,
      CardText_1: "지난 달",
      CardPercentage_1: "31%",
      cardText_2: "지난 주",
      Cardpercentage_2: "17%",
    },
  ];
  return (
    <div className=" justify-between w-screen min-w-full gap-8 flex flex-col items-start  bg-[#561AA4] h-screen  overflow-hidden">
      <div className="flex w-full px-4 md:px-8 lg:px-20 xl:px-32 mt-16">
        <h2 className=" font-bold text-white text-6xl leading-normal font-Pretendard ">
          지금 옥외광고 대세는 <br /> 차량 랩핑입니다
        </h2>
      </div>

      <div className="bg-white flex flex-col gap-10 justify-between h-[60%] w-[90%] py-8 rounded-tr-[50px]">
        <div className="flex justify-between px-4 md:px-8 lg:px-20 xl:px-32  items-center flex-1 space-x-6  ">
          {CardData?.map((item) => {
            return (
              <div
                className="  overflow-hidden flex flex-col gap-4"
                key={item.id}
              >
                <h3 className=" text-xl flex items-center justify-center text-[#0E121B] font-bold font-Pretendard ">
                  {item.headText}
                </h3>

                <div className="bg-[#F5F7FA] p-4 h-[9rem] px-12 mx-auto  flex justify-center items-center rounded-[16px]">
                  <Image
                    src={item?.ImgSrc?.src}
                    width={180}
                    height={70}
                    className=" object-cover mx-auto"
                    alt='cad-image'
                  />

                </div>

                <div className=" ">
                  <div className="flex justify-center items-center space-x-2">
                    <p className="text-[#717784]  text-lg font-Pretendard ">{item.CardText_1}</p>
                    <span className="text-[#561AA4] text-3xl font-bold">{item.CardPercentage_1}</span>
                  </div>
                  <div className="flex justify-center items-center space-x-2">
                    <p className="text-[#717784] text-lg font-Pretendard ">{item.cardText_2}</p>
                    <span className="text-[#561AA4] text-3xl  font-bold">{item.Cardpercentage_2}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <p className="px-4 text-base md:px-8 lg:px-20 xl:px-32 text-text-grayChateu">출처 OAAA와 Nielsen</p>
      </div>

    </div>
  );
};

export default SecondSection;
