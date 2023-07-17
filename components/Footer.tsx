"use client"

import React, { useRef, useState } from "react"
import styles from "../styles"
import { motion } from "framer-motion"
import { navVariants } from "../utils/motion"
import { ENavBarTab } from "../constants/navbar"
import Link from "next/link"
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser"
import result from "postcss/lib/result"

export const Footer: React.FC = () => {
  const [contactPreference, setContactPreference] = useState("email")
  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) {
      return
    }

    emailjs.sendForm("service_aor02cq", "template_ls2cy1c", form.current, "yVK2H00hsAXvJ1BB7").then(
      (result: EmailJSResponseStatus) => {
        console.log(result.text)
      },
      (error: Error) => {
        console.log(error.message)
      }
    )

    if (form.current) {
      form.current.reset()
    }
  }
  return (
    <div className={`bg-primary-yellow overflow-hidden ${styles.height1200}`}>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="lineBefore Freight Big Pro text-[48px]" style={{ color: "#DCD5C6", fontWeight: "lighter" }}>
          Get in touch with us!
        </h1>
        <div className="mt-10">
          <img src="Group 122.png" alt="picture" />
        </div>
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <input
              type="text"
              id="user_name"
              // eslint-disable-next-line max-len
              className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-10"
              placeholder="Your Name*"
              name="user_name"
              required
              style={{ width: "541px", backgroundColor: "#776D65" }}
            />
            <input
              type="email"
              id="email_address"
              // eslint-disable-next-line max-len
              className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-10"
              placeholder="Your Email Address*"
              name="email_address"
              required
              style={{ width: "541px", backgroundColor: "#776D65" }}
            />
            <input
              type="tel"
              id="mobile_number"
              // eslint-disable-next-line max-len
              className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-10"
              placeholder="Mobile number *"
              name="mobile_number"
              required
              style={{ width: "541px", backgroundColor: "#776D65" }}
            />
            <div className="flex flex-col items-start mt-10">
              <p className="mt-2" style={{ color: "#DCD5C6" }}>
                Best Contact Method :
              </p>
              <div className="flex items-start">
                <input
                  id="contact-via-email"
                  type="radio"
                  value="email"
                  name="contact_method"
                  className="w-4 h-4 custom-radio dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="contact-via-email" className="ml-2 text-sm font-medium custom-label">
                  Email
                </label>
              </div>
              <div className="flex items-start mt-3">
                <input
                  id="contact-via-sms"
                  type="radio"
                  value="sms"
                  name="contact_method"
                  className="w-4 h-4 custom-radio dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="contact-via-sms" className="ml-2 text-sm font-medium custom-label">
                  SMS
                </label>
              </div>
              <div className="flex items-start mt-3">
                <input
                  id="contact-via-phone"
                  type="radio"
                  value="phone"
                  name="contact_method"
                  className="w-4 h-4 custom-radio dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="contact-via-phone" className="ml-2 text-sm font-medium custom-label">
                  Phone
                </label>
              </div>
            </div>
            <textarea
              id="message"
              // eslint-disable-next-line max-len
              className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-10"
              placeholder="Message (Optional)"
              name="message"
              style={{ width: "541px", height: "174px", backgroundColor: "#776D65" }}
            />
            <div className="container flex justify-center items-center">
              {" "}
              <button type="submit" className="bg-[#DCD5C6] hover:bg-hover-gray transition-colors duration-400 ease-in py-2 px-6 rounded mt-10">
                <h2 className="Freight Big Pro text-[21px]" style={{ color: "#544E48" }}>
                  ENQUIRE
                </h2>
              </button>
            </div>
          </div>
        </form>
        <div className="mt-10" style={{ width: "516px" }}>
          <p style={{ color: "#DCD5C6" }}>
            We are open by private appointment only.
            <br /> As per the new regulation, we are practicing safe social distancing guidelines including observing a distance of 1.5m between people,
            registering your attendance, using hand sanitisejjr upon entry and limiting 1 household per appointment. Enquire now to book an inspection.
          </p>
          <hr />
          <p style={{ color: "#DCD5C6" }}>Enquire now to book an inspection</p>
        </div>
        <div className="flex justify-center items-center mt-3 space-x-3">
          <img src="Group 116.png" alt="facebook" />
          <img src="Group 120.png" alt="twitter" />
          <img src="Group 121.png" alt="instagram" />
        </div>
      </div>
    </div>
  )
}