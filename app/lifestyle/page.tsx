/* eslint-disable max-len */
"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import Image from "next/image"
import { lifeStyleImageSlide } from "../../constants/slider"
import { motion } from "framer-motion"
import { staggerContainer } from "../../utils/motion"
import TextBox from "./components/TextBox"

import "swiper/css/navigation"
import "swiper/css"
import "swiper/css/pagination"

const LifeStylePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex)
  }

  const renderContent = () => {
    switch (currentSlide) {
      case 0:
        return <TextBox textStyles={lifeStyleImageSlide[0].style} content={lifeStyleImageSlide[0].text} />
      case 1:
        return <TextBox textStyles={lifeStyleImageSlide[1].style} content={lifeStyleImageSlide[1].text} />
      case 2:
        return <TextBox textStyles={lifeStyleImageSlide[2].style} content={lifeStyleImageSlide[2].text} />
      case 3:
        return <TextBox textStyles={lifeStyleImageSlide[3].style} content={lifeStyleImageSlide[3].text} />
      case 4:
        return <TextBox textStyles={lifeStyleImageSlide[4].style} content={lifeStyleImageSlide[4].text} />
      case 5:
        return <TextBox textStyles={lifeStyleImageSlide[5].style} content={lifeStyleImageSlide[5].text} />
    }
  }

  return (
    <div className="bg-primary-yellow overflow-hidden h-screen">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 1 }} className="relative">
        <Swiper
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          navigation
          pagination={{ clickable: true }}
          grabCursor={true}
          className="w-full h-screen relative"
          onSlideChange={handleSlideChange}
        >
          <div className="absolute top-[5%] left-[50%] max-w-[20%] min-w-[15%]">
            <img src="Titlepage logo.png" alt="bedroom" className="max-w-[100%]  object-contain ml-[-50%]" />
          </div>
          {renderContent()}
          {lifeStyleImageSlide.map((imageSlice, index) => {
            return (
              <SwiperSlide key={index}>
                <Image src={imageSlice.url} alt="lifestyle" style={{ objectFit: "cover", opacity: "60%" }} fill />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </motion.div>
    </div>
  )
}

export default LifeStylePage
