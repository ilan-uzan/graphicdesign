import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Home = ({ mousePosition }) => {
  const { scrollY } = useScroll();

  

  
  // Simplified parallax transforms
  const y1 = useTransform(scrollY, [0, 800], [0, -100]);
  const y2 = useTransform(scrollY, [0, 800], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);



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
          <div className="relative max-w-3xl mx-auto">
            <GlassCard 
              className="py-16 lg:py-20 px-8 lg:px-12 relative" 
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
                    Full Stack Engineer and Entrepreneur
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    variants={itemVariants}
                    className="text-lg text-white/75 max-w-2xl leading-relaxed text-balance font-medium"
                  >
                    Building scalable applications that merge innovation and practicality. Turning complex challenges into seamless digital solutions that empower people and businesses worldwide.
                  </motion.p>

                  {/* Action Buttons */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                  >
                    <Link to="/projects" className="block">
                      <motion.button
                        className="button-primary px-10 py-4 rounded-2xl min-w-[200px] font-bold text-base relative overflow-hidden"
                        whileHover={{ 
                          scale: 1.02, 
                          y: -2,
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                      >
                        <span className="flex items-center justify-center space-x-2 relative z-10">
                          <span>View My Work</span>
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </motion.button>
                    </Link>

                    <Link to="/about" className="block">
                      <motion.button
                        className="button-secondary px-10 py-4 rounded-2xl min-w-[200px] font-bold text-base relative overflow-hidden"
                        whileHover={{ 
                          scale: 1.02, 
                          y: -2,
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                      >
                        <span className="flex items-center justify-center space-x-2 relative z-10">
                          <span>About Me</span>
                          <Sparkles className="w-4 h-4" />
                        </span>
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
            </GlassCard>
          </div>
        </motion.div>

        {/* GitHub Contribution Graph */}
        <motion.div
          variants={itemVariants}
          style={{ y: y2 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-6 lg:p-8 rounded-3xl relative" hover={false}>
              <div className="text-center mb-6">
                <h2 className="text-xl lg:text-2xl font-bold text-clean mb-2">
                  My GitHub Activity
                </h2>
                <p className="text-white/70 text-sm lg:text-base">
                  A visual representation of my coding contributions and activity
                </p>
              </div>
              
              {/* GitHub Contribution Graph */}
              <div className="flex justify-center">
                <div className="bg-gray-900/50 rounded-2xl p-4 lg:p-6 border border-white/10">
                  <img
                    src="https://ghchart.rshah.org/2A9D8F/ilan-uzan"
                    alt="GitHub Contribution Graph"
                    className="w-full max-w-4xl h-auto rounded-xl"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(42, 157, 143, 0.3))',
                    }}
                  />
                </div>
              </div>
              
              <div className="text-center mt-4">
                <a
                  href="https://github.com/ilan-uzan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-accent-primary hover:text-accent-primary/80 transition-colors duration-200 text-sm lg:text-base"
                >
                  <span>View my full GitHub profile</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </GlassCard>
          </div>
        </motion.div>

        {/* Footer - Only visible at bottom of page */}
        <motion.div
          variants={itemVariants}
          className="mt-32 mb-8 text-center"
        >
          <div className="glass-card px-6 py-3 rounded-2xl max-w-fit mx-auto">
            <p className="text-white/60 text-sm font-medium">
              © 2025 Ilan Uzan. All rights reserved.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Home; 