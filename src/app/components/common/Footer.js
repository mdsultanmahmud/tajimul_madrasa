import React from 'react';
import styles from '../../styles/footer.module.css'
import { BsFacebook, BsYoutube, BsLinkedin, BsTelephoneFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import Link from 'next/link';
import { MdEmail } from 'react-icons/md'
const Footer = () => {
    return (
        <div className='container'>
            <div className={`${styles.footerContainer}`}>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12`}>
                    <div>
                        <h3>Logo</h3>
                        <p className={`${styles.footerTitle}`}>ইসলামী আদর্শের ভিত্তিতে একুশ শতকের যোগ্য নাগরিক গড়ে তোলাই আমাদের লক্ষ্য</p>
                        <div className='flex gap-x-4 items-center mt-4'>
                            <BsFacebook size={30} />
                            <BsYoutube size={30} />
                            <BsLinkedin size={30} />
                        </div>
                    </div>
                    <div>
                        <h3>গুরুত্বপুরর্ণ লিংক</h3>
                        <ul>
                            <li><Link href={"/"}>বাংলাদেশ মাদরাসা শিক্ষা বোর্ড</Link></li>
                            <li><Link href={"/"}>বাংলাদেশ মাদরাসা শিক্ষা অধিদপ্ তর</Link></li>
                            <li><Link href={"/"}>ইসলামি আরবী বিশ্ববিদ্যালয়</Link></li>
                            <li><Link href={"/"}>শিক্ষা মন্ত্রণালয়</Link></li>
                            <li><Link href={"/"}>শিক্ষক বাতায়ন</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contact </h3>
                        <div className='flex gap-x-4 items-center mb-2'>
                            <ImLocation2 size={24} />
                            <p>address..mirpur....</p>
                        </div>
                        <div className='flex gap-x-4 items-center mb-2'>
                            <BsTelephoneFill size={24} />
                            <p>01785xxxxxxxxx</p>
                        </div>
                        <div className='flex gap-x-4 items-center mb-2'>
                            <MdEmail size={24} />
                            <p>madrasaxyz@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;
