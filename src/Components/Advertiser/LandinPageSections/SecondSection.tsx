'use client'
import React,{useState} from "react";
import Image from "next/image";
import Truckimage from '../../../Assets/truck.svg'
import Busimage from '../../../Assets/bus.svg'
import Carimage from '../../../Assets/car.svg'

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
  
    <section className="relative bg-[#561AA4] h-[900px]  overflow-hidden">
      <div className="ml-[135px] mt-[50px] w-[562px] h-[200px]">
        <h2 className=" font-bold text-white text-[68px] font-['Pretendard'] ">
          지금 옥외광고 대세는 차량 랩핑입니다
        </h2>
      </div>

      <div className="absolute top-[350.5px] w-[1353px] h-[567px]  bg-white rounded-tr-2xl">
        <div className="flex justify-center items-center space-x-6 mt-[150px] ">
          {CardData?.map((item) => {
            return (
              <div
                className="w-[238px]   overflow-hidden"
                key={item.id}
              >
                <div className=" h-16  text-[20px] flex items-center justify-center text-[#0E121B] font-bold font-['Pretendard'] ">
                  {item.headText}
                </div>

                <div className="bg-[#F5F7FA] w-[238px] h-[155px] mx-auto mt-4  flex justify-center items-center rounded-[16px]">
                    <Image
                      src={item?.ImgSrc?.src}
                      width={160}
                      height={74}
                      className=" object-cover mx-auto"
                      alt='cad-image'
                    />
  
                </div>

                <div className="p-4 ">
                  <div className="flex justify-center items-center space-x-2">
                    <p className="text-[#717784]  text-[20px] font-['Pretendard'] ">{item.CardText_1}</p>
                    <span className="text-[#561AA4] text-[42px] font-bold">{item.CardPercentage_1}</span>
                  </div>
                  <div className="flex justify-center items-center space-x-2">
                    <p className="text-[#717784] text-[20px] font-['Pretendard'] ">{item.cardText_2}</p>
                    <span className="text-[#561AA4] text-[42px]  font-bold">{item.Cardpercentage_2}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
};

export default SecondSection;
