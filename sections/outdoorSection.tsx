"use client"
import React from "react"
import styles from "../styles"
import { motion } from "framer-motion"
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion"
import { TypingText } from "../components/Custom.Text"
import Map from "../components/Map"

export default function OutdoorSection() {
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
            <img src="Group 141.png" alt="LOGO_bedroom" className="w-[142.5px] h-[80.85px] object-contain" />
          </motion.div>
          <div className="w-[259px] h-[510px] pt-20">
            <TypingText
              title="Embrace a vibrant
"
              textStyles="text-start"
            />

            <TypingText
              title="outdoor lifestyle:
"
              textStyles="text-start"
            />

            <motion.p
              variants={fadeIn("up", "tween", 0.05, 0.25)}
              className="mt-[8px] freightBigPro sm:text-[21px] text-[18px] text-start text-secondary-white"
            >
              Elevate your leisurely gatherings with a convenient, easy-care option and the option to upgrade to a plumbed outdoor BBQ.
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
            <div className="relative">
              <img src="Mask Group 13.png" alt="bedroom" className="w-[950px] h-[677px] object-contain" />
              <div className="absolute bottom-10 left-10 flex items-start justify-end w-full h-full">
                <img src="LUXE_Design.png" alt="bedroom" className="w-[177.76px] h-[238.41px] object-contain" />
              </div>
            </div>
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
            <img src="Mask Group 27.png" alt="bedroom" className="w-[950px] h-[677px] object-contain" />
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
            <img src="LOGO-outdoor.png" alt="LOGO_bedroom" className="w-[142.5px] h-[120.85px] object-contain" />
          </motion.div>
          <div className="w-[259px] h-[510px] pt-20">
            <TypingText
              title="Embrace the serenity  
"
              textStyles="text-start"
            />

            <TypingText
              title="of outdoor living:   
"
              textStyles="text-start"
            />

            <motion.p
              variants={fadeIn("up", "tween", 0.05, 0.25)}
              className="mt-[8px] freightBigPro sm:text-[21px] text-[18px] text-start text-secondary-white"
            >
              Discover a captivating landscape where nature and design coalesce, offering a private escape for your indulgence.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
