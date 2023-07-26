"use client"

import React, { useEffect, useRef, useState } from "react"
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser"

export const Footer: React.FC = () => {
  const serverId = process.env.NEXT_PUBLIC_SERVER_ID as string
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY

  if (!serverId || !templateId || !publicKey) {
    throw new Error("Environment variables not set")
  }

  const form = useRef<HTMLFormElement | null>(null)

  const [emailSent, setEmailSent] = useState(false)

  useEffect(() => {
    let timer: number | undefined
    if (emailSent) {
      timer = window.setTimeout(() => {
        setEmailSent(false)
      }, 20000) // time in milliseconds
    }

    // Cleanup function to clear the timeout when the component is unmounted or if the email is sent multiple times
    return () => clearTimeout(timer)
  }, [emailSent])

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) {
      return
    }

    emailjs.sendForm(serverId, templateId, form.current, publicKey).then(
      (result: EmailJSResponseStatus) => {
        console.log(result.text)
        setEmailSent(true)
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
    <div className="bg-primary-yellow h-full flex flex-col items-center sm:gap-8 gap-5 sm:py-20 py-10">
      {/* title */}
      <div className=" flex w-screen items-center sm:gap-10 gap-4 before:content-[''] before:flex-1 before:h-[2px] before:bg-secondary-white after:content-[''] after:flex-1 after:h-[2px] after:bg-secondary-white">
        <h1 className=" md:text-[48px] sm:text-[40px] text-[25px] text-secondary-white font-light">Get in touch with us!</h1>
      </div>
      {/* logo*/}
      <div>
        <img src="Group 122.png" alt="picture" className="sm:h-auto h-[40px]" />
      </div>
      {/* form */}
      <form ref={form} className="flex flex-col items-start sm:gap-10 gap-6 sm:min-w-[550px] min-w-[350px]" onSubmit={sendEmail}>
        {/* name */}
        <input
          type="text"
          id="user_name"
          className="w-full text-sm rounded-lg focus:ring-secondary-white focus:border-secondary-white p-2.5 placeholder:text-secondary-white bg-input-gray"
          placeholder="Your Name*"
          name="user_name"
          required
        />
        {/* email */}
        <input
          type="email"
          id="email_address"
          className="w-full bg-input-gray text-sm rounded-lg focus:ring-secondary-white focus:border-secondary-white p-2.5 placeholder:text-secondary-white"
          placeholder="Your Email Address*"
          name="email_address"
          required
        />
        {/* mobile number */}
        <input
          type="tel"
          id="mobile_number"
          className="w-full bg-input-gray text-sm rounded-lg focus:ring-secondary-white focus:border-secondary-white block p-2.5 placeholder:text-secondary-white"
          placeholder="Mobile number *"
          name="mobile_number"
          required
        />
        {/* radio buttons */}
        <div className="flex flex-col items-start gap-2">
          <div>
            <p className="text-secondary-white">Best Contact Method :</p>
          </div>

          <div className="flex items-center">
            <input id="contact-via-email" type="radio" value="email" name="contact_method" className="w-4 h-4 custom-radio" />
            <label htmlFor="contact-via-email" className="ml-2 text-sm font-medium text-secondary-white">
              Email
            </label>
          </div>
          <div className="flex items-center">
            <input id="contact-via-sms" type="radio" value="sms" name="contact_method" className="w-4 h-4 custom-radio" />
            <label htmlFor="contact-via-sms" className="ml-2 text-sm font-medium text-secondary-white ">
              SMS
            </label>
          </div>
          <div className="flex items-center">
            <input id="contact-via-phone" type="radio" value="phone" name="contact_method" className="w-4 h-4 custom-radio" />
            <label htmlFor="contact-via-phone" className="ml-2 text-sm font-medium text-secondary-white">
              Phone
            </label>
          </div>
        </div>

        {/* message */}
        <textarea
          id="message"
          className="w-full h-[100px] bg-input-gray text-sm rounded-lg focus:ring-secondary-white focus:border-secondary-white block p-2.5 placeholder:text-secondary-white"
          placeholder="Message (Optional)"
          name="message"
        />

        {/* email sent */}

        {emailSent && (
          <div className="mb-4 rounded-lg bg-primary-100 px-6 py-5 text-base text-primary-600" role="alert">
            <h2 className="Freight Big Pro text-[21px] text-secondary-white"> Enquiry has been sent successfully! </h2>
          </div>
        )}

        {/* submit button */}
        <div className="container flex justify-center">
          <button type="submit" className="bg-secondary-white hover:bg-hover-gray transition-colors duration-400 ease-in py-2 px-6 rounded">
            <h2 className="Freight Big Pro xl:text-[21px] text-primary-yellow">ENQUIRE</h2>
          </button>
        </div>
      </form>
      {/* text */}
      <div className="sm:w-[516px] w-[350px]">
        <p className="sm:text-[21px] text-[15px] text-secondary-white">
          We are open by private appointment only.
          <br /> As per the new regulation, we are practicing safe social distancing guidelines including observing a distance of 1.5m between people,
          registering your attendance, using hand sanitisejjr upon entry and limiting 1 household per appointment.
        </p>
        <hr className="my-1" />
        <p className="text-secondary-white">Enquire now to book an inspection</p>
      </div>
      {/* social media */}
      <div className="flex gap-3">
        <img src="Group 116.png" alt="facebook" />
        <img src="Group 120.png" alt="twitter" />
        <img src="Group 121.png" alt="instagram" />
      </div>
    </div>
  )
}
