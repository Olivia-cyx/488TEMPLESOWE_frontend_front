"use client"

import React, { useEffect, useState } from "react"
import styles from "../styles"
import { motion } from "framer-motion"
import { navVariants } from "../utils/motion"
import { ENavBarTab } from "../constants/navbar"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Header: React.FC = () => {
  const endpoint = usePathname().replace("/", "").toUpperCase()
  const [active, setActive] = useState<ENavBarTab | string>(ENavBarTab.ABOUT)

  const handleItemClick = (navBarTab: ENavBarTab) => {
    setActive(navBarTab)
  }

  useEffect(() => {
    if (endpoint !== "") {
      setActive(endpoint)
    }
  }, [endpoint])

  return (
    <div className="bg-primary-yellow overflow-hidden">
      <div className="fixed top-0 z-50 w-full">
        <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className={`${styles.xPaddings} py-4 relative bg-primary-yellow`}
          style={{ height: "80px", boxShadow: "0px 20px 20px 5px rgba(0, 0, 0, 0.5)" }}
        >
          <div className={`${styles.innerWidth} flex justify-between gap-4`}>
            <div className="verticalLineAfter">
              <img src="/favicon.ico" alt="logo" className="w-[60px] h-[60px] object-center" />
            </div>

            {Object.values(ENavBarTab).map((navBarTab) => (
              <Link
                className={`Freight Big Pro text-[21px]  pt-4 cursor-pointer hover:underline ${active === navBarTab ? "underline" : ""}`}
                style={{ color: "#DCD5C6", fontWeight: "lighter" }}
                onClick={() => handleItemClick(navBarTab)}
                href={`/${navBarTab === "ABOUT" ? "" : navBarTab.toLowerCase()}`}
                key={navBarTab}
              >
                <h2>{navBarTab}</h2>
              </Link>
            ))}

            <div className="flex items-center">
              <button className="bg-[#DCD5C6] hover:bg-hover-gray transition-colors duration-400 ease-in py-2 px-6 rounded">
                <h2 className="Freight Big Pro text-[21px]" style={{ color: "#544E48" }}>
                  ENQUIRE
                </h2>
              </button>
            </div>
          </div>
        </motion.nav>
      </div>
    </div>
  )
}

export default Header
