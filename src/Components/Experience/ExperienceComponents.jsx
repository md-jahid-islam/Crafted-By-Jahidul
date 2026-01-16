import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaServer, FaLaptopCode, FaRegKeyboard, FaAward, FaTrophy, FaCertificate, FaCode, } from "react-icons/fa";
 import { MdComputer } from "react-icons/md";

 /* ================= EXPERIENCE DATA ================= */
 const experiences = [
  {
    role: "Frontend React Developer",
    company: "Creative IT Institute",
    duration: "2024",
    desc: "Built modern, animated and responsive UI using React, Tailwind CSS and Framer Motion.",
    icon: <FaReact className="text-cyan-400 text-4xl" />,
  },
  {
    role: "Backend Developer",
    company: "Creative IT Institute",
    duration: "2025 – Present",
    desc: "Developed scalable APIs using Node.js, Express, MongoDB, Firebase Auth and JWT.",
    icon: <FaNodeJs className="text-green-400 text-4xl" />,
  },
  {
    role: "Full Stack Web Developer",
    company: "Creative IT Institute",
    duration: "2025",
    desc: "Delivered full-stack applications with React, Node.js and MongoDB focusing on performance.",
    icon: <FaServer className="text-purple-400 text-4xl" />,
  },
  {
    role: "Web Designer",
    company: "Creative IT Institute",
    duration: "2023 – 2024",
    desc: "Designed clean, responsive layouts using HTML, CSS, Bootstrap and Figma.",
    icon: <FaLaptopCode className="text-yellow-400 text-4xl" />,
  },
  {
    role: "Data Entry Operator",
    company: "Habiganj IT Institute",
    duration: "2023 – 2024",
    desc: "Maintained accurate data handling using office & productivity tools.",
    icon: <FaRegKeyboard className="text-orange-400 text-4xl" />,
  },
  {
    role: "Computer Operator",
    company: "Habiganj IT Institute",
    duration: "2023",
    desc: "Handled office operations, troubleshooting, scanning, printing and documentation.",
    icon: <MdComputer className="text-pink-400 text-4xl" />,
  },
 ];

 /* ================= ACHIEVEMENTS DATA ================= */
 const achievements = [
  {
    title: "Full Stack Web Developer Certification",
    org: "Creative IT Institute",
    year: "2025",
    desc: "Certified in React, Node.js, Express and MongoDB full-stack development.",
    icon: <FaCertificate className="text-yellow-400 text-4xl" />,
  },
  {
    title: "Best Frontend Developer",
    org: "Creative IT Institute",
    year: "2024",
    desc: "Awarded for building high-performance, animated React interfaces.",
    icon: <FaTrophy className="text-amber-400 text-4xl" />,
  },
  {
    title: "Orebi Ecommerce Project",
    org: "Personal Project",
    year: "2024",
    desc: "Complete ecommerce platform using Redux, pagination and real-time features.",
    icon: <FaAward className="text-cyan-400 text-4xl" />,
  },
  {
    title: "UI / UX Design Excellence",
    org: "Figma Workshop",
    year: "2024",
    desc: "Recognized for pixel-perfect conversion from Figma to responsive UI.",
    icon: <FaCode className="text-pink-400 text-4xl" />,
  },
 ];

 /* ================= COMPONENT ================= */
 const ExperienceComponents = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <>
    <section id="experience" className="relative bg-[#020617] py-24 px-6 md:px-16 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Experience & <span className="text-cyan-400">Achievements</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            My professional journey, hands-on experience and recognitions that
            reflect my growth and skills.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-14">
          {["experience", "achievements"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                activeTab === tab
                  ? "bg-cyan-500 text-black"
                  : "border border-gray-700 text-gray-300 hover:border-cyan-400"
              }`}>

              {tab === "experience" ? "Experience" : "Achievements"}
            </button>
          ))}
        </div>

        {/* Experience */}
        {activeTab === "experience" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {experiences.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-[#020617]/80 p-8 rounded-2xl border border-gray-700
                hover:border-cyan-400 hover:shadow-cyan-500/20 transition">

                <div className="mb-5 flex">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white">
                  {item.role}
                </h3>
                <p className="text-cyan-400 text-sm">{item.company}</p>
                <p className="text-gray-400 text-xs mb-4">
                  {item.duration}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Achievements */}
        {activeTab === "achievements" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-[#020617]/80 p-8 rounded-2xl border border-gray-700
                hover:border-cyan-400 hover:shadow-cyan-500/20 transition">

                <div className="mb-5 flex">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-cyan-400 text-sm">{item.org}</p>
                <p className="text-gray-400 text-xs mb-4">{item.year}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
    </>
  );
 };

 export default ExperienceComponents;

