import React from 'react';
import styles from '../../styles/navbar.module.css'
const UpperNav = () => {
    return (
        <div className='container'>
            <div className={`${styles.upperNavCon}`}>
                <div className='text-center'>
                    <h1 className={`text-[#4CAF50]`}>তাযীমুল উম্মাহ হিফয ইনস্টিটিউট</h1>
                    <h1>TAJIMUL UMMAH HIFAZ INSTITUTE</h1>
                    <h2>EIIN : XXXX, Madrasah Code: XXXX</h2>
                    <h3>E-mail: example@gmail.com</h3>
                </div>
            </div>
        </div>
    );
};

export default UpperNav;