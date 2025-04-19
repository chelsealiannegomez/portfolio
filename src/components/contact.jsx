import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Get in Touch
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="space-y-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out for collaborations or just a friendly hello. I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <a
                href="https://github.com/chelsealiannegomez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-[#4078c0] transition-colors text-lg group"
              >
                <FaGithub className="text-2xl group-hover:text-[#4078c0]" />
                <span><i>chelsealiannegomez</i> on GitHub</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/chelsea-lianne-gomez-0416b9247/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-[#0077b5] transition-colors text-lg group"
              >
                <FaLinkedin className="text-2xl group-hover:text-[#0077b5]" />
                <span><i>Chelsea Lianne Gomez</i> on LinkedIn</span>
              </a>
              
              <a
                href="mailto:chelsealiannegomez@gmail.com"
                className="flex items-center gap-4 text-gray-700 hover:text-[#ea4335] transition-colors text-lg group"
              >
                <FaEnvelope className="text-2xl group-hover:text-[#ea4335]" />
                <span><i>chelsealiannegomez@gmail.com</i> on Email</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 