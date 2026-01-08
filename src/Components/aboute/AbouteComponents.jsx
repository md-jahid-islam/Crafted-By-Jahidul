import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

 const AbouteComponents = () => {
  return (
    <div className="bg-[#0b0f19] text-white font-sans">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="space-y-8">
            <span className="text-sm uppercase tracking-widest text-cyan-400">
              Full Stack Web Developer
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Building Modern <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Web Experiences
              </span>
            </h1>

            <p className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed">
              Hi, I’m <span className="text-white font-semibold">Jahidul Islam</span> —  
              a results-driven developer specializing in scalable, responsive, and
              high-performance applications using React, Node.js & modern UI systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/Contact" className="px-8 py-3 rounded-full border border-gray-700 hover:border-cyan-400 transition">
                Hire Me..
              </a>

              <a href="/images/Zahidul_Islam.pdf" download className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-gray-700 hover:border-cyan-400 transition">
                Download CV <AiOutlineArrowRight />
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
              About <span className="text-cyan-400">Me</span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              I’m a professional full stack web developer with over 2 years of hands-on
              experience building production-ready applications. I focus on clean code,
              maintainable architecture, and polished user experiences.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My strength lies in transforming complex ideas into elegant, performant
              solutions using modern frontend and backend technologies.
            </p>
          </div>

          <div className="bg-[#020617] p-8 rounded-2xl border border-gray-800 space-y-4">
            <h3 className="text-xl font-semibold text-cyan-400">
              Core Expertise
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>✔ React, Next.js, Tailwind CSS</li>
              <li>✔ Node.js, Express, MongoDB</li>
              <li>✔ Firebase Authentication & APIs</li>
              <li>✔ Responsive UI / UX Design</li>
              <li>✔ Performance Optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      {/* <section className="py-24 px-4 sm:px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
          Selected <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Orebi Ecommerce Platform",
              "Rupantorito Portfolio",
              "Realtime Chat Application",
            ].map((project, i) => (
              <div
                key={i}
                className="bg-[#020617] p-6 rounded-2xl border border-gray-800
                hover:border-cyan-400 transition">
                <h3 className="text-lg font-semibold mb-2">{project}</h3>
                <p className="text-sm text-gray-400">
                  A modern, scalable application built with React and backend integration.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>  */}
      <section className="py-28 px-4 sm:px-6 md:px-20 bg-[#020617]">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
      Selected <span className="text-cyan-400">Projects</span>
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
          <Link to={"/Projects"}> View Project →</Link>
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
 };

 export default AbouteComponents;
