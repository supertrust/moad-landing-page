import { CustomScrollButton } from "@/Components/Buttons/CustomScrollButton";
import { ColorNavbar } from "@/Components/Navbar";
import Image from "next/image";
import React from "react";
import Busimage from '../../../Assets/new-bus.svg'
import Carimage from '../../../Assets/new-car.svg'
import Truckimage from '../../../Assets/new-truck.svg'
import ServiceBackground from '../../../Assets/SecondSectionBg.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services: React.FC<{ OnScrollDown: () => void; isInView: boolean }> = ({
    OnScrollDown,
    isInView,
}) => {
    const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        centerMode: true,  // Centers the active slide
        centerPadding: "10px",
        className: "center",
    };
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
            className=' h-full flex flex-col overflow-hidden bg-[#EEEFF3]  relative bg-cover bg-center'
            style={{
                backgroundImage: `url(${ServiceBackground.src})`,

                zIndex: 0,
            }}>
            <div className="z-40">
                <ColorNavbar page="advertisers" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
                <div className='  px-2 z-50 md:hidden slider-container'>
                    <Slider {...settings} className="space-x-4">
                        {
                            CardData?.map((item, index) => {
                                return (
                                    <div
                                        className={`bg-white z-50 rounded-2xl h-auto border-2 border-[#C5C6CF]  mr-4 shadow-xl p-4  flex flex-col gap-2`}
                                        key={item.id}
                                    >
                                        <h3 className=" text-xl mb-2 flex items-center justify-center text-[#0E121B] font-bold font-Pretendard ">
                                            {item.headText}
                                        </h3>

                                        <div className="bg-[#F5F7FA] p-4 flex justify-center items-center rounded-[16px] w-[100%]">
                                            <Image
                                                src={item?.ImgSrc?.src}
                                                width={400}
                                                height={300}
                                                className=" object-cover "
                                                alt='cad-image'
                                            />

                                        </div>

                                        <div className="flex mt-4 justify-between items-center gap-4 ">
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
                            })
                        }
                    </Slider>
                </div>

                <div className="md:items-center md:justify-center mt-8  px-8 md:mt-0  lg:px-20 xl:px-32 flex flex-col-reverse  w-screen min-w-full gap-8 md:grid grid-cols-2  md:h-screen  overflow-hidden">
                    <div className="flex flex-col md:justify-center  h-full w-full">
                        <h2 className=" font-bold text-daisyBush-60  text-2xl md:text-4xl leading-normal font-Pretendard ">
                            효율적이고 경제적인 <br />
                            브랜드 인지도 상승 솔루션!
                        </h2>
                        <p className="text-gray-60 font-bold mt-4 text-base md:text-2xl">
                            고정된 광고판보다 <br /> 더 넓은 도달 범위를 자랑하는 랩핑 광고, <br />
                            한 번의 투자로 장기간 지속되는 광고 효과를 누려보세요!
                        </p>
                    </div>


                    <div className={`hidden md:grid grid-cols-2 -translate-y-20 z-50 justify-start  pl-0 max-w-[100%] px-8 items-start  gap-6  `}>
                        {CardData?.map((item, index) => {
                            return (
                                <div
                                    className={`bg-white max-w-[100%] rounded-2xl z-50  shadow-xl p-4 overflow-hidden flex flex-col gap-2 ${index % 2 === 0 ? 'move-up-down ' : 'move-down-up '}`}
                                    key={item.id}
                                >
                                    <h3 className=" text-xl flex items-center justify-center text-[#0E121B] font-bold font-Pretendard ">
                                        {item.headText}
                                    </h3>

                                    <div className="bg-[#F5F7FA] p-4 flex justify-center items-center rounded-[16px] w-[100%]">
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
        </div>
    );
};

export default Services;
