'use client';

import { useRouter } from 'next/navigation';

import TopDecoration from '../ui/topDecoration';

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="relative py-12  dark:border-gray-800 overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Adaptive Background Graphics */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3f4f6" className="dark:text-gray-900" />
              <stop offset="100%" stopColor="#e5e7eb" className="dark:text-gray-800" />
            </linearGradient>

            {/* Subtle wave pattern */}
            <pattern
              id="wavePattern"
              patternUnits="userSpaceOnUse"
              width="200"
              height="100"
              patternTransform="scale(0.5) rotate(0)"
            >
              <path
                d="M0,25 C40,0 60,50 100,25 C140,0 160,50 200,25 C240,0 260,50 300,25 C340,0 360,50 400,25"
                fill="none"
                stroke="#EAB308"
                strokeWidth="0.8"
                strokeOpacity="0.25"
              />
              <path
                d="M0,75 C40,50 60,100 100,75 C140,50 160,100 200,75 C240,50 260,100 300,75 C340,50 360,100 400,75"
                fill="none"
                stroke="#EAB308" 
                strokeWidth="0.8"
                strokeOpacity="0.2"
              />
            </pattern>

            {/* Dot pattern */}
            <pattern
              id="dotPattern"
              patternUnits="userSpaceOnUse"
              width="20"
              height="20"
              patternTransform="scale(1) rotate(0)"
            >
              <circle cx="2" cy="2" r="0.8" fill="#EAB308" fillOpacity="0.3" />
            </pattern>
          </defs>

          {/* Background gradient - will adapt to light/dark mode */}
          <rect width="100%" height="100%" fill="#f9fafb" className="dark:fill-gray-900" />

          {/* Elegant diagonal lines */}
          <path
            d="M0,0 L1000,300"
            stroke="#EAB308"
            strokeWidth="0.8"
            strokeOpacity="0.08"
          />
          <path
            d="M0,100 L1000,400"
            stroke="#EAB308"
            strokeWidth="0.8"
            strokeOpacity="0.08"
          />
          <path
            d="M0,200 L1000,500"
            stroke="#EAB308"
            strokeWidth="0.8"
            strokeOpacity="0.08"
          />

          {/* Wave pattern overlay */}
          <rect
            width="100%"
            height="100%"
            fill="url(#wavePattern)"
            opacity="0.7"
          />

          {/* Dot pattern overlay */}
          <rect
            width="100%"
            height="100%"
            fill="url(#dotPattern)"
            opacity="0.5"
          />

          {/* Subtle glow in corner */}
          <radialGradient
            id="cornerGlow"
            cx="0%"
            cy="0%"
            r="50%"
            fx="0%"
            fy="0%"
          >
            <stop offset="0%" stopColor="#EAB308" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
          </radialGradient>
          <rect
            x="0"
            y="0"
            width="50%"
            height="100%"
            fill="url(#cornerGlow)"
            opacity="0.8"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-yellow-500 dark:text-yellow-400 mb-4 relative group">
              <div className="relative flex flex-col z-10 justify-center items-center transform transition-transform duration-300 group-hover:translate-x-1">
                <TopDecoration />
               
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-blue-500 dark:from-yellow-400 dark:to-blue-400">
                  Suhan
                </h2>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 dark:bg-yellow-400 opacity-75 group-hover:w-full transition-all duration-500"></span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-6 max-w-md pl-4 lg:pl-0 leading-relaxed">
              Transforming ideas into digital experiences. We specialize in
              graphic design, mobile app development, and website development.
            </p>
            <div className="lg:flex space-x-6 hidden">
              {[
                {
                  name: 'Twitter',
                  icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
                },
                {
                  name: 'LinkedIn',
                  icon: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',
                },
                {
                  name: 'Instagram',
                  icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                },
                {
                  name: 'GitHub',
                  icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="transform transition-transform hover:scale-110 text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                  aria-label={social.name}
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg transition-all duration-300 h">
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Graphic Design',
                'Mobile Development',
                'Web Development',
                'UI/UX Design',
              ].map((service) => (
                <li
                  key={service}
                  className="transform transition-all duration-300 hover:translate-x-1"
                >
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 flex items-center"
                  >
                    <span className="w-1 h-1 bg-yellow-500 dark:bg-yellow-400 rounded-full mr-2"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg transition-all duration-300">
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['About', 'Projects', 'Contact', 'Privacy Policy'].map(
                (link) => (
                  <li
                    key={link}
                    className="transform transition-all duration-300 hover:translate-x-1"
                  >
                    <a
                      href="#"
                      className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 flex items-center"
                    >
                      <span className="w-1 h-1 bg-yellow-500 dark:bg-yellow-400 rounded-full mr-2"></span>
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
            <div className="flex mt-6 justify-center items-center lg:hidden gap-4">
              {[
                {
                  name: 'Twitter',
                  icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
                },
                {
                  name: 'LinkedIn',
                  icon: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',
                },
                {
                  name: 'Instagram',
                  icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                },
                {
                  name: 'GitHub',
                  icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="transform transition-transform flex justify-between items-center hover:scale-110 text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()}
            <span
              onClick={() => router.push('Login')}
              className="mx-1 relative inline-block cursor-pointer group"
            >
              <span className="text-yellow-500 dark:text-yellow-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-300 transition-colors">
                Suhan Creatives
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 dark:bg-yellow-400 opacity-75 group-hover:w-full transition-all duration-300"></span>
            </span>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}