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
      <div className="xl:flex justify-center items-center relative xl:space-x-120">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={"xl:flex xl:pt-60 md:justify-center items-center flex-col relative "}
        >
          <motion.div variants={planetVariants("left")} className={`flex-1 ${styles.flexCenter}`}>
            <img src="Group 141.png" alt="LOGO_bedroom" className="xl:w-[142.5px] xl:h-[80.85px] xl:mt-0 md:w-[120.5px] h-[60.85px] mt-20 object-contain" />
          </motion.div>
          <div className="xl:w-[259px] xl:h-[510px] xl:pt-20 mt-0 md:pt-20 mt-20">
            <TypingText
              title="Embrace a vibrant
"
              textStyles="xl:text-start xl:pl-0 md:text-center pl-18 pt-10"
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
              <img
                src="Mask Group 13.png"
                alt="bedroom"
                className="xl:w-[950px] xl:h-[677px] xl:mt-0 xl:pt-0 md:w-[350px] md:h-[167px] xl:mt-10 pt-10 object-contain"
              />
              <div className="absolute bottom-10 left-10 flex items-start justify-end w-full h-full">
                <img src="LUXE_Design.png" alt="bedroom" className="xl:w-[177.76px] xl:h-[238.41px] md:w-[77.76px] h-[170.41px] object-contain" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="xl:flex justify-center items-center relative xl:space-x-120">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={"flex justify-center items-center flex-col xl:pt-10 md:pt-20"}
        >
          <motion.div variants={fadeIn("up", "tween", 0.05, 0.25)} className={`flex-1 ${styles.flexCenter}`}>
            <img
              src="Mask Group 27.png"
              alt="bedroom"
              className="xl:w-[950px] xl:h-[677px] xl:mt-0 xl:pt-0 md:w-[550px] md:h-[177px] mt-10 pt-10 object-contain"
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={"xl:flex md:justify-center items-center flex-col relative "}
        >
          <motion.div variants={planetVariants("right")} className={`flex-1 ${styles.flexCenter}`}>
            <img src="LOGO-outdoor.png" alt="LOGO_bedroom" className="xl:w-[152.5px] xl:h-[90.85px] xl:mt-0 md:w-[130.5px] h-[70.85px] mt-10 object-contain" />
          </motion.div>
          <div className="xl:w-[259px] xl:h-[510px] xl:pt-10 xl:mt-0 md:pt-10 md:mt-20">
            <TypingText
              title="Embrace the serenity  
"
              textStyles="xl:text-start xl:pl-0 md:text-center pl-18 mt-10"
            />

            <TypingText
              title="of outdoor living:   
"
              textStyles="xl:text-start xl:pl-0 md:text-center pl-18"
            />

            <motion.p
              variants={fadeIn("up", "tween", 0.05, 0.25)}
              className="xl:mt-[8px] freightBigPro sm:text-[21px] text-[18px] text-start text-secondary-white"
            >
              Discover a captivating landscape where nature and design coalesce, offering a private escape for your indulgence.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
