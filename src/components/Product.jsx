import React from "react"

const productData = [
  {
    title: "Built-in RAG Support",
    desc: "Enhance your AI models with built-in Retrieval-Augmented Generation (RAG) support for more accurate and context-aware responses.",
    icon: "ri-database-2-line",
  },
  {
    title: "Purpose-Driven AI Personalities",
    desc: "Create AI personalities tailored to specific tasks, improving user engagement and relevance.",
    icon: "ri-user-voice-line",
  },
  {
    title: "Dynamic Tool Execution via LLM",
    desc: "Enable your AI models to dynamically execute tools and functions, expanding their capabilities and utility.",
    icon: "ri-tools-line",
  },
  {
    title: "AI-Powered Query Refinement",
    desc: "Refine user queries using AI to improve search accuracy and deliver more relevant results.",
    icon: "ri-filter-3-line",
  },
  {
    title: "Unified API",
    desc: "Access all your AI models through a single, unified API endpoint.",
    icon: "ri-api-line",
  },
  {
    title: "Model Switching",
    desc: "Seamlessly switch between different AI models without altering your code.",
    icon: "ri-exchange-box-line",
  },
  {
    title: "Cost Management",
    desc: "Effectively manage and optimize costs associated with AI model usage.",
    icon: "ri-money-dollar-circle-line",
  },
  {
    title: "Security",
    desc: "Ensure the security and privacy of your AI models and data.",
    icon: "ri-shield-keyhole-line",
  },
  {
    title: "Caching",
    desc: "Improve performance and reduce latency with built-in caching mechanisms.",
    icon: "ri-stack-line",
  },
  {
    title: "Analytics",
    desc: "Gain insights into model usage, performance, and cost with comprehensive analytics.",
    icon: "ri-bar-chart-2-line",
  },
  {
    title: "SDK and Support",
    desc: "Integrate AI Gateway easily with your applications using our SDK and dedicated support.",
    icon: "ri-code-s-slash-line",
  },
]

const Product = () => {
  return (
    <section
      id="product"
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
            AI Gateway
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            AI Gateway offers a comprehensive suite of features designed to streamline your AI model management and
            enhance your application's performance.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-text/30 transition-all transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-primary to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <i className={`${item.icon} ri-xl text-white`}></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Product
