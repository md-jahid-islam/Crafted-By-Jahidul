import { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp,} from "react-icons/fa";
 import { Mail } from "lucide-react";
 import { Link } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";

 const FooterComponents = () => {
  const email = "jahidulislamwebbd@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
    <footer className="bg-[#0f172a] text-gray-400 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">

          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-sm md:text-base font-semibold text-white">
              © 2024–2026 All rights reserved.
            </h2>
          </div>

          {/* Middle - Links */}
          <div>
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm md:text-base font-medium text-white justify-center">
              <li>
                <Link className="hover:text-cyan-400 transition" to="/Service">
                  Solutions
                </Link>
              </li>
              <li>
                <Link className="hover:text-cyan-400 transition" to="/Process">
                  Process
                </Link>
              </li>
              <li>
                <Link className="hover:text-cyan-400 transition" to="/FQA">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Right - Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2.5 text-xl md:text-2xl">
            <a href="https://www.linkedin.com/in/jahidul-islam-a5021b325" target="_blank" rel="noreferrer"className="hover:text-cyan-400 transition" >
              <FaLinkedin />
            </a>

            <a href="https://www.instagram.com/jahidulfsdev/" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition">
              <FaInstagram />
            </a>

            <a href="https://www.facebook.com/jahidul.islam.98621/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>

            <a href="https://github.com/md-jahid-islam" target="_blank" rel="noreferrer" className="hover:text-gray-100 transition" >
              <FaGithub />
            </a>

            {/* Email Copy */}
            <button onClick={handleCopyEmail} className="relative hover:text-cyan-400 transition">
              <Mail />
              {copied && (
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-cyan-400 whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>
                {/* Email */}          
            <div className="flex items-center gap-3">
            {/* Email Icon Only */}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jahidulislamwebbd@gmail.com&su=Project%20Discussion&body=Hello%20Jahidul,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.%0D%0A%0D%0AThanks" target="_blank" rel="noopener noreferrer" aria-label="Send Email via Gmail" className="relative group text-blue-400 text-xl hover:text-blue-500 transition">
            <TfiEmail />
           {/* Tooltip */}
           <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
            Send Email
           </span>
             </a>
              </div>
            <a href="https://wa.me/message/O3CTLULQDASLC1" target="_blank" rel="noreferrer" className="hover:text-green-400 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>
      </div>
    </footer>
    </>
  );
 };

 export default FooterComponents;
