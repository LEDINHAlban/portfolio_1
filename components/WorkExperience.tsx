"use client";

import CardExperience from "./CardExperience";
import React from "react";
import { motion } from "motion/react";

function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen grayBackground"
    >
      <div className="flex justify-center items-center">
        <h2 className="pageTitle mt-12">Experience</h2>
      </div>

      {/* list of cards */}
      <div className="w-full flex space-x-4 h-5/6 overflow-x-scroll p-10 snap-x snap-mandatory">
        <CardExperience />
        <CardExperience />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
