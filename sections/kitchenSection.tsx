/* eslint-disable max-len */
"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import styles from "../styles"
import { motion } from "framer-motion"
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion"
import { TypingBrownText } from "../components/Custom.Text"
import { kitchImageSlide } from "../constants/slider"
import Image from "next/image"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function KitchenSection() {
  return (
    <>
      <section className={`${styles.paddings} flex justify-center items-center flex-col md:gap-48 sm:gap-40 gap-28`}>
        {/* first section */}
        <div className="flex justify-center items-center xl:gap-72 gap-16 xl:flex-row flex-col">
          {/* image */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex justify-center items-center"
          >
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className="relative">
              <img
                src="bar_upstairs.png"
                alt="bar_upstairs"
                className="object-cover 2xl:w-[950px] 2xl:h-[677px] xl:w-[650px] xl:h-[455px] lg:w-[800px] lg:h-[570px] md:w-[650px] md:h-[455px] sm:w-[500px] sm:h-[350px] w-full"
              />
              <div className="absolute sm:-top-14 sm:-left-14 -top-5 -left-5">
                <img
                  src="LUXE_Design.png"
                  alt="LUXE_Design"
                  className="2xl:w-[177px] 2xl:h-[238px] xl:w-[150px] xl:h-[200px] lg:w-[165px] lg:h-[220px] md:w-[150px] md:h-[200px] sm:w-[112.5px] sm:h-[150px] w-[60px] h-[80px] object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={"flex items-center flex-col xl:gap-10 gap-7"}
          >
            <motion.div variants={planetVariants("right")}>
              <img src="LOGO-bar upstairs.png" alt="LOGO" className="xl:h-[90.85px] md:h-[80px] h-[70.85px] object-contain" />
            </motion.div>

            <div className="xl:w-[259px] lg:w-[350px] md:w-[380px] sm:w-[259px] w-[225px] flex flex-col">
              <div className="flex xl:flex-col md:flex-row sm:flex-col flex-col items-start">
                <TypingBrownText
                  title="Harmonize living 
                "
                  textStyles="text-start"
                />
                <TypingBrownText
                  title="and productivity: 
                "
                  textStyles="text-start"
                />
              </div>

              <motion.p variants={fadeIn("up", "tween", 0.05, 0.25)} className="freightBigPro sm:text-[21px] text-[18px] text-start text-primary-yellow">
                Stunning appointments, harmonious mood lighting, and spacious design create captivating spaces.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* second section */}
        <div className="flex justify-center items-center xl:gap-72 gap-16 xl:flex-row flex-col-reverse">
          {/* text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={"flex items-center flex-col xl:gap-10 gap-7"}
          >
            <motion.div variants={planetVariants("left")}>
              <img src="LOGO-kitchen.png" alt="LOGO_kitchen" className="xl:h-[90.85px] md:h-[80px] h-[70.85px] object-contain" />
            </motion.div>

            <div className="xl:w-[259px] lg:w-[350px] md:w-[380px] sm:w-[259px] w-[225px]">
              <div className="flex flex-col items-start">
                <TypingBrownText
                  title="Embrace the art of
"
                  textStyles="text-start"
                />
                <TypingBrownText title="effortless hospitality:" textStyles="text-start" />
              </div>

              <motion.p variants={fadeIn("up", "tween", 0.05, 0.25)} className="freightBigPro sm:text-[21px] text-[18px] text-start text-primary-yellow">
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
            className={"flex justify-center items-center"}
          >
            <motion.div variants={fadeIn("up", "tween", 0.05, 0.25)}>
              <Swiper
                slidesPerView={1}
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                className="2xl:w-[950px] 2xl:h-[677px] xl:w-[650px] xl:h-[455px] lg:w-[800px] lg:h-[570px] md:w-[650px] md:h-[455px] sm:w-[500px] sm:h-[350px] w-[340px] h-[239px]"
                navigation
              >
                {kitchImageSlide.map((imageSlice, index) => (
                  <SwiperSlide key={index}>
                    <Image src={imageSlice.url} alt="kitchen" className="SpipwerImage" fill />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        </div>

        {/* third section */}
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
                src="living_Room.png"
                alt="living_Room"
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
              <img src="LOGO-living room.png" alt="LOGO_liveing_room" className="xl:h-[90.85px] md:h-[80px] h-[60px] object-contain" />
            </motion.div>

            <div className="xl:w-[259px] lg:w-[350px] md:w-[380px] sm:w-[259px] w-[225px] flex flex-col">
              <div className="flex flex-col items-start">
                <TypingBrownText title="Elevate your" textStyles="text-start" />
                <TypingBrownText title="living experience:" textStyles="text-start" />
              </div>

              <motion.p variants={fadeIn("up", "tween", 0.05, 0.25)} className="freightBigPro sm:text-[21px] text-[18px] text-start text-primary-yellow">
                Embrace an indoor-outdoor sanctuary, where glass stacker doors seamlessly unite with the living domain.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
