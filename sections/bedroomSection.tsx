"use client"

import React from "react"
import styles from "../styles"
import { motion } from "framer-motion"
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion"
import { TypingText } from "../components/Custom.Text"

export default function BedroomSection() {
  return (
    <section className={`${styles.paddings}flex justify-center items-center flex-col`}>
      <div className="flex justify-center items-center relative space-x-120">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={"flex justify-center items-center flex-col relative pt-60 "}
        >
          <motion.div variants={planetVariants("left")} className={`flex-1 ${styles.flexCenter}`}>
            <img src="LOGO_bedroom - Copy.png" alt="LOGO_bedroom" className="w-[142.5px] h-[80.85px] object-contain" />
          </motion.div>
          <div className="w-[259px] h-[510px] pt-20">
            <TypingText
              title="Indulge in private retreats: 
"
              textStyles="text-start"
            />

            <motion.p
              variants={fadeIn("up", "tween", 0.05, 0.25)}
              className="mt-[8px] freightBigPro sm:text-[21px] text-[18px] text-start text-secondary-white"
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
          className={"flex justify-center items-center pt-10"}
        >
          <motion.div variants={fadeIn("up", "tween", 0.05, 0.25)} className={`flex-1 ${styles.flexCenter}`}>
            <img src="Bedroom image.png" alt="bedroom" className="w-[950px] h-[677px] object-contain" />
          </motion.div>
        </motion.div>
      </div>
      <div className="flex justify-center items-center space-x-120">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={"flex justify-center items-center pt-10"}
        >
          <motion.div variants={fadeIn("up", "tween", 0.05, 0.25)} className={`flex-1 ${styles.flexCenter}`}>
            <img src="Bathroom image.png" alt="bedroom" className="w-[950px] h-[677px] object-contain" />
          </motion.div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={"flex justify-center items-center flex-col pt-60 "}
        >
          <motion.div variants={planetVariants("right")} className={`flex-1 ${styles.flexCenter}`}>
            <img src="LOGO-Bathroom - Copy.png" alt="LOGO_bedroom" className="w-[142.5px] h-[120.85px] object-contain" />
          </motion.div>
          <div className="w-[259px] h-[510px] pt-20">
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

            <motion.p
              variants={fadeIn("up", "tween", 0.05, 0.25)}
              className="mt-[8px] freightBigPro sm:text-[21px] text-[18px] text-start text-secondary-white"
            >
              Stunning appointments, harmonious mood lighting, and spacious design create captivating spaces.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
