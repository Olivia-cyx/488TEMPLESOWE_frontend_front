"use client"

import styles from "../styles"
import { motion } from "framer-motion"
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion"
import { TypingBrownText, TypingText } from "../components/Custom.Text"

export default function KitchenSection() {
  return (
    <div>
      <section className={`${styles.paddings}flex justify-center items-center flex-col`}>
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
              <TypingBrownText
                title="Harmonize living and productivity: 
"
                textStyles="text-center"
              />

              <motion.p
                variants={fadeIn("up", "tween", 0.05, 0.25)}
                className="mt-[8px] freightBigPro sm:text-[21px] text-[18px] text-center text-primary-yellow"
              >
                Stunning appointments, harmonious mood lighting, and spacious design create captivating spaces.
              </motion.p>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center items-center space-x-120">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={"flex justify-center items-center flex-col pt-60 "}
          >
            <motion.div variants={planetVariants("left")} className={`flex-1 ${styles.flexCenter}`}>
              <img src="LOGO_bedroom - Copy.png" alt="LOGO_bedroom" className="w-[142.5px] h-[80.85px] object-contain" />
            </motion.div>
            <div className="w-[259px] h-[510px] pt-20">
              <TypingBrownText
                title="Embrace the art of effortless hospitality: 
"
                textStyles="text-center"
              />

              <motion.p
                variants={fadeIn("up", "tween", 0.05, 0.25)}
                className="mt-[8px] freightBigPro sm:text-[21px] text-[18px] text-center text-primary-yellow"
              >
                Unite streamlined elegance and practical design to transform your kitchen into a hub for gathering, working, and entertaining.
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
              <TypingBrownText
                title="Elevate your living experience: 
"
                textStyles="text-center"
              />

              <motion.p
                variants={fadeIn("up", "tween", 0.05, 0.25)}
                className="mt-[8px] freightBigPro sm:text-[21px] text-[18px] text-center text-primary-yellow"
              >
                Embrace an indoor-outdoor sanctuary, where glass stacker doors seamlessly unite with the living domain.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
