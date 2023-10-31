"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionDevider = () => {
  return (
    <motion.div
      className="bg-gray-300 my-24 h-0.5 w-24 rounded-full hidden sm:block "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
};

export default SectionDevider;
