'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin } from 'lucide-react'

type FormData = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Here you would typically handle the form submission
    console.log(data)
    setIsSubmitting(false)
  }

  return (
    <section className="py-20 pt-0 lg:pt-20 bg-white dark:bg-gray-900 lg:px-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-400">
            Get in Touch
          </h2>
          <h3 className=" text-center font-semibold mb-16 text-gray-800 dark:text-gray-400">
                Contact Information
              </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-yellow-400"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name.message}</span>
                )}
              </div>

              <div>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-yellow-400"
                  placeholder="Your Email"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}
              </div>

              <div>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-yellow-400 h-32"
                  placeholder="Your Message"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">{errors.message.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            <div>
             
             <div className="space-y-6">
               {[
                 { icon: Mail, text: 'hello@suhancreatives.com' },
                 { icon: Phone, text: '+1 (555) 123-4567' },
                 { icon: MapPin, text: 'San Francisco, CA' }
               ].map((item, index) => {
                 const Icon = item.icon
                 return (
                   <div key={index} className="flex items-center space-x-4">
                     <Icon className="w-6 h-6 text-yellow-400" />
                     <span className="text-gray-600 dark:text-gray-300">{item.text}</span>
                   </div>
                 )
               })}
             </div>
           </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}