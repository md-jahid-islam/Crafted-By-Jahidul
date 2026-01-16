// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import { FaQuoteLeft } from "react-icons/fa";

// import "swiper/css";
// import "swiper/css/pagination";

//  const testimonials = [
//   {
//     quote:
//       "Pixel-perfect UI and clean API integration. The handoff docs made future work extremely easy.",
//     name: "Saif Chowdhury",
//     role: "Tech Lead, Fintech",
//   },
//   {
//     quote:
//       "Our ad creatives finally performed above benchmark. CPA dropped ~28% in two weeks.",
//     name: "Tasnia Ahmed",
//     role: "Growth Manager, D2C Brand",
//   },
//   {
//     quote:
//       "Clear communication and predictable delivery with zero surprises.",
//     name: "Raihan Karim",
//     role: "Founder, SaaS Startup",
//   },
//   {
//     quote:
//       "Fast, modern and conversion-focused website. Big improvement.",
//     name: "Nusrat Jahan",
//     role: "Marketing Lead",
//   },
//   {
//     quote:
//       "React architecture was clean and scalable. Very professional work.",
//     name: "Arif Hossain",
//     role: "CTO, Software Agency",
//   },
//   {
//     quote:
//       "Design matched Figma perfectly. Loved the attention to detail.",
//     name: "Mehedi Hasan",
//     role: "Product Designer",
//   },
//   {
//     quote:
//       "SEO and performance optimizations showed real results.",
//     name: "Shakib Ahmed",
//     role: "Growth Consultant",
//   },
//   {
//     quote:
//       "Reliable, responsive and easy to collaborate with.",
//     name: "Farzana Akter",
//     role: "Operations Manager",
//   },
// ];

// const WhatclientsComponents = () => {
//   return (
//     <>
//     <section className="bg-[#020617] py-24 px-6 md:px-16">
//       <div className="max-w-6xl mx-auto">

//         {/* Title */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl md:text-5xl font-bold text-white">
//             What clients <span className="text-cyan-400">say</span>
//           </h2>
//           <p className="text-gray-400 mt-4">
//             Real-world results from web, marketing & branding work.
//           </p>
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           modules={[Pagination]}
//           pagination={{ clickable: true }}
//           spaceBetween={24}
//           grabCursor={true}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//           }}
//         >
//           {testimonials.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="h-full bg-[#020617]/90 border border-gray-700 rounded-2xl p-8 
//                 transition-all duration-300
//                 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
//                 <FaQuoteLeft className="text-cyan-400 text-3xl mb-4" />
//                 <p className="text-gray-300 leading-relaxed mb-6">
//                   “{item.quote}”
//                 </p>
//                 <div>
//                   <h4 className="text-white font-semibold ">{item.name}</h4>
//                   <p className="text-gray-400 text-sm ">{item.role}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>

//       {/* Custom Pagination Styling */}
//       <style jsx>{`
//         .swiper-pagination-bullet {
//           background: #334155; /* inactive dot */
//           opacity: 1;
//         }
//         .swiper-pagination-bullet-active {
//           background: #22d3ee; /* active dot cyan */
//         }
//       `}</style>
//     </section>
//     </>
//   );
//  };

//  export default WhatclientsComponents;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

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

const WhatclientsComponents = () => {
  return (
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
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full bg-[#020617]/90 border border-gray-700 rounded-2xl p-8
                transition-all duration-300
                hover:border-cyan-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
                <FaQuoteLeft className="text-cyan-400 text-3xl mb-4" />
                <p className="text-gray-300 leading-relaxed mb-6">
                  “{item.quote}”
                </p>
                <div>
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
  );
};

export default WhatclientsComponents;
