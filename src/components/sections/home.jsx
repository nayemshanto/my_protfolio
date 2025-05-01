import React from "react";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
import ScrollBar from "../scrollbar";

const Home = () => {
  const [text] = useTypewriter({
    words: [" Designer", " Developer", "Programmer!"],
    loop: true,
  });

  return (
    <section id="home" className="min-h-screen flex justify-center items-center relative">
      <ScrollBar>
        <div className="flex flex-col items-center justify-center ">
          <h1 className=" text-4xl md:text-7xl font-bold  text-center  bg-gradient-to-l from-[#0463fa] to-white bg-clip-text text-transparent leading-tight">
            Hi, i'm Nayem
          </h1>
          <p className="w-4/5 md:w-2/5 text-center  my-5 text-gray-400">
            "Front-end developer skilled in HTML, CSS, JavaScript, and modern
            frameworks like React. I build clean, responsive, and user-friendly
            web interfaces."
          </p>
          <p className="text-xl text-white font-semibold h-10">
            {text}
            <Cursor cursorStyle=" >" />
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#projects" className="bg-[#0463fa] text-white py-3 px-6 font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,2460,0.5)] rounded-lg ">View Projects</a>
            
            <a href="#contact" className="border border-[#0463fa]/50 text-[#0463fa] py-3 px-6 font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,2460,0.2)] rounded-lg ">Contact Me</a>

          </div>
        </div>
      </ScrollBar>
    </section>
  );
};

export default Home;
