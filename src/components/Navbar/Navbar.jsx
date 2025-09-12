import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuitems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];

  const handleMenuItemclick = (SectionId) => {
    setActiveSection(SectionId);
    setIsOpen(false);
    const section = document.getElementById(SectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 30);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-30 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] py-4 flex justify-evenly items-center ${isScroll ? "bg-[#050414] bg-opacity-70 backdrop-blur-md shadow-md" : "bg-transparent"}`}>


      <div className='text-xl font-bold'>
        <span className="text-[#8245ec]">&lt;</span>
        <span className="text-white">Ashutosh</span>
        <span className="text-[#8245ec]">/</span>
        <span className="text-white">Gaur</span>
        <span className="text-[#8245ec]">&gt;</span>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-6 text-white'>
        {menuitems.map(item => (
          <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-blue-500" : ""}`}>
            <a onClick={() => handleMenuItemclick(item.id)}>{item.label}</a>
          </li>
        ))}
      </ul>


      <div className='hidden md:flex gap-6 text-xl text-white'>

        <a href='https://github.com/Ashutosh-gaur'>
          <FaGithub className='hover:text-[#8245ec] cursor-pointer' />
        </a>
        <a href="https://www.linkedin.com/in/ashutosh-gaur-23863a2a2/">

          <FaLinkedinIn className='hover:text-[#8245ec] cursor-pointer' />
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-40">
        {isOpen ? (
          <FiX className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(false)} />
        ) : (
          <FiMenu className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute  top-16 left-4 right-4 z-50 bg-[#050414]/10 bg-opacity-90 rounded-xl px-6 py-6 text-white flex flex-col items-center gap-4 backdrop-blur-xl  ">
          <ul className="space-y-2 w-full text-center">
            {menuitems.map(item => (
              <li key={item.id} className={`cursor-pointer ${activeSection === item.id ? 'text-[#8245ec]' : 'hover:text-[#8245ec] transition-all duration-200'}`}>
                <a onClick={() => handleMenuItemclick(item.id)}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-6 mt-4">
            <a href="https://github.com/Ashutosh-gaur">
              <FaGithub className="hover:text-[#8245ec] cursor-pointer" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ashutosh-gaur-23863a2a2/">
              <FaLinkedinIn className="hover:text-[#8245ec] cursor-pointer" size={24} />
            </a>


          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
