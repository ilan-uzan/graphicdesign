import React from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import profileImage from '../assets/images/profile.jpg';

const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Senior Graphic Designer',
      company: 'Creative Studio',
      description: 'Leading visual design projects for international brands, focusing on digital experiences and brand identity.',
    },
    {
      year: '2022',
      title: 'Freelance Designer',
      company: 'Independent',
      description: 'Expanded client base working with startups and established companies on branding and digital design.',
    },
    {
      year: '2025',
      title: 'Full Stack Developer Student',
      company: 'Developers Institute TLV',
      description: 'Learning full stack development with a focus on JavaScript, React, Node.js, and MongoDB.',
    },
    {
      year: '2023',
      title: 'Level A Ordnance Fighter Jet Technician',
      company: 'Israel Air Force',
      description: 'Specializing in maintenance, diagnostics, and safety checks on F-16i fighter jet weapon systems.',
    },
    {
      year: '2022',
      title: 'Graduated',
      company: 'Vanier College',
      description: 'DEC in Social Sciences with Mathematic.'
    },
  ];

  const skills = [
    { name: 'Brand Identity', level: 95 },
    { name: 'Digital Design', level: 92 },
    { name: 'Typography', level: 88 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Print Design', level: 90 },
    { name: 'Motion Graphics', level: 78 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen section-spacing container-padding"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
          <h1 className="page-title mb-4 lg:mb-6 tracking-tight">
            About Me
          </h1>
          <p className="text-lg lg:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed px-4">
            I'm a passionate graphic designer from Israel, dedicated to creating meaningful visual experiences 
            that connect brands with their audiences through thoughtful design and creative innovation.
          </p>
        </motion.div>

        {/* Personal Story */}
        <motion.div variants={itemVariants} className="mb-16 lg:mb-20">
          <GlassCard className="card-spacing rounded-3xl liquid-glass" hover={false}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-clean mb-4 lg:mb-6 tracking-tight">
                  My Journey
                </h2>
                <div className="space-y-4 lg:space-y-5 text-white/75 leading-relaxed text-sm lg:text-base">
                  <p>
                    Born and raised in Israel, I discovered my passion for design during my military service, 
                    where I first explored the power of visual communication in connecting with diverse audiences.
                  </p>
                  <p>
                    After completing my service, I pursued my Bachelor of Fine Arts at the prestigious 
                    Bezalel Academy of Arts and Design in Jerusalem, where I honed my skills in visual 
                    communication and developed a deep appreciation for the intersection of art and technology.
                  </p>
                  <p>
                    Today, I combine traditional design principles with cutting-edge digital techniques 
                    to create compelling visual narratives that resonate with global audiences.
                  </p>
                </div>
              </div>
              <div className="relative">
                <motion.div 
                  className="aspect-square bg-gradient-to-br from-accent-primary/15 via-accent-secondary/10 to-accent-tertiary/15 rounded-3xl overflow-hidden relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Profile Image */}
                  <div className="w-full h-full relative">
                    <img 
                      src={profileImage} 
                      alt="Ilan Uzan - Graphic Designer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Hide image and show fallback
                        e.target.style.display = 'none';
                        const fallback = e.target.parentElement.querySelector('.fallback-content');
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    {/* Fallback content */}
                    <div className="fallback-content absolute inset-0 flex items-center justify-center text-white/60 text-center" style={{display: 'none'}}>
                      <div>
                        <div className="mb-4 p-6 rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.12]">
                          <Palette className="w-12 h-12 lg:w-16 lg:h-16 text-white/80 mx-auto" />
                        </div>
                        <div className="text-base lg:text-lg font-semibold">Ilan Uzan</div>
                        <div className="text-sm text-white/50 mt-1">Graphic Designer</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={itemVariants} className="mb-16 lg:mb-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-clean text-center mb-8 lg:mb-12 tracking-tight">
            Professional Timeline
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary opacity-50" />
            
            <div className="space-y-6 lg:space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start space-x-4 lg:space-x-6"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="relative z-10 w-3 h-3 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex-shrink-0 mt-2"
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Timeline content */}
                  <GlassCard className="flex-1 p-4 lg:p-6 rounded-2xl" hover={false}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 lg:mb-3">
                      <h3 className="text-lg lg:text-xl font-bold text-clean mb-1 md:mb-0">
                        {item.title}
                      </h3>
                      <span className="text-sm lg:text-base font-semibold text-accent-primary">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-sm lg:text-base font-semibold text-white/85 mb-2">
                      {item.company}
                    </p>
                    <p className="text-white/70 leading-relaxed text-xs lg:text-sm">
                      {item.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl lg:text-3xl font-bold text-clean text-center mb-8 lg:mb-12 tracking-tight">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <GlassCard className="p-4 lg:p-6 rounded-2xl" hover={false}>
                  <div className="flex justify-between items-center mb-2 lg:mb-3">
                    <h3 className="text-base lg:text-lg font-bold text-clean">
                      {skill.name}
                    </h3>
                    <span className="text-sm lg:text-base font-semibold text-accent-primary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-white/[0.08] rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About; 