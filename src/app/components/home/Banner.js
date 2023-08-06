"use client"
import React, { useRef, useState } from 'react';
import styles from '../../styles/banner.module.css';
import bannerOne from '/public/assets/homepage.jpg';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/banner.module.css';

const Banner = () => {
  const slider = [bannerOne, bannerOne, bannerOne];

  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        loop={true}
      >
        {slider.map((img, index) => (
          <SwiperSlide key={index} className='mb-12'>
            <Image className="rounded-lg" src={img} alt="slider of the banner" height={500} width={1000} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
