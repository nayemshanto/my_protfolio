import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/loading";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";

import About from "./components/sections/about";
import Projects from "./components/sections/projects";
import Contact from "./components/sections/contact";

function App() {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <>
      {!isLoad && <LoadingScreen onComplete={() => setIsLoad(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoad ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
