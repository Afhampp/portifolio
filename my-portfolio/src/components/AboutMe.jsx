import React from "react";
import { motion } from "framer-motion";

// Destructure motion components for cleaner usage
const { h2: MotionH2, img: MotionImg, p: MotionP } = motion;

export default function AboutMe() {
  return (
    <div id='about' className="w-full mx-auto px-6 bg-slate-950 pt-6 py-8 ">
      {/* Title */}
      <MotionH2
        initial={{ y: 20, opacity: 0 }}         // Start lower and invisible
        whileInView={{ y: 0, opacity: 1 }}      // Animate into place
        transition={{ duration: 0.8}}
          viewport={{ once: false, amount: 0.2 }}  
        className="text-3xl sm:text-5xl font-bold text-center mb-6 
          bg-gradient-to-r from-amber-200 via-amber-300 to-amber-600 
          bg-clip-text text-transparent relative
          after:content-[''] after:block after:w-24 after:h-1 after:mx-auto after:mt-3
          after:bg-gradient-to-r after:from-amber-200 after:via-amber-400 after:to-amber-600 
          after:rounded-full"
      >
        About Me
      </MotionH2>

      {/* Full-width image */}
      <MotionImg
        src="/pexels-moh-adbelghaffar-771742.jpg"
        alt="Profile"
        className="w-full h-66 object-cover rounded-2xl mt-16"
         initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: 'easeInOut' }}
         viewport={{ once: false, amount: 0.2 }}  
      />

      {/* Full-width paragraph */}
      <MotionP
        className="w-full text-xs sm:text-base text-gray-400 leading-relaxed mt-4 px-0 "
       initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4, ease: 'easeInOut' }}
          viewport={{ once: false, amount: 0.2 }}  // <-- changed
      >
        I am a full-stack web developer specializing in MERN and MEAN stacks,
        with experience building and maintaining applications using Angular,
        React, Node.js, and MongoDB.
        <br />
        <br />
        Currently, I am interning at EagleView as a React Developer,
        contributing to a large-scale migration project and enhancing frontend
        performance. I enjoy creating scalable, user-friendly solutions and have
        worked on projects such as an e-commerce platform and a college
        management system.
        <br />
        <br />
        I am passionate about solving problems, learning new technologies, and
        building impactful web applications.
      </MotionP>
    </div>
  );
}
