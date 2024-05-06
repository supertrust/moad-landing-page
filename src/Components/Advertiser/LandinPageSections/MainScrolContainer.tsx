'use client'
import ScrolStepOne from "../ScrollSteps/ScrolStepOne";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel"


const MainContainer = () => {
 
  return (
    <>
<ScrolStepOne/>
    </>
  );
};

export default MainContainer;
