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

          {/* imgae slider */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={"flex justify-center items-center pt-10"}
          >
            <motion.div variants={fadeIn("up", "tween", 0.05, 0.25)} className={`flex-1 ${styles.flexCenter}`}>
              <Swiper slidesPerView={1} modules={[Pagination, Navigation]} pagination={{ clickable: true }} className="w-[950px] h-[677px] " navigation>
                {kitchImageSlide.map((imageSlice, index) => (
                  <SwiperSlide key={index}>
                    <Image src={imageSlice.url} alt="bedroom" style={{ objectFit: "cover" }} fill />
                  </SwiperSlide>
                ))}
              </Swiper>
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
              <img src="living_Room.png" alt="bedroom" className="w-[950px] h-[677px] object-contain" />
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
