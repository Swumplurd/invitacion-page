"use client";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import Image from "next/image";

import "swiper/css/pagination";
import "swiper/css";

export const MainSwiper = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      effect="fade"
      className="home-swiper mb-3 aspect-square md:aspect-21/7"
      autoplay={{ delay: 500 }}
      style={{ width: "100"}}
    >
      <SwiperSlide>
        <Image
          fill
          src={"/img/1.png"}
          alt="Default Image"
          style={{width: "100%"}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          fill
          src={"/img/2.png"}
          alt="Default Image"
          style={{width: "100%"}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          fill
          src={"/img/3.png"}
          alt="Default Image"
          style={{width: "100%"}}
        />
      </SwiperSlide>
    </Swiper>
  );
};
