/* eslint-disable max-len */
"use client"

import { kitchImageSlide } from "../../constants/slider"

import ImageSlider from "../../components/ImageSlider"

const LifeStylePage: React.FC = () => {
  return <ImageSlider imageSlice={kitchImageSlide} isLifestyle />
}
export default LifeStylePage
