import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/loading";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/sections/about";

function App() {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <>
      <BrowserRouter>
        {!isLoad && <LoadingScreen onComplete={() => setIsLoad(true)} />}

        <div
          className={`min-h-screen transition-opacity duration-700 ${
            isLoad ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}
        >
          <Navbar />
         
            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> */}
            <Home/>
            <About/>
            
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
