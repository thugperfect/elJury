import React, { useState,useEffect } from "react";
import SingleBook from "./SingleBook";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import All from "../contents/All";
import Ayurvedha from "../contents/Ayurvedha";
import Unani from "../contents/Unani";
import Siddha from "../contents/Siddha";

const BookHome = () => {
  const [content,changeContent] = useState(<All/>)
  const imgs = ['https://www.indianbooksandperiodicals.com/images/11900/_Ayush_Pub_Ayurvedic_management_of_.jpg','https://www.indianbooksandperiodicals.com/images/11900/brain_ageing_ayurveda.jpg','https://www.indianbooksandperiodicals.com/images/11900/clinical_research_protocols_traditional_health_sciences.jpg','https://www.indianbooksandperiodicals.com/images/11900/clinical_evaluation_certain_ayurvedic_mental_retardation.jpg','https://www.indianbooksandperiodicals.com/images/11900/clinical_studies_certain_Ayurvedic_formulation.jpg','https://www.indianbooksandperiodicals.com/images/11900/_Ayush_Pub_Comprehensive_Technical_4.jpg','https://www.indianbooksandperiodicals.com/images/11900/atlas_macroscopic_microscopic_character.jpg','https://www.indianbooksandperiodicals.com/images/sdf/_Ayush_Pub_A_Practical_Handbook_of_.jpg','https://www.indianbooksandperiodicals.com/images/11900/_Ayush_Pub_Exploration_of_Veterinar1.jpg','https://www.indianbooksandperiodicals.com/images/11900/himalaya_arogya_vanaspatiyan.jpg']
  return (
    <div className=" flex justify-center text-white bg-black">
      <div className=" w-full md:w-5/6  p-4 ">
        <div className="flex overflow-x-auto horizontal p-2 ">
          <div className="flex gap-2">
            <div onClick={()=>changeContent(<All/>)} className="w-[100px] text-lg h-[40px] flex justify-center items-center bg-blue-500  rounded-r-full rounded-l-full cursor-pointer">
              All Books
            </div>
            <div onClick={()=>changeContent(<Ayurvedha/>)} className="w-[100px] text-lg h-[40px] flex justify-center items-center bg-blue-500  rounded-r-full rounded-l-full cursor-pointer">
              Ayurvedha
            </div>
            <div onClick={()=>changeContent(<Unani/>)} className="w-[100px] text-lg h-[40px] flex justify-center items-center bg-blue-500  rounded-r-full rounded-l-full cursor-pointer">
              Unani
            </div>
            <div onClick={()=>changeContent(<Siddha/>)} className="w-[100px] text-lg h-[40px] flex justify-center items-center bg-blue-500  rounded-r-full rounded-l-full cursor-pointer">
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
                {
                  imgs.map(k=>(
                    <SwiperSlide>
                 <SingleBook img = {k}/>
                    </SwiperSlide>
                  ))
                }
                
                {/* <SwiperSlide>
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
                </SwiperSlide> */}
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
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHome;
