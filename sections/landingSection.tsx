"use client"
import React from "react"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <motion.div className="flex justify-center items-center flex-col h-full gap-12">
      {/* logo */}
      <div>
        <img src="Titlepage logo.png" alt="logo" className="xl:w-[710px]  w-[350px]" />
      </div>

      {/* button */}
      <div className=" flex items-center">
        <button className="bg-[#DCD5C6] hover:bg-hover-gray transition-colors duration-400 ease-in py-4 px-8 rounded-lg">
          <h2 className="Freight Big Pro text-[21px]" style={{ color: "#544E48" }}>
            ENQUIRE
          </h2>
        </button>
      </div>
    </motion.div>
  )
}
