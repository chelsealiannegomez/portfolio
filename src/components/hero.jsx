import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import herowebm from '../assets/hero.webm';

const Hero = ({ onVideoLoaded }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Software Developer',
        'Problem Solver',
        'Computer Science Major',
        'Economics Minor',
        'Violinist',
        'Taekwondo 3rd Dan Blackbelt',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToExperience = (e) => {
    e.preventDefault();
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={onVideoLoaded}
          onCanPlayThrough={onVideoLoaded}
        >
          <source src={herowebm} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/10 p-12 rounded-lg shadow-lg"
        >
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-2xl md:text-3xl text-white mb-2">Hi, I'm</h3>
            <h1 className="text-6xl md:text-7xl font-bold text-white font-opensans">
              Chelsea Lianne Gomez
            </h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8 h-8"
          >
            <span ref={typedRef}></span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4 mb-8"
          >
            <a
              href="#experience"
              onClick={scrollToExperience}
              className="px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors border border-white/30"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="w-24 h-1 bg-white/50 mx-auto mb-4"></div>
            <p className="text-sm text-white/80">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
