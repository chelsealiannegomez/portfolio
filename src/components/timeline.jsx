import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import kiss from '../assets/icons/kiss.png';
import meta from '../assets/icons/meta.png';
import mesa from '../assets/icons/mesa.png';
import soda from '../assets/icons/soda.png';
import sm from '../assets/icons/sm.png';

const Timeline = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const experiences = [
    {
      company: "Meta",
      role: "Software Engineer Intern",
      date: "June 2025 - August 2025",
      description: "I built a data pipeline in Python with TensorFlow and PostgreSQL to handle large volumes of regulatory articles, ensuring reliable processing. I also developed a full-stack news aggregation platform with Next.js and TypeScript, using clustering algorithms to make information more accessible for teams. In addition, I improved test coverage for an ads tracking system, helping strengthen code quality and maintainability.",
      technologies: ["Python", "TensorFlow", "NextJS", "TypeScript"],
      logo: meta 
    },
    {
      company: "Mesa Historical Museum",
      role: "Software Developer",
      date: "January 2024 - Present",
      description: "I led a team of eight to develop an interactive museum touchscreen using React.js, building a component-based architecture with controlled state management. I translated Figma designs into responsive, ADA-compliant interfaces and engineered exhibit features like trivia systems with custom logic. To create engaging experiences, I integrated 3D models and animations using Three.js, optimizing asset loading and scene updates for smooth, high-performance interaction.",
      technologies: ["React", "ThreeJS", "Figma"],
      logo: mesa 
    },
    {
      company: "Keep in School Shape - Research Project",
      role: "Research Intern",
      date: "August 2024 - Present",
      description: "Our team was awarded a $400,000 National Science Foundation grant to support student knowledge retention during breaks. As a research intern, I analyzed data from over 4,000 participant logs to evaluate program effectiveness and identify trends in user metrics. I also developed internal tools using Python for data cleaning, streamlining deployment processes, and automated student performance evaluation, which improved our   efficiency and accuracy in analyzing participant data.",
      technologies: ["Excel", "Python", "Pandas"],
      logo: kiss,
    },
    {
      company: "Software Developers Association",
      role: "Technical Officer",
      date: "November 2023 - Present",
      description: "As a technical officer of the largest engineering organization in ASU, I prepare and present engaging workshops on software development topics such as HTML, CSS (Tailwind), JavaScript, Flask, AI APIs, and Streamlit. I'm also working on internal tools to automate our marketing tasks, furthering the impact of our club. I work with fellow officers to deliver weekly events for all our members, fostering an inclusive and engaged community.",
      technologies: ["Flask", "Google Gemini API", "Streamlit"],
      logo: soda,
    },
    {
      company: "SM Investments Corporation",
      role: "Cybersecurity Intern",
      date: "July 2024 - August 2024",
      description: "As a cybersecurity intern in the largest company in the Philippines with a market cap of $20 billon, I monitored the online movement of 55,000+ employees and company servers, utilizing tools such as ManageEngine, Trend Vision One, Cloudflare, and Office 365 Microsoft Defender.",
      technologies: ["ManageEngine", "Trend Vision One", "Cloudflare"],
      logo: sm,
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
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div id="experience" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center">My Experience</h2>
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: false }}
        style={{ y }}
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
