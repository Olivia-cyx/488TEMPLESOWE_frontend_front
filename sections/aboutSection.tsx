"use client"

import React from "react"
import styles from "../styles"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"

export default function AboutPage() {
  return (
    <section className={`${styles.paddings}flex justify-center items-center flex-col gap-8`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={"flex justify-center items-center flex-col space-y-30"}
      >
        <div className="HorizontalLineAfter">
          <img src="Titlepage logo.png" alt=" logo" className="xl:w-[248px] xl:h-[250px] xl:mt-0 object-centre xl:mb-10 md:w-[148px] h-[180px] mt-10" />
        </div>

        <div className="xl:w-[1011px] xl:h-[297px] xl:mt-0 xl:pt-20 md:pt-10 mt-20">
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="mt-[8px] freightBigPro xl:text-[24px] xl:mb-0 md:text-[20px] mb-20 text-center text-secondary-white"
          >
            Showcasing streamlined sophistication and the latest trends in open plan architectural design, these 8 exemplary homes deliver executive standards
            and abundant lifestyles. Balance leafy tranquility with a seamless city connection at this unrivalled location.
          </motion.p>
        </div>
        <img src="Building front_ed.png" alt=" logo" className="xl:w-[1364px] xl:h-[800px] object-centre md:w-[464px] h-[300px]" />
      </motion.div>
    </section>
  )
}
