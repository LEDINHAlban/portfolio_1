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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-8 mt-8 max-w-7xl mx-auto p-8">
        <CardExperience />
        <CardExperience />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
