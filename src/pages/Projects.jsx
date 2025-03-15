import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      shortDesc: "A full-featured online shopping platform",
      fullDesc: "Built a complete e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      shortDesc: "Collaborative task tracking system",
      fullDesc: "Developed a real-time task management application with features like task assignment, progress tracking, and team collaboration using React and Firebase.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      shortDesc: "Real-time weather monitoring",
      fullDesc: "Created a weather dashboard that provides real-time weather information, forecasts, and interactive maps using React and OpenWeather API.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                onClick={() => setSelectedId(project.id)}
                className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.shortDesc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedId && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              >
                <motion.div
                  layoutId={`project-${selectedId}`}
                  className="bg-white rounded-lg max-w-2xl w-full p-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  {(() => {
                    const project = projects.find((p) => p.id === selectedId);
                    if (!project) return null;
                    return (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-lg mb-6"
                        />
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h2>
                        <p className="text-gray-600 mb-6">{project.fullDesc}</p>
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Technologies</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:text-blue-800"
                          >
                            <ExternalLink size={20} className="mr-1" />
                            Live Demo
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-gray-900"
                          >
                            <Github size={20} className="mr-1" />
                            Source Code
                          </a>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;