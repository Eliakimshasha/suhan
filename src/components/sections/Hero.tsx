'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import TopDecoration from "@/components/ui/topDecoration"


export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textItems = [
    'Transforming ideas into digital experiences',
    'Crafting stunning websites & apps',
    'Innovative mobile & web solutions',
    'Bringing your vision to life through design',
    'Custom software tailored to your needs',
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Set up text rotation interval
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textItems.length);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(textInterval);
    };
  }, [textItems.length]);

  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500 ease-in-out"></div>

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gray-400 dark:bg-blue-400 opacity-20 dark:opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: particle.delay,
          }}
          initial={{ width: particle.size, height: particle.size }}
        />
      ))}

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ y: scrollY * -0.2 }}
          className="text-center"
        >
          <motion.div
            className="mx-auto mb-0 p-2 relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-50"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            />
            <motion.div
              className="text-5xl lg:text-[70px] lg:block justify-center font-title mt-0 lg:mt-0 items-center font-bold mb-0 bg-clip-text text-center md:text-center lg:text-center text-transparent bg-gradient-to-r from-yellow-400 to-blue-400"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <TopDecoration/>
            </motion.div>
            <motion.h1
              className="text-5xl lg:text-[70px] lg:block justify-center font-title mt-0 lg:mt-0 items-center font-bold mb-0 bg-clip-text text-center md:text-center lg:text-center text-transparent bg-gradient-to-r from-yellow-400 to-blue-400"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              Suhan Creatives
            </motion.h1>
          </motion.div>

          <motion.div
            className="mb-0 overflow-hidden h-20" // Fixed height container to prevent layout shift
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* AnimatePresence for handling exiting animations */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTextIndex} // Key changes trigger exit/enter animations
                className="text-xl md:text-2xl mb-4 font-title text-gray-700 dark:text-gray-200 leading-relaxed backdrop-blur-sm py-2 px-4 rounded-lg inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {textItems[currentTextIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 100 }}
            className="relative"
          >
           

            <Button  className="relative bg-white dark:bg-gray-800 hover:bg-yellow-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg group overflow-hidden">
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-blue-300 dark:from-yellow-500 dark:to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
