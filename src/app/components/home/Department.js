"use client"
import React from 'react';
import styles from '../../styles/updatedNews.module.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/common.module.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiBookOpen } from 'react-icons/bi'
const Department = () => {
  const news = [
    {
      icon: <BiBookOpen size={40} className='text-black' />,
      details: "আল হাদিস অ্যান্ড ইসলামিক স্টাডিজ বিভাগ"
    },
    {
      icon: <BiBookOpen size={40} className='text-black' />,
      details: "আল হাদিস অ্যান্ড ইসলামিক স্টাডিজ বিভাগ"
    },
    {
      icon: <BiBookOpen size={40} className='text-black' />,
      details: "আল হাদিস অ্যান্ড ইসলামিক স্টাডিজ বিভাগ"
    },
    {
      icon: <BiBookOpen size={40} className='text-black' />,
      details: "আল হাদিস অ্যান্ড ইসলামিক স্টাডিজ বিভাগ"
    },
    {
      icon: <BiBookOpen size={40} className='text-black' />,
      details: "আল হাদিস অ্যান্ড ইসলামিক স্টাডিজ বিভাগ"
    }
  ]
  return (
    <div className='my-8 md:my-16 lg:my-20'>
      <div>
        <h3 className='text-center text-2xl md:text-3xl text-[#4CAF50] font-bold my-6 uppercase textWhite'>আমাদের বিভাগ সমূহ</h3>
      </div>
      <Swiper
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
        autoplay={true}
        breakpoints={{
          500: {
            slidesPerView: 1
          },
          668: {
            slidesPerView: 2
          },
          1400: {
            slidesPerView: 3
          }

        }}
      >

        {
          news.map((n, index) => <SwiperSlide key={index} className='my-8 shadow-2xl rounded-lg  bg-white textWhite darkBg'>
            <div className={`mx-12`}>
              <div className='mb-8 text-center bg-[#B6FDB9] p-8 rounded-t-lg'>
                <span className='mb-4 flex justify-center'> {n.icon}</span>
                <p className={`text-center text-xl text-black font-semibold`}>{n.details}</p>
              </div>
              <button className='block w-full font-bold mx-auto mb-2 bg-[#B6FDB9] py-2 text-black'>নোটিশ</button>
              <button className='block w-full font-bold mx-auto mb-4 bg-[#B6FDB9] py-2 text-black'>see all</button>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
}

export default Department; 