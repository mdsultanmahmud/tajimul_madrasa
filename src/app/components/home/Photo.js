"use client"
import React, { useState } from 'react';
import mad_1 from '/public/assets/home/mad_1.jpeg'
import mad_2 from '/public/assets/home/mad_2.jpeg'
import mad_3 from '/public/assets/home/mad_3.jpeg'
import mad_4 from '/public/assets/home/mad_4.jpeg'
import stu_1 from '/public/assets/home/stu_tea_1.jpeg'
import stu_2 from '/public/assets/home/stu_tea_2.jpeg'
import stu_3 from '/public/assets/home/stu_tea_3.jpeg'
import ceri_1 from '/public/assets/home/mad_cer_1.jpeg'
import ceri_2 from '/public/assets/home/mad_cer_2.jpeg'
import ceri_3 from '/public/assets/home/mad_cer_3.jpeg'
import Image from 'next/image';
const Photo = () => {
    const [active, setActive] = useState("all")
    const photos = [
        {
            categories: "campus",
            img: mad_1
        },
        {
            categories: "campus",
            img: mad_2
        },
        {
            categories: "campus",
            img: mad_3

        },
        {
            categories: "campus",
            img: mad_4
        },
        {
            categories: "student",
            img: stu_1
        },
        {
            categories: "student",
            img: stu_2
        },
        {
            categories: "student",
            img: stu_3
        },
        {
            categories: "cerimony",
            img: ceri_1
        },
        {
            categories: "cerimony",
            img: ceri_2
        },
        {
            categories: "cerimony",
            img: ceri_3
        }
    ]
    return (
        <div>
            <h3 className='text-center text-2xl md:text-3xl text-[#4CAF50] font-bold my-6 uppercase textWhite'>ছবি গ্যালারী</h3>
            <div className='flex flex-wrap items-center justify-center gap-2 my-8'>
                <button onClick={() => setActive("all")} className={`${active == "all" ? "bg-[#4CAF50]": "bg-black darkBg"} text-white font-semibold uppercase px-8 py-4 cursor-pointer`}>সকল ছবি</button>
                <button onClick={() => setActive("campus")} className={`${active == "campus" ? "bg-[#4CAF50]": "bg-black darkBg"} text-white font-semibold uppercase px-8 py-4 cursor-pointer`}>ক্যাম্পাস</button>
                <button onClick={() => setActive("student")} className={`${active == "student" ? "bg-[#4CAF50]": "bg-black darkBg"} text-white font-semibold uppercase px-8 py-4 cursor-pointer`}>ছাত্র ও শিক্ষক</button>
                <button onClick={() => setActive("cerimony")} className={`${active == "cerimony" ? "bg-[#4CAF50]": "bg-black darkBg"} text-white font-semibold uppercase px-8 py-4 cursor-pointer`}>পুরুস্কার বিতরণী</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    photos.filter((photo) => {
                        let allPhotos
                        if(active == "all"){
                            allPhotos = photos
                        }else{
                            allPhotos = (photo.categories == active)
                        }
                        return allPhotos
                    }).slice(0,9).map((photo, index) => <div key={index} className='overflow-hidden rounded-lg'>
                        <Image src={photo.img} alt='image of madrasa' width={300} height={300} className='rounded-lg h-full w-full transition duration-500 hover:scale-110' />
                    </div>)
                }
            </div>
            <div className='text-center'>
                <button className='bg-[#4CAF50] rounded-lg text-white font-semibold uppercase px-4 py-2 mt-12 mb-8 cursor-pointer'>More</button>
            </div>
        </div>
    );
};

export default Photo;