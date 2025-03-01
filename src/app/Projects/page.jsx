'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Modal } from '@/components/ui/modal';
import { ExternalLink, Filter } from 'lucide-react';
import { LuScanEye } from 'react-icons/lu';
import Image from 'next/image';
import Head from 'next/head';
import Header from '@/components/shared/Header'


// Import projects data or define it here
import { projectsData } from '@/lib/constants';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get all unique categories
  const categories = ['all', ...new Set(projectsData.map(project => project.category.toLowerCase()))];

  // Filter projects by category and search query
  useEffect(() => {
    let filtered = projectsData;
    
    // Filter by category
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => 
        project.category.toLowerCase() === activeFilter
      );
    }
    
    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }
    
    setFilteredProjects(filtered);
  }, [activeFilter, searchQuery]);

  return (
    <>
      <Head>
        <title>Our Projects | Suhan Creatives</title>
        <meta 
          name="description" 
          content="Explore our portfolio of creative digital projects including web design, mobile apps, and branding work."
        />
      </Head>
      <Header/>

      {/* Hero Section */}
      <section className="py-20 pt-32 lg:pt-40 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-yellow-400 to-blue-500"
              style={{
                height: `${Math.random() * 30 + 20}px`,
                width: `${Math.random() * 30 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0',
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-400">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              Showcasing our finest work in digital design and development.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="w-full md:w-1/3 relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-2">
                <div className="flex items-center mr-2 text-gray-600 dark:text-gray-300">
                  <Filter className="w-4 h-4 mr-1" />
                  <span className="text-sm">Filter:</span>
                </div>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeFilter === category
                        ? 'bg-yellow-400 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-yellow-400 text-white text-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <div>
                        <LuScanEye size={30} className='bg-gray-100 dark:bg-black text-gray-700 p-2 rounded-full dark:bg-opacity-30 dark:text-white'/>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">No projects found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your search or filter criteria.
                </p>
                <button
                  onClick={() => {
                    setActiveFilter('all');
                    setSearchQuery('');
                  }}
                  className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg transition-colors"
                >
                  Reset Filters
                </button>
              </motion.div>
            </div>
          )}
          
         {/* Project count and pagination */}
<div className="mt-12 flex flex-col md:flex-row justify-between items-center">
  <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
    Showing {filteredProjects.length} of {projectsData.length} projects
  </p>
  
  {/* Simple pagination - can be enhanced with actual pagination logic */}
  <div className="flex space-x-2">
    <button 
      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
      disabled={true}
    >
      Previous
    </button>
    <button 
      className="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50"
    >
      1
    </button>
    <button 
      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
      disabled={true}
    >
      Next
    </button>
  </div>
</div>

{/* Project Modal */}
{selectedProject && (
  <Modal
    isOpen={!!selectedProject}
    onClose={() => setSelectedProject(null)}
    className="w-full max-w-4xl mx-auto"
  >
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
      <div className="relative h-80">
        <Image
          src={selectedProject.image}
          alt={selectedProject.title}
          layout="fill"
          objectFit="cover"
          className="w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
          <span className="px-3 py-1 bg-yellow-400 text-white text-sm rounded-full">
            {selectedProject.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedProject.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {selectedProject.description}
        </p>
        
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Project Details</h3>
          <p className="text-gray-700 dark:text-gray-300">{selectedProject.details}</p>
          
          {selectedProject.challenges && (
            <>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-6">Challenges & Solutions</h3>
              <p className="text-gray-700 dark:text-gray-300">{selectedProject.challenges}</p>
            </>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {selectedProject.demoUrl && (
            <a
              href={selectedProject.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg transition-colors"
            >
              <span>View Live Demo</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          )}
          
          {selectedProject.caseStudyUrl && (
            <a
              href={selectedProject.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <span>Read Case Study</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          )}
        </div>
      </div>
    </div>
  </Modal>
)}

</div>
      </section>
    </>
  );
}