import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Home = ({ mousePosition }) => {
  const { scrollY } = useScroll();
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  // Button hover states and cursor positions
  const [isHoveringButton1, setIsHoveringButton1] = useState(false);
  const [isHoveringButton2, setIsHoveringButton2] = useState(false);
  const [button1CursorPosition, setButton1CursorPosition] = useState({ x: 0, y: 0 });
  const [button2CursorPosition, setButton2CursorPosition] = useState({ x: 0, y: 0 });
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  
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

  const handleButton1MouseMove = (e) => {
    if (button1Ref.current) {
      const rect = button1Ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setButton1CursorPosition({ x, y });
    }
  };

  const handleButton2MouseMove = (e) => {
    if (button2Ref.current) {
      const rect = button2Ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setButton2CursorPosition({ x, y });
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
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  background: isHovering 
                    ? `radial-gradient(circle at ${cursorPosition.x}% ${cursorPosition.y}%, rgba(0, 122, 255, 0.08) 0%, rgba(88, 86, 214, 0.04) 30%, transparent 60%)`
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
            <div
              ref={button1Ref}
              className="relative"
              onMouseMove={handleButton1MouseMove}
              onMouseEnter={() => setIsHoveringButton1(true)}
              onMouseLeave={() => setIsHoveringButton1(false)}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  transform: isHoveringButton1 
                    ? `perspective(1000px) rotateX(${(button1CursorPosition.y - 50) * 0.08}deg) rotateY(${(button1CursorPosition.x - 50) * 0.08}deg)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                  transformStyle: 'preserve-3d',
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Liquid Distortion Background for Button 1 */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none rounded-2xl"
                  style={{
                    background: isHoveringButton1 
                      ? `radial-gradient(circle at ${button1CursorPosition.x}% ${button1CursorPosition.y}%, rgba(0, 122, 255, 0.12) 0%, rgba(88, 86, 214, 0.06) 40%, transparent 70%)`
                      : 'transparent',
                    transition: 'background 0.3s ease-out',
                  }}
                />
                
                <motion.button
                  className="button-primary px-10 py-4 rounded-2xl min-w-[200px] font-bold text-base relative"
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
              </motion.div>
            </div>
          </Link>

          <Link to="/about">
            <div
              ref={button2Ref}
              className="relative"
              onMouseMove={handleButton2MouseMove}
              onMouseEnter={() => setIsHoveringButton2(true)}
              onMouseLeave={() => setIsHoveringButton2(false)}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  transform: isHoveringButton2 
                    ? `perspective(1000px) rotateX(${(button2CursorPosition.y - 50) * 0.08}deg) rotateY(${(button2CursorPosition.x - 50) * 0.08}deg)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                  transformStyle: 'preserve-3d',
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Liquid Distortion Background for Button 2 */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none rounded-2xl"
                  style={{
                    background: isHoveringButton2 
                      ? `radial-gradient(circle at ${button2CursorPosition.x}% ${button2CursorPosition.y}%, rgba(175, 82, 222, 0.12) 0%, rgba(88, 86, 214, 0.06) 40%, transparent 70%)`
                      : 'transparent',
                    transition: 'background 0.3s ease-out',
                  }}
                />
                
                <motion.button
                  className="button-secondary px-10 py-4 rounded-2xl min-w-[200px] font-bold text-base relative"
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
              </motion.div>
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home; 