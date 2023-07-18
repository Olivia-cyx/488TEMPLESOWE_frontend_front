/* eslint-disable max-len */
"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import Image from "next/image"
import { lifeStyleImageSlide } from "../../constants/slider"
import { motion } from "framer-motion"
import { staggerContainer } from "../../utils/motion"

import "swiper/css"
import "swiper/css/pagination"

const LifeStylePage: React.FC = () => (
  <div className="bg-primary-yellow overflow-hidden h-screen">
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 1 }}>
      <Swiper slidesPerView={1} modules={[Pagination]} pagination={{ clickable: true }} className="w-full h-screen">
        {lifeStyleImageSlide.map((imageSlice, index) => (
          <SwiperSlide key={index}>
            <Image src={imageSlice.url} alt="lifestyle" style={{ objectFit: "cover" }} fill />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  </div>
)
export default LifeStylePage
