"use client"
import { FaBars } from 'react-icons/fa'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { ImCross } from 'react-icons/im'
import { useContext, useEffect, useState } from 'react';
import styles from '../../styles/navbar.module.css'
import { BsLinkedin } from 'react-icons/bs';
import { CiFacebook } from 'react-icons/ci';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import Link from 'next/link';
import { useTheme } from 'next-themes';
const LowerNav = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [shownav, setShowNav] = useState(false)
    const [showNested, setShowNested] = useState(false)
    const [mdNav, setMdNav] = useState(false)
    console.log(theme)
    const handleTheme = () => {
        console.log("current theme is", theme);
    }
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    const menuList = <>
        <li><Link onClick={() => setMdNav(false)} href={'/'}>Home</Link></li>
        <li><Link onClick={() => setMdNav(false)} href={'/notice'}>Notice</Link></li>
        {/* <li>
            <div className='flex gap-x-1 items-center'>
                <Link onClick={() => setMdNav(false)} href={'/notice'}>Notice</Link>
                <MdOutlineArrowDropDown onClick={() => {
                    if (showNested == 'about') {
                        setShowNested(false)
                    } else {
                        setShowNested('about')
                    }
                }} size={30} className="icon" />
            </div>
            <ul className={`${showNested === 'about' ? 'activeNested' : ''}`}>
                <li><Link onClick={() => setMdNav(false)} href={'/company-profile'}>Company Profile</Link></li>
                <li><Link onClick={() => setMdNav(false)} href={'/management-message'}>Managing Director&apos;s Message</Link></li>
                <li><Link onClick={() => setMdNav(false)} href={'/certificate'}>Certificates</Link></li>
                <li><Link onClick={() => setMdNav(false)} href={'/faq'}>FAQ</Link></li>
                <li><Link onClick={() => setMdNav(false)} href={'/video'}>Video</Link></li>
            </ul>
        </li> */}
        <li><Link onClick={() => setMdNav(false)} href={'/course'}>Course</Link></li>
        <li><Link onClick={() => setMdNav(false)} href={"/result"}>Result</Link></li>
        <li><Link onClick={() => setMdNav(false)} href={"/about"}>About Us</Link></li>
        <li><Link onClick={() => setMdNav(false)} href={"/contact"}>Contact Us</Link></li>
        <li><Link onClick={() => setMdNav(false)} href={"/management"}>Management</Link></li>
        <li><Link onClick={() => setMdNav(false)} href={"/login"}>Login</Link></li>
    </>
    return (
        <div className={`w-full z-10`}>
            <header className='container'>
                <nav className={`${styles.customNav}`}>
                    <div>
                        <Link onClick={() => setMdNav(false)} href={'/'}>Logo</Link>
                    </div>
                    <div className='hidden lg:block'>
                        <ul>
                            {menuList}
                        </ul>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <div className='bg-[#9DB2BF] rounded-lg'>
                            <button onClick={() => setTheme("light")} className={`text-xs font-semibold uppercase ${theme === "light" ? 'bg-white text-black' : 'transparent text-white'} text-black py-2 px-4 rounded-lg`}>light</button>
                            <button onClick={() => setTheme("dark")} className={`text-xs font-semibold uppercase ${theme === "dark" ? 'bg-[#0E2954]' : 'transparent text-white'}  text-white py-2 px-4 rounded-lg`}>dark</button>
                        </div>
                        <Link className='primaryButton  rounded-xl md:rounded-2xl' href={'/register'}>Register</Link>
                        {!mdNav && <FaBars onClick={() => setMdNav(true)} size={24} className='lg:hidden cursor-pointer' />}
                        {mdNav && <ImCross onClick={() => setMdNav(false)} size={24} className='lg:hidden cursor-pointer' />}

                    </div>
                </nav>
                <div className={`lg:hidden ${styles.responsiveNav} ${mdNav ? styles.activeNavbar : ''} `}>
                    <ul>
                        {menuList}
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default LowerNav;