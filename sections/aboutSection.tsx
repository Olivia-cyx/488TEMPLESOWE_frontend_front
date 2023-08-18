"use client"

import React from "react"
import styles from "../styles"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"

export default function AboutPage() {
  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={"flex justify-center items-center flex-col gap-20"}
      >
        {/* logo */}
        <div className="HorizontalLineAfter">
          <img src="Titlepage logo.png" alt=" logo" className="xl:w-[250px] w-[180px]" />
        </div>

        {/* text */}
        <div className="max-w-[1101px]">
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="freightBigPro xl:text-[24px] lg:w-[800px] md:w-[650px] sm:w-[500px] w-full text-center text-secondary-white"
          >
            Showcasing streamlined sophistication and the latest trends in open plan architectural design, these 8 exemplary homes deliver executive standards
            and abundant lifestyles. Balance leafy tranquility with a seamless city connection at this unrivalled location.
          </motion.p>
        </div>

        {/* image */}
        <img
          src="Building front_ed.png"
          alt="building_front"
          className="object-cover 2xl:w-[1497px] xl:w-[1197px] lg:w-[800px] md:w-[650px] sm:w-[500px] w-full"
        />
      </motion.div>
    </section>
  )
}
