'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-blue-200 dark:from-yellow-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.7),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.5),transparent_50%)]"></div>
      <div className="absolute top-1/3 left-1/4 w-[120%] h-[120%] bg-orange-100 rounded-full transform rotate-45 opacity-40 blur-3xl"></div>
      <div className="absolute top-2/4 left-2/4 w-[150%] h-[150%] bg-blue-100 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-30 blur-2xl"></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-6xl font-bold mb-6 bg-clip-text text-center md:text-center lg:text-center text-transparent bg-gradient-to-r from-yellow-400 to-blue-400"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            Suhan Creatives
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Transforming ideas into digital experiences
          </motion.p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
