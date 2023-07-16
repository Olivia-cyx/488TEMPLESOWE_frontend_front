/* eslint-disable max-len */
"use client"

import { easeIn, motion } from "framer-motion"
import { IImageSlide } from "../interface/slider"
import { SetStateAction, useState } from "react"
import { fadeIn, staggerContainer } from "../utils/motion"
import styles from "../styles"
import Image from "next/image"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDot, RxDotFilled } from "react-icons/rx"

interface ImageSliderProps {
  imageSlice: IImageSlide[]
  isLifestyle?: boolean
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageSlice, isLifestyle }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? imageSlice.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === imageSlice.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (kitchImageSlideIndex: SetStateAction<number>) => {
    setCurrentIndex(kitchImageSlideIndex)
  }
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={"flex justify-center items-center pt-10"}
    >
      <motion.div variants={fadeIn("up", "tween", 0.05, 0.25)} className={`flex-1 ${styles.flexCenter}`}>
        <div className={`relative group ${isLifestyle ? "w-full h-screen" : "w-[950px] h-[677px]"}`}>
          <Image src={imageSlice[currentIndex].url} alt="bedroom" style={{ objectFit: `${isLifestyle ? "cover" : "contain"}` }} fill />

          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 transition-all duration-500 bg-black/20 text-white cursor-pointer"
            onClick={prevSlide}
          >
            <BsChevronCompactLeft size={30} />
          </div>

          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 transition-all duration-500  bg-black/20 text-white cursor-pointer"
            onClick={nextSlide}
          >
            <BsChevronCompactRight size={30} />
          </div>

          <div className={`flex justify-center py-2 ${isLifestyle ? "absolute top-[90%] right-[50%]" : "top-4"}`}>
            {imageSlice.map((_, slideIndex) => (
              <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer text-primary-yellow">
                {currentIndex === slideIndex ? <RxDotFilled /> : <RxDot />}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ImageSlider
