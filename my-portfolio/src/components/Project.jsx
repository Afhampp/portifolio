import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const {section:MotionSection}=motion


export default function ProjectCard() {
  let projectsdata = [
    {
      img: "/tonmoy-iftekhar-dS6uNF4pWoE-unsplash.jpg",
      title: "E-Commerce Platform",
      feature1: "Secure login, auth, and Razorpay payment integration.",
      feature2: "Product listing with category sorting and search.",
      feature3: "Admin panel for managing products, coupons, and returns.",
      skills: ["Node.js", "Express.js", "Mongodb",'Razorpay'],
      github:'https://github.com/Afhampp/frontend-managment.git',
      live:'https://watchsecommerce.onrender.com/'
    },
       {
      img: "https://i.pinimg.com/originals/7c/b7/1c/7cb71c8af071a19e2622ebd0fad81caa.png",
      title: "College Management System",
      feature1: "Real-time teacher–student communication with Socket.IO.",
      feature2: "Role-based access for admins, teachers, and students.",
      feature3: "Dashboards to track attendance and assignments.",
      skills: ['Angular',"Node.js", "Express.js", "Mongodb",'Socket.io'],
      github:'https://github.com/Afhampp/ecommerce.git',
      live:'https://frontend-managment.vercel.app/'
    },
  ];
  return (
    <section id='project' className="space-y-10 p-6 bg-slate-950">
      {/* Section Title */}
      
      <MotionSection initial={{y:10,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{duration:0.8}}
                  viewport={{once:false,amount:0.3}} className="text-center">
        <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-600 bg-clip-text text-transparent relative
    after:content-[''] after:block after:w-25 after:h-1 after:mx-auto after:mt-3
    after:bg-gradient-to-r after:from-amber-200 after:via-amber-400 after:to-amber-600 
    after:rounded-full">My Projects</h2>
        <p className="text-gray-400 text-es sm:text-md">
          A showcase of my recent work, featuring modern web applications built
          with cutting-edge technologies.
        </p>
      </MotionSection >

      {/* Project Card */}
      {projectsdata.map((val, id) => (
        <MotionSection initial={{y:10,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{duration:0.8}}
                  viewport={{once:false,amount:0.3}}
          key={id}
          className="group w-full mx-auto bg-slate-900 border border-gray-700 rounded-2xl shadow-lg overflow-hidden  hover:shadow-[0_9px_9px_rgba(251,191,36,0.7)]  transition-shadow duration-75"
        >
          {/* Image */}
          <div className="overflow-hidden">
              <img
                src={val.img}
                alt={val.title}
                className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            <h3 className="text-md sm:text-xl font-semibold text-gray-300">{val.title}</h3>

            {/* 3 Points */}
            <ul className="list-disc list-inside text-gray-300 text-xs sm:text-sm space-y-1">
              <li>{val.feature1}</li>
              <li>{val.feature2}</li>
              <li>{val.feature3}</li>
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {val.skills.map((data, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-800 text-gray-300 text-xs rounded-full"
                >
                  {data}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex gap-3 px-4 pb-4">
            <a
              href={val.github}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-100  font-medium hover:bg-gray-300 rounded-xl"
            >
              <Github size={18} />
              Code
            </a>
            <a
              href={val.live}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-amber-400   font-medium hover:bg-amber-500 rounded-xl"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          </div>
        </MotionSection>
      ))}
    </section>
  );
}
