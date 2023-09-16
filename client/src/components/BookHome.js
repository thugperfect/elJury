import React from "react";
import SingleBook from "./SingleBook";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { useEffect } from "react";
import 'swiper/css';
import 'swiper/css/pagination';


import "swiper/css";
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
          <div className="w-full h-[300px] md:h-[400px] bg-zinc-700 flex justify-center items-center">
          <>
            <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
      
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><SingleBook/></SwiperSlide>
        <SwiperSlide><SingleBook/></SwiperSlide>
        <SwiperSlide><SingleBook/></SwiperSlide>
        <SwiperSlide><SingleBook/></SwiperSlide>
        <SwiperSlide><SingleBook/></SwiperSlide>
        <SwiperSlide><SingleBook/></SwiperSlide>
        <SwiperSlide><SingleBook/></SwiperSlide>
        <SwiperSlide><SingleBook/></SwiperSlide>
        <SwiperSlide><SingleBook/></SwiperSlide>
      </Swiper>
            
            </>
          </div>

          

          <div className="w-full">
            <div className="name text-2xl mb-3">New Books</div>
        <div className="flex overflow-x-scroll horizontal">

          <div className="flex">
            <SingleBook/>
            <SingleBook/>
            <SingleBook/>
            <SingleBook/>
            <SingleBook/>
            <SingleBook/><SingleBook/>
            <SingleBook/>
            <SingleBook/>
            <SingleBook/><SingleBook/>
            <SingleBook/>
            <SingleBook/>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHome;
