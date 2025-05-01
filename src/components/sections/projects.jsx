import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScrollBar from "../scrollbar";

const ProjectCard = [
  {
    id: 1,
    title: "Redux To-Do",
    description: "Fully Responsive To-Do App with Local Server",
    link: "https://redux-todo-tau-beryl.vercel.app/",
    useLang: ["ReactJS", "React-Redux", "TailwindCSS"],
  },
  {
    id: 2,
    title: "DisastersI/O",
    description:
      "E-Commerce Website fully Responsive Desktop & Mobile Build with ReactJS",
    link: "https://disasters-mauve.vercel.app/",
    useLang: ["ReactJS", "JavaScript", "TailwindCSS"],
  },
  {
    id: 3,
    title: "Governing-Docs",
    description:
      "Document Website fully Responsive Desktop & Mobile Build with ReactJS",
    link: "https://governing-docs-blush.vercel.app/",
    useLang: ["ReactJS", "JavaScript", "TailwindCSS"],
  },
  {
    id: 4,
    title: "Calculator",
    description: "Modern Calculator ",
    link: "https://claculator-eight.vercel.app/",
    useLang: ["ReactJS", "TypeScript", "TailwindCSS"],
  },
  {
    id: 5,
    title: "BMI Calculator",
    description: "BMI Count Calculator ",
    link: "https://bmicalculator-kappa-nine.vercel.app/",
    useLang: ["ReactJS", "TypeScript", "TailwindCSS"],
  },
  {
    id: 6,
    title: "WIZIA",
    description:
      "AI SDRs website fully Responsive Desktop & Mobile Device Both ",
    link: "https://wizia-zeta.vercel.app/",
    useLang: ["ReactJS", "JavaScript", "TailwindCSS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-20 ">
      <ScrollBar>
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8 text-center  bg-gradient-to-l from-[#0463fa] to-white bg-clip-text text-transparent leading-tight">
            Fetured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            {ProjectCard.map((project) => (
              <div
                key={project.id}
                className="rounded-xl text-start border border-white/10 hover:-translate-y-1 hover:border-[#0463fa]/30 p-6"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-400">{project.description}</p>

                {project.useLang && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.useLang.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-[#0463fa]/10 text-white px-3 py-1 rounded-full text-sm hover:bg-[#0463fa]/20 hover:shadow-lg transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.link}
                    className="text-[#0463fa] hover:text-[#0463fa]/80 transition-all"
                  >
                    View Projects <ChevronRightIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollBar>
    </section>
  );
};

export default Projects;
