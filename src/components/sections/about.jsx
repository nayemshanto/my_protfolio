import React from "react";
import WorkIcon from '@mui/icons-material/Work';

const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "Bootstrap",
    "Tailwind CSS",
    "Material UI",
    "Redux",
    "Next.js",
    "TypeScript",
  ];
  const designSkills = [
    "Figma",
    "Adobe XD",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
  ];
  return (
    <div className="mih-h-screen flex flex-col justify-center items-center py-20">
      <div className="max-w-4xl mx-auto px-4 ">
        <h2 className="text-4xl font-bold mb-8 text-center  bg-gradient-to-l from-[#0463fa] to-white bg-clip-text text-transparent leading-tight">
          About Me
        </h2>
        <div className="rounded-lg p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            I’m a passionate front-end developer with a strong eye for design
            and attention to detail. I specialize in building responsive,
            accessible, and user-centric web applications using HTML, CSS,
            Tailwind, Bootstrap, JavaScript, Typescript and modern frameworks
            like React. I love turning ideas into interactive digital
            experiences and continuously improving my skills to stay current
            with evolving web technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <span className="  bg-[#0463fa]/10 text-white px-3 py-1 rounded-full text-sm hover:bg-[#0463fa]/20 hover:shadow-lg transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Graphic Design</h3>
              <div className="flex flex-wrap gap-2">
                {designSkills.map((skill) => (
                  <span className="bg-[#0463fa]/10 text-white px-3 py-1 rounded-full text-sm hover:bg-[#0463fa]/20 hover:shadow-lg transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg mt-4 p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4"><WorkIcon/> Work Experience</h3>
          <li className="text-gray-300">Frondend Developer at Hablu-Programmer (2024 - Present)</li>
          <li className="text-gray-300">Graphic Designer at Fiverr (2022-Present)</li>
          <li className="text-gray-300">1k+ Projects Completed</li>
          <li className="text-gray-300">Happy Client's</li>
          <></>
        </div>
      </div>
    </div>
  );
};

export default About;
