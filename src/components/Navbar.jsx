import React, { useEffect, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (section) =>
    `text-gray-300 hover:text-white transition-colors ${
      activeSection === section ? "text-white font-bold border-b-2 border-white" : ""
    }`;

  return (
    <nav className="fixed top-0 w-full bg-[rgba(10,10,10,0.8)] shadow-lg border-b border-white/10 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-2xl font-bold text-white">
            nayem.
          </a>
          <div className="hidden md:flex items-center space-x-8 ">
            <a
              href="#home"
              className={linkClasses("home")}
            >
              Home
            </a>
            <a
              href="#about"
              className={linkClasses("about")}
            >
              About
            </a>
            <a
              href="#projects"
              className={linkClasses("projects")}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={linkClasses("contact")}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full  bg-[rgba(10,10,10,100)] shadow-lg flex flex-col items-start px-6 py-8 gap-6 md:hidden z-50">
              <a
                href="#home"
                className={linkClasses("home")}
              >
                Home
              </a>
              <a
                href="#about"
                className={linkClasses("about")}
              >
                About
              </a>
              <a
                href="#projects"
                className={linkClasses("projects")}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={linkClasses("contact")}
              >
                Contact
              </a>
            </div>
          )}
          {/* Toggle Button */}
          <div className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Button variant="none">
              {isOpen ? (
                <CloseIcon className="h-5 w-5 text-white " />
              ) : (
                <MenuIcon className="h-5 w-5 text-white" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
