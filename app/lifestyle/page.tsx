/* eslint-disable max-len */
"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
// Import Swiper styles
import Image from "next/image"
import { kitchImageSlide } from "../../constants/slider"

import "swiper/css"
import "swiper/css/pagination"

const LifeStylePage: React.FC = () => {
  return (
    <Swiper slidesPerView={1} modules={[Pagination]} pagination={{ clickable: true }}>
      {kitchImageSlide.map((imageSlice, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-screen">
            <Image src={imageSlice.url} alt="bedroom" style={{ objectFit: "cover" }} fill />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default LifeStylePage
