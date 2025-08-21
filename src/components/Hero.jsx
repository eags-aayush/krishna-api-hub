import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex items-center">
      <div className="container mx-auto px-6 w-full grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="max-w-3xl text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Supercharge Your Startup Backend with <span className="text-text">Krishna API HUB</span>
          </h1>

          <p className="text-lg md:text-xl text-text mb-10 max-w-2xl">
            Scalable APIs, AI-ready integrations, blazing fast delivery. <br />
            <span className="text-primary font-semibold">No upfront development cost</span> for eligible startups.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <a
              href="https://www.krishnaapihub.com/#contact"
              className="px-8 py-4 bg-primary text-text font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-1 hover:scale-105"
            >
              🚀 Get Started Free
            </a>
            <a
              href="https://www.krishnaapihub.com/#services"
              className="px-8 py-4 bg-transparent border border-gray-600 text-text font-medium rounded-xl hover:bg-gray-800 hover:text-text transition-all transform hover:-translate-y-1 hover:scale-105"
            >
              🔍 Explore Services
            </a>
          </div>
        </div>

        {/* Right Tech Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden md:flex flex-col gap-6"
        >
          <motion.div
            className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-xl shadow-lg p-6 text-left max-w-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg font-semibold text-text mb-2">API Response</h3>
            <pre className="text-sm text-text">
{`{
  "status": "success",
  "startup": "Krishna API HUB",
  "features": [
    "Authentication",
    "Payments",
    "AI-Integration",
    "Analytics"
  ]
}`}
            </pre>
          </motion.div>

          <motion.div
            className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-xl shadow-lg p-6 text-left max-w-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg font-semibold text-text mb-2">cURL Example</h3>
            <pre className="text-sm text-text">
{`curl -X POST "https://api.krishnaapihub.com/v1/auth" \\
 -H "Content-Type: application/json" \\
 -d '{"email":"founder@startup.com"}'`}
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
