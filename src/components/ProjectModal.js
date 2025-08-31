import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import project images
import galacticDefenderImg from '../assets/images/galacticdefender.png';
import ceeveeImg from '../assets/images/ceevee.png';
import sentinelImg from '../assets/images/sentinel.png';
import kesefPlusImg from '../assets/images/kesefpluslogo.png';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { opacity: 0, y: 20 }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm bg-black/50"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="glass-card max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 glass-card hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              <span className="text-white text-xl">×</span>
            </button>

            {/* Project Content */}
            <div className="p-6 md:p-8">
              {/* Project Image */}
              <div className="aspect-[3/2] sm:aspect-video aspect-[2/1] bg-gradient-to-br from-gradient-purple/20 to-gradient-blue/20 rounded-lg sm:rounded-xl mb-3 sm:mb-6 overflow-hidden">
                {project.image && project.image.endsWith('.png') ? (
                  <img 
                    src={project.image === 'galacticdefender.png' ? galacticDefenderImg : 
                         project.image === 'ceevee.png' ? ceeveeImg : 
                         project.image === 'sentinel.png' ? sentinelImg : 
                         project.image === 'kesefpluslogo.png' ? kesefPlusImg : project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-white/60 text-sm sm:text-lg">
                      {project.image || 'Project Preview'}
                    </div>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 glass-card text-sm text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                  <p className="text-white/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.tools && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Tools Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-gradient-purple/20 to-gradient-blue/20 border border-white/20 rounded-full text-sm text-white"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.link && (
                  <div className="pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 button-glow glass-card px-6 py-3 text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <span>View Project</span>
                      <span>→</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal; 