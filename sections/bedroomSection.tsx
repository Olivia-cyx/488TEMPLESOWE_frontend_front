"use client"

import React from "react"
import styles from "../styles"
import { motion } from "framer-motion"
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion"
import { TypingText } from "../components/Custom.Text"

export default function BedroomSection() {
  return (
    <section className={`${styles.paddings}flex justify-center items-center flex-col xl:mb-20`}>
      <div className="xl:flex justify-center items-center relative xl:space-x-120 ">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={"xl:flex xl:pt-60 md:justify-center items-center flex-col relative  "}
        >
          <motion.div variants={planetVariants("left")} className={`flex-1 ${styles.flexCenter}`}>
            <img
              src="LOGO_bedroom - Copy.png"
              alt="LOGO_bedroom"
              className="xl:w-[142.5px] xl:h-[80.85px] xl:mt-0 md:w-[120.5px] h-[60.85px] mt-20 object-contain"
            />
          </motion.div>
          <div className="xl:w-[259px] xl:h-[510px] xl:pt-20 mt-0 md:pt-15 mt-15">
            <TypingText
              title="Indulge in private retreats: 
"
              textStyles="xl:text-start xl:pl-0 md:text-center pl-18 pt-10"
            />

            <motion.p
              variants={fadeIn("up", "tween", 0.05, 0.25)}
              className="xl:mt-[8px] freightBigPro sm:text-[21px] text-[18px] xl:text-start xl:pl-0 md:text-center text-secondary-white"
            >
              Bedrooms designed as havens of relaxation, equipped with modern conveniences for your ultimate comfort
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={"xl:flex justify-center items-center xl:pt-10 xl:pb-0 md:pt-0 pb-10"}
        >
          <motion.div variants={fadeIn("up", "tween", 0.05, 0.25)} className={`flex-1 ${styles.flexCenter}`}>
            <img src="Bedroom image.png" alt="bedroom" className="xl:w-[950px] xl:h-[677px] xl:mt-0 md:w-[350px] md:h-[177px] mt-10 object-contain " />
          </motion.div>
        </motion.div>
      </div>
      <div className="xl:flex justify-center items-center relative xl:space-x-120">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={"flex justify-center items-center xl:pt-10 "}
        >
          <motion.div variants={fadeIn("up", "tween", 0.05, 0.25)} className={`flex-1 ${styles.flexCenter}`}>
            <img
              src="Bathroom image.png"
              alt="bedroom"
              className="xl:w-[950px] xl:h-[677px] xl:mt-0 xl:pt-0 md:w-[350px] md:h-[177px] mt-10 pt-10 object-contain  "
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={"flex justify-center items-center flex-col xl:pt-40 md:pt-3"}
        >
          <motion.div variants={planetVariants("right")} className={`flex-1 ${styles.flexCenter}`}>
            <img
              src="LOGO-Bathroom - Copy.png"
              alt="LOGO_bedroom"
              className="xl:w-[152.5px] xl:h-[90.85px] xl:mt-0 md:w-[130.5px] h-[70.85px] mt-10 object-contain "
            />
          </motion.div>
          <div className="xl:w-[259px] xl:h-[510px] xl:pt-10 xl:mt-0 md:pt-10 md:mt-20">
            <TypingText
              title="Experience artistry 
"
              textStyles="xl:text-start xl:pl-0 md:text-center pl-18 mt-10"
            />
            <TypingText
              title="in wet rooms: 
"
              textStyles="xl:text-start xl:pl-0 md:text-center pl-18"
            />

            <motion.p
              variants={fadeIn("up", "tween", 0.05, 0.25)}
              className="xl:mt-[8px] freightBigPro sm:text-[21px] text-[18px] xl:text-start xl:pl-0 pb-20 xl:mb-40 md:text-center md:mb-20 text-secondary-white"
            >
              Stunning appointments, harmonious mood lighting, and spacious design create captivating spaces.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
