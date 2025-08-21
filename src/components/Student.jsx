import React from 'react'

const Student = () => {
  return (
    <section
      id="program"
      className="py-24 relative text-text px-6"
    >
        <div className="max-w-6xl mx-auto rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 p-10 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <div>
              <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Student & Startup Program
              </h2>
              <p className="text-text mb-6">
                We believe in supporting the next generation of innovators. Our special program for students and early-stage startups offers significant advantages to help you get your idea off the ground.
              </p>

              {/* Feature List */}
              <div className="space-y-5 mb-8">
                {[
                  "Zero upfront development cost for qualified startups",
                  "Revenue-based payment plans",
                  "Technical mentorship and business guidance",
                  "Priority access to our development team",
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start group hover:translate-x-1 transition-transform"
                  >
                    <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center mr-3 mt-0.5 rounded-full bg-gradient-to-r from-primary to-purple-500">
                      <i className="ri-check-line ri-lg text-text"></i>
                    </div>
                    <p className="text-text group-hover:text-text hover:font-bold transition-colors">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="https://www.krishnaapihub.com/#contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-purple-500 text-text font-medium rounded-full hover:shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-1"
              >
                Apply Now
              </a>
            </div>

            {/* Image Section */}
            <div className="hidden md:block">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="./Krishna API HUB - Supercharge Your Startup Backend_files/search-image"
                  alt="Student Entrepreneurs"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Student
