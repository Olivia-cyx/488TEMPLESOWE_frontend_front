"use client"

import React from "react"
import styles from "../styles"
import { motion } from "framer-motion"
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion"

export default function BedroomSection() {
  return (
    <section className={`${styles.paddings}flex justify-center items-center flex-col relative z-10`}>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}>
        <motion.div variants={planetVariants("left")} className={`flex-1 ${styles.flexCenter}`}>
          <img src="LOGO_bedroom - Copy.png" alt="get-started" className="w-[142.5px] h-[80.85px] object-contain" />
        </motion.div>
        <div className="w-[1011px] h-[297px] pt-20">
          <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className="mt-[8px] freightBigPro sm:text-[24px] text-[20px] text-center text-secondary-white">
            Showcasing streamlined sophistication and the latest trends in open plan architectural design, these 8 exemplary homes deliver executive standards
            and abundant lifestyles. Balance leafy tranquility with a seamless city connection at this unrivalled location.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
