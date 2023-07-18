"use client"

import styles from "../../styles"
import { motion } from "framer-motion"
import { staggerContainer } from "../../utils/motion"

type ImageProps = {
  alt: string
  src: string
  size: "full" | "half"
}
const Image: React.FC<ImageProps> = ({ src, alt, size }) => {
  const widthClass = size === "full" ? "w-full" : "w-1/2"

  return (
    <div className={`${widthClass} p-1 md:p-2`}>
      <img alt={alt} className="block h-full w-full object-cover object-center" src={src} />
    </div>
  )
}

const GalleryPage: React.FC = () => (
  <div className={` bg-primary-yellow overflow-hidden ${styles.height2300}`}>
    <div className={"teamcoverPage"}>
      <div className="mt-38 pt-20 flex justify-center items-center">
        <img src="/Logo/488 gallery.png" alt="logo" className="w-[196px] h-[251px] object-center mb-auto" />
      </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 ">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div>
            <Image src="Building front_ed.png" alt="gallery" size="full" />
          </div>
          <div className="flex w-1/2 flex-wrap">
            <Image src="kitchen.png" alt="gallery" size="half" />
            <Image src="Bathroom image.png" alt="gallery" size="half" />
            <Image src="bar_upstairs.png" alt="gallery" size="full" />
          </div>
          <div className="flex w-1/2 flex-wrap">
            <Image src="living_Room.png" alt="gallery" size="full" />
            <Image src="Mask Group 6.png" alt="gallery" size="half" />
            <Image src="Mask Group 13.png" alt="gallery" size="half" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default GalleryPage
