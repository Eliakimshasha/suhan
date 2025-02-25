'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projectsData } from '@/lib/constants';
import Image from 'next/image';
import { Trash2, Edit, Plus, Save, X } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [projects, setProjects] = useState(projectsData);
  const [team, setTeam] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
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
  
  // New team member form state
  const [newTeamMember, setNewTeamMember] = useState({
    id: '',
    name: '',
    role: '',
    bio: '',
    image: '',
    social: { twitter: '', linkedin: '', github: '' }
  });
  
  // Edit states
  const [editingProject, setEditingProject] = useState(null);
  const [editingTeamMember, setEditingTeamMember] = useState(null);
  
  // Check authentication on page load
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus !== 'true') {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
    
    // Load team data (in a real app, this would come from your backend)
    setTeam([
      {
        id: '1',
        name: 'John Doe',
        role: 'CEO & Founder',
        bio: 'Experienced tech entrepreneur with a passion for innovation.',
        image: '/team/john-doe.jpg',
        social: { twitter: 'johndoe', linkedin: 'johndoe', github: 'johndoe' }
      },
      {
        id: '2',
        name: 'Jane Smith',
        role: 'Creative Director',
        bio: 'Award-winning designer with over 10 years of experience.',
        image: '/team/jane-smith.jpg',
        social: { twitter: 'janesmith', linkedin: 'janesmith', github: 'janesmith' }
      }
    ]);
    
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

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

  // Team member form handlers
  const handleTeamMemberChange = (e) => {
    const { name, value } = e.target;
    if (editingTeamMember) {
      setEditingTeamMember({ ...editingTeamMember, [name]: value });
    } else {
      setNewTeamMember({ ...newTeamMember, [name]: value });
    }
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    if (editingTeamMember) {
      setEditingTeamMember({
        ...editingTeamMember,
        social: { ...editingTeamMember.social, [name]: value }
      });
    } else {
      setNewTeamMember({
        ...newTeamMember,
        social: { ...newTeamMember.social, [name]: value }
      });
    }
  };

  const handleAddTeamMember = (e) => {
    e.preventDefault();
    if (editingTeamMember) {
      // Update existing team member
      setTeam(team.map(t => t.id === editingTeamMember.id ? editingTeamMember : t));
      setEditingTeamMember(null);
    } else {
      // Add new team member
      const newId = (Math.max(...team.map(t => parseInt(t.id)), 0) + 1).toString();
      setTeam([...team, { ...newTeamMember, id: newId }]);
      setNewTeamMember({
        id: '',
        name: '',
        role: '',
        bio: '',
        image: '',
        social: { twitter: '', linkedin: '', github: '' }
      });
    }
  };

  const handleDeleteTeamMember = (id) => {
    setTeam(team.filter(member => member.id !== id));
  };

  const handleEditTeamMember = (member) => {
    setEditingTeamMember(member);
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!isAuthenticated) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="projects" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <TabsList className="mb-6">
            <TabsTrigger value="projects" className="text-lg px-4 py-2">Projects</TabsTrigger>
            <TabsTrigger value="team" className="text-lg px-4 py-2">Team</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                  {editingProject && (
                    <button
                      onClick={() => setEditingProject(null)}
                      className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      <X size={20} />
                    </button>
                  )}
                </h2>
                <form onSubmit={handleAddProject} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      required
                      value={editingProject ? editingProject.title : newProject.title}
                      onChange={handleProjectChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      required
                      value={editingProject ? editingProject.category : newProject.category}
                      onChange={handleProjectChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Description
                    </label>
                    <textarea
                      name="description"
                      required
                      value={editingProject ? editingProject.description : newProject.description}
                      onChange={handleProjectChange}
                      rows="3"
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Technologies (comma separated)
                    </label>
                    <input
                      type="text"
                      required
                      value={editingProject ? editingProject.technologies.join(', ') : newProject.technologies.join(', ')}
                      onChange={handleTechnologiesChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Image URL
                    </label>
                    <input
                      type="text"
                      name="image"
                      required
                      value={editingProject ? editingProject.image : newProject.image}
                      onChange={handleProjectChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Project Link
                    </label>
                    <input
                      type="text"
                      name="link"
                      required
                      value={editingProject ? editingProject.link : newProject.link}
                      onChange={handleProjectChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg transition-colors"
                    >
                      {editingProject ? <><Save size={18} className="mr-1" /> Update Project</> : <><Plus size={18} className="mr-1" /> Add Project</>}
                    </button>
                  </div>
                </form>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Manage Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((project) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow border border-gray-200 dark:border-gray-600"
                    >
                      <div className="p-4 flex items-start space-x-4">
                        <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 dark:text-white">{project.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{project.description}</p>
                          <div className="mt-2 flex items-center space-x-1 flex-wrap">
                            {project.technologies.slice(0, 3).map((tech, i) => (
                              <span 
                                key={i} 
                                className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded m-1"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="text-xs text-gray-500 dark:text-gray-400">+{project.technologies.length - 3} more</span>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <button
                            onClick={() => handleEditProject(project)}
                            className="p-1 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteProject(project.id)}
                            className="p-1 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="team">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
                  {editingTeamMember ? 'Edit Team Member' : 'Add New Team Member'}
                  {editingTeamMember && (
                    <button
                      onClick={() => setEditingTeamMember(null)}
                      className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      <X size={20} />
                    </button>
                  )}
                </h2>
                <form onSubmit={handleAddTeamMember} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={editingTeamMember ? editingTeamMember.name : newTeamMember.name}
                      onChange={handleTeamMemberChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      required
                      value={editingTeamMember ? editingTeamMember.role : newTeamMember.role}
                      onChange={handleTeamMemberChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      required
                      value={editingTeamMember ? editingTeamMember.bio : newTeamMember.bio}
                      onChange={handleTeamMemberChange}
                      rows="3"
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Image URL
                    </label>
                    <input
                      type="text"
                      name="image"
                      required
                      value={editingTeamMember ? editingTeamMember.image : newTeamMember.image}
                      onChange={handleTeamMemberChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Twitter
                    </label>
                    <input
                      type="text"
                      name="twitter"
                      value={editingTeamMember ? editingTeamMember.social.twitter : newTeamMember.social.twitter}
                      onChange={handleSocialChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      LinkedIn
                    </label>
                    <input
                      type="text"
                      name="linkedin"
                      value={editingTeamMember ? editingTeamMember.social.linkedin : newTeamMember.social.linkedin}
                      onChange={handleSocialChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      GitHub
                    </label>
                    <input
                      type="text"
                      name="github"
                      value={editingTeamMember ? editingTeamMember.social.github : newTeamMember.social.github}
                      onChange={handleSocialChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg transition-colors"
                    >
                      {editingTeamMember ? <><Save size={18} className="mr-1" /> Update Team Member</> : <><Plus size={18} className="mr-1" /> Add Team Member</>}
                    </button>
                  </div>
                </form>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Manage Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {team.map((member) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow border border-gray-200 dark:border-gray-600"
                    >
                      <div className="p-4 flex items-start space-x-4">
                        <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 dark:text-white">{member.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">{member.bio}</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <button
                            onClick={() => handleEditTeamMember(member)}
                            className="p-1 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteTeamMember(member.id)}
                            className="p-1 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}