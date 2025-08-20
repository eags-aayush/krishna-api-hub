import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <a
              href="/"
              className="text-2xl font-['Pacifico'] bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent block mb-4"
            >
              Krishna API HUB
            </a>
            <p className="text-gray-400 mb-6">
              Empowering startups with scalable backend solutions and API development.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-all transform hover:-translate-y-1 hover:shadow-md"
              >
                <i className="ri-twitter-x-line"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-all transform hover:-translate-y-1 hover:shadow-md"
              >
                <i className="ri-linkedin-line"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-all transform hover:-translate-y-1 hover:shadow-md"
              >
                <i className="ri-github-line"></i>
              </a>
              <a
                href="https://www.instagram.com/krishna.api.hub/"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-all transform hover:-translate-y-1 hover:shadow-md"
              >
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Integration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chatbot Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Applications</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Docs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Krishna API HUB. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <i className="ri-visa-line ri-lg"></i>
            <i className="ri-mastercard-line ri-lg"></i>
            <i className="ri-paypal-line ri-lg"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
