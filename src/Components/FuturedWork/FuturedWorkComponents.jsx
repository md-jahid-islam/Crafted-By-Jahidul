import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

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

 const testimonials = [
  {
    quote:
      "Pixel-perfect UI and clean API integration. The handoff docs made future work extremely easy.",
    name: "Saif Chowdhury",
    role: "Tech Lead, Fintech",
  },
  {
    quote:
      "Our ad creatives finally performed above benchmark. CPA dropped ~28% in two weeks.",
    name: "Tasnia Ahmed",
    role: "Growth Manager, D2C Brand",
  },
  {
    quote:
      "Clear communication and predictable delivery with zero surprises.",
    name: "Raihan Karim",
    role: "Founder, SaaS Startup",
  },
  {
    quote:
      "Fast, modern and conversion-focused website. Big improvement.",
    name: "Nusrat Jahan",
    role: "Marketing Lead",
  },
  {
    quote:
      "React architecture was clean and scalable. Very professional work.",
    name: "Arif Hossain",
    role: "CTO, Software Agency",
  },
  {
    quote:
      "Design matched Figma perfectly. Loved the attention to detail.",
    name: "Mehedi Hasan",
    role: "Product Designer",
  },
  {
    quote:
      "SEO and performance optimizations showed real results.",
    name: "Shakib Ahmed",
    role: "Growth Consultant",
  },
  {
    quote:
      "Reliable, responsive and easy to collaborate with.",
    name: "Farzana Akter",
    role: "Operations Manager",
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

          <a href="/Portfolio" className="inline-flex items-center gap-2 mt-6 md:mt-0 text-cyan-400 hover:text-cyan-300 transition">
            See all <BsArrowRight />
          </a>
        </div>

        {/* ===== Projects ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 ">
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
              <div className="relative h-48 overflow-hidden"> <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500"/>
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
        <div className="text-center mb-10 ">
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
        <div className=" text-center">
      
          <Link className="inline-flex items-center mr-5 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition" to={"/Contact"}>
            Book a free 15-min call
            </Link> 
            <Link className="inline-flex items-center mr-5 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition" to={"/Contact"}>
              Ask about timeline & estimate →            
            </Link> 

        </div>

        <section className="bg-[#020617] py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What clients <span className="text-cyan-400">say</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Real-world results from web, marketing & branding work.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}>

          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" h-full bg-[#020617]/90 border border-gray-700 rounded-2xl gap-5 p-8 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
                <FaQuoteLeft className="text-cyan-400 text-3xl mb-4" />
                <p className="text-gray-300 leading-relaxed mb-6">
                  “{item.quote}”
                </p>
                <div className=" mt-5 ">
                  <h4 className="text-white font-semibold">{item.name}</h4>
                  <p className="text-gray-400 text-sm">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Custom Pagination Styling */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background: #334155; /* inactive dot */
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #22d3ee; /* active dot cyan */
        }
      `}</style>
    </section>
        {/* ===== CTA ===== */}
        <div className=" relative bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] rounded-2xl py-8 px-6 md:px-16 ">
          <h2 className=" text-gray-400 mb-2.5 font-bold text-3xl">
            Have an idea? Let’s ship it.
          </h2>
            <p className=" text-gray-400 mb-5 ">Book a quick call or explore solutions to get started.</p>
          <Link className="inline-flex items-center mr-5 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition" to={"/Contact"}>
            Book a free 15-min call
            </Link> 
            <Link className="inline-flex items-center mr-5 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition" to={"/Contact"}>
           Explore solutions →            
            </Link> 

        </div>

      </div>
    </section>   
    </>
  );
 };

 export default FuturedWorkComponents;
