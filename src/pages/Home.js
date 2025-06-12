import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { User, ArrowRight, Sparkles } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Home = ({ mousePosition }) => {
  const { scrollY } = useScroll();
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  // Simplified parallax transforms
  const y1 = useTransform(scrollY, [0, 800], [0, -100]);
  const y2 = useTransform(scrollY, [0, 800], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setCursorPosition({ x, y });
    }
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.4, 0, 0.2, 1]
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center section-spacing container-padding relative overflow-hidden"
    >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(0, 122, 255, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-64 h-64 rounded-full opacity-8"
          style={{
            background: 'radial-gradient(circle, rgba(88, 86, 214, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Hero Card with Liquid Pressure Effect */}
        <motion.div
          style={{
            y: y1,
            opacity,
          }}
          className="mb-12"
        >
          <div
            ref={containerRef}
            className="relative max-w-3xl mx-auto"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Main Container with Dynamic Transform */}
            <motion.div
              className="relative overflow-hidden rounded-3xl"
              style={{
                transform: isHovering 
                  ? `perspective(1000px) rotateX(${(cursorPosition.y - 50) * 0.1}deg) rotateY(${(cursorPosition.x - 50) * 0.1}deg)`
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                transformStyle: 'preserve-3d',
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Liquid Distortion Background */}
              <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background: isHovering 
                    ? `radial-gradient(circle at ${cursorPosition.x}% ${cursorPosition.y}%, rgba(0, 122, 255, 0.15) 0%, rgba(88, 86, 214, 0.08) 30%, transparent 60%)`
                    : 'transparent',
                  transition: 'background 0.3s ease-out',
                }}
              />
              
              <GlassCard 
                className="py-16 lg:py-20 px-8 lg:px-12 liquid-glass relative" 
                hover={false}
              >
                <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center space-y-8">
                  {/* Title */}
                  <motion.h1
                    variants={itemVariants}
                    className="page-title tracking-tight"
                  >
                    Ilan Uzan
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    variants={itemVariants}
                    className="text-2xl md:text-3xl text-white/90 font-light tracking-tight"
                  >
                    Graphic Designer & Visual Storyteller
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    variants={itemVariants}
                    className="text-lg text-white/75 max-w-2xl leading-relaxed text-balance font-medium"
                  >
                    Creating compelling visual narratives that bridge creativity and functionality. 
                    Transforming complex ideas into elegant designs that inspire and engage audiences worldwide.
                  </motion.p>
                </motion.div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          style={{ y: y2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/projects">
            <motion.button
              className="button-primary px-10 py-4 rounded-2xl min-w-[200px] font-bold text-base"
              whileHover={{ 
                scale: 1.02, 
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.button>
          </Link>

          <Link to="/about">
            <motion.button
              className="button-secondary px-10 py-4 rounded-2xl min-w-[200px] font-bold text-base"
              whileHover={{ 
                scale: 1.02, 
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>About Me</span>
                <Sparkles className="w-4 h-4" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home; 