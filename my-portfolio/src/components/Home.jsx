// src/pages/Home.jsx
import React from "react";
import {motion} from 'framer-motion'

const {div:Divmotion,h2:H2motion,h3:H3motion,p:Pmotion}=motion 

export default function Home() {
  return (
   <div id='home' className="flex flex-col items-center h-5/6 sm:min-h-screen text-center p-6 bg-slate-950 ">

  {/* Avatar Circle with initials */}
  <Divmotion  initial={{ y: 20, opacity: 0 }}         
        whileInView={{ y: 0, opacity: 1 }}     
        transition={{ duration: 0.8}}
          viewport={{ once: false, amount: 0.3 }}  className="mt-10 w-23 h-23 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center rounded-full 
      bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 
      text-white text-3xl sm:text-5xl md:text-6xl font-bold shadow-lg">
    AD
  </Divmotion>

  {/* Name */}
  <H2motion  initial={{ y: 20, opacity: 0 }}         
        whileInView={{ y: 0, opacity: 1 }}     
        transition={{ duration: 0.8}}
          viewport={{ once: false, amount: 0.3 }}  className="mt-3 text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 
      bg-gradient-to-r from-amber-200 via-amber-300 to-amber-600 
      bg-clip-text text-transparent">
    Afham Dunnur
  </H2motion >

  {/* Subtitle */}
  <H3motion  initial={{ y: 20, opacity: 0 }}         
        whileInView={{ y: 0, opacity: 1 }}     
        transition={{ duration: 0.8}}
          viewport={{ once: false, amount: 0.3 }}  className="text-lg sm:text-2xl font-normal text-gray-400 mt-4">
    Web Developer & Designer
  </H3motion >

  {/* Small description */}
  <Pmotion initial={{ y: 20, opacity: 0 }}         
        whileInView={{ y: 0, opacity: 1 }}     
        transition={{ duration: 0.8}}
          viewport={{ once: false, amount: 0.3 }}  className="text-gray-400 max-w-lg sm:max-w-2xl text-xs sm:text-lg mt-5 px-2">
    Hi, I’m Afham Dunnur. A passionate developer exploring frontend and backend technologies. 
    Let’s build something amazing together!
  </Pmotion>

  {/* Buttons */}
  <div className="mt-10 flex flex-row sm:flex-row gap-4 w-auto sm:w-auto px-1 sm:px4">
    <button onClick={()=>document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}
      className="w-auto sm:w-auto px-6  py-3 sm:py-0 rounded-2xl bg-amber-600 text-xs sm:text-base text-slate-900 font-semibold shadow hover:bg-amber-700 transition"
    >
      About Me
    </button >
    <button onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
      className="w-auto sm:w-auto px-6 py-3 rounded-2xl bg-gray-200 text-xs sm:text-base text-slate-900 font-semibold shadow hover:bg-gray-300 transition"
    >
      Get in touch
    </button >
  </div>
</div>

  );
}
