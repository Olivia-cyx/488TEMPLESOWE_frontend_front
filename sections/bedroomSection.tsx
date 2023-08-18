"use client"

import React from "react"
import styles from "../styles"
import { motion } from "framer-motion"
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion"
import { TypingText } from "../components/Custom.Text"

export default function BedroomSection() {
  return (
    <section className={`${styles.paddings} flex justify-center items-center flex-col md:gap-48 sm:gap-40 gap-28`}>
      {/* first section */}
      <div className="flex justify-center items-center xl:gap-72 gap-16 xl:flex-row flex-col">
        {/* text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={"flex items-center flex-col xl:gap-10 gap-7"}
        >
          <motion.div variants={planetVariants("left")}>
            <img src="LOGO_bedroom - Copy.png" alt="LOGO_bedroom" className="xl:h-[90.85px] md:h-[80px] h-[50px] object-contain" />
          </motion.div>

          <div className="xl:w-[259px] lg:w-[350px] md:w-[380px] sm:w-[259px] w-full flex flex-col">
            <TypingText
              title="Indulge in private retreats: 
"
              textStyles="text-start"
            />

            <motion.p variants={fadeIn("up", "tween", 0.05, 0.25)} className="freightBigPro sm:text-[21px] text-[18px] text-start text-secondary-white">
              Bedrooms designed as havens of relaxation, equipped with modern conveniences for your ultimate comfort
            </motion.p>
          </div>
        </motion.div>

        {/* image */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex justify-center items-center"
        >
          <motion.div variants={fadeIn("up", "tween", 0.05, 0.25)}>
            <img
              src="Bedroom image.png"
              alt="bedroom"
              className="object-cover 2xl:w-[950px] 2xl:h-[677px] xl:w-[650px] xl:h-[455px] lg:w-[800px] lg:h-[570px] md:w-[650px] md:h-[455px] sm:w-[500px] sm:h-[350px] w-full"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* second section */}
      <div className="flex justify-center items-center xl:gap-72 gap-16 xl:flex-row flex-col-reverse">
        {/* image */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex justify-center items-center"
        >
          <motion.div variants={fadeIn("up", "tween", 0.05, 0.25)}>
            <img
              src="Bathroom image.png"
              alt="bedroom"
              className="object-cover 2xl:w-[950px] 2xl:h-[677px] xl:w-[650px] xl:h-[455px] lg:w-[800px] lg:h-[570px] md:w-[650px] md:h-[455px] sm:w-[500px] sm:h-[350px] w-full"
            />
          </motion.div>
        </motion.div>

        {/* text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex items-center flex-col xl:gap-10 gap-7"
        >
          <motion.div variants={planetVariants("right")}>
            <img src="LOGO-Bathroom - Copy.png" alt="LOGO-Bathroom" className="xl:h-[90.85px] md:h-[80px] h-[70.85px] object-contain" />
          </motion.div>
          <div className="xl:w-[259px] lg:w-[350px] md:w-[380px] sm:w-[259px] w-full flex flex-col">
            <TypingText
              title="Experience artistry 
"
              textStyles="text-start"
            />
            <TypingText
              title="in wet rooms: 
"
              textStyles="text-start"
            />

            <motion.p variants={fadeIn("up", "tween", 0.05, 0.25)} className="freightBigPro sm:text-[21px] text-[18px] text-start text-secondary-white">
              Stunning appointments, harmonious mood lighting, and spacious design create captivating spaces.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
