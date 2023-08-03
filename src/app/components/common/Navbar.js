import React from 'react';
import LowerNav from './LowerNav';
import UpperNav from './UpperNav';

const Navbar = () => {
    return (
        <div className='flex flex-col-reverse md:flex-col'>
            <div className='bg-[#F7FFF7]'>
                <UpperNav/>
            </div>
            <div className='bg-[#4CAF50]'>
                <LowerNav/>
            </div>
        </div>
    );
};

export default Navbar;