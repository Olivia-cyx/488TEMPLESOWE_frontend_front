"use client"

import React, { useState } from 'react';
import styles from '../styles';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

export default function Navbar() {
  const [active, setActive] = useState('ABOUT');

  const handleItemClick = (item:any) => {
    setActive(item);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-4 relative bg-primary-yellow`}
      style={{ height: '80px',  boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.4)' } }
    >
      <div className={`${styles.innerWidth} flex justify-between gap-4`}>
        <div className="verticalLineAfter">
          <img src="/favicon.ico" alt="logo" className="w-[60px] h-[60px] object-center" />
        </div>
        <h2
          className={`Freight Big Pro text-[21px]  pt-3 cursor-pointer hover:underline ${
            active === 'ABOUT' ? 'underline' : ''
          }`}
          style={{ color: '#DCD5C6' , fontWeight: 'lighter'}}
          onClick={() => handleItemClick('ABOUT')}
        >
          ABOUT
        </h2>
        <h2
          className={`Freight Big Pro text-[21px]  pt-3 cursor-pointer hover:underline ${
            active === 'LIFESTYLE' ? 'underline' : ''
          }`}
          style={{ color: '#DCD5C6', fontWeight: 'lighter'}}
          onClick={() => handleItemClick('LIFESTYLE')}
        >
          LIFESTYLE
        </h2>
        <h2
          className={`Freight Big Pro text-[21px]  pt-3 cursor-pointer hover:underline ${
            active === 'GALLERY' ? 'underline' : ''
          }`}
          style={{ color: '#DCD5C6', fontWeight: 'lighter' }}
          onClick={() => handleItemClick('GALLERY')}
        >
          GALLERY
        </h2>
        <h2
          className={`Freight Big Pro text-[21px]  pt-3 cursor-pointer hover:underline ${
            active === 'TEAM' ? 'underline' : ''
          }`}
          style={{ color: '#DCD5C6' ,fontWeight: 'lighter'}}
          onClick={() => handleItemClick('TEAM')}
        >
          TEAM
        </h2>
        <div className="flex items-center">
          <button className="bg-[#DCD5C6] hover:bg-hover-gray transition-colors duration-400 ease-in py-2 px-6 rounded">
            <h2 className="Freight Big Pro text-[21px]" style={{ color: '#544E48' }}>
              ENQUIRE
            </h2>
          </button>
        </div>
        </div>
    
      </motion.nav>
  );
}