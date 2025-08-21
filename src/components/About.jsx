import { motion } from "framer-motion";

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
      className="py-24 relative text-text px-6"
    >
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-10"
        >
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
        </motion.div>
    </section>
  );
};

export default About;
