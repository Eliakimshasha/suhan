'use client'

import { motion } from 'framer-motion'
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandAdobeIllustrator } from "react-icons/tb";


const technologies = [
  { name: 'React Native', icon: <FaReact/> },
  { name: 'Next.js', icon: <RiNextjsLine/> },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill/> },
  { name: 'Figma', icon: <FaFigma/> },
  { name: 'Adobe', icon: <TbBrandAdobeIllustrator/> },
  { name: 'Node.js', icon: <FaNodeJs/> }
]

export default function Technologies() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 lg:px-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-400"
        >
          Technologies We Use
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg"
            >
              <span className="text-4xl mb-4">{tech.icon}</span>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>)}