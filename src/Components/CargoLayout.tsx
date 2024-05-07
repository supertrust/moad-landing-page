'use client'
import HeroSection from "../Components/Cargo/LandingSections/HeroSection";
import FAQ from "./Cargo/LandingSections/FAQ";
import CargoSecondSection from "./Cargo/LandingSections/CargoSecondSection";
import CargoThirSection from "./Cargo/LandingSections/CargoThirSection";
import CardDeck from "./Cargo/CardDeck/CargoCardDeck";
import Footer from "./Advertiser/Footer/Footer";
import CargoFourthSection from "./Cargo/LandingSections/CargoFourthSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
const CargoLayout = () => {
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
        <HeroSection />
        </SwiperSlide>
        <SwiperSlide>
        <CargoSecondSection />
        </SwiperSlide>
        <SwiperSlide>
        <CargoThirSection />
        </SwiperSlide>
        <SwiperSlide>
        <CargoFourthSection />
        </SwiperSlide>
        <SwiperSlide>
        <FAQ />
        </SwiperSlide>
        
      
      </Swiper>
    
   
  
      <CardDeck />
   
   
      <Footer />
    </>
  );
};

export default CargoLayout;
