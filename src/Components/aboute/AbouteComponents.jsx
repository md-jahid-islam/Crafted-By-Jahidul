import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

 const AbouteComponents = () => {
  return (
    <>
    <div className="bg-[#0b0f19] text-white font-sans">
      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="space-y-8">
            <span className="text-sm uppercase tracking-widest text-cyan-400">
              Full Stack Web Developer.!
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Building Modern <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Web Experiences
              </span>
            </h1>

            <p className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed">
              I’m <span className="text-white font-semibold">Jahidul Islam</span> —  
              a results-driven developer specializing in scalable, responsive, and
              high-performance applications using React, Node.js & modern UI systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/Contact" className="px-8 py-3 rounded-full border border-gray-700 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition text-white">
                Hire Me..!
              </a>
              <a href="/images/Zahidul_Islam.pdf" download="Jahidul_Islam_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Jahidul Islam Resume" className="group inline-flex items-center gap-3 px-7 py-3 text-sm sm:text-base font-medium text-white rounded-full border border-gray-700 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300">
              <span>Download CV..!</span>
              <AiOutlineArrowRight className="text-lg transform group-hover:translate-x-1 transition" />
             </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img src="/images/jahid.png" alt="Jahidul Islam" className="w-72 md:w-[420px] rounded-3xl border border-gray-700 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 px-4 sm:px-6 md:px-20 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              About <span className="text-cyan-400">Me.!</span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              I’m a professional full stack web developer of hands-on
              experience building production-ready applications. I focus on clean code,
              maintainable architecture, and polished user experiences.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My strength lies in transforming complex ideas into elegant, performant
              solutions using modern frontend and backend technologies.
            </p>
          </div>

          <div className="bg-[#020617] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition space-y-6">
          <h3 className="text-2xl font-semibold text-cyan-400 text-center">
          Core Expertise..!
          </h3>

         {/* Skills Grid */}
         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">

     {/* Frontend */}
    <li className="flex items-start gap-2">
      <span className="text-cyan-400">✔</span>
      <span>React, Next.js, Tailwind CSS</span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-cyan-400">✔</span>
      <span>HTML5, CSS3, ( JS & ES6+)</span>
    </li>

    {/* Backend */}
    <li className="flex items-start gap-2">
      <span className="text-cyan-400">✔</span>
      <span>Node.js, Express.js</span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-cyan-400">✔</span>
      <span>MongoDB, Mongoose</span>
    </li>

    {/* Firebase */}
    <li className="flex items-start gap-2">
      <span className="text-cyan-400">✔</span>
      <span>Firebase Authentication   </span>
    </li>

    {/* Tools */}
    <li className="flex items-start gap-2">
      <span className="text-cyan-400">✔</span>
      <span>REST APIs & Integration</span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-cyan-400">✔</span>
      <span>Git, GitHub, Deployment</span>
    </li>

    {/* UI/UX */}
    <li className="flex items-start gap-2">
      <span className="text-cyan-400">✔</span>
      <span>Responsive UI / UX Design</span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-cyan-400">✔</span>
      <span>Performance Optimization</span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-cyan-400">✔</span>
      <span>Clean Code & Best Practices</span>
    </li>
   </ul>
        </div>    
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
  <section className="py-28 px-4 sm:px-6 md:px-20 bg-[#020617]">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
      Selected <span className="text-cyan-400">Projects.!</span>
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      {[
        {
          title: "Tazenix Core Team Platform",
          desc: "Full-featured ecommerce platform with modern UI, cart, and authentication.",
        },
        {
          title: "Crafted By Jahidul Portfolio",
          desc: "Minimal photographer portfolio designed with Figma and developed in React.",
        },
        {
          title: "Realtime Chat Application",
          desc: "Realtime chat app with Firebase, authentication, and live messaging.",
        },
      ].map((project, i) => (
        <div
          key={i}
          className="group relative bg-[#020617]/80 backdrop-blur-xl p-8 rounded-2xl 
          border border-gray-800 hover:border-cyan-400 transition-all duration-500
          hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
          {/* Glow Layer */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
          <h3 className="text-xl font-semibold mb-3 relative z-10">
            {project.title}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed relative z-10">
            {project.desc}
          </p>

          <div className="mt-6 relative z-10">
            <span className="inline-block text-cyan-400 text-sm font-medium group-hover:tracking-wide transition-all">
          <Link to={"#"}> View Project →</Link>
            </span>
          </div>
        </div>
      ))}
    </div>
   </div>
   </section>
    </div>   
    </>
  );
 };

 export default AbouteComponents;
