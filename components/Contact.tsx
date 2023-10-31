"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="pranjalipongde9@gmail.com">
          pranjalipongde9@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          console.log("running server on client");
          console.log(formData.get("senderEmail"));
          console.log(formData.get("message"));

          await sendEmail(formData);
        }}
      >
        <input
          className="h-14 px-4 rounded-lg  borderBlack"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-4 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your Message"
          required
          maxLength={700}
        />
        <button
          className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 translate-all group-hover:traslate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
      <p className="text-white text-lg">
        Portfolio is in working so contact senction may not work for now. You
        can contact me through given email.
      </p>
    </motion.section>
  );
};

export default Contact;
