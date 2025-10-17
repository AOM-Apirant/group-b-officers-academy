import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-2 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Title with Animation */}
          <div className="mb-8">
            <h1 className="lg:text-6xl text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mb-6 animate-fade-in-up">
              GET IN
            </h1>
            <h2 className="lg:text-5xl text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 animate-fade-in-up-delay">
              TOUCH WITH US
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
            Ready to Start Your Railway Officer Journey? Contact Us Today!
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
                <h3 className="text-3xl font-bold text-white mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-blue-100 text-sm font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-blue-100 text-sm font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-blue-100 text-sm font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-blue-100 text-sm font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-blue-100 text-sm font-medium mb-2">Subject</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300">
                      <option value="" className="bg-slate-800">Select a subject</option>
                      <option value="course-info" className="bg-slate-800">Course Information</option>
                      <option value="enrollment" className="bg-slate-800">Enrollment</option>
                      <option value="support" className="bg-slate-800">Technical Support</option>
                      <option value="general" className="bg-slate-800">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-blue-100 text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in-up-delay">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
                  <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">📧</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">Email</h4>
                        <p className="text-blue-200">info@groupbofficersacademy.com</p>
                        <p className="text-blue-200">support@groupbofficersacademy.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">📞</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">Phone</h4>
                        <p className="text-blue-200">+91 9876543210</p>
                        <p className="text-blue-200">+91 9876543211</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">📍</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">Address</h4>
                        <p className="text-blue-200">Railway Training Institute</p>
                        <p className="text-blue-200">Secunderabad, Telangana</p>
                        <p className="text-blue-200">India - 500003</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">🕒</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">Office Hours</h4>
                        <p className="text-blue-200">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-blue-200">Saturday: 9:00 AM - 2:00 PM</p>
                        <p className="text-blue-200">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <button className="w-full group relative px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                      <span className="relative z-10">📞 Call Now</span>
                    </button>
                    <button className="w-full group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                      <span className="relative z-10">💬 WhatsApp</span>
                    </button>
                    <button className="w-full group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                      <span className="relative z-10">📧 Email Us</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="lg:text-5xl text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-blue-200">Quick Answers to Common Questions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">What courses do you offer?</h3>
              <p className="text-blue-200">We offer comprehensive AOM LDCE preparation courses with interactive Zoom classes, practice tests, and expert guidance.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">How long is the course duration?</h3>
              <p className="text-blue-200">Our intensive crash course typically runs for 3-6 months, depending on the batch and preparation level.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">What is the success rate?</h3>
              <p className="text-blue-200">We maintain a 95% success rate with over 500+ officers successfully trained and placed in Group B positions.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">Do you provide study materials?</h3>
              <p className="text-blue-200">Yes, we provide comprehensive study materials, practice papers, and mock tests as part of our course package.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="lg:text-5xl text-3xl font-bold text-white mb-4">Find Us</h2>
            <p className="text-xl text-blue-200">Visit Our Training Institute</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
            <div className="bg-gray-800 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold text-white mb-2">Interactive Map</h3>
                <p className="text-blue-200 mb-4">Railway Training Institute, Secunderabad</p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                  Open in Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Contact