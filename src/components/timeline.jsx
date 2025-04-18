import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const experiences = [
    {
      company: "Meta",
      role: "Incoming Software Engineer Intern",
      date: "June 2025 - August 2025",
      description: "Expected to work on software development, system design, and AI/ML-related projects",
      technologies: [""],
      logo: "/src/assets/icons/meta.png"
    },
    {
      company: "Mesa Historical Museum",
      role: "Software Developer",
      date: "January 2024 - Present",
      description: "I'm currently leading a team of 8 in developing an interactive touchscreen using React.js to be displayed at the entrance of the museum. I utilized Figma to design engaging user interfaces while adhering to accessibility standards. I also utilized Three.js to integrate animations and 3D models. I engineered exhibit features, implementing responsive button interfaces and custom logic for trivia systems.",
      technologies: ["React", "ThreeJS", "Figma"],
      logo: "/src/assets/icons/mesa.png"
    },
    {
      company: "Keep in School Shape - Research Project",
      role: "Research Intern",
      date: "August 2024 - Present",
      description: "Our team was awarded a $400,000 National Science Foundation grant to support student knowledge retention during breaks. As a research intern, I analyzed data from over 4,000 participant logs to evaluate program effectiveness and identify trends in user metrics. I also developed internal tools using Python for data cleaning, streamlining deployment processes, and automated student performance evaluation, which improved our  efficiency and accuracy in analyzing participant data.",
      technologies: ["Excel", "Python", "Pandas"],
      logo: "/src/assets/icons/kiss.png"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div id="experience" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-16">My Experience</h2>
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="relative mb-16"
            variants={itemVariants}
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-gray-200"></div>
            
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gray-900"></div>
            
            <div className="ml-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-900">{experience.role}</h3>
                    <div className="flex items-center gap-2">
                      <img 
                        src={experience.logo} 
                        alt={`${experience.company} logo`}
                        className="w-6 h-6 object-contain"
                      />
                      <p className="text-lg text-gray-600">{experience.company}</p>
                    </div>
                  </div>
                  <span className="text-gray-500">{experience.date}</span>
                </div>
                <p className="text-gray-600 mb-4 text-left">{experience.description}</p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;
