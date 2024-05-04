"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./index.css";

import { Navigation } from "swiper/modules";

interface IItemSliderProps {
  name: string;
}

interface ISliderComponentProps {
  data: IItemSliderProps[];
}

export default function SliderComponent({ data }: ISliderComponentProps) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data &&
          data.map((item, index) => (
            <SwiperSlide key={`${item.name}-${index}`}>{item.name}</SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
