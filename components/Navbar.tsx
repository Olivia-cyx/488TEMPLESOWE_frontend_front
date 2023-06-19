import React, { useState } from 'react';
import styles from '../styles';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [active, setActive] = useState('');

  const handleItemClick = (item:any) => {
    setActive(item);
  };

  return (
    <motion.nav
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-4 relative`}
      style={{ height: '70.89px' }}
    >
      <div className={`${styles.innerWidth} flex justify-between gap-4`}>
        <div className="verticalLineAfter">
          <img src="/favicon.ico" alt="logo" className="w-[40px] h-[40px] object-center" />
        </div>
        <h2
          className={`Freight Big Pro text-[14px]  pt-2 cursor-pointer hover:underline ${
            active === 'ABOUT' ? 'underline' : ''
          }`}
          style={{ color: '#DCD5C6' }}
          onClick={() => handleItemClick('ABOUT')}
        >
          ABOUT
        </h2>
        <h2
          className={`Freight Big Pro text-[14px]  pt-2 cursor-pointer hover:underline ${
            active === 'LIFESTYLE' ? 'underline' : ''
          }`}
          style={{ color: '#DCD5C6' }}
          onClick={() => handleItemClick('LIFESTYLE')}
        >
          LIFESTYLE
        </h2>
        <h2
          className={`Freight Big Pro text-[14px]  pt-2 cursor-pointer hover:underline ${
            active === 'GALLERY' ? 'underline' : ''
          }`}
          style={{ color: '#DCD5C6' }}
          onClick={() => handleItemClick('GALLERY')}
        >
          GALLERY
        </h2>
        <h2
          className={`Freight Big Pro text-[14px]  pt-2 cursor-pointer hover:underline ${
            active === 'TEAM' ? 'underline' : ''
          }`}
          style={{ color: '#DCD5C6' }}
          onClick={() => handleItemClick('TEAM')}
        >
          TEAM
        </h2>
        <div className="flex items-center">
          <button className="bg-[#DCD5C6] hover:bg-hover-gray transition-colors duration-500 ease-in py-2 px-4 rounded">
            <h2 className="Freight Big Pro text-[14px]" style={{ color: '#544E48' }}>
              ENQUIRE
            </h2>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}