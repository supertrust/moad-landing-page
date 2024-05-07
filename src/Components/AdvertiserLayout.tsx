"use client";
import Herosections from "./Advertiser/LandinPageSections/Heroscetion";
import SecondSection from "./Advertiser/LandinPageSections/SecondSection";
import MainContainer from "./Advertiser/LandinPageSections/MainScrolContainer";
import CardsSection from "./Advertiser/LandinPageSections/CardsSection";
import FormSection from "./Advertiser/LandinPageSections/FormSection";
import Footer from "./Advertiser/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
const LandindLayout = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Scrollbar]}
        scrollbar={{
          draggable: true,
          hide: true,
        }}
        className="h-[900px]"
      >
        <SwiperSlide>
          <Herosections />
        </SwiperSlide>
        
        <SwiperSlide>
          <SecondSection />
        </SwiperSlide>
      
     
      
        <SwiperSlide>
          <CardsSection />
        </SwiperSlide>
        <SwiperSlide>
          <FormSection />
        </SwiperSlide>
      </Swiper>
      <MainContainer />
      <Footer/>
    </>
  );
};

export default LandindLayout;
