/* eslint-disable max-len */
"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import styles from "../styles"
import { motion } from "framer-motion"
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion"
import { TypingBrownText, TypingText } from "../components/Custom.Text"
import { kitchImageSlide } from "../constants/slider"
import Image from "next/image"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function KitchenSection() {
  return (
    <div>
      <section className={`${styles.paddings}flex justify-center items-center flex-col`}>
        <div className="xl:flex justify-center items-center relative xl:space-x-120">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={"xl:flex md:justify-center items-center flex-col relative"}
          >
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className="pt-20 relative">
              <div className="relative">
                <img
                  src="bar_upstairs.png"
                  alt="bedroom"
                  className="xl:w-[950px] xl:h-[677px] xl:mt-0 xl:pt-0 md:w-[550px] md:h-[177px] mt-10 pt-10 object-contain "
                />
                <div className="absolute bottom-10 right-10 flex items-start justify-start w-full h-full">
                  <img
                    src="LUXE_Design.png"
                    alt="bedroom"
                    className="xl:w-[177.76px] xl:h-[238.41px] xl:ml-0 xl:mt-0 md:w-[67.76px] h-[160.41px] ml-6 mt-3 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={"flex justify-center items-center flex-col xl:pt-40 md:pt-20 "}
          >
            <motion.div variants={planetVariants("right")} className={`flex-1 ${styles.flexCenter}`}>
              <img
                src="LOGO-bar upstairs.png"
                alt="LOGO_bedroom"
                className="xl:w-[152.5px] xl:h-[90.85px] xl:mt-0 md:w-[130.5px] h-[70.85px] mt-10 object-contain "
              />
            </motion.div>
            <div className="xl:w-[259px] xl:h-[510px] xl:pt-10 xl:mt-0 md:pt-10 md:mt-20">
              <TypingBrownText
                title="Harmonize living 
"
                textStyles="xl:text-start xl:pl-0 md:text-center pl-18 mt-10"
              />

              <TypingBrownText
                title="and productivity: 
"
                textStyles="xl:text-start xl:pl-0 md:text-center pl-18"
              />

              <motion.p
                variants={fadeIn("up", "tween", 0.05, 0.25)}
                className="xl:mt-[8px] freightBigPro sm:text-[21px] text-[18px] text-start text-primary-yellow"
              >
                Stunning appointments, harmonious mood lighting, and spacious design create captivating spaces.
              </motion.p>
            </div>
          </motion.div>
        </div>
        <div className="xl:flex justify-center items-center relative xl:space-x-120">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={"flex justify-center items-center flex-col xl:pt-80 md:pt-3 "}
          >
            <motion.div variants={planetVariants("left")} className={`flex-1 ${styles.flexCenter}`}>
              <img
                src="LOGO-kitchen.png"
                alt="LOGO_bedroom"
                className="xl:w-[152.5px] xl:h-[90.85px] xl:mt-0 md:w-[130.5px] h-[70.85px] mt-20 object-contain "
              />
            </motion.div>
            <div className="xl:w-[259px] xl:h-[510px] xl:pt-10 xl:mt-0 md:pt-10 md:mt-30">
              <TypingBrownText
                title="Embrace the art of
"
                textStyles="l:text-start xl:pl-0 md:text-center pl-18 mt-10"
              />
              <TypingBrownText title="effortless hospitality:" textStyles="l:text-start xl:pl-0 md:text-center pl-18" />

              <motion.p
                variants={fadeIn("up", "tween", 0.05, 0.25)}
                className="mt-[8px] freightBigPro sm:text-[21px] text-[18px] text-start text-primary-yellow"
              >
                Unite streamlined elegance and practical design to transform your kitchen into a hub for gathering, working, and entertaining.
              </motion.p>
            </div>
          </motion.div>

          {/* imgae slider */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={"flex justify-center items-center xl:pt-10 xl:mt-10 md:pt-10 mt-10"}
          >
            <motion.div variants={fadeIn("up", "tween", 0.05, 0.25)} className={`flex-1 ${styles.flexCenter}`}>
              <Swiper slidesPerView={1} modules={[Pagination, Navigation]} pagination={{ clickable: true }} className="w-[950px] h-[677px]" navigation>
                {kitchImageSlide.map((imageSlice, index) => (
                  <SwiperSlide key={index}>
                    <Image src={imageSlice.url} alt="bedroom" style={{ objectFit: "cover" }} fill />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        </div>

        <div className="xl:flex justify-center items-center xl:space-x-120 xl:mt-0 md:mt-20 pt-30">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={"xl:flex justify-center items-center relative xl:space-x-120 xl:mt-0 md:mt-20 pt-30"}
          >
            <motion.div variants={fadeIn("up", "tween", 0.05, 0.25)} className={`flex-1 ${styles.flexCenter}`}>
              <img src="living_Room.png" alt="bedroom" className="xl:w-[950px] xl:h-[677px] xl:mt-0 md:w-[350px] md:h-[177px] mt-20 pt-20 object-contain" />
            </motion.div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={"xl:flex xl:pt-80 md:justify-center items-center flex-col relative "}
          >
            <motion.div variants={planetVariants("right")} className={`flex-1 ${styles.flexCenter}`}>
              <img
                src="LOGO-living room.png"
                alt="LOGO_bedroom"
                className="xl:w-[152.5px] xl:h-[90.85px] xl:mt-0 md:w-[130.5px] h-[70.85px] mt-20 object-contain "
              />
            </motion.div>
            <div className="xl:w-[259px] xl:h-[510px] xl:pt-10 xl:mt-0 md:pt-10 md:mt-20">
              <TypingBrownText title="Elevate your" textStyles="xl:text-start xl:pl-0 md:text-center pl-18 mt-10" />
              <TypingBrownText title="living experience:" textStyles="xl:text-start xl:pl-0 md:text-center pl-18" />

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
