'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trash2, Edit, Plus, Save, X, ChevronRight, Search, Settings, LogOut, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // New project form state
  const [newProject, setNewProject] = useState({
    id: '',
    title: '',
    description: '',
    category: '',
    technologies: [],
    image: '',
    link: ''
  });
  
  // Edit states
  const [editingProject, setEditingProject] = useState(null);
  const [editingTeamMember, setEditingTeamMember] = useState(null);
  
  useEffect(() => {
    // Load project data
    setProjects([
      {
        id: '1',
        title: 'E-commerce Website',
        description: 'A fully responsive e-commerce platform with payment integration and admin dashboard.',
        category: 'Web Development',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: '/projects/ecommerce.jpg',
        link: 'https://example.com/ecommerce'
      },
      {
        id: '2',
        title: 'Mobile Fitness App',
        description: 'A mobile application for tracking workouts, nutrition, and health goals.',
        category: 'Mobile App',
        technologies: ['React Native', 'Firebase', 'Redux'],
        image: '/projects/fitness-app.jpg',
        link: 'https://example.com/fitness-app'
      },
      {
        id: '3',
        title: 'AI Content Generator',
        description: 'An AI-powered tool for generating marketing copy and social media content.',
        category: 'AI/ML',
        technologies: ['Python', 'TensorFlow', 'OpenAI API', 'Flask'],
        image: '/projects/ai-content.jpg',
        link: 'https://example.com/ai-generator'
      },
      {
        id: '4',
        title: 'Real Estate Portal',
        description: 'A comprehensive platform for property listings, virtual tours, and agent management.',
        category: 'Web Platform',
        technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Google Maps API'],
        image: '/projects/real-estate.jpg',
        link: 'https://example.com/real-estate'
      }
    ]);
    
    // Load team data
    setTeam([
      {
        id: '1',
        name: 'Alex Johnson',
        role: 'CEO & Founder',
        bio: 'Experienced tech entrepreneur with a passion for innovation.',
        image: '/team/alex.jpg',
        social: { twitter: 'alexjohnson', linkedin: 'alexjohnson', github: 'alexjohnson' }
      },
      {
        id: '2',
        name: 'Sophia Chen',
        role: 'Creative Director',
        bio: 'Award-winning designer with over 10 years of experience.',
        image: '/team/sophia.jpg',
        social: { twitter: 'sophiachen', linkedin: 'sophiachen', github: 'sophiachen' }
      }
    ]);
    
    setIsLoading(false);

    // Check system preference for dark mode
    if (typeof window !== 'undefined') {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(isDarkMode);
      if (isDarkMode) document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Project form handlers
  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    if (editingProject) {
      setEditingProject({ ...editingProject, [name]: value });
    } else {
      setNewProject({ ...newProject, [name]: value });
    }
  };

  const handleTechnologiesChange = (e) => {
    const techs = e.target.value.split(',').map(tech => tech.trim());
    if (editingProject) {
      setEditingProject({ ...editingProject, technologies: techs });
    } else {
      setNewProject({ ...newProject, technologies: techs });
    }
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (editingProject) {
      // Update existing project
      setProjects(projects.map(p => p.id === editingProject.id ? editingProject : p));
      setEditingProject(null);
    } else {
      // Add new project
      const newId = (Math.max(...projects.map(p => parseInt(p.id)), 0) + 1).toString();
      setProjects([...projects, { ...newProject, id: newId }]);
      setNewProject({
        id: '',
        title: '',
        description: '',
        category: '',
        technologies: [],
        image: '',
        link: ''
      });
    }
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
  };

  // Filter projects based on search query
  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-md z-10 transition-colors duration-300">
        <div className="p-6">
          <motion.div 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-400"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            Suhan Admin
          </motion.div>
        </div>
        
        <nav className="mt-6">
          <div className="px-4 py-2 text-xs uppercase text-gray-500 dark:text-gray-400 font-semibold">
            Main
          </div>
          <a href="#" className="flex items-center px-6 py-3 text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700 border-r-4 border-yellow-400">
            <Settings size={18} className="mr-3" />
            Dashboard
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <ChevronRight size={18} className="mr-3" />
            Projects
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <ChevronRight size={18} className="mr-3" />
            Team
          </a>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <button className="flex items-center w-full py-2 px-4 rounded-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <LogOut size={18} className="mr-3" />
            Logout
          </button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="ml-64 flex-1 transition-all duration-300">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm py-4 px-6 flex items-center justify-between sticky top-0 z-10 transition-colors duration-300">
          <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 w-64 transition-colors duration-300">
            <Search size={18} className="text-gray-500 dark:text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none focus:outline-none text-gray-700 dark:text-white w-full"
            />
          </div>
          
          <div className="flex items-center">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors mr-4"
            >
              {darkMode ? 
                <Sun size={20} className="text-yellow-400" /> : 
                <Moon size={20} className="text-gray-700" />
              }
            </button>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-blue-400 flex items-center justify-center text-white font-bold">
                S
              </div>
              <div className="ml-3 hidden sm:block">
                <div className="text-sm font-medium text-gray-700 dark:text-white">Admin User</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">admin@suhancreatives.com</div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Dashboard content */}
        <main className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">Welcome back! Here's what's happening with your projects.</p>
          </div>
          
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-none shadow-md dark:bg-gray-800 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Projects</p>
                      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mt-1">{projects.length}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="border-none shadow-md dark:bg-gray-800 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Team Members</p>
                      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mt-1">{team.length}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-blue-400"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card className="border-none shadow-md dark:bg-gray-800 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Technologies</p>
                      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mt-1">
                        {new Set(projects.flatMap(p => p.technologies)).size}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* Main tabs */}
          <Tabs defaultValue="projects" className="mt-6">
            <div className="flex items-center justify-between mb-6">
              <TabsList className="bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
                <TabsTrigger 
                  value="projects" 
                  className="px-4 py-2 rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm transition-all"
                >
                  Projects
                </TabsTrigger>
                <TabsTrigger 
                  value="team" 
                  className="px-4 py-2 rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm transition-all"
                >
                  Team Members
                </TabsTrigger>
              </TabsList>
              
              <Button className="bg-gradient-to-r from-yellow-400 to-blue-400 hover:from-yellow-500 hover:to-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
                <Plus size={18} className="mr-2" />
                {editingProject ? 'Update Project' : 'Add New'}
              </Button>
            </div>
            
            <TabsContent value="projects" className="space-y-6">
              {editingProject || filteredProjects.length === 0 ? (
                <Card className="border-none shadow-md dark:bg-gray-800 transition-colors duration-300 overflow-hidden">
                  <CardHeader className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-100 dark:border-gray-600 transition-colors duration-300">
                    <CardTitle className="text-xl font-medium text-gray-800 dark:text-white">
                      {editingProject ? 'Edit Project' : (filteredProjects.length === 0 ? 'No Projects Found' : 'Add New Project')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    {filteredProjects.length === 0 && !editingProject ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Search size={24} className="text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">No results found</h3>
                        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                          We couldn't find any projects matching "{searchQuery}". Try adjusting your search term.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleAddProject} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Project Title
                          </label>
                          <Input
                            name="title"
                            required
                            value={editingProject ? editingProject.title : newProject.title}
                            onChange={handleProjectChange}
                            className="w-full p-2 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
                            placeholder="Enter project title"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Category
                          </label>
                          <Input
                            name="category"
                            required
                            value={editingProject ? editingProject.category : newProject.category}
                            onChange={handleProjectChange}
                            className="w-full p-2 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
                            placeholder="E.g. Web Development, Mobile App"
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Description
                          </label>
                          <textarea
                            name="description"
                            required
                            value={editingProject ? editingProject.description : newProject.description}
                            onChange={handleProjectChange}
                            rows="3"
                            className="w-full p-2 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-yellow-400 transition-colors duration-300"
                            placeholder="Brief description of the project"
                          ></textarea>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Technologies (comma separated)
                          </label>
                          <Input
                            required
                            value={editingProject ? editingProject.technologies.join(', ') : newProject.technologies.join(', ')}
                            onChange={handleTechnologiesChange}
                            className="w-full p-2 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
                            placeholder="E.g. React, Node.js, MongoDB"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Image URL
                          </label>
                          <Input
                            name="image"
                            required
                            value={editingProject ? editingProject.image : newProject.image}
                            onChange={handleProjectChange}
                            className="w-full p-2 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
                            placeholder="https://example.com/image.jpg"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Project Link
                          </label>
                          <Input
                            name="link"
                            required
                            value={editingProject ? editingProject.link : newProject.link}
                            onChange={handleProjectChange}
                            className="w-full p-2 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
                            placeholder="https://example.com/project"
                          />
                        </div>
                        
                        <div className="md:col-span-2 flex gap-4">
                          <Button
                            type="submit"
                            className="flex items-center px-6 py-2 bg-gradient-to-r from-yellow-400 to-blue-400 hover:from-yellow-500 hover:to-blue-500 text-white rounded-lg transition-all"
                          >
                            {editingProject ? <><Save size={18} className="mr-2" /> Update Project</> : <><Plus size={18} className="mr-2" /> Add Project</>}
                          </Button>
                          
                          {editingProject && (
                            <Button
                              type="button"
                              onClick={() => setEditingProject(null)}
                              className="flex items-center px-6 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-white rounded-lg transition-all"
                            >
                              <X size={18} className="mr-2" /> Cancel
                            </Button>
                          )}
                        </div>
                      </form>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
                          <div className="relative h-48 overflow-hidden">
                            <div 
                              className="absolute inset-0 bg-center bg-cover" 
                              style={{ backgroundImage: `url(${project.image})` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-4 left-4">
                              <span className="px-3 py-1 bg-yellow-400 text-white text-sm rounded-full">
                                {project.category}
                              </span>
                            </div>
                            <div className="absolute top-4 right-4 flex space-x-2">
                              <button
                                onClick={() => handleEditProject(project)}
                                className="p-2 bg-white/80 hover:bg-white rounded-full text-gray-700 hover:text-blue-500 transition-colors"
                              >
                                <Edit size={16} />
                              </button>
                              <button
                                onClick={() => handleDeleteProject(project.id)}
                                className="p-2 bg-white/80 hover:bg-white rounded-full text-gray-700 hover:text-red-500 transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                              {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {project.technologies.slice(0, 3).map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 3 && (
                                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded">
                                  +{project.technologies.length - 3}
                                </span>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="team" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
                      <div className="p-6 text-center">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 bg-gray-200 dark:bg-gray-700">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-white">
                          {member.name}
                        </h3>
                        <p className="text-yellow-500 font-medium mb-3">{member.role}</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                          {member.bio}
                        </p>
                        <div className="flex justify-center space-x-3">
                          <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-yellow-100 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">
                            <Edit size={16} />
                          </button>
                          <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-red-100 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: team.length * 0.1 }}
                >
                  <Card className="overflow-hidden border-none border-dashed border-2 border-gray-200 dark:border-gray-700 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 h-full flex items-center justify-center cursor-pointer">
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4">
                        <Plus size={24} className="text-gray-500 dark:text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                        Add Team Member
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                        Create a new team member profile
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}