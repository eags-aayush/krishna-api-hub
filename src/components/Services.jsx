const servicesData = [
  {
    title: "Scalable API Development",
    desc: "Custom RESTful and GraphQL APIs built for performance and scalability, with comprehensive documentation.",
    icon: "ri-code-s-slash-line",
  },
  {
    title: "AI & ML Integration",
    desc: "Implement AI capabilities into your product with our expertise in machine learning model integration and API development.",
    icon: "ri-brain-line",
  },
  {
    title: "Automation & Notifications",
    desc: "Streamline operations with automated workflows, email systems, and multi-channel notification services.",
    icon: "ri-notification-3-line",
  },
  {
    title: "Secure Cloud Infrastructure",
    desc: "Robust, secure, and cost-effective cloud solutions designed for startup scalability and compliance needs.",
    icon: "ri-cloud-line",
  },
  {
    title: "Chatbot Development",
    desc: "Intelligent conversational interfaces powered by NLP to enhance customer engagement and support.",
    icon: "ri-chat-voice-line",
  },
  {
    title: "Full-Stack Web Applications",
    desc: "End-to-end web application development with responsive frontend and powerful backend systems.",
    icon: "ri-stack-line",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 relative text-text"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[180px] -top-40 left-20 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[180px] bottom-10 right-20 animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            We provide comprehensive backend solutions tailored to your startup's unique needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((items, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-text/30 transition-all transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-primary to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <i className={`${items.icon} ri-xl text-white`}></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {items.title}
              </h3>
              <p className="text-gray-300">{items.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
