import React, { useState, useRef } from "react";
import { projects } from "../../content";


function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);

  return (
    <section id="projects" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-20 relative">
      {/* Heading */}
      <div className="text-white text-center mb-12">
        <h1 className="uppercase text-3xl font-extrabold underline underline-offset-8 decoration-purple-900">
          Projects
        </h1>
        <p className="opacity-60 text-lg font-bold mt-4">
          Browse my projects — responsive carousel experience.
        </p>
      </div>

     

      {/* Horizontal Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 py-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] xl:w-[340px] bg-gray-900 text-white rounded-xl  border border-gray-700 snap-center cursor-pointer transition-all duration-300 ease-linear
             hover:scale-[1.04] hover:shadow-xl hover:shadow-violet-800"
          >
            {/* Project Image */}
            <div className="h-40 bg-amber-200 rounded-t-xl flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Project Info */}
            <div className="p-4">
              <h1 className="text-lg sm:text-xl font-bold">{project.title}</h1>
              <p className="text-sm opacity-70 mt-2 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-purple-300 text-xs px-3 py-1 rounded-full font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <div>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="bg-gray-900 p-6 rounded-xl w-[90vw] max-w-xl text-white relative shadow-[0_0_20px_1px_rgba(130,69,236,0.5)]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 text-white text-2xl hover:text-purple-400"
              >
                ×
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-lg mb-4 w-full h-48 object-contain"
              />
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <p className="text-sm opacity-70 mt-2 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 mb-6">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#251f38] text-purple-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div> 

              <div className="flex flex-wrap gap-3">
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm font-semibold"
                >
                  🔗 Live Project
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-semibold"
                >
                  💻 Frontend
                </a>
                {selectedProject.githubBackend && (
                  <a
                    href={selectedProject.githubBackend}
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-semibold"
                  >
                    ⚙️ Backend
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Project;
