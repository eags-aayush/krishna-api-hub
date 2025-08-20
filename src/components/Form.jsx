import React from 'react'

const Form = () => {
  return (
    <section id="contact" className="py-24 relative text-text">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] -top-40 left-20 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[160px] bottom-20 right-10 animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Let's Build Your Backend
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Ready to supercharge your startup? Get in touch to discuss your project or schedule a free consultation call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <form id="contactForm" className="space-y-6" action="https://formspree.io/f/xrbknpzw" method="POST">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:ring-2 focus:ring-primary/40 focus:outline-none text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:ring-2 focus:ring-primary/40 focus:outline-none text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="phonenumber" className="block text-gray-300 font-medium mb-2">Phone Number</label>
                <input
                  type="text"
                  id="phonenumber"
                  name="phonenumber"
                  placeholder="+91"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:ring-2 focus:ring-primary/40 focus:outline-none text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="projectType" className="block text-gray-300 font-medium mb-2">Project Type</label>
                <div className="relative">
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:ring-2 focus:ring-primary/40 appearance-none"
                  >
                    <option value="" disabled>Select your project type</option>
                    <option value="mvp">MVP Development</option>
                    <option value="api">API Development</option>
                    <option value="ai">AI Integration</option>
                    <option value="chatbot">Chatbot Development</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:ring-2 focus:ring-primary/40 focus:outline-none text-white placeholder-gray-400"
                ></textarea>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="subscribe" className="h-4 w-4 rounded border-gray-500 text-primary focus:ring-primary" />
                <label className="text-gray-300">Subscribe to our newsletter for startup tips and resources</label>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-purple-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-1"
              >
                Schedule a Free Call
              </button>
            </form>
          </div>

          {/* Process Section */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg">
            <h3 className="text-2xl font-bold mb-8">How We Work</h3>
            <div className="space-y-8">
              {[
                {
                  title: "Initial Consultation",
                  desc: "We'll discuss your idea, requirements, and goals to understand your vision."
                },
                {
                  title: "Proposal & Planning",
                  desc: "We'll create a detailed proposal with timeline, features, and flexible payment options."
                },
                {
                  title: "Development & Delivery",
                  desc: "Our team builds your solution with regular updates and transparent communication."
                },
                {
                  title: "Ongoing Support",
                  desc: "We provide maintenance, updates, and scaling support as your startup grows."
                }
              ].map((step, i) => (
                <div key={i} className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center mr-4 font-bold text-white">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                    <p className="text-gray-300 group-hover:text-gray-200">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-10 pt-8 border-t border-gray-700">
              <h4 className="font-semibold text-white mb-4">Contact Information</h4>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-primary text-xl"></i>
                <a href="mailto:sushmat6699@gmail.com" className="text-gray-300 hover:text-white">
                  sushmat6699@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form
