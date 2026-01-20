import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

 const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // ===== Smart Scroll Handler ======== // 
  const handleNavigation = (id) => {
    setIsMenuOpen(false);

    // ========== If already on homepage ========= // 
    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToSection(id);
      }, 300);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -80;
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", id: "Home" },
    { name: "About", id: "About" },
    { name: "Skills", id: "Skills" },
    { name: "Projects", id: "Projects" },
    { name: "Services", id: "Services" },
    { name: "Garments", id: "Garments" },
    { name: "Contact", id: "Contact" },
  ];

  return (  
    <>
    <nav className="sticky top-0 z-50 bg-[#020617]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/JA (3).png" alt="logo" className="w-10 h-10 rounded-full"/>
          <span className="text-lg font-semibold text-gray-200 hover:text-cyan-400 transition">
            Crafted By Jahidul
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button onClick={() => handleNavigation(link.id)}
                className="relative text-gray-300 hover:text-cyan-400 transition
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all">
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-gray-300 text-2xl">
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#020617] border-t border-gray-800 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className="block w-full text-left px-4 py-2 rounded-lg
              text-gray-300 hover:bg-gray-800 hover:text-cyan-400 transition">
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>   
    </>
  );
 };

 export default Navbar;
 //  adsjfjasjdfka