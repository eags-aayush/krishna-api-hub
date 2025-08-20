const advantageData = [
  {
    title: "Built for Startups",
    desc: "Designed specifically to support early-stage ventures and student innovators with flexible pricing and scalable solutions.",
    icon: "ri-seedling-line",
  },
  {
    title: "Scalable & Secure",
    desc: "Robust architecture that grows with your business, ensuring your data stays protected with enterprise-grade security.",
    icon: "ri-shield-keyhole-line",
  },
  {
    title: "Fast Turnaround",
    desc: "Rapid development cycles to get your MVP or product to market quickly without compromising on quality.",
    icon: "ri-flashlight-line",
  },
  {
    title: "Full Support",
    desc: "From idea to deployment, our team helps you choose the right tech stack and maintain your product for optimal performance.",
    icon: "ri-team-line",
  },
  {
    title: "AI & Automation Ready",
    desc: "Built-in support for AI integration, machine learning models, and automated workflows to enhance your product capabilities.",
    icon: "ri-brain-line",
  },
  {
    title: "Startup Friendly Pricing",
    desc: "Flexible payment plans with zero upfront costs for eligible startups. Pay as you grow and succeed.",
    icon: "ri-wallet-3-line",
  },
];

const Advantage = () => {
  return (
    <section
      id="advantages"
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
            Why Choose Krishna API HUB
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Empowering startups with cutting-edge technology solutions and dedicated support at every step.
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantageData.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-text/30 transition-all transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-primary to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <i className={`${item.icon} ri-xl text-white`}></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
