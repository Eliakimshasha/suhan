'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import Head from 'next/head'
import Image from 'next/image'

export default function AboutPage() {
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

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & Creative Director',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'With over 10 years of experience in digital design, Alex leads our creative team with passion and innovation.'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Sarah brings technical excellence to every project, specializing in front-end development and performance optimization.'
    },
    {
      name: 'Michael Roberts',
      role: 'UI/UX Designer',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      bio: 'Michael combines aesthetic sensibility with user-focused design to create intuitive and beautiful interfaces.'
    },
    {
      name: 'Jessica Parker',
      role: 'Project Manager',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      bio: 'Jessica ensures our projects are delivered on time and exceed client expectations through meticulous planning.'
    }
  ]

  return (
    <>
      <Head>
        <title>About Us | Suhan Creatives</title>
        <meta 
          name="description" 
          content="Learn about Suhan Creatives - our team, mission, and creative journey."
        />
      </Head>

      {/* Hero Section */}
      <section className="py-20 pt-32 lg:pt-40 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-400">
              About Suhan Creatives
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              We transform ideas into exceptional digital experiences.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Our Mission & Vision</h2>
              <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At Suhan Creatives, our mission is to help businesses and individuals transform their digital presence through innovative design and technology solutions. We believe that exceptional design has the power to elevate brands and create meaningful connections with audiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our vision is to be a leading creative force in the digital landscape, known for our cutting-edge approach, attention to detail, and client-focused solutions that drive real business results.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We strive to push boundaries, embracing new technologies and design trends while maintaining a commitment to accessibility, usability, and performance in everything we create.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <div className="relative h-72 md:h-96 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Our team collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/30 to-blue-500/30"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900 lg:px-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
            className="mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-400">
              Our Achievement Highlights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
                    <p className="text-gray-600 font-bold dark:text-gray-300 text-lg transform translate-z-4">
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
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-400">
              Our Creative Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              How we bring your vision to life through our proven methodology.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Discovery', description: 'We begin by understanding your business goals, target audience, and unique challenges. This foundational step ensures our solutions align perfectly with your objectives.' },
              { step: '02', title: 'Strategy', description: 'Based on our findings, we develop a comprehensive strategy that maps out the path to achieving your digital goals, considering timelines, resources, and measurable outcomes.' },
              { step: '03', title: 'Design', description: 'Our creative team brings concepts to life through visual design, considering user experience, brand consistency, and current design trends to create compelling visuals.' },
              { step: '04', title: 'Development', description: 'We transform designs into functional, responsive, and optimized digital experiences, ensuring cross-platform compatibility and performance.' },
              { step: '05', title: 'Testing & Launch', description: 'Rigorous testing ensures everything works perfectly before launch. We then deploy your project and provide support to ensure a smooth transition.' }
            ].map((process, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex mb-8 last:mb-0"
              >
                <div className="mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-blue-400 text-white font-bold">
                    {process.step}
                  </div>
                  {index < 4 && (
                    <div className="w-1 h-full bg-gradient-to-b from-yellow-400 to-blue-400 mx-auto my-2"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{process.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-400">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The creative minds behind Suhan Creatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-yellow-400">{member.role}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with our creative expertise.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white text-blue-500 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}