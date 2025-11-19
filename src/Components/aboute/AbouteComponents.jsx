import React from "react";
// ============= About Components start ========== // 
 const AboutComponents = () => {
  return (
    <>    
    {/* Background gradient glow */}
    <section id="About" className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl opacity-30"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side - Video */}
        <div className="flex justify-center">
          <div className="relative group w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-2xl rounded-3xl group-hover:opacity-40 transition duration-500"></div>      
            <video className="rounded-2xl w-full h-auto object-cover border border-gray-700 shadow-lg group-hover:scale-105 transition-transform duration-500" src="/images/jahid.mp4" autoPlay loop muted playsInline >
            </video>
            <img className="rounded-2xl w-full h-auto mt-10 object-cover border border-gray-700 shadow-lg group-hover:scale-105 transition-transform duration-500" src="/images/jahid.png" alt="Jahidul Islam"/>
          </div>
        </div>
        
        {/* Right Side - Content */}
        <div className="space-y-8">  
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-100">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            I’m <span className="font-semibold text-white">Jahidul Islam</span>, a passionate 
            <span className="text-cyan-400 font-semibold"> Full Stack Web Developer</span> with over 2 years of
            professional experience. I specialize in building modern, responsive web applications 
            using <span className="text-blue-400 font-semibold">React, Tailwind CSS, and Node.js</span>. 
            My focus is on creating visually engaging, high-performance interfaces with 
            seamless backend integration.
          </p>

          {/* Professional Experience */}
          <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-400 transition duration-300 backdrop-blur-sm shadow-xl">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 flex items-center gap-2">
              💼 Professional Experience
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>• Developed responsive, high-performance web applications using React, Node.js, Express.js, and MongoDB.</li>
              <li>• Built and launched projects like Orebi Ecommerce & Rupantorito Portfolio with modern UI/UX animation and <span className="text-cyan-300 font-medium">Firebase Authentication, REST APIs</span>.</li>        
              <li>• Worked through complete project lifecycles — frontend architecture to backend solid logic & deployment.</li>
              <li>• Passionate about interactive UI/UX, performance optimization, and modern design trends.</li>
            </ul>
          </div>

          {/* Academic Education */}
          <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition duration-300 backdrop-blur-sm shadow-xl">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 flex items-center gap-2">
             🎓 Academic Education
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>• <span className="font-medium text-white">BSS (Bachelor in Social Science)</span> — Habiganj Brindaban Govt College (2025–Present)</li>
              <li>• <span className="font-medium text-white">HSC in Humanities</span> — Habiganj Kabir College Academy (2023)</li>
              <li>• <span className="font-medium text-white">SSC in Commerce</span> — Hazrat Shahjala (Ra.) High School (2021)</li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            
            <a href="/Contact" className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition-transform duration-300">
            Contact Me
            </a>

            <a href="/images/Zahidul Islam.pdf" download="Jahidul_Islam_Resume.pdf" className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105 hover:shadow-pink-500/40 transition-transform duration-300">
            Download Resume
            </a>

          </div>
        </div>
      </div>
    </section> 
    </>
  );
 };

 // ============= Exporting the AboutComponent end ========= //
 export default AboutComponents;
