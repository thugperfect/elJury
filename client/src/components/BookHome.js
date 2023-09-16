import React from "react";
import SingleBook from "./SingleBook";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import All from "../contents/All";

const BookHome = () => {
  return (
    <div className=" flex justify-center text-white bg-black">
      <div className=" w-full md:w-5/6  p-4 ">
        <div className="flex overflow-x-auto horizontal p-2 ">
          <div className="flex gap-2">
            <div className="w-[100px] text-lg h-[40px] flex justify-center items-center bg-blue-500  rounded-r-full rounded-l-full cursor-pointer">
              All Books
            </div>
            <div className="w-[100px] text-lg h-[40px] flex justify-center items-center bg-blue-500  rounded-r-full rounded-l-full cursor-pointer">
              Ayurvedha
            </div>
            <div className="w-[100px] text-lg h-[40px] flex justify-center items-center bg-blue-500  rounded-r-full rounded-l-full cursor-pointer">
              Unani
            </div>
            <div className="w-[100px] text-lg h-[40px] flex justify-center items-center bg-blue-500  rounded-r-full rounded-l-full cursor-pointer">
              Siddha
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[300px] lg:h-[400px] bg-zinc-700 p-4  ">
         <div className="font-bold text-4xl">Newly Added</div>
            <div className=" w-full  flex items-center justify-center "> 
              <Swiper

                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
              >
                <SwiperSlide>
                 <SingleBook className='swiper-slide'/>
                </SwiperSlide>
                <SwiperSlide>
              <SingleBook />
                </SwiperSlide>
                <SwiperSlide>
                  <SingleBook />
                </SwiperSlide>
                <SwiperSlide>
                  <SingleBook />
                </SwiperSlide>
                <SwiperSlide>
                  <SingleBook />
                </SwiperSlide>
                <SwiperSlide>
                  <SingleBook />
                </SwiperSlide>
                <SwiperSlide>
                  <SingleBook />
                </SwiperSlide>
                <SwiperSlide>
                  <SingleBook />
                </SwiperSlide>
<div className="w-full bg-green-500">

<div className="slider-controler flex justify-center ">
                    <div className="swiper-pagination w-full"></div>
                  <div className="swiper-button-prev slider-arrow">{'<<'}</div>
                  <div className="swiper-button-next slider-arrow">{'>>'}</div>
</div>
                  </div>
              </Swiper>
            </div>
          </div>

          <div className="w-full">
            <All/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHome;
