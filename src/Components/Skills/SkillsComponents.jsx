import React, { useState } from "react";
import { motion } from "framer-motion";
 import { FaReact,  FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaServer, FaLaptopCode, FaRegKeyboard, FaCertificate, FaTrophy, FaAward, FaCode, } from "react-icons/fa";
 import { SiJavascript,  SiTailwindcss, SiFirebase, SiMongodb, SiFigma, SiRedux, SiMongoose,  SiSocketdotio, SiCorsair, SiEasyjet,} from "react-icons/si"; 
 import { UserRoundXIcon } from "lucide-react";
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
 
 const SkillsComponents = () => {
    const [activeTab, setActiveTab] = useState("experience");
    const skills = [
    { name: "React", level: 90, icon: <FaReact className="text-cyan-400" /> },
    { name: "JavaScript", level: 85, icon: <SiJavascript className="text-yellow-400" /> },
    { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Redux", level: 80, icon: <SiRedux className="text-purple-500" /> },
    { name: "Firebase", level: 82, icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Node.js", level: 78, icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", level: 75, icon: <SiMongodb className="text-green-400" /> },
    { name: "Express.js", level: 75, icon: <FaNodeJs className="text-green-400" /> },
    { name: "Mongoose", level: 75, icon: <SiMongoose className="text-green-400" /> },
    { name: "Socket.IO", level: 75, icon: <SiSocketdotio className="text-white" /> },
    { name: "EJS", level: 75, icon: <SiEasyjet className="text-yellow-300" /> },
    { name: "CORS", level: 75, icon: <SiCorsair className="text-red-400" /> },
    { name: "Git & GitHub", level: 100, icon: <FaGitAlt className="text-red-500" /> },
    { name: "Database", level: 80, icon: <FaDatabase className="text-teal-400" /> },
    { name: "Figma", level: 90, icon: <SiFigma className="text-pink-500" /> },
    { name: "UI / UX", level: 90, icon: <UserRoundXIcon className="text-pink-400" /> },
  ];

  const frontendSteps = [
    "HTML & Semantic Markup",
    "CSS (Flexbox & Grid)",
    "Responsive Design",
    "JavaScript (ES6+)",
    "API & Fetch",
    "React Components",
    "Hooks & State",
    "Routing",
    "Redux / Context",
    "Optimization",
  ];

  const nodeSteps = [
    "JavaScript Deep Dive",
    "Node.js Runtime",
    "NPM Packages",
    "Express Routing",
    "REST APIs",
    "Authentication",
    "Socket.IO",
    "MongoDB Integration",
    "File Uploads",
    "Deployment",
  ];

  const backendSteps = [
    "Server Architecture",
    "Database Design",
    "API Versioning",
    "Security (OWASP)",
    "Caching & Performance",
    "Queues & Jobs",
    "Scalability",
    "Logging & Monitoring",
    "Testing",
  ];

  return (
    <>
    <section id="Skills" className="relative bg-[#020617] py-20 px-6 md:px-16 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-14">
          My <span className="text-cyan-400">Skills..!</span>
        </h2>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-14">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="bg-[#020617]/80 border border-gray-700 rounded-2xl p-5 
              backdrop-blur-md shadow-lg hover:shadow-cyan-500/20 
              hover:border-cyan-400 transition-all duration-300 
              flex flex-col items-center text-center hover:scale-105"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-white font-semibold text-sm">
                {skill.name}
              </h3>

              <div className="w-full bg-gray-700 h-2 rounded-full mt-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Step sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[["Frontend ( with React )", frontendSteps],
            ["Node.js", nodeSteps],
            ["Backend", backendSteps],
          ].map(([title, list], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#020617]/80 border border-gray-700 rounded-2xl p-6 
              backdrop-blur-md shadow-lg hover:shadow-cyan-500/20 
              hover:border-cyan-400 transition-all"
            >
              <h4 className="text-xl font-semibold text-white mb-4">
                {title}
              </h4>
              <ol className="list-decimal list-inside text-gray-400 space-y-2 text-sm">
                {list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>
      </div>
    </section>   
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

 export default SkillsComponents;


