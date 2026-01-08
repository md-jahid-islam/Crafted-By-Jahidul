import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
 
 // ========== sample Projects Data ========== //
 const projects = [
  {
    id: 1,
    title: "Orebi Ecommerce",
    image: "/images/orebi-showp-website-e-commerce.vercel.app_.png",
    description:
    "A full-featured ecommerce web app with product filters, cart, pagination, and Redux integration.",
    tech: ["React", "Redux", "Tailwind CSS", "Firebase"],
    live: "https://orebi-showp-website-e-commerce.vercel.app/",
    github: "https://github.com/md-jahid-islam/OREBI-SHOWP-WEBSITE-E-COMMERCE.git",
  },
  {
    id: 2,
    title: "My Clients Prtoject JBL.COM",
    image: "/images/jbl-com-io.vercel.app_ProductDetails.png",
    description:
    "A creative photographer portfolio website designed in Figma and developed with responsive animations.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    live: "https://jbl-com-io.vercel.app/",
    github: "https://github.com/md-jahid-islam/JBL.COM.git",
  },
   {
    id: 3,
    title: "cheap deals e-commerce Shop",
    image: "/images/cheap-deals.png",
    description:
    "cheap deals e-commerce shop featuring smooth scroll animations, galleries, and contact integration.",
    tech: ["React.js", "Redux", "Tailwind CSS", "Framer Motion", "Firebase"],
    live: "https://cheap-deals-iota.vercel.app/",
    github: "https://github.com/md-jahid-islam/Cheap-Deals-E-commerce-Shop.git",
  },
    {
    id: 4,
    title: "NeoCart E-commerce",
    image: "/images/e-commerce-shop-five .png",
    description:
    "Modern e-commerce application featuring smooth animations, product galleries, and a seamless shopping experience.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    live: "https://e-commerce-shop-five-zeta.vercel.app/",
    github: "https://github.com/md-jahid-islam/e-commerce-shop.git",
  },
    {
    id: 5,
    title: "Car Rental Website",
    image: "/images/carrental.png",
    description:
    "Modern car rental website featuring smooth animations, galleries, and contact integration.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    live: "https://car-rental-website-design.vercel.app/",
    github: "https://github.com/md-jahid-islam/Car-Rental-website-design.git",
  },
   {
    id: 6,
    title: "Doctor Care",
    image: "/images/html-css-js-crash-course-doctor-care-project-main.vercel.app_.png",
    description:
    "Modern Doctor Care featuring smooth scroll animations, galleries, and contact integration.",
    tech: ["HTML-5", "CSS-3", "Tailwind CSS"],
    live: "https://html-css-js-crash-course-doctor-care-project-main.vercel.app/",
    github: "https://github.com/md-jahid-islam/html-css-js-crash-course-doctor-care-project-main.git",
  },
    {
    id: 7,
    title: "mixedit Up",
    image: "/images/mixedit-up.png",
    description:
    "mixedit Up featuring smooth scroll animations, galleries, and contact integration.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    live: "https://mixedit-up-sepia.vercel.app/",
    github: "https://github.com/md-jahid-islam/Mixedit-UP.git",
  },
    {
    id: 8,
    title: "Traveling",
    image: "/images/traveling.png",
    description:
    "Modern Traveling featuring smooth scroll animations, galleries, and contact integration.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    live: "https://traveling-jet.vercel.app/",
    github: "https://github.com/md-jahid-islam/Traveling.git",
  },
    {
    id: 9,
    title: "pulse-robot",
    image: "/images/pulse-robot.png",
    description:
    "Modern pulse-robot featuring smooth scroll animations, galleries, and contact integration.",
    tech: ["TypeScript", "Tailwind CSS", "shadcn-ui", "React.js"],
    live: "https://pulse-robot-chi.vercel.app/",
    github: "https://github.com/md-jahid-islam/Pulse-Robot.git",
  },
    {
    id: 10,
    title: "Shopsy - Shopify Store",
    image: "/images/Shopsy.png",
    description:
    "Modern Shopify store featuring smooth scroll animations, galleries, and contact integration.",
    tech: ["React.js", "Tailwind CSS", "aos", "react", "react-slick", "slick-carousel"],
    live: "https://shopify-sigma-henna.vercel.app/",
    github: "https://github.com/md-jahid-islam/shopify.git",
  },
  {
    id: 11,
    title: "Task Done Keep It Up",
    image: "/images/todo.png",
    description:
    "A Todo task crafted by Jahidul Islam. My todo app uses basic HTML-5, CSS-3, and JavaScript. It features modern design and allows tasks to be edited, deleted, and counted. You can increment the count by 1 (++) and decrement it by 1 (--).",
    tech: ["HTML-5", "CSS-3", "JavaScript"],
    live: "https://todo-list-app-rd3c.vercel.app/",
    github: "https://github.com/md-jahid-islam/TASK-DONE-TODO.git",
  },
 ];

  // ========== Projects Components start ========== // 
 const ProjectsComponents = () => {
  return (
    <>
    <section id="Projects" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
          My <span className="text-blue-500">Projects..!</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-blue-500/20" >
      
              {/* Image Section */}
              <div className="relative overflow-hidden group">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transform hover:scale-105 transition" >
                  Live <FaExternalLinkAlt />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transform hover:scale-105 transition" >
                  Code <FaGithub />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-700/60 text-blue-400 px-3 py-1 rounded-full" >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
 };
  
 // ========== Exporting the Projects Components end ========== // 
 export default ProjectsComponents;
 