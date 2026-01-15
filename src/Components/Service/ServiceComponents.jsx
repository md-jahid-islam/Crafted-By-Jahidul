// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaCode,
//   FaPaintBrush,
//   FaMobileAlt,
//   FaRocket,
//   FaServer,
//   FaShoppingCart,
// } from "react-icons/fa";

// const services = [
//   {
//     title: "Frontend Development",
//     desc: "Modern, responsive, and animated UI using React, Tailwind CSS, and Framer Motion.",
//     icon: <FaCode />,
//     color: "text-blue-500",
//   },
//   {
//     title: "UI / UX Design",
//     desc: "Pixel-perfect, user-friendly UI design converted from Figma to real websites.",
//     icon: <FaPaintBrush />,
//     color: "text-purple-400",
//   },
//   {
//     title: "Responsive Design",
//     desc: "Mobile-first, tablet & desktop optimized layouts for all devices.",
//     icon: <FaMobileAlt />,
//     color: "text-cyan-400",
//   },
//   {
//     title: "Backend Integration",
//     desc: "API integration, authentication, Firebase & Node.js backend support.",
//     icon: <FaServer />,
//     color: "text-emerald-400",
//   },
//   {
//     title: "E-commerce Solutions",
//     desc: "Complete ecommerce websites with cart, checkout & payment integration.",
//     icon: <FaShoppingCart />,
//     color: "text-pink-400",
//   },
//   {
//     title: "Website Optimization",
//     desc: "Fast loading, SEO friendly & performance optimized web applications.",
//     icon: <FaRocket />,
//     color: "text-orange-400",
//   },
// ];

// const Service = () => {
//   return (
//     <section
//       id="Services"
//       className="relative bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] py-24 px-6 md:px-16 overflow-hidden"
//     >
//       {/* Glow Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl opacity-40"></div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-white">
//             Professional <span className="text-blue-500">Services</span>
//           </h2>
//           <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
//             I provide high-quality web development services focused on performance,
//             design, and user experience.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-gray-900/70 backdrop-blur-xl border border-gray-700 rounded-2xl p-8
//               hover:border-blue-500/60 hover:shadow-blue-500/20 hover:scale-105
//               transition-all duration-300"
//             >
//               <div
//                 className={`text-5xl mb-5 ${service.color}`}
//               >
//                 {service.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-3">
//                 {service.title}
//               </h3>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 {service.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-20">
//           <motion.a
//             href="#Contact"
//             whileHover={{ scale: 1.08 }}
//             className="inline-block px-12 py-4 rounded-full
//             bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500
//             text-white font-semibold
//             shadow-lg shadow-cyan-500/30
//             hover:shadow-cyan-500/50 transition"
//           >
//             Discuss Your Project
//           </motion.a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaRocket,
  FaServer,
  FaShoppingCart,
  FaShieldAlt,
  FaTools,
  FaGlobe,
} from "react-icons/fa";

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
    title: "Website",
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
    <section
      id="Services"
      className="relative bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Services I <span className="text-blue-500">Deliver</span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-3xl mx-auto">
            From idea to deployment — fast, scalable and beautiful solutions
            tailored to your business goals.
          </p>
        </div>

        {/* Core Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-28">
          {coreServices.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/70 backdrop-blur-xl border border-gray-700
              rounded-2xl p-8 hover:border-blue-500/60
              hover:shadow-blue-500/20 hover:scale-105 transition"
            >
              <div className={`text-5xl mb-5 ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Solution Bundles */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Solution <span className="text-cyan-400">Bundles</span>
          </h3>
          <p className="text-gray-400 mt-4">
            Pick what you need and contact directly — modern, clean and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {bundles.map((bundle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-900/70 border border-gray-700 rounded-2xl p-8
              hover:border-cyan-400 transition"
            >
              <h4 className="text-xl font-semibold text-white mb-5">
                {bundle.title}
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {bundle.points.map((point, idx) => (
                  <li key={idx}>✔ {point}</li>
                ))}
              </ul>

              <a
                href="#Contact"
                className="inline-block mt-6 text-cyan-400 hover:underline"
              >
                Contact about “{bundle.title}”
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <motion.a
            href="#Contact"
            whileHover={{ scale: 1.08 }}
            className="inline-block px-12 py-4 rounded-full
            bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500
            text-white font-semibold shadow-lg shadow-cyan-500/30
            hover:shadow-cyan-500/50 transition">
            Discuss Your Project
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Service;
