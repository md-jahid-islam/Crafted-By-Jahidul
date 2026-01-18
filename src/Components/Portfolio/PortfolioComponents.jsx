import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

 const portfolioData = [
  {
    title: "QuickCart — Electronics Store",
    desc: "High-performance electronics storefront with hero slider and promo banners.",
    category: "Custom Websites",
    image: "/images/quickcart.jpg",
    github: "https://github.com/yourusername/quickcart",
    live: "https://quickcart.vercel.app",
  },
  {
    title: "GoCart — Gadget & Accessories",
    desc: "Clean gadget store UX with best-selling products and newsletter capture.",
    category: "Custom Websites",
    image: "/images/gocart.jpg",
    github: "https://github.com/yourusername/gocart",
    live: "https://gocart.vercel.app",
  },
  {
    title: "Brand Identity & Visual System",
    desc: "Logo suite, color palette, typography system and brand usage rules.",
    category: "Branding",
    image: "/images/branding.jpg",
    github: "https://github.com/yourusername/branding",
    live: "https://branding.vercel.app",
  },
];

 const categories = ["All", "Custom Websites", "CMS Websites", "Branding"];
 function PortfolioComponents() {
  const [active, setActive] = useState("All");

  const filteredData =
    active === "All"
      ? portfolioData
      : portfolioData.filter(item => item.category === active);

  return (
    <section className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Portfolio
        </h2>

        {/* Filter */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full text-sm transition
                ${
                  active === cat
                    ? "bg-white text-black"
                    : "border border-gray-600 hover:bg-white hover:text-black"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden bg-gray-900 border border-gray-800
              hover:border-emerald-500 transition"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0
                group-hover:opacity-100 transition flex items-center justify-center gap-6">
                  
                  <a
                    href={item.github}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-white text-black
                    flex items-center justify-center hover:bg-emerald-500 hover:text-white transition"
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href={item.live}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-white text-black
                    flex items-center justify-center hover:bg-emerald-500 hover:text-white transition"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {item.desc}
                </p>
                <span className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
 }
 export default PortfolioComponents ;