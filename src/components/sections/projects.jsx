import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProjectCard = [
  {
    id: 1,
    title: "Redux To-Do",
    description: "Fully Responsive To-Do App with Local Server",
    link: "https://redux-todo-tau-beryl.vercel.app/",
  },
  {
    id: 2,
    title: "Redux To-Do",
    description: "Fully Responsive To-Do App with Local Server",
    link: "https://redux-todo-tau-beryl.vercel.app/",
  },
  {
    id: 3,
    title: "Redux To-Do",
    description: "Fully Responsive To-Do App with Local Server",
    link: "https://redux-todo-tau-beryl.vercel.app/",
  },
  {
    id: 4,
    title: "Redux To-Do",
    description: "Fully Responsive To-Do App with Local Server",
    link: "https://redux-todo-tau-beryl.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 ">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8 text-center  bg-gradient-to-l from-[#0463fa] to-white bg-clip-text text-transparent leading-tight">
          Fetured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {ProjectCard.map((project) => (
            <div key={project.id} className="rounded-xl text-start border border-white/10 hover:-translate-y-1 p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4 text-gray-400">
                {project.description}
              </p>
              <div>
                {["React", "React-Redux", "TailwindCSS"].map((skill) => (
                  <span className="  bg-[#0463fa]/10 text-white px-3 py-1 rounded-full text-sm hover:bg-[#0463fa]/20 hover:shadow-lg transition-all">
                    {skill}
                  </span>
                ))}
              </div>
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
    </div>
  );
};

export default Projects;
