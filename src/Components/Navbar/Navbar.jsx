import {  } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
 
 // ============ Navbar Components start =========== // 
 const Navbar = () => {
 // =========== Mobile menu state =========== // 
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 // ============ Smooth scroll to section =========== // 
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
 
 // ============ Navigations Links  =========== // 
  const navLinks = [
    { name: "Home", id: "Home" },
    { name: "About", id: "About" },
    { name: "Skills", id: "Skills" },
    { name: "Projects", id: "Projects" },
    { name: "Experience", id: "Experience" },
    { name: "Achievements", id: "Achievements" },
    { name: "Contact", id: "Contact" },
  ];

  return (
    <>
    <nav className="bg-[#1F2937] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex gap-5">
            <Link to="/"> <img className="w-12 h-12 pt-1.5 rounded-full" src="/images/zahid.jpg" alt="logo"/>
            </Link>
            <Link className="text-2xl font-extrabold mt-1.5 text-yellow-400" to="/" > Crafted By Jahidul
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex justify-center items-center space-x-7">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button onClick={() => scrollToSection(link.id)} className="py-2 px-3 text-gray-300 hover:text-white hover:underline hover:underline-offset-4 transition duration-300" >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none" >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <button key={link.name} onClick={() => {
                scrollToSection(link.id);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left rounded-md text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 transition duration-300">
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
    
    </>
  );
 };

 // ============ Exporting the Navbar Components end ============ //
 export default Navbar;
 //  jkadfndjkfmal;sdl,fkfsdsdf