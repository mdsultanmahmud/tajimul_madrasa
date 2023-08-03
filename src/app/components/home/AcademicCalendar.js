"use client"
import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AcademicCalendar = () => {
    const [date, onchange] = useState(new Date())
    console.log("todays", date);
    return (
        <div className='mb-12'>
            <h1 className='text-xl md:text-2xl mb-1 font-bold text-black '>একাডেমীক ক্যালেন্ডার</h1>
            <hr className='mb-4' />
            <div className='p-2 my-4 text-black text-sm'>
                <Calendar onChange={onchange} value={date} className={"shadow-3xl"}/>
            </div>
        </div>
    );
};

export default AcademicCalendar;
