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
      github: "https://github.com/Nairinn/Nurse-Assist"
    },
    {
      title: "Nine-90 Navigator",
      description: "A website that allows the user to search through data from thousands of 990 tax returns of nonprofits around the nation. Created for Legends Animated, a nonprofit that provides collaborative opportunities for animation.",
      technologies: ["Svelte", "Elasticsearch"],
      image: legends,
      github: "https://github.com/2023-opportunity-hack/nine90navigator"
    },
    {
      title: "Homework Helper",
      description: "Presents steps and hints towards homework questions, encouraging learning instead of copying. Uses LaTeX formatting for math equations and variables, ensuring improved readability for users.",
      technologies: ["React", "Flask", "Google Gemini API"],
      image: homework,
      github: "https://github.com/chelsealiannegomez/homework-helper"
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
    <div id="projects" className="py-20 px-4 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <FaGithub className="text-xl" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 