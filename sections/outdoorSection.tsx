"use client"
import React from "react"
import styles from "../styles"
import { motion } from "framer-motion"
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion"
import { TypingText } from "../components/Custom.Text"

export default function OutdoorSection() {
  return (
    <section className={`${styles.paddings} flex justify-center items-center flex-col md:gap-48 sm:gap-40 gap-28`}>
      {/* first section */}
      <div className="flex justify-center items-center xl:gap-72 gap-16 xl:flex-row flex-col-reverse">
        {/* text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex items-center flex-col xl:gap-10 gap-7"
        >
          <motion.div variants={planetVariants("left")}>
            <img src="Group 141.png" alt="LOGO_bedroom" className="xl:h-[90.85px] md:h-[80px] h-[70.85px] object-contain" />
          </motion.div>
          <div className="xl:w-[259px] lg:w-[350px] md:w-[380px] sm:w-[259px] w-[225px] flex flex-col">
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

            <motion.p variants={fadeIn("up", "tween", 0.05, 0.25)} className="freightBigPro sm:text-[21px] text-[18px] text-start text-secondary-white">
              Elevate your leisurely gatherings with a convenient, easy-care option and the option to upgrade to a plumbed outdoor BBQ.
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
          <motion.div variants={fadeIn("up", "tween", 0.05, 0.25)} className="relative">
            <img
              src="Mask Group 13.png"
              alt="bedroom"
              className="object-cover 2xl:w-[950px] 2xl:h-[677px] xl:w-[650px] xl:h-[455px] lg:w-[800px] lg:h-[570px] md:w-[650px] md:h-[455px] sm:w-[500px] sm:h-[350px] w-full"
            />
            <div className="absolute sm:-top-14 sm:-right-14 -top-5 -right-5">
              <img
                src="LUXE_Design.png"
                alt="bedroom"
                className="2xl:w-[177px] 2xl:h-[238px] xl:w-[150px] xl:h-[200px] lg:w-[165px] lg:h-[220px] md:w-[150px] md:h-[200px] sm:w-[112.5px] sm:h-[150px] w-[60px] h-[80px] object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* second section */}
      <div className="flex justify-center items-center xl:gap-72 gap-16 xl:flex-row flex-col">
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
              src="Mask Group 27.png"
              alt="bedroom"
              className="object-cover 2xl:w-[950px] 2xl:h-[677px] xl:w-[650px] xl:h-[455px] lg:w-[800px] lg:h-[570px] md:w-[650px] sm:w-[500px] sm:h-[350px] w-full"
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
            <img src="LOGO-outdoor.png" alt="LOGO_bedroom" className="xl:h-[90.85px] md:h-[80px] h-[60px] object-contain" />
          </motion.div>

          <div className="xl:w-[259px] lg:w-[350px] md:w-[380px] sm:w-[259px] w-[225px] flex flex-col">
            <div className="flex flex-col items-start">
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
            </div>
            <motion.p variants={fadeIn("up", "tween", 0.05, 0.25)} className="freightBigPro sm:text-[21px] text-[18px] text-start text-secondary-white">
              Discover a captivating landscape where nature and design coalesce, offering a private escape for your indulgence.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
