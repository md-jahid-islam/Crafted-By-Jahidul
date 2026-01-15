// import React from "react";
// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase } from "react-icons/fa";
// import { SiJavascript, SiTailwindcss, SiFirebase, SiMongodb, SiFigma, SiRedux, SiMongoose, SiSocketdotio, SiEjs, SiCorsair } from "react-icons/si";
// import { UserRoundXIcon } from "lucide-react";

//  // ======== Updated SkillsComponents: removed numeric % display, added step-by-step lists ========= // 
//  const SkillsComponents = () => {
//   const skills = [
//     { name: "React", level: 90, icon: <FaReact className="text-sky-400" /> },
//     { name: "JavaScript", level: 85, icon: <SiJavascript className="text-yellow-400" /> },
//     { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
//     { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
//     { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss className="text-cyan-400" /> },
//     { name: "Redux", level: 80, icon: <SiRedux className="text-purple-500" /> },
//     { name: "Firebase", level: 82, icon: <SiFirebase className="text-yellow-500" /> },
//     { name: "Node.js", level: 78, icon: <FaNodeJs className="text-green-500" /> },
//     { name: "MongoDB", level: 75, icon: <SiMongodb className="text-green-400" /> },
//     { name: "Express.js", level: 75, icon: <FaNodeJs className="text-green-400" /> },
//     { name: "Mongoose", level: 75, icon: <SiMongoose className="text-green-400" /> },
//     { name: "Socket.IO", level: 75, icon: <SiSocketdotio className="text-green-400" /> },
//     { name: "Ejs", level: 75, icon: <SiEjs className="text-green-400" /> },
//     { name: "SiCors", level: 75, icon: <SiCorsair className="text-green-400" /> },
//     { name: "Git & GitHub", level: 100, icon: <FaGitAlt className="text-red-500" /> },
//     { name: "Database", level: 80, icon: <FaDatabase className="text-teal-400" /> },
//     { name: "Figma", level: 90, icon: <SiFigma className="text-pink-500" /> },
//     { name: "UI/UX Design", level: 90, icon: <UserRoundXIcon className="text-pink-500" /> },
//   ];

//   // ======== Step-by-step learning lists (you can edit the content/order) ========= // 
//   const frontendSteps = [
//     "1. HTML & Semantics",
//     "2. CSS (Flexbox, Grid)",
//     "3. Responsive Design",
//     "4. JavaScript (ES6+)",
//     "5. DOM & Fetch/API",
//     "6. React Basics (components, props)",
//     "7. State & Hooks",
//     "8. Routing (React Router)",
//     "9. State Management (Redux / Context)",
//     "10. Testing & Performance"
//   ];

//   // ======== step by step list for node.js and Backend ========= // 
//   const nodeSteps = [
//     "1. JavaScript Deep Dive (promises, async/await)",
//     "2. Node.js runtime & modules",
//     "3. NPM / package management",
//     "4. Express.js (routing & middleware)",
//     "5. REST API design",
//     "6. Authentication (JWT, sessions)",
//     "7. Real-time (Socket.IO)",
//     "8. Database integration (MongoDB/Mongoose)",
//     "9. File uploads & validation",
//     "10. Deploy (Heroku, Vercel, DigitalOcean)"
//    ];

//    // ======== step by step list for backend development ======== // 
//    const backendSteps = [
//     "1. Server architecture & patterns",
//     "2. Database schema design (SQL/NoSQL)",
//     "3. API versioning & documentation",
//     "4. Security best practices (OWASP basics)",
//     "5. Caching (Redis) & performance",
//     "6. Background jobs & queues",
//     "7. Scalability & load balancing",
//     "8. Observability (logs, metrics)",
//     "9. Automated testing (unit/integration)",
//     "10. CI/CD pipelines"
//   ];

//   return (
//     <>
//     <section id="Skills" className=" relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-16 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl opacity-30"></div>
//       <div className="max-w-6xl mx-auto relative z-10">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
//           My <span className="text-blue-500">Skills..!</span>
//         </h2>

//         {/* Skills Grid (no numeric % text shown) */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-10">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.04 }}
//               viewport={{ once: true }}
//               className="bg-gray-800/60 rounded-2xl p-5 border border-gray-700 hover:border-blue-500 transition duration-300 backdrop-blur-sm shadow-md flex flex-col items-center text-center group hover:scale-105">
//               <div className="text-4xl mb-3 group-hover:animate-pulse">{skill.icon}</div>
//               <h3 className="text-white font-semibold">{skill.name}</h3>

//               {/* Skill Bar (visual only) */}
//               <div className="w-full bg-gray-700 rounded-full h-2 mt-3 overflow-hidden">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: `${skill.level}%` }}
//                   transition={{ duration: 1.2, ease: "easeOut" }}
//                   className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
//                 />
//               </div>

//               {/* Removed numeric percentage text as requested */}
//             </motion.div>
//           ))}
//         </div>

//         {/* Step-by-step sections */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700  border-gray-700 hover:border-blue-500 shadow-md hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-500">
//             <h4 className="text-xl font-semibold text-white mb-3">Frontend With React</h4>
//             <ol className="list-decimal list-inside text-gray-300 space-y-2">
//               {frontendSteps.map((s, i) => <li key={i} className="text-sm">{s.replace(/^\d+\.\s*/, '')}</li>)}
//             </ol>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.08 }}
//             className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700  border-gray-700 hover:border-blue-500 shadow-md hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-500">
//             <h4 className="text-xl font-semibold text-white mb-3">Node.js</h4>
//             <ol className="list-decimal list-inside text-gray-300 space-y-2">
//               {nodeSteps.map((s, i) => <li key={i} className="text-sm">{s.replace(/^\d+\.\s*/, '')}</li>)}
//             </ol>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.16 }}            
//             className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700  border-gray-700 hover:border-blue-500 shadow-md hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-500">
//             <h4 className="text-xl font-semibold text-white mb-3">Backend</h4>
//             <ol className="list-decimal list-inside text-gray-300 space-y-2">
//               {backendSteps.map((s, i) => <li key={i} className="text-sm">{s.replace(/^\d+\.\s*/, '')}</li>)}
//             </ol>
//           </motion.div>
//         </div>
//       </div>
//     </section>   
//     </>
//   );
//  };

//  export default SkillsComponents;


import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,  FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase,
 } from "react-icons/fa";
 import {
  SiJavascript,  SiTailwindcss, SiFirebase, SiMongodb, SiFigma, SiRedux, SiMongoose,  SiSocketdotio, SiEjs, SiCorsair,
 } from "react-icons/si";
 import { UserRoundXIcon } from "lucide-react";

 const SkillsComponents = () => {
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
    { name: "EJS", level: 75, icon: <SiEjs className="text-yellow-300" /> },
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
    </>
  );
};

export default SkillsComponents;
