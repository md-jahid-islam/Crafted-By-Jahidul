import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

 /* =========== Portfolio Data ========= */
 const portfolioData = [
  {
    title: "QuickCart — Electronics Store",
    desc: "High-performance electronics storefront with hero slider, promos and conversion-focused UI.",
    category: "Custom Websites",
    image: "/images/quickcart.jpg",
    github: "https://github.com/yourusername/quickcart",
    live: "https://quickcart.vercel.app",
  },
  {
    title: "GoCart — Gadget & Accessories",
    desc: "Modern gadget store UX with product highlights, pricing focus and newsletter capture.",
    category: "Custom Websites",
    image: "/images/gocart.jpg",
    github: "https://github.com/yourusername/gocart",
    live: "https://gocart.vercel.app",
  },
  {
    title: "CMS Blog — Admin Dashboard",
    desc: "Content management system with admin panel, post control and role-based access.",
    category: "CMS Websites",
    image: "/images/cms.jpg",
    github: "https://github.com/yourusername/cms-blog",
    live: "https://cms-blog.vercel.app",
  },
  {
    title: "Brand Identity & Visual System",
    desc: "Complete branding system including logo, color palette and typography rules.",
    category: "Branding",
    image: "/images/branding.jpg",
    github: "https://github.com/yourusername/branding",
    live: "https://branding.vercel.app",
  },
 ];

 /* ========== Categories ============ */
 const categories = [
  "All",
  "Custom Websites",
  "CMS Websites",
  "Branding",
 ];

/* =======================
   Component
======================= */
function PortfolioComponents() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter(
          project => project.category === activeCategory
        );

  return (
    <>
    <section className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== Heading ===== */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Portfolio</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Selected projects showcasing modern UI, scalable architecture and
            real-world product thinking.
          </p>
        </div>

        {/* ===== Filters ===== */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  activeCategory === category
                    ? "bg-white text-black"
                    : "border border-gray-700 text-gray-300 hover:bg-white hover:text-black"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ===== Grid ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden bg-gray-900 border border-gray-800
              hover:border-emerald-500 transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 bg-black/70 opacity-0
                  group-hover:opacity-100 transition flex items-center justify-center gap-6"
                >
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white text-black
                    flex items-center justify-center hover:bg-emerald-500 hover:text-white transition"
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
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
                <span className="inline-block text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>    
    </>
  );
 }

 export default PortfolioComponents; 