import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaTrophy, FaCertificate, FaCode } from "react-icons/fa";

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

 // ========== Achievements Component ========== //
 const AchievementsComponents = () => {
  return (
    <>
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

 export default AchievementsComponents;
