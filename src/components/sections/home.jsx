import React from "react";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [text] = useTypewriter({
    words: [" Designer", " Developer", "Programmer!"],
    loop: true,
  });

  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-7xl font-bold  text-center  bg-gradient-to-l from-[#0463fa] to-white bg-clip-text text-transparent leading-tight">
          Hi, i'm Nayem
        </h1>
        <p className="w-2/5 text-center  my-5 text-gray-400">
          "Front-end developer skilled in HTML, CSS, JavaScript, and modern
          frameworks like React. I build clean, responsive, and user-friendly
          web interfaces."
        </p>
        <p className="text-xl text-white font-semibold h-10">
          {text}
          <Cursor cursorStyle=" >" />
        </p>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
