import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiAngular ,SiTypescript} from "react-icons/si";
import {motion} from 'framer-motion' 

const {h1:H1vmotion,div:Bar}=motion

const skills = [
  { name: "React", level: 85, icon: <FaReact size={40} className="text-amber-500" /> },
  { name: "Angular", level: 85, icon: <SiAngular size={40} className="text-amber-500" /> },
  { name: "MongoDB", level: 70, icon: <SiMongodb size={40} className="text-amber-500" /> },
  { name: "Node.js", level: 80, icon: <FaNodeJs size={40} className="text-amber-500" /> },
  { name: "Express", level: 85, icon: <SiExpress size={40} className="text-amber-500" /> },
  { name: "TypeScript", level: 70, icon: <SiTypescript size={40} className="text-amber-600" /> },
];

export default function Skill() {
  return (
    <div id="skill" className="min-h-screen bg-slate-950 flex flex-col items-center mt-0 py-12 px-4">
      <H1vmotion initial={{y:10,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{duration:0.8}}
                  viewport={{once:false,amount:0.3}} 
      className="text-xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-600 bg-clip-text text-transparent relative
    after:content-[''] after:block after:w-35 after:h-1 after:mx-auto after:mt-3
    after:bg-gradient-to-r after:from-amber-200 after:via-amber-400 after:to-amber-600 
    after:rounded-full">Skills & Expertise</H1vmotion>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-slate-900 border border-gray-700 shadow-md rounded-2xl p-6 flex flex-col items-center text-center 
             transform transition-transform duration-300 hover:scale-105 hover:shadow-md hover:shadow-amber-300"
          >
            {skill.icon}
            <h2 className="text-lg font-semibold mt-4">{skill.name}</h2>

            {/* Progress Bar */}
            <div className="w-full bg-slate-700 rounded-full h-3 mt-4">
              <Bar   initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: .7, ease: "easeIn" }}
                viewport={{ once: false, amount: 0.3}}
                className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-600  h-3 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></Bar>
            </div>
            <p className="mt-2 text-gray-400">{skill.level}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
