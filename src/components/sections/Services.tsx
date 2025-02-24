'use client'

import { motion } from 'framer-motion'
import { Paintbrush, Smartphone, Globe } from 'lucide-react'

const services = [
  {
    icon: Paintbrush,
    title: 'Graphic Design',
    description: "Creative designs that capture your brand's essence and communicate your message effectively."
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences.'
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Modern, responsive websites built with the latest technologies and best practices.'
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 lg:px-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-400"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}