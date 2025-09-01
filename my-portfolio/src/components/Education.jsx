import React from "react";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import {motion} from 'framer-motion'

const educationData = [
  {
    degree: "B.Tech (Mechanical Engineering)",
    college: "Vellore Institute of Technology (VIT), Vellore",
    years: "2018 - 2022",
    cgpa: "8.12",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    college: "GHSS Thirurkard, Malappuram",
    years: "2015 - 2017",
    cgpa: "92%",
  },
  {
    degree: "Secondary School (10th Grade)",
    college: "Markazul Uloom Public School, Malappuram",
    years: "2014",
    cgpa: "10",
  },
];
const {h2:H2motion,p:Pmotion,div:DivMotion}=motion

export default function Education() {
  return (
    <section id="education" className="py-18 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4">
        <H2motion initial={{y:30,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{duration:0.8}}
                  viewport={{once:false,amount:0.3}} className="text-3xl sm:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-600 bg-clip-text text-transparent relative
    after:content-[''] after:block after:w-24 after:h-1 after:mx-auto after:mt-3
    after:bg-gradient-to-r after:from-amber-200 after:via-amber-400 after:to-amber-600 
    after:rounded-full">Education</H2motion>
        <Pmotion initial={{y:30,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{duration:0.8}}
                  viewport={{once:false,amount:0.3}} className="text-center text-gray-400  text-sm sm:textbase mt-3 mb-9">
          My academic journey and educational achievements that built the foundation for my career.
        </Pmotion>

        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <DivMotion initial={{x:-90,opacity:0}}
                  whileInView={{x:0,opacity:1}}
                  transition={{duration:0.3,ease:'easeIn'}}
                  viewport={{once:false,amount:0.4}}
              key={idx}
              className="bg-slate-900 border border-gray-700 shadow-md rounded-2xl p-6  transition-transform duration-300 hover:scale-103 hover:shadow-md hover:shadow-amber-500"
            >
              {/* FIRST ROW: degree left, CGPA right */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="hidden sm:inline text-blue-600 w-6 h-6" />
                  <h3 className="text-sm ms:text-lg font-semibold text-gray-300">
                    {edu.degree}
                  </h3>
                </div>

                <div>
                  <span className="px-1 sm:px-4 py-1 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 opacity-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">


  {/* sm and above: show "CGPA: ..." */}
  <span >CGPA: {edu.cgpa}</span>
</span>
                </div>
              </div>

              {/* SECOND ROW: college left (with pin), years right (with calendar) */}
              <div className="flex items-center justify-between mt-3 text-gray-600 text-xs">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="hidden sm:inline w-4 h-4 text-gray-300" />
                  <span className="text-gray-400">{edu.college}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaCalendarAlt className=" hidden sm:inline w-4 h-4 text-gray-300" />
                  <span className="text-gray-400">{edu.years}</span>
                </div>
              </div>
            </DivMotion>
          ))}
        </div>
      </div>
    </section>
  );
}
