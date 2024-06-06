import React, { useState } from "react";
import Image from "next/image";
import Truckimage from '../../../Assets/new-truck.svg'
import Busimage from '../../../Assets/new-bus.svg'
import Carimage from '../../../Assets/new-car.svg'
import { ColorNavbar } from "@/Components/Navbar";
import ServiceBackground from '../../../Assets/SecondSectionBg.png'

import { ActiveDot, WhiteDot } from '@/Assets/Svgs'
import { CustomScrollButton } from "@/Components/Buttons/CustomScrollButton";


const Services: React.FC<{ OnScrollDown: () => void; isInView: boolean }> = ({
    OnScrollDown,
    isInView,
}) => {

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
        <div
            className='pt-4 h-[100vh] overflow-hidden bg-[#EEEFF3]  relative bg-cover bg-center'
            style={{
                backgroundImage: `url(${ServiceBackground.src})`,

                zIndex: 0,
            }}>
            <ColorNavbar />
            <div className="items-start justify-center px-4 md:px-8 lg:px-20 xl:px-40  w-screen min-w-full gap-8 grid grid-cols-2  h-screen  overflow-hidden">
                <div className="flex flex-col justify-center  h-full w-full">
                    <h2 className=" font-bold text-daisyBush-60  text-4xl leading-normal font-Pretendard ">
                        효율적이고 경제적인 <br />
                        브랜드 인지도 상승 솔루션!
                    </h2>
                    <p className="text-gray-60 font-bold mt-4">
                        고정된 광고판보다 <br /> 더 넓은 도달 범위를 자랑하는 랩핑 광고, <br />
                        한 번의 투자로 장기간 지속되는 광고 효과를 누려보세요!
                    </p>
                </div>

                <div className={`grid grid-cols-2 -translate-y-8 justify-start p-10 pl-0 max-w-[500px] px-16 items-start  gap-6  `}>
                    {CardData?.map((item, index) => {
                        return (
                            <div
                                className={`bg-white max-w-[13rem] rounded-2xl  shadow-xl p-4 overflow-hidden flex flex-col gap-2 ${index % 2 === 0 ? 'move-up-down ' : 'move-down-up '}`}
                                key={item.id}
                            >
                                <h3 className=" text-xl flex items-center justify-center text-[#0E121B] font-bold font-Pretendard ">
                                    {item.headText}
                                </h3>

                                <div className="bg-[#F5F7FA] p-4  w-fit flex justify-center items-center rounded-[16px]">
                                    <Image
                                        src={item?.ImgSrc?.src}
                                        width={150}
                                        height={60}
                                        className="w-[9.5rem] object-cover "
                                        alt='cad-image'
                                    />

                                </div>

                                <div className="flex justify-between items-center gap-4 ">
                                    <div className="flex flex-col justify-center items-center space-x-2">
                                        <p className="text-[#717784]  text-lg font-Pretendard ">{item.CardText_1}</p>
                                        <span className="text-[#561AA4] text-3xl font-bold">{item.CardPercentage_1}</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center space-x-2">
                                        <p className="text-[#717784] text-lg font-Pretendard ">{item.cardText_2}</p>
                                        <span className="text-[#561AA4] text-3xl  font-bold">{item.Cardpercentage_2}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            <CustomScrollButton color='#101440' OnScrollDown={OnScrollDown} />
        </div>
    );
};

export default Services;
