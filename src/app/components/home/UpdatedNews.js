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
            icon: <IoIosInformationCircle size={24}/>,
            details: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করেজীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে।"
        },
        {
            icon: <IoIosInformationCircle size={24}/>,
            details: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করেজীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে।"
        },
        {
            icon: <IoIosInformationCircle size={24}/>,
            details: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করেজীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে।"
        },
        {
            icon: <IoIosInformationCircle size={24}/>,
            details: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করেজীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে।"
        },
        {
            icon: <IoIosInformationCircle size={24}/>,
            details: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করেজীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে।"
        },
        {
            icon: <IoIosInformationCircle size={24}/>,
            details: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করেজীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে।"
        },
        {
            icon: <IoIosInformationCircle size={24}/>,
            details: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করেজীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে।"
        },
        {
            icon: <IoIosInformationCircle size={24}/>,
            details: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করেজীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে।"
        }
    ]
    return (
        <div className='my-8 md:my-12 lg:my-16'>
            <div>
                <h3>আপডেটেট নিউজ</h3>
            </div>

          <Swiper
            slidesPerView={3}
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
          >
            
            {
                news.map((n, index) =><SwiperSlide key={index}>
                    <div className={`shadow-xl rounded-lg p-4`}>
                        <span className='w-20 h-20 rounded-full bg-gray-500'>{n.icon}</span>
                        <p className={`text-justify text-xl `}>{n.details}</p>
                    </div>
                </SwiperSlide>)
            }
          </Swiper>
        </div>
      );
    }
    
export default UpdatedNews;