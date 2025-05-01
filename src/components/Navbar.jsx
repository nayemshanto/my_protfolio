import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[rgba(10,10,10,0.8)] shadow-lg border-b border-white/10 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-2xl font-bold text-white">
            nayem.
          </NavLink>
          <div className="hidden md:flex items-center space-x-8 ">
            <NavLink
              to="/"
              className=" text-gray-300 hover:text-white transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className=" text-gray-300 hover:text-white transition-colors"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className=" text-gray-300 hover:text-white transition-colors"
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className=" text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-transparent shadow-lg flex flex-col items-start px-6 py-8 gap-6 md:hidden z-50">
              <NavLink
                to="/"
                className=" text-gray-300 hover:text-white transition-colors"
              >
                Home
              </NavLink>
              <NavLink
                to="/?about"
                className=" text-gray-300 hover:text-white transition-colors"
              >
                About
              </NavLink>
              <NavLink
                to="/?services"
                className=" text-gray-300 hover:text-white transition-colors"
              >
                Services
              </NavLink>
              <NavLink
                to="/?contact"
                className=" text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </NavLink>
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
