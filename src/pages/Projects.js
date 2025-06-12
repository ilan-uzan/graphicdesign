import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Search } from 'lucide-react';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const ProjectCard = ({ project, index }) => {
    return (
      <div
        className="cursor-pointer transform transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1"
        onClick={() => openProjectModal(project)}
      >
        <div className="h-full overflow-hidden rounded-3xl p-8 lg:p-12 backdrop-blur-xl bg-white/[0.015] border border-white/[0.04] relative">
          {/* Project Image */}
          <div className="aspect-[4/3] bg-gradient-to-br from-accent-primary/12 via-accent-secondary/8 to-accent-tertiary/12 relative overflow-hidden rounded-2xl mb-6">
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-white/60 text-center">
                <div className="mb-4 p-4 rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.12]">
                  <Layers className="w-8 h-8 text-white/80 mx-auto" />
                </div>
                <div className="text-sm font-bold text-white/80">{project.image}</div>
              </div>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Project Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-xs font-medium bg-white/[0.04] text-white/80 rounded-full border border-white/[0.06] backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-3 py-1 text-xs font-medium bg-accent-primary/12 text-accent-primary rounded-full border border-accent-primary/20">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
            
            {/* View Project Button */}
            <div className="pt-2">
              <span className="text-accent-primary font-semibold text-sm flex items-center space-x-2">
                <span>View Project</span>
                <span>→</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen section-spacing container-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <h1 className="page-title mb-4 lg:mb-6">
            My Projects
          </h1>
          <p className="text-lg lg:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed px-4">
            A collection of design projects showcasing creativity, innovation, and attention to detail. 
            Each piece tells a unique story through visual communication.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-8 lg:mb-12 px-4"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-2xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 ${
                filter === tag
                  ? 'button-primary'
                  : 'button-secondary'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <ProjectCard 
                project={project} 
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16 lg:py-20"
          >
            <div className="mb-6 p-6 rounded-3xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] inline-block">
              <Search className="w-12 h-12 lg:w-16 lg:h-16 text-white/60 mx-auto" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white/80 mb-3 lg:mb-4">No projects found</h3>
            <p className="text-white/60 max-w-md mx-auto px-4">
              Try adjusting your filter or check back later for new projects in this category.
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </div>
  );
};

export default Projects; 