import React from "react";
import SingleBook from "./SingleBook";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const BookHome = () => {
  return (
    <div className=" flex justify-center text-white bg-black">
      <div className=" w-full md:w-5/6  p-4 ">
        <div className="flex overflow-x-auto horizontal p-2 ">
          <div className="flex gap-2">
            <div className="w-[100px] text-sm h-[40px] flex justify-center items-center bg-blue-500  rounded-r-full rounded-l-full cursor-pointer">
              All Books
            </div>
            <div className="w-[100px] text-sm h-[40px] flex justify-center items-center bg-blue-500  rounded-r-full rounded-l-full cursor-pointer">
              Ayurvedha
            </div>
            <div className="w-[100px] text-sm h-[40px] flex justify-center items-center bg-blue-500  rounded-r-full rounded-l-full cursor-pointer">
              Unani
            </div>
            <div className="w-[100px] text-sm h-[40px] flex justify-center items-center bg-blue-500  rounded-r-full rounded-l-full cursor-pointer">
              Siddha
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[300px] md:h-[400px] bg-zinc-700 flex justify-center items-center p-2  ">
            <div className="w-[700px]">
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
                <SwiperSlide>
                  <SingleBook />
                </SwiperSlide>

                <div className="slider-controler flex justify-center ">
<div className="swiper-pagination w-full"></div>
                  <div className="swiper-button-prev slider-arrow">{'<<'}</div>
                  <div className="swiper-button-next slider-arrow">{'>>'}</div>
                 
                </div>
              </Swiper>
            </div>
          </div>

          <div className="w-full">
            <div className="name text-2xl mb-3">New Books</div>
            <div className="flex overflow-x-scroll horizontal">
              <div className="flex">
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHome;
