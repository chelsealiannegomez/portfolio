import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import nurse from '../assets/nurse.png';
import legends from '../assets/legends.png';
import homework from '../assets/homework.png';


const Projects = () => {
  const projects = [
    {
      title: "Nurse Assist",
      description: "A full-stack web app using Flask, React, MySQL, and Raspberry Pi, enabling real-time patient monitoring and prioritized care through a centralized patient monitoring system designed for healthcare progessionals.",
      technologies: ["Flask", "React", "MySQL", "Raspberry Pi"],
      image: nurse,
      github: "https://github.com/Nairinn/Nurse-Assist",
      color: "bg-rose-100",
      note: "Healthcare + IoT"
    },
    {
      title: "Nine-90 Navigator",
      description: "A website that allows the user to search through data from thousands of 990 tax returns of nonprofits around the nation. Created for Legends Animated, a nonprofit that provides collaborative opportunities for animation.",
      technologies: ["Svelte", "Elasticsearch"],
      image: legends,
      github: "https://github.com/2023-opportunity-hack/nine90navigator",
      color: "bg-amber-100",
      note: "Search + Data"
    },
    {
      title: "Homework Helper",
      description: "Presents steps and hints towards homework questions, encouraging learning instead of copying. Uses LaTeX formatting for math equations and variables, ensuring improved readability for users.",
      technologies: ["React", "Flask", "Google Gemini API"],
      image: homework,
      github: "https://github.com/chelsealiannegomez/homework-helper",
      color: "bg-stone-100",
      note: "EdTech"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div id="projects" className="py-24 px-4 bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-light text-stone-900 text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Card */}
              <div className="relative bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300">
                {/* Card body */}
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-3 gap-6 items-start">
                    {/* Text */}
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-medium text-stone-900 mb-3">{project.title}</h3>
                      <p className="text-stone-700 mb-4 leading-relaxed text-sm md:text-base">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs border border-stone-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-stone-700 hover:text-stone-900 transition-colors"
                      >
                        <FaGithub className="text-xl" />
                        <span>View on GitHub</span>
                      </a>
                    </div>

                    {/* Image */}
                    <div className="md:col-span-1">
                      <div className="relative aspect-video overflow-hidden border border-stone-200">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 