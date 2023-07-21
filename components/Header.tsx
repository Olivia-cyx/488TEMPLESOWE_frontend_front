/* eslint-disable max-len */
"use client"

import React, { useEffect, useState } from "react"
import { ENavBarTab } from "../constants/navbar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MenuIcon from "./MenuIcon"
import CloseIcon from "./CloseIcon"

export const Header: React.FC = () => {
  const endpoint = usePathname().replace("/", "").toUpperCase()
  const [active, setActive] = useState<ENavBarTab | string>(ENavBarTab.ABOUT)
  const [open, setOpen] = useState<boolean>(false)

  const handleItemClick = (navBarTab: ENavBarTab) => {
    setActive(navBarTab)
  }

  useEffect(() => {
    if (endpoint !== "") {
      setActive(endpoint)
    }
  }, [endpoint])
  return (
    <nav className="w-full fixed top-0 left-0 shadow-md z-50">
      <div className="bg-primary-yellow md:flex items-center justify-between py-1 md:px-10 px-7 relative">
        {/* logo */}
        <div className="flex items-center md:relative md:after:absolute  after:top-[0] md:after:left-[120px] md:after:bottom-0 md:after:w-[3px] md:after:bg-light-gray">
          <img src="/favicon.ico" alt="logo" className="h-12" />
        </div>

        {/* menu */}
        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden">
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>

        {/* nav tab */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute bg-primary-yellow  md:static w-full md:w-auto left-0 md:pl-0 pl-7 transition-all duration-500 ease-in md:z-50 z-[-1] ${
            open ? "top-[50px]" : "top-[-490px]"
          }`}
        >
          {Object.values(ENavBarTab).map((navBarTab) => (
            <li key={navBarTab} className="md:ml-8 md:my-0 my-7">
              <Link
                className={`Freight Big Pro text-[16px] cursor-pointer hover:underline ${active === navBarTab ? "underline" : ""}`}
                style={{ color: "#DCD5C6", fontWeight: "lighter" }}
                onClick={() => handleItemClick(navBarTab)}
                href={`/${navBarTab === "ABOUT" ? "" : navBarTab.toLowerCase()}`}
                key={navBarTab}
              >
                {navBarTab}
              </Link>
            </li>
          ))}
          {/* enquire */}

          <button
            className="bg-[#DCD5C6] hover:bg-hover-gray transition-colors duration-400 ease-in py-1 px-4 rounded Freight Big Pro text-[16px] md:hidden block"
            style={{ color: "#544E48" }}
          >
            ENQUIRE
          </button>
        </ul>

        <button
          className="bg-[#DCD5C6] hover:bg-hover-gray transition-colors duration-400 ease-in py-1 px-4 rounded Freight Big Pro text-[16px] md:block hidden"
          style={{ color: "#544E48" }}
        >
          ENQUIRE
        </button>
      </div>
    </nav>
  )
}

export default Header
