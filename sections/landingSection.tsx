"use client"
import React from "react"
import styles from "../styles"
import { motion } from "framer-motion"
import Navbar from "../components/Header"
import { slideIn, textVariant } from "../utils/motion"

export default function LandingPage() {
  return (
    <motion.div className="flex justify-center items-center flex-col relative z-10">
      <img src="Titlepage logo.png" alt="logo" className="w-[700px] h-[700px] object-centre" />
      <div className="py-20 flex items-center">
        <button className="bg-[#DCD5C6] hover:bg-hover-gray transition-colors duration-400 ease-in py-4 px-8 rounded-lg">
          <h2 className="Freight Big Pro text-[21px]" style={{ color: "#544E48" }}>
            ENQUIRE
          </h2>
        </button>
      </div>
    </motion.div>
  )
}
