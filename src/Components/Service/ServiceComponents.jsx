import React from "react";
import { BsArrowDownRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaShoppingCart, FaShieldAlt, FaTools, FaGlobe, FaEnvelopeOpenText, FaBullhorn, FaPalette, } from "react-icons/fa";
import FuturedWorkComponents from "../FuturedWork/FuturedWorkComponents";
import WhatclientsComponents from "../Whatclients/WhatclientsComponents";

 const coreServices = [
  {
    title: "Full-stack Web Apps",
    desc: "Next.js + Node.js applications with APIs, databases and authentication.",
    icon: <FaCode />,
    color: "text-blue-400",
  },
  {
    title: "Business Websites",
    desc: "Fast, SEO-friendly and responsive marketing websites.",
    icon: <FaGlobe />,
    color: "text-cyan-400",
  },
  {
    title: "E-commerce Solutions",
    desc: "Products, carts, checkout, payments & order management.",
    icon: <FaShoppingCart />,
    color: "text-pink-400",
  },
  {
    title: "Performance & SEO",
    desc: "Core Web Vitals, Lighthouse optimization & on-page SEO.",
    icon: <FaRocket />,
    color: "text-orange-400",
  },
  {
    title: "Security & Best Practices",
    desc: "Authentication, secure headers, input validation & safety.",
    icon: <FaShieldAlt />,
    color: "text-emerald-400",
  },
  {
    title: "Maintenance & Support",
    desc: "Bug fixes, enhancements & new features on demand.",
    icon: <FaTools />,
    color: "text-purple-400",
  },
];

 const bundles = [
  {
    title: "Website Development",
    icon: <FaEnvelopeOpenText />,
    points: [
      "Next.js frontend with clean UX & UI",
      "Custom stack or CMS (WordPress / Sanity)",
      "API integration (Node / Express)",
      "MongoDB / Postgres support",
      "Auth, forms & file uploads",
      "SEO, deploy & handover",
    ],
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    points: [
      "Channel planning & budgeting",
      "FB / IG setup with pixels",
      "Weekly content & ad calendar",
      "High-converting creatives",
      "Reports, retargeting & LAL",
      "CRO tips for landing pages",
    ],
  },
  {
    title: "Graphics & Branding",
    icon: <FaPalette />,
    points: [
      "Logo, colors & typography",
      "Brand kit & usage guide",
      "Business card & stationery",
      "Web & print banners",
      "Editable source files",
      "2–3 revision rounds",
    ],
  },
 ];

 const Service = () => {
  return (
    <>
    <section id="Services" className="relative bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] py-24 px-6 md:px-16 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-5">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
         Web Services I <span className="text-blue-500">Deliver</span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-3xl mx-auto">
            From idea to deployment — fast, scalable and beautiful solutions
            tailored to your business goals.
          </p>
        </div>

        {/* Core Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
          {coreServices.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/70 backdrop-blur-xl border border-gray-700
              rounded-2xl p-8 hover:border-blue-500/60
              hover:shadow-blue-500/20 hover:scale-105 transition">
              <div className={`text-5xl mb-5 ${item.color}`}>{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution Bundles */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white">Website & creative bundles
           Web Solution 
          </h3>
          <p className="text-gray-400 mt-4">
            Pick what you need and contact directly — modern, clean and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {bundles.map((bundle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-900/70 border border-gray-700 rounded-2xl p-8 hover:border-cyan-400 transition">
              <h4 className="text-xl font-semibold text-white mb-5">{bundle.title}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {bundle.points.map((point, idx) => (
                 <li key={idx}>✔ {point}</li>
                ))}
              </ul>
             <a href="/Contact" className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 transition">
                Contact about this bundle
                <BsArrowDownRightCircle />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
       <div className="text-center mt-10">
          <motion.a
            href="/Contact"
            whileHover={{ scale: 1.08 }}
            className="inline-flex items-center justify-center px-10 py-4 rounded-full
            bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500
            text-white font-semibold shadow-lg shadow-cyan-500/30
            hover:shadow-cyan-500/50 transition gap-3" >
            Discuss Your Project
            <BsArrowDownRightCircle className="text-2xl" />
          </motion.a>
        </div>
      </div>
    </section>  
    <FuturedWorkComponents/> 
    <WhatclientsComponents/>
    </>
  );
 };

 export default Service;
