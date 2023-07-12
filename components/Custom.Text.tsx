"use client"

import { motion } from "framer-motion"
import { textContainer, textVariant2 } from "../utils/motion"
import React from "react"

type TypingTextProps = {
  title: string
  textStyles?: string
}

export const TypingText: React.FC<TypingTextProps> = ({ title, textStyles = "" }) => (
  <motion.p variants={textContainer} className={`font-normal text-[24px] text-secondary-white ${textStyles}`}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
)
export const TypingBrownText: React.FC<TypingTextProps> = ({ title, textStyles = "" }) => {
  const splitTitle = title.split("\n")

  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[24px] text-primary-yellow ${textStyles} w-[200px] overflow-wrap: break-word white-space: normal`}
    >
      {splitTitle.map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {Array.from(line).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
          {lineIndex < splitTitle.length - 1 && <br />}
        </React.Fragment>
      ))}
    </motion.p>
  )
}
