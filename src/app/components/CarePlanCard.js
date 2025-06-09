"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { carePlanData } from "@/data/data";

export default function CarePlanCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction,
    }),
    show: (direction) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 16,
      },
    }),
  };

  return (
   <div
  ref={ref}
  className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center py-20 px-8 md:px-24 gap-16 md:gap-32"
  style={{
    background: "linear-gradient(to right, #fff7ed, #fdfaf7)",
  }}
>


      {/* Left Side - Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-[40px] p-10 md:p-14 shadow-2xl w-full md:w-[800px] space-y-8"
      >
        {carePlanData.map((item, index) => {
          const direction = index % 2 === 0 ? -100 : 100;
          return (
            <motion.div
  key={index}
  custom={direction}
  variants={cardVariants}
  initial="hidden"
  animate={isInView ? "show" : "hidden"}
  className={`flex items-center space-x-6 p-7 bg-white rounded-2xl shadow-lg
    transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl
    max-w-[700px] 
    ${index % 2 === 0 ? "mr-auto -translate-x-2" : "ml-auto translate-x-2"}`}
>
  <span className={`text-5xl ${item.color}`}>{item.icon}</span>
  <div>
    <h4 className="font-semibold text-gray-800 text-4xl mb-2">
      {item.title}
    </h4>
    <p className="text-2xl text-gray-500 leading-relaxed">
      {item.description}
    </p>
  </div>
</motion.div>

          );
        })}
      </motion.div>

      {/* Right Side - Static Text */}
      <div className="mt-10 md:mt-0 text-left max-w-2xl">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
          Improved adherence to your <br /> preventive care plan
        </h2>
        <div className="mt-12 space-y-10 text-gray-700 text-xl">
          {[1, 2].map((num, i) => (
            <div className="flex" key={i}>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md font-bold mr-6 text-2xl">
                {num}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-2xl mb-1">
                  {num === 1
                    ? "Effortlessly Fits Your Evolving Life"
                    : "Seamless Routine Integration"}
                </p>
                <p className="text-[20px] leading-relaxed">
                  {num === 1
                    ? "Seamlessly adjusts your plan to your daily needs while keeping you on track."
                    : "Aligns with your priorities without disrupting what matters most."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
