"use client"
import React from 'react';
import styles from '../../styles/updatedNews.module.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/common.module.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import {Swiper, SwiperSlide } from 'swiper/react';
import {IoIosInformationCircle} from 'react-icons/io'
const UpdatedNews = () => {
    const news = [
        {
            icon: <IoIosInformationCircle size={40} className='text-[#4CAF5]'/>,
            details: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করেজীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে।"
        },
        {
            icon: <IoIosInformationCircle size={40} className='text-[#4CAF5]'/>,
            details: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করেজীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে।"
        },
        {
            icon: <IoIosInformationCircle size={40} className='text-[#4CAF5]'/>,
            details: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করেজীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে।"
        },
        {
            icon: <IoIosInformationCircle size={40} className='text-[#4CAF5]'/>,
            details: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করেজীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে।"
        },
        {
            icon: <IoIosInformationCircle size={40} className='text-[#4CAF5]'/>,
            details: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করেজীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে।"
        },
        {
            icon: <IoIosInformationCircle size={40} className='text-[#4CAF5]'/>,
            details: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করেজীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে।"
        },
        {
            icon: <IoIosInformationCircle size={40} className='text-[#4CAF5]'/>,
            details: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করেজীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে।"
        },
        {
            icon: <IoIosInformationCircle size={40} className='text-[#4CAF5]'/>,
            details: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করেজীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে।"
        }
    ]
    return (
        <div className='my-8 md:my-16 lg:my-20'>
            <div>
                <h3 className='text-center text-2xl md:text-3xl text-[#4CAF50] font-bold mt-6 uppercase textWhite'>আপডেটেট নিউজ</h3>
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
            autoplay = {true}
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
                news.map((n, index) =><SwiperSlide className='my-12 shadow-2xl rounded  bg-white darkBg textWhite' key={index}>
                    <div className={`p-12`}>
                        <div className='mb-8 flex justify-center'> {n.icon}</div>
                        <p className={`text-justify text-xl text-black textWhite`}>{n.details}</p>
                    </div>
                </SwiperSlide>)
            }
          </Swiper>
        </div>
      );
    }
    
export default UpdatedNews;