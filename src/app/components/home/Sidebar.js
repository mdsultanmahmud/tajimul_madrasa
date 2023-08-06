import React from 'react';
import hujur from "/public/assets/home/hujur.webp"
import Image from 'next/image';
import AcademicCalendar from './AcademicCalendar';
const Sidebar = () => {
    const notices = [
        { id: 1, notice: "নোটিস ১" },
        { id: 2, notice: "নোটিস ২" },
        { id: 3, notice: "নোটিস ৩" },
        { id: 4, notice: "নোটিস ৪" }
    ]
    return (
        <div>
            {/* design teacher section  */}
            <div className='px-2 mb-12'>
                <Image src={hujur} alt='hujur' width={300} height={300} className='mx-auto rounded-2xl mb-8' />
                <h3 className='mb-3 border-b text-xl font-semibold text-[#4CAF50] textWhite'>নাম :</h3>
                <h3 className='mb-3 border-b text-xl font-semibold text-[#4CAF50] textWhite'>পদবি :</h3>
                <h3 className='mb-3 border-b text-xl font-semibold text-[#4CAF50] textWhite'>প্রতিষ্ঠান :</h3>
            </div>

            {/* notice section  */}
            <div className='mb-12'>
                <h1 className='text-xl md:text-2xl mb-1 font-bold text-black textWhite'>গুরুত্বপূর্ণ নোটিস সমূহ</h1>
                <hr className='mb-4' />
                    {
                        notices.map((notice) => <div key={notice.id} className='mb-2 bg-[#4CAF50] px-8 py-4 rounded-lg'>
                            <p className='text-lg text-white'>{notice.notice}</p>
                        </div>)
                    }
            </div>
            <AcademicCalendar/>
        </div>
    );
};

export default Sidebar;