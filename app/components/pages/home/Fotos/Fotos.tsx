import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';

export const Fotos = () => {
  return (
    <>
      <h2 className="text-center text-white text-5xl font-great my-6">
        Álbum Fotográfico de Ana Fernanda
      </h2>
      <div className="flex flex-col gap-4">
        <Image className="rounded-xl" alt="gif del corazon de ana fernanda" src={"/img/bebe/corazon.gif"} width={1920} height={100} />
        <Image className="rounded-xl" alt="gif de ana fernanda moviendose" src={"/img/bebe/bebe.gif"} width={1920} height={100} />

        <div className="overflow-hidden">
          <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-full"
          >
            <SwiperSlide className="">
              <Image className="rounded-xl" alt="foto de ana fernanda" src={"/img/bebe/bebe1.gif"} width={1920} height={100} />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image className="rounded-xl" alt="foto de ana fernanda" src={"/img/bebe/bebe1.png"} width={1920} height={100} />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image className="rounded-xl" alt="foto de ana fernanda" src={"/img/bebe/bebe2.png"} width={1920} height={100} />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image className="rounded-xl" alt="foto de ana fernanda" src={"/img/bebe/bebe3.png"} width={1920} height={100} />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image className="rounded-xl" alt="foto de ana fernanda" src={"/img/bebe/bebe4.png"} width={1920} height={100} />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image className="rounded-xl" alt="foto de ana fernanda" src={"/img/bebe/bebe2.gif"} width={1920} height={100} />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image className="rounded-xl" alt="foto de ana fernanda" src={"/img/bebe/bebe5.png"} width={1920} height={100} />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image className="rounded-xl" alt="foto de ana fernanda" src={"/img/bebe/bebe6.png"} width={1920} height={100} />
            </SwiperSlide>
            <SwiperSlide className="">
              <Image className="rounded-xl" alt="foto de ana fernanda" src={"/img/bebe/bebe7.png"} width={1920} height={100} />
            </SwiperSlide>
          </Swiper>
        </div>
        
      </div>
    </>
  );
};
