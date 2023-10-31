"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3 font-serif">
        After graduating with a degree in{" "}
        <span className="font-medium ">Electronics & Telecommunications</span>,
        I joined manufacturing company Funskool(India)pvt. ltd. as a{" "}
        <span className="italic font-semibold">Electronics Engineer</span> but
        after working for 1.5 year, i decided to pursue my passion for
        programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>. But i
        have focused more towards{" "}
        <span className="italic font-semibold">Frontend developement</span>{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-semibold">
          ReactJS, HTML, CSS, Redux, Router, Node.js(basics)
        </span>{" "}
        and CSS design frameworks like{" "}
        <span className="font-semibold">Tailwind CSS, Chakra UI, SASS</span>. I
        am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a full-time position as a{" "}
        <span className="font-semibold"> Frontend developer.</span>
      </p>

      <p className="font-serif">
        <span className="italic">When I'm not coding</span>, I enjoy Cooking
        food, watching movies, and painting. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">UI/UX Design</span>.
      </p>
    </motion.section>
  );
};

export default About;
