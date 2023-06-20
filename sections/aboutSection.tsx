"use client"

import React from "react"
import styles from "../styles"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"

export default function AboutPage() {
  return (
    <section className={`${styles.paddings}flex justify-center items-center flex-col relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col space-y-30`}
      >
        <div className="HorizontalLineAfter">
          <img src="Titlepage logo.png" alt=" logo" className="w-[248px] h-[250px] object-centre mb-10" />
        </div>

        <div className="w-[1011px] h-[297px] pt-20">
          <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className="mt-[8px] freightBigPro sm:text-[24px] text-[20px] text-center text-secondary-white">
            Showcasing streamlined sophistication and the latest trends in open plan architectural design, these 8 exemplary homes deliver executive standards
            and abundant lifestyles. Balance leafy tranquility with a seamless city connection at this unrivalled location.
          </motion.p>
        </div>
        <img src="Building front_ed.png" alt=" logo" className="w-[1364px] h-[800px] object-centre" />
      </motion.div>
    </section>
  )
}
