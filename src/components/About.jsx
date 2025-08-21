const aboutData = [
  {
    title: "Technical Excellence",
    desc: "We build scalable, maintainable backend systems that grow with your business needs.",
    icon: "ri-cpu-line",
  },
  {
    title: "Startup Focused",
    desc: "Our pricing and delivery models are specifically designed for early-stage startups and student entrepreneurs.",
    icon: "ri-rocket-line",
  },
  {
    title: "Reliable Partnership",
    desc: "We're not just vendors; we're partners in your journey from MVP to market success.",
    icon: "ri-hand-heart-line",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 relative text-text"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[180px] -top-40 left-20 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[180px] bottom-10 right-20 animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Your Idea, Our Code. Let's Build Together.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-text">
            At <span className="text-primary font-semibold">Krishna API HUB</span>, we empower startups and student entrepreneurs to transform their ideas into robust digital products without the burden of high development costs. Our mission is to democratize technology access for early-stage innovators.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-text/30 transition-all transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-primary to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <i className={`${item.icon} ri-xl text-text`}></i>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">
                {item.title}
              </h3>
              <p className="text-text">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
