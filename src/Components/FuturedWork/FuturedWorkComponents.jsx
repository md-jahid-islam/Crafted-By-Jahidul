import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, } from "react-icons/bs";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Project 1",
    stack: "React / Next.js • Node.js / Express • Tailwind CSS",
    image: "/images/project-1.png",
  },
  {
    id: 2,
    title: "Project 4",
    stack: "React / Next.js • Node.js / Express • Tailwind CSS",
    image: "/images/project-4.png",
  },
  {
    id: 3,
    title: "Project 3",
    stack: "React / Next.js • Node.js / Express • Tailwind CSS",
    image: "/images/project-3.png",
  },
];

const steps = [
  {
    step: "Step 1",
    title: "Discover",
    desc: "We define goals, scope, timeline and success metrics.",
  },
  {
    step: "Step 2",
    title: "Design",
    desc: "Wireframes to UI — iterate fast with your feedback.",
  },
  {
    step: "Step 3",
    title: "Build",
    desc: "Code, integrations, and content migration.",
  },
  {
    step: "Step 4",
    title: "Launch",
    desc: "Deploy, monitor, and improve with analytics.",
  },
 ];

 const FuturedWorkComponents = () => {
  return (
    <>
    <section className="bg-[#020617] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* ===== Header ===== */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured <span className="text-cyan-400">Work</span>
            </h2>
            <p className="text-gray-400 mt-3">
              A few highlights — see more in the portfolio.
            </p>
          </div>

          <a
            href="#Portfolio"
            className="inline-flex items-center gap-2 mt-6 md:mt-0 text-cyan-400 hover:text-cyan-300 transition"
          >
            See all <BsArrowRight />
          </a>
        </div>

        {/* ===== Projects ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#020617]/80 border border-gray-700 rounded-2xl overflow-hidden
              hover:border-cyan-400 hover:shadow-cyan-500/20 transition"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.stack}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== Process ===== */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            A process that keeps you <span className="text-cyan-400">in the loop</span>
          </h3>
          <p className="text-gray-400 mt-4">
            Clear stages and predictable delivery — no surprises.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#020617]/80 border border-gray-700 rounded-2xl p-6
              hover:border-cyan-400 transition"
            >
              <span className="text-cyan-400 text-sm font-medium">
                {item.step}
              </span>
              <h4 className="text-xl font-semibold text-white mt-2 mb-3">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ===== CTA ===== */}
        <div className="text-center ">
          <Link className="inline-flex items-center mr-5 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition" to={"/Contact"}>
            Book a free 15-min call
            </Link> 
            <Link className="inline-flex items-center mr-5 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition" to={"/Contact"}>
              Ask about timeline & estimate →            
            </Link> 

        </div>

      </div>
    </section>   
    </>
  );
 };

 export default FuturedWorkComponents;
