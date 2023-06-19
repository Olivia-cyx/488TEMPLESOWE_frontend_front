'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import React, { useState } from 'react';


const Navbar = () => {
    const [active, setActive] = useState('');
    const handleItemClick = (item:any) => {
        setActive(item);
    };
    return(
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className={`${styles.xPaddings} py-4 relative`}
            style={{ height: '70.89px' }}
        >
            {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
            <div className={`${styles.innerWidth} flex justify-between gap-4`}>
                <div className="verticalLineAfter">
                    <img src="/favicon.ico" alt="logo" className="w-[40px] h-[40px] object-center" />
                </div>
                <h2 
                    className={`Freight Big Pro text-[14px]  pt-2 ${active === "ABOUT" ? "underline" : ""}`} 
                    style={{ color: '#DCD5C6' }} 
                    onClick={() => handleItemClick("ABOUT")}
                >
                    ABOUT
                </h2>
                <h2 className={`Freight Big Pro text-[14px]  pt-2 ${active === "LIFESTYLE" ? "underline" : ""}`} style={{ color: '#DCD5C6' }}  onClick={() => handleItemClick("LIFESTYLE")}>
                    LIFESTYLE
                </h2>
                <h2 className={`Freight Big Pro text-[14px]  pt-2 ${active === "GALLERY" ? "underline" : ""}`} style={{ color: '#DCD5C6' }} onClick={() => handleItemClick("GALLERY")}>
                    GALLERY
                </h2>
                <h2 className={`Freight Big Pro text-[14px]  pt-2 ${active === "TEAM" ? "underline" : ""}`} style={{ color: '#DCD5C6' }}  onClick={() => handleItemClick("TEAM")}>
                    TEAM
                </h2>
                <div className="flex items-center">

                    <button  style={{ backgroundColor: '#DCD5C6' }} className=" py-2 px-4 rounded">
                    <h2 
                        className={`Freight Big Pro text-[14px]`} 
                        style={{ color: '#544E48' }}   
                    >
                        ENQUIRE
                    </h2>
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
export default Navbar;
