import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";

 const HomeComponents = () => {
  return (
    <>
    <section id="Home" className="relative min-h-screen flex items-center bg-[#020617] px-6 md:px-16 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-14">
          
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Jahidul Islam.!
              </span>
            </h1>

            <div className="text-xl md:text-2xl font-semibold text-gray-300">
              <Typewriter
                options={{
                  strings: [
                    "Front-End Developer..!",
                    "Front-End Learned Creative IT Institute ",
                    "React Tailwind.css Specialist UX & UI Design",
                    "Full Stack Developer Node.js..!",
                    "Node.js Learned Creative IT Institute ",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                }}
              />
            </div>

            <p className="text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
             You can trust me. I will make your website beautiful Design and Responsive Developments ui/ux mordern design..! I design and develop modern, responsive, and high-performance web
              applications with clean UI/UX and scalable code.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Link to="/about">
                <button className="px-8 py-3 rounded-full border border-gray-700 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition text-white">
                  View Work..!
                </button>
              </Link>

              <Link to="/contact">
                <button className="px-8 py-3 rounded-full border border-gray-700 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition text-white">
                  Hire Me..!
                </button>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 justify-center md:justify-start pt-6 text-2xl text-gray-300">
              <a href="https://www.facebook.com/jahidul.islam.98621/" target="_blank" rel="noreferrer"className="hover:text-blue-500 transition">
                <FaFacebook />
              </a>
              <a href="https://github.com/md-jahid-islam" target="_blank" rel="noreferrer" className="hover:text-gray-100 transition">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/jahidul-islam-a5021b325" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
                <IoLogoLinkedin />
              </a>
            </div>
          </div>

          {/* Right Profile */}
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-30"></div>
              <img src="/images/Profile.jpg" alt="Jahidul Islam" className="relative w-44 h-44 md:w-60 md:h-60 rounded-full object-cover border-4 border-gray-800 hover:scale-105 transition-transform"/>
            </div>

            <div className="mt-6 text-center space-y-2">
              <h3 className="text-2xl font-bold text-white">
               Full Stack Developer..!
              </h3>            
                <div className="text-xl md:text-2xl font-semibold text-gray-300">
              <Typewriter
                options={{
                  strings: [
                    "Front-End Developer..!",
                    "Front-End Learned Creative IT Institute ",
                    "React Tailwind.css Specialist UX & UI Design..",
                    "Full Stack Developer Node.js ..!",
                    "Node.js Learned Creative IT Institute ",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                }}
              />
            </div>
            </div>

            {/* Resume */}
           <div className="mt-6 flex justify-center md:justify-start">
           <a href="/images/Zahidul_Islam.pdf" download="Jahidul_Islam_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Jahidul Islam Resume" className="group inline-flex items-center gap-3 px-7 py-3 text-sm sm:text-base font-medium text-white rounded-full border border-gray-700 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300">
           <span>Download CV..!</span>
            <AiOutlineArrowRight className="text-lg transform group-hover:translate-x-1 transition" />
            </a>
         </div>
          </div>
        </div>
      </div>
      
    </section>    
    </>
  );
 };

 export default HomeComponents;
