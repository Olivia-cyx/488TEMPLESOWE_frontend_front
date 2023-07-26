"use client"
import React from "react"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <motion.div className="flex justify-center items-center flex-col ">
      <div className="xl:mt-5 xl:pt-0 md:mt-10 pt-20 ">
        <img src="Titlepage logo.png" alt="logo" className="xl:w-[710px] xl:h-[700px] xl:mt-5 xl:pt-0 object-center md:mt-60 pt-20 w-[350px] h-[390px]" />
      </div>

      <div className="py-20 flex items-center">
        <button className="bg-[#DCD5C6] hover:bg-hover-gray transition-colors duration-400 ease-in py-4 px-8 rounded-lg md: mt-20">
          <h2 className="Freight Big Pro text-[21px]" style={{ color: "#544E48" }}>
            ENQUIRE
          </h2>
        </button>
      </div>
    </motion.div>
  )
}
