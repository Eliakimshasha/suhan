'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

export default function HappyClients() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef();
  const controls = useAnimation();

  const clients = [
    {
      name: 'Bugwema Lukonge',
      company: 'Innovatech Solutions',
      image: 'https://th.bing.com/th/id/OIP.Fc-DQxt4GU5qYrOLZ4Gf3QHaHa?pid=ImgDet&w=191&h=191&c=7',
      role: 'Marketing Director',
      testimonial:
        'Working with Suhan Creatives transformed our digital presence. Their attention to detail and creative approach exceeded all our expectations.',
      color: 'from-blue-400 to-purple-500',
    },
    {
      name: 'Frank Swila',
      company: 'EcoSmart Ventures',
      image: 'https://th.bing.com/th/id/OIP.Fc-DQxt4GU5qYrOLZ4Gf3QHaHa?pid=ImgDet&w=191&h=191&c=7',
      role: 'CEO',
      testimonial:
        'The team at Suhan Creatives delivered exceptional results. Their understanding of our brand and vision resulted in a website that perfectly captures our ethos.',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      name: 'Ezra Lutufyo',
      company: 'Horizon Media',
      image: 'https://th.bing.com/th/id/OIP.3PqOHGjKlwIVUsO2xaWAMQAAAA?w=165&h=180&c=7&r=0&o=5&pid=1.7',
      role: 'Creative Director',
      testimonial:
        'The mobile app developed by Suhan Creatives has increased our customer engagement by 200%. Their technical expertise and design sensibility are unmatched.',
      color: 'from-amber-400 to-orange-500',
    },
    {
      name: 'Eliakim williams',
      company: 'Nexus Enterprises',
      image: 'https://th.bing.com/th/id/OIP.Fc-DQxt4GU5qYrOLZ4Gf3QHaHa?pid=ImgDet&w=191&h=191&c=7',
      role: 'Product Manager',
      testimonial:
        'From concept to execution, the entire process was seamless. Suhan Creatives brings both technical excellence and artistic vision to every project.',
      color: 'from-rose-400 to-pink-500',
    },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + clients.length) % clients.length,
    );
  };

  // Autoplay functionality
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, activeIndex]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <section className="py-16 lg:px-32 md:py-24 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute bg-gradient-to-r ${
              clients[i % clients.length].color
            }`}
            style={{
              height: `${Math.random() * 10 + 5}px`,
              width: `${Math.random() * 10 + 1}px`,
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(3px)',
            }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text mb-2 text-transparent bg-gradient-to-r from-yellow-500 to-blue-500 dark:from-yellow-400 dark:to-blue-400">
              Our Happy Clients
            </h2>

            <p className="text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about their experience working with Suhan Creatives.
            </p>
          </motion.div>

          {/* 3D Carousel */}
          <div
            className="relative mx-auto perspective-1000"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Progress indicators */}
            <div className="flex justify-center gap-2 mb-6 md:mb-8">
              {clients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? `w-8 md:w-10 bg-gradient-to-r ${clients[index].color}`
                      : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Main Carousel - Completely redesigned for large screens */}
            <div className="relative mb-8 lg:mb-12">
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="popLayout"
              >
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    rotateY: direction * 90,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotateY: 0,
                    scale: 1,
                    z: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotateY: direction * -90,
                    scale: 0.8,
                    z: -100,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                  }}
                  className="w-full"
                >
                  {/* Card Container with proper aspect ratio */}
                  <div className="w-full mx-auto overflow-hidden">
                    {/* Background with minimal tilt */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl transform rotate-1 scale-105 opacity-50"></div>
                    
                    {/* Main Card - Now with max-height constraints */}
                    <div className="relative bg-gray-800 rounded-2xl shadow-2xl transform-style-3d">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br opacity-10 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr opacity-10 rounded-full blur-2xl"></div>

                      {/* Responsive Grid Layout */}
                      <div className="grid grid-cols-1  lg:grid-cols-5 gap-6 p-6 md:p-8 lg:p-10">
                        {/* Left Column - Client Image and Info */}
                        <div className="lg:col-span-1 flex flex-col  items-center lg:items-start">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="relative "
                          >
                            <div className="w-28 h-28  m-auto lg:w-32 lg:h-32 rounded-full overflow-hidden relative border-4 border-white/10">
                              <img
                                src={clients[activeIndex].image}
                                alt={clients[activeIndex].name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5, duration: 0.5 }}
                              className="text-center lg:text-left mt-4"
                            >
                              <h3 className="text-xl font-bold text-white">
                                {clients[activeIndex].name}
                              </h3>
                              <p
                                className={`text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r ${clients[activeIndex].color}`}
                              >
                                {clients[activeIndex].role}
                              </p>
                              <p className="text-gray-400 text-sm">
                                {clients[activeIndex].company}
                              </p>
                            </motion.div>
                          </motion.div>
                        </div>
                        
                        {/* Right Column - Testimonial with proper spacing */}
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                          className="lg:col-span-4 flex items-center"
                        >
                          <div className="lg:pl-6 lg:border-l lg:border-gray-700 h-full flex items-center">
                            <div className="max-w-3xl">
                              <div className="mb-6 relative">
                                <div className="absolute -left-3 top-0 text-4xl text-gray-700 opacity-50">"</div>
                                <p className="text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed italic pl-4">
                                  {clients[activeIndex].testimonial}
                                </p>
                                <div className="absolute -right-3 bottom-0 text-4xl text-gray-700 opacity-50">"</div>
                              </div>
                              
                              <div
                                className={`w-16 h-1 bg-gradient-to-r ${clients[activeIndex].color} rounded-full mx-auto lg:mx-0 mt-2`}
                              ></div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-4 md:mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 md:p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-gray-700"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                onClick={nextTestimonial}
                className="p-2 md:p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-gray-700"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}