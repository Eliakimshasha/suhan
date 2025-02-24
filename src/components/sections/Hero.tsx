'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-blue-200 dark:from-yellow-900 dark:to-gray-800">
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
