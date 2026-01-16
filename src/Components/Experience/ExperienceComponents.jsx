import React from "react";
import { FaAward, FaTrophy, FaCertificate, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaServer,
  FaLaptopCode,
  FaRegKeyboard,
} from "react-icons/fa";
import { MdComputer } from "react-icons/md";

// ======= Experience Data ======= //
const experiences = [
  {
    id: 1,
    role: "Frontend React Developer",
    company: "Creative IT Institute",
    duration: "2024",
    description:
      "Developed responsive and modern user interfaces using React, Tailwind CSS, and Framer Motion with strong UI/UX focus.",
    icon: <FaReact className="text-cyan-400 text-5xl" />,
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "Creative IT Institute",
    duration: "2025 – Present",
    description:
      "Built scalable backend APIs using Node.js and Express. Worked with MongoDB, Firebase authentication, and JWT.",
    icon: <FaNodeJs className="text-green-400 text-5xl" />,
  },
  {
    id: 3,
    role: "Full Stack Web Developer",
    company: "Creative IT Institute",
    duration: "2025",
    description:
      "Created full-stack applications with React, Node.js, and MongoDB focusing on real-time features and API integration.",
    icon: <FaServer className="text-purple-400 text-5xl" />,
  },
  {
    id: 4,
    role: "Web Designer",
    company: "Creative IT Institute",
    duration: "2023 – 2024",
    description:
      "Designed responsive websites using HTML, CSS, Bootstrap, and modern layout principles.",
    icon: <FaLaptopCode className="text-yellow-400 text-5xl" />,
  },
  {
    id: 5,
    role: "Data Entry Operator",
    company: "Habiganj IT Institute",
    duration: "2023 – 2024",
    description:
      "Handled data entry tasks with accuracy using various office and productivity tools.",
    icon: <FaRegKeyboard className="text-orange-400 text-5xl" />,
  },
  {
    id: 6,
    role: "Computer Operator",
    company: "Habiganj IT Institute",
    duration: "2023",
    description:
      "Experienced in MS Office, email handling, printing, scanning, troubleshooting, and office operations.",
    icon: <MdComputer className="text-pink-400 text-5xl" />,
  },
];

// ========== Achievements Data ========== //
 const achievements = [
  {
    id: 1,
    title: "Full Stack Web Developer Certification",
    organization: "Creative IT Institute",
    year: "2025",
    description:
      "Certified for mastering full stack development with React, Node.js, Express, and MongoDB.",
    icon: <FaCertificate className="text-yellow-400 text-5xl" />,
  },
  {
    id: 2,
    title: "Best Frontend Developer",
    organization: "Creative IT Institute",
    year: "2024",
    description:
      "Recognized for building responsive, animated, and high-performance React user interfaces.",
    icon: <FaTrophy className="text-amber-400 text-5xl" />,
  },
  {
    id: 3,
    title: "Outstanding Project — Orebi Ecommerce",
    organization: "Personal Project",
    year: "2024",
    description:
      "Developed a complete ecommerce platform with Redux, pagination, and real-time data handling.",
    icon: <FaAward className="text-cyan-400 text-5xl" />,
  },
  {
    id: 4,
    title: "UI / UX Design Excellence",
    organization: "Figma Workshop",
    year: "2024",
    description:
      "Awarded for translating Figma designs into pixel-perfect, responsive web layouts.",
    icon: <FaCode className="text-pink-400 text-5xl" />,
  },
 ];

// ========== Experience Component ========== //
const ExperienceComponents = () => {
  return (
    <>
    <section id="experience" className="scroll-mt-24 relative bg-[#020617] py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-14">
          My <span className="text-cyan-400">Experience..!</span>
        </motion.h2>

        {/* Experience Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-[#020617]/80 p-8 rounded-2xl border shadow-lg hover:shadow-cyan-500/20 
              hover:border-cyan-400 transition-all duration-500">
              {/* Icon */}
              <div className="flex justify-center mb-5">
                {exp.icon}
              </div>

              {/* Role */}
              <h3 className="text-xl font-semibold text-white mb-1">
                {exp.role}
              </h3>

              <p className="text-cyan-400 font-medium">
                {exp.company}
              </p>

              <p className="text-gray-400 text-sm mb-4">
                {exp.duration}
              </p>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
       <section id="achievements" className="relative bg-[#020617] py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-14">
          My <span className="text-cyan-400">Achievements..!</span>
        </motion.h2>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-[#020617]/80 rounded-2xl border border-gray-700 
              p-8 backdrop-blur-md shadow-lg 
              hover:border-cyan-400 hover:shadow-cyan-500/20 
              transition-all duration-500 hover:scale-[1.03]">
              {/* Icon */}
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>

              {/* Organization & Year */}
              <p className="text-cyan-400 font-medium text-sm">
                {item.organization}
              </p>
              <p className="text-gray-400 text-xs mb-4">
                {item.year}
              </p>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
 };

 export default ExperienceComponents;


 

