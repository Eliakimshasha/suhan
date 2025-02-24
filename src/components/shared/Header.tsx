'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  
  // Check system preference on initial load
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)
    
    if (prefersDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])
  
  // This fixes the toggle logic
  const toggleDarkMode = () => {
    const newDarkValue = !isDark
    setIsDark(newDarkValue)
    
    if (newDarkValue) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-transparent dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-yellow-400"
        >
          SC
        </motion.div>
        
        <div className="flex items-center gap-6 bg-gray-200 dark:bg-gray-800 rounded-full">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-slate-700" />}
          </button>
        </div>
      </nav>
    </header>
  )
}