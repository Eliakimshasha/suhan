'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Logo from '@/assets/suhan.png';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check system preference on initial load and handle scroll events
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkValue = !isDark;
    setIsDark(newDarkValue);
    
    if (newDarkValue) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            <div className="w-[120px] h-[60px] relative overflow-hidden flex justify-start items-center">
              <Image
                src={Logo}
                width={100}
                alt="SC"
                className="w-auto h-full"
                height={100}
              />
            </div>
          </motion.div>
          
         {/* Desktop Navigation */}
<div className="hidden md:flex items-center space-x-8">
  {navItems.map((item) => (
    <a
      key={item.label}
      href={item.href}
      className={`font-medium transition-colors ${
        scrolled 
          ? 'text-gray-800 dark:text-gray-200 hover:text-yellow-500' 
          : 'text-gray-700 dark:text-gray-300 hover:text-yellow-400'
      }`}
    >
      {item.label}
    </a>
  ))}
</div>
          
          {/* Theme toggle and mobile menu button */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                scrolled 
                  ? 'hover:bg-gray-200 dark:hover:bg-gray-700' 
                  : 'hover:bg-gray-100/20 dark:hover:bg-gray-800/30'
              }`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 dark:text-gray-300" />
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className={`w-6 h-6 ${
                  scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-gray-700 dark:text-gray-300'
                }`} />
              ) : (
                <Menu className={`w-6 h-6 ${
                  scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-gray-700 dark:text-gray-300'
                }`} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { 
            opacity: 1, 
            height: "auto",
            transition: {
              duration: 0.3,
              when: "beforeChildren",
              staggerChildren: 0.1
            }
          },
          closed: { 
            opacity: 0, 
            height: 0,
            transition: {
              duration: 0.3,
              when: "afterChildren",
              staggerChildren: 0.1,
              staggerDirection: -1
            }
          }
        }}
        className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 py-4">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="block py-3 text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -10 }
              }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </motion.a>
          ))}
          
          <motion.div 
            className="pt-4 flex justify-center"
            variants={{
              open: { opacity: 1, y: 0 },
              closed: { opacity: 0, y: -10 }
            }}
          >
            <a 
              href="#contact" 
              className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}