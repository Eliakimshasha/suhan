export default function Footer() {
    return (
      <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Suhan Creatives</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Transforming ideas into digital experiences. We specialize in graphic design,
                mobile app development, and website development.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
  
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Services</h4>
              <ul className="space-y-2">
                {['Graphic Design', 'Mobile Development', 'Web Development', 'UI/UX Design'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-yellow-400">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Projects', 'Contact', 'Privacy Policy'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-yellow-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-center text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Suhan Creatives. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }