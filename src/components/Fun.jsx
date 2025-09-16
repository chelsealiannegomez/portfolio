import React, { useState } from 'react';
import { motion } from 'framer-motion';
import violin from '../assets/violin.JPG';
import taekwondo from '../assets/taekwondo.JPG';
import cookies from '../assets/cookies.png';
import rocco from '../assets/rocco.PNG';
import rabbit from '../assets/rabbit.png';
import val from '../assets/val.jpg';

const Fun = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const interests = [
    {
      id: 1,
      title: "Violin",
      subtitle: "Classical Music",
      description: "I started playing the violin in 2014 and have been playing ever since! I've played as a soloist, concertmaster, and first violinist in orchestras in the Philippines and in the United States. My favorite violin concerto is Sibelius' Violin Concerto in D minor, specifically the recording by Ray Chen.",
      image: violin,
      stickyNote: "Practice daily!",
      color: "bg-rose-50"
    },
    {
      id: 2,
      title: "Taekwondo",
      subtitle: "3rd Dan Black Belt",
      description: "At two years old, I started my journey in Taekwondo. I turned first dan black belt at 12 years old, second dan black belt at 14 years old, and third dan black belt at 17 years old. I was also team captain of my high school's taekwondo team! One of my inspirations for my fighting style is two-time Olympic champion Panipak Wongpattanakit.",
      image: taekwondo,
      stickyNote: "Discipline",
      color: "bg-amber-50"
    },
    {
      id: 3,
      title: "Baking and Cooking",
      subtitle: "I <3 food",
      description: "I love cooking and baking! I especially love eating what I make and sharing it with others. I cook Asian food like bulgogi and lumpia, and I like baking bread, cookies, brownies, and muffins. I also love watching MasterChef!",
      image: cookies,
      stickyNote: "Food food food",
      color: "bg-stone-50"
    },
    {
      id: 4,
      title: "Music Taste",
      subtitle: "Chill indie pop",
      description: "My current top artists are Rocco and grentperez! I also like OPM (Original Pilipino Music) like songs by Earl Agustin, Adie, and Cup of Joe.",
      image: rocco,
      stickyNote: "🎵🎵🎵",
      color: "bg-green-50"
    },
    {
      id: 5,
      title: "Rabbit Lover",
      subtitle: "Four bunnies!!",
      description: "I rescued two bunnies (then they became two more) in 2020! They are now 4 and 5 years old and they eat a lot of Timothy Hay. The one in the picture is called Sputnik and he's the fattest of them all.",
      stickyNote: "Nom nom nom",
      image: rabbit,
      color: "bg-blue-50"
    },
    {
      id: 6,
      title: "Games with Friends",
      subtitle: "Valorant, Lethal Company, and more",
      description: "In my free time, I like to play games with my friends! It's a great way to spend time with them even if we're far apart. I peaked Diamond 3 in Valorant :D",
      image: val,
      stickyNote: "FPS games",
      color: "bg-purple-50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div id="interests" className="py-24 px-4 bg-white border-t border-stone-200 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-light text-stone-800 mb-6">
            Beyond the Code
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-0.5 bg-rose-300"></div>
            <div className="mx-4 text-2xl text-rose-400">✧</div>
            <div className="w-16 h-0.5 bg-rose-300"></div>
          </div>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            The disciplines that shape my approach to problem-solving and creativity
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {interests.map((interest, index) => (
            <motion.div
              key={interest.id}
              className="relative group"
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(interest.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className={`${interest.color} p-4 shadow-lg hover:shadow-xl transition-all duration-500 relative`}>
                <div className="absolute -top-2 -right-2 w-6 h-8 bg-stone-300 rounded-sm transform rotate-12 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-6 border-2 border-stone-400 rounded-sm"></div>
                </div>

                <div className="relative mb-4">
                  <img
                    src={interest.image}
                    alt={interest.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 text-2xl opacity-80">
                    {interest.icon}
                  </div>
                </div>

                <div className="px-2 pb-2">
                  <h3 className="text-xl font-medium text-stone-800 mb-1">
                    {interest.title}
                  </h3>
                  <p className="text-sm text-stone-500 uppercase tracking-wide mb-3">
                    {interest.subtitle}
                  </p>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <motion.div
                  className={`absolute -top-3 -left-3 ${interest.color} p-2 rounded-sm shadow-md text-xs font-medium text-stone-700 transform -rotate-6`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: hoveredCard === interest.id ? 1 : 0.7,
                    scale: hoveredCard === interest.id ? 1.05 : 1
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {interest.stickyNote}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Fun;
