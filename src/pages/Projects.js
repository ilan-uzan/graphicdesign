import React, { useState } from 'react';
import { Layers, Search } from 'lucide-react';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/projects';

// Import project images
import galacticDefenderImg from '../assets/images/galacticdefender.png';
import ceeveeImg from '../assets/images/ceevee.png';
import sentinelImg from '../assets/images/sentinel.png';
import kesefPlusImg from '../assets/images/kesefpluslogo.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  // Only show the most relevant tags for filtering based on actual project technologies
  const relevantTags = ['All', 'Python', 'React Native', 'Next.js', 'AI/ML', 'Cybersecurity', 'Game Development'];
  const allTags = relevantTags;
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const openProjectModal = (project) => {
    // Prevent multiple rapid clicks
    if (isModalOpen) return;
    
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
        className="cursor-pointer transform transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98]"
        onClick={() => openProjectModal(project)}

      >
        <div className="h-full overflow-hidden rounded-3xl p-3 sm:p-6 lg:p-8 xl:p-12 bg-white/[0.015] border border-white/[0.04] relative">
          {/* Project Image */}
          <div className="aspect-[3/2] sm:aspect-[4/3] aspect-[2/1] bg-gradient-to-br from-accent-primary/12 via-accent-secondary/8 to-accent-tertiary/12 relative overflow-hidden rounded-2xl mb-3 sm:mb-6 p-2 sm:p-4">
            {/* Display actual image if available, otherwise show placeholder */}
            {project.image && project.image.endsWith('.png') ? (
              <img 
                src={project.image === 'galacticdefender.png' ? galacticDefenderImg : 
                     project.image === 'ceevee.png' ? ceeveeImg : 
                     project.image === 'sentinel.png' ? sentinelImg : 
                     project.image === 'kesefpluslogo.png' ? kesefPlusImg : project.image}
                alt={project.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            ) : (
              <>
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-white/60 text-center">
                    <div className="mb-2 sm:mb-4 p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.12]">
                      <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-white/80 mx-auto" />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white/80">{project.image}</div>
                  </div>
                </div>
              </>
            )}
            
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
              {project.tags.slice(0, 4).map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-xs font-medium bg-white/[0.04] text-white/80 rounded-full border border-white/[0.06] backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="px-3 py-1 text-xs font-medium bg-accent-primary/12 text-accent-primary rounded-full border border-accent-primary/20">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>
            
            {/* Key Features */}
            {project.features && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white/90">Key Features:</h4>
                <div className="grid grid-cols-1 gap-1">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <span className="text-accent-primary text-xs">•</span>
                      <span className="text-white/70 text-xs leading-tight">{feature}</span>
                    </div>
                  ))}
                  {project.features.length > 3 && (
                    <span className="text-accent-primary text-xs ml-4">
                      +{project.features.length - 3} more features
                    </span>
                  )}
                </div>
              </div>
            )}
            
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
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="page-title mb-4 lg:mb-6">
            My Projects
          </h1>
          <p className="text-lg lg:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed px-4">
            A collection of my real projects showcasing technical expertise across cybersecurity, fintech, AI, and game development. 
            Each project demonstrates practical problem-solving and modern development practices.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-8 lg:mb-12 px-4">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-2xl font-semibold text-sm transform transition-all duration-200 hover:scale-105 hover:-translate-y-1 active:scale-98 ${
                filter === tag
                  ? 'button-primary'
                  : 'button-secondary'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

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
          <div className="text-center py-16 lg:py-20">
            <div className="mb-6 p-6 rounded-3xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] inline-block">
              <Search className="w-12 h-12 lg:w-16 lg:h-16 text-white/60 mx-auto" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white/80 mb-3 lg:mb-4">No projects found</h3>
            <p className="text-white/60 max-w-md mx-auto px-4">
              Try adjusting your filter or check back later for new projects in this category.
            </p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />

      {/* Footer - Only visible at bottom of page */}
      <div className="mt-32 mb-8 text-center">
        <div className="glass-card px-6 py-3 rounded-2xl max-w-fit mx-auto">
          <p className="text-white/60 text-sm font-medium">
            © 2025 Ilan Uzan. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects; 