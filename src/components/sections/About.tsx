'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import CountUp from 'react-countup'

export default function About() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const stats = [
    { number: 5, label: 'Years Experience', suffix: '+' },
    { number: 100, label: 'Projects Completed', suffix: '+' },
    { number: 50, label: 'Happy Clients', suffix: '+' }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 lg:px-24 relative overflow-hidden">
      {/* Abstract 3D geometric background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-yellow-400 to-blue-500"
            style={{
              height: `${Math.random() * 40 + 20}px`,
              width: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: Math.random() > 0.5 ? '50%' : '0',
              transform: `rotate(${Math.random() * 360}deg) translateZ(${Math.random() * 100}px)`
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
          className="mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-400">
            About Suhan Creatives
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            We are a passionate team of creators, developers, and innovators dedicated to transforming digital ideas into reality. With expertise in graphic design, mobile development, and web solutions, we craft experiences that leave lasting impressions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3   gap-8 mt-12 ">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, rotateY: 90 },
                  visible: { opacity: 1, rotateY: 0 }
                }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 15,
                  z: 50,
                  transition: { duration: 0.4 } 
                }}
                className="relative h-64 group perspective-1000"
              >
                {/* 3D Card with layered effect */}
                <div className="relative h-full w-full transform-style-3d rounded-xl shadow-xl">
                  {/* Back layer - shadow and depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-blue-500 rounded-xl opacity-80 transform -translate-z-4"></div>
                  
                  {/* Middle layer - main background */}
                  <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl transform -translate-z-2"></div>
                  
                  {/* Front layer - content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl flex flex-col items-center justify-center p-6 transform -translate-z-0 backdrop-blur-sm">
                    {/* 3D floating number with CountUp */}
                    <div className="relative mb-4">
                      <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 to-blue-500 relative z-10 transform translate-z-6">
                        {isInView && (
                          <CountUp
                            start={0}
                            end={stat.number}
                            duration={2.5}
                            delay={0.5 + index * 0.2}
                            enableScrollSpy
                            scrollSpyOnce
                            suffix={stat.suffix}
                          />
                        )}
                      </h3>
                    </div>
                    
                    {/* 3D divider */}
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-full mb-4 transform translate-z-2"></div>
                    
                    {/* Label with depth */}
                    <p className="text-gray-600 font-bold dark:text-gray-300  text-lg transform translate-z-4">
                      {stat.label}
                    </p>
                    
                    {/* 3D Corner accents */}
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-yellow-400 opacity-40 rounded-tr-xl transform translate-z-2"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-blue-400 opacity-40 rounded-bl-xl transform translate-z-2"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}