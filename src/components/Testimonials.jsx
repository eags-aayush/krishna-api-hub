import React from 'react'

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted By Innovators</h2>
<div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
<p className="max-w-3xl mx-auto text-lg text-gray-700">
We've helped startups across various industries build robust backend systems.
</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
<div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
<div className="text-center">
<div className="w-12 h-12 mx-auto flex items-center justify-center mb-3">
<i className="ri-heart-pulse-line ri-2x text-gray-400"></i>
</div>
<p className="text-gray-700 font-medium">HealthTech</p>
</div>
</div>
<div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
<div className="text-center">
<div className="w-12 h-12 mx-auto flex items-center justify-center mb-3">
<i className="ri-bank-line ri-2x text-gray-400"></i>
</div>
<p className="text-gray-700 font-medium">FinTech</p>
</div>
</div>
<div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
<div className="text-center">
<div className="w-12 h-12 mx-auto flex items-center justify-center mb-3">
<i className="ri-book-open-line ri-2x text-gray-400"></i>
</div>
<p className="text-gray-700 font-medium">EdTech</p>
</div>
</div>
<div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
<div className="text-center">
<div className="w-12 h-12 mx-auto flex items-center justify-center mb-3">
<i className="ri-shopping-bag-line ri-2x text-gray-400"></i>
</div>
<p className="text-gray-700 font-medium">E-commerce</p>
</div>
</div>
</div>
<div className="mt-16 max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
<div className="flex flex-col md:flex-row items-center gap-8">
<div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
<img src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20female%20startup%20founder%20with%20a%20confident%20smile%2C%20neutral%20background%2C%20professional%20attire&width=200&height=200&seq=testimonial123&orientation=squarish" alt="Client" className="w-full h-full object-cover object-top" />
</div>
<div>
<p className="text-gray-700 italic mb-4">"Krishna API HUB was instrumental in bringing our healthcare platform to life. Their technical expertise and startup-friendly approach allowed us to launch our MVP quickly and scale as we grew. Highly recommended for any early-stage startup."</p>
<div>
<p className="font-semibold text-gray-900">Sarah Johnson</p>
<p className="text-gray-600 text-sm">Co-founder, MediConnect</p>
</div>
</div>
</div>
</div>
</div>
</section>
  )
}

export default Testimonials