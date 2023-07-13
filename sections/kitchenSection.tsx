/* eslint-disable max-len */
"use client"

import styles from "../styles"
import { motion } from "framer-motion"
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion"
import { TypingBrownText, TypingText } from "../components/Custom.Text"
import { kitchImageSlide } from "../constants"
import Image from "next/image"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDot, RxDotFilled } from "react-icons/rx"
import { SetStateAction, useState } from "react"

export default function KitchenSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? kitchImageSlide.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === kitchImageSlide.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (kitchImageSlideIndex: SetStateAction<number>) => {
    setCurrentIndex(kitchImageSlideIndex)
  }

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
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="pt-100 pr-8 relative"
            >
              <div className="relative">
                <img src="bar_upstairs.png" alt="bedroom" className="w-[950px] h-[677px] object-contain" />
                <div className="absolute bottom-10 right-10 flex items-start justify-start w-full h-full">
                  <img src="LUXE_Design.png" alt="bedroom" className="w-[177.76px] h-[238.41px] object-contain" />
                </div>
              </div>
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
              <img src="LOGO-bar upstairs.png" alt="LOGO_bedroom" className="w-[142.5px] h-[120.85px] object-contain" />
            </motion.div>
            <div className="w-[259px] h-[510px] pt-20">
              <TypingBrownText
                title="Harmonize living 
"
                textStyles="text-center"
              />

              <TypingBrownText
                title="and productivity: 
"
                textStyles="text-center"
              />

              <motion.p
                variants={fadeIn("up", "tween", 0.05, 0.25)}
                className="mt-[8px] freightBigPro sm:text-[21px] text-[18px] text-start text-primary-yellow"
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
              <img src="LOGO-kitchen.png" alt="LOGO_bedroom" className="w-[142.5px] h-[80.85px] object-contain" />
            </motion.div>
            <div className="w-[259px] h-[510px] pt-20">
              <TypingBrownText
                title="Embrace the art of
"
                textStyles="text-center"
              />
              <TypingBrownText title="effortless hospitality:" textStyles="text-center" />

              <motion.p
                variants={fadeIn("up", "tween", 0.05, 0.25)}
                className="mt-[8px] freightBigPro sm:text-[21px] text-[18px] text-start text-primary-yellow"
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
              <div className="relative group duration-500 w-[950px] h-[677px] object-contain">
                <Image src={kitchImageSlide[currentIndex].Url} alt="bedroom" className="w-[950px] h-[677px] object-contain transition-all duration-500 " />
                <div className="hidden group-hover:block absolute top-[50%] translate-y-[-50%] left-5 text-2xl rounded-full p-2 transition-all duration-500 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                <div className="hidden group-hover:block absolute top-[50%] translate-y-[-50%] right-5 text-2xl rounded-full p-2 transition-all duration-500  bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className="flex top-4 justify-center py-2">
                  {kitchImageSlide.map((kitchImageSlide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer text-primary-yellow">
                      {currentIndex === slideIndex ? <RxDotFilled /> : <RxDot />}
                    </div>
                  ))}
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
              <img src="living_room.png" alt="bedroom" className="w-[950px] h-[677px] object-contain" />
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
              <img src="LOGO-living room.png" alt="LOGO_bedroom" className="w-[142.5px] h-[120.85px] object-contain" />
            </motion.div>
            <div className="w-[259px] h-[510px] pt-20">
              <TypingBrownText title="Elevate your" textStyles="text-start" />
              <TypingBrownText title="living experience:" textStyles="text-start" />

              <motion.p
                variants={fadeIn("up", "tween", 0.05, 0.25)}
                className="mt-[8px] freightBigPro sm:text-[21px] text-[18px] text-start text-primary-yellow"
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
