import React from 'react'

const Home = () => {
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
              WELCOME TO
            </h1>
            <h2 className="lg:text-5xl text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 animate-fade-in-up-delay">
              GROUP B OFFICERS ACADEMY
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
            Empowering Railway Officers Through Excellence in Training and Development
          </p>

          {/* Main Content Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 lg:p-8 p-4 max-w-5xl mx-auto mb-12 animate-fade-in-up-delay-3">
            <div className="text-center mb-8">
              <div className="inline-block text-6xl mb-6 animate-bounce">
                🌟
              </div>
              <h3 className="lg:text-4xl text-2xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                HELLO, AOM ASPIRANTS!
              </h3>
              <p className="lg:text-2xl text-xl text-blue-100 mb-8">
                From <span className="font-bold text-yellow-400">GROUP &apos;B&apos; OFFICERS ACADEMY</span>
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl lg:p-8 p-4 mb-8 backdrop-blur-sm border border-blue-400/30">
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-6">
                It&apos;s wonderful to see such a large number of dedicated aspirants preparing for the 
                <span className="font-bold text-yellow-400 text-2xl"> AOM LDCE Examination</span>.
              </p>
              
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                To instill seriousness and focus among all participants and to ensure effective preparation 
                through interactive Zoom classes and regular practice tests, an 
                <span className="font-bold text-yellow-400 text-xl"> Intensive Crash Course</span> has been 
                specially designed under the able guidance of
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl lg:p-8 p-4 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <span className="text-4xl animate-pulse">👉</span>
                <div className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-bold mb-2">Sri. SREENIVASULU CHEVURU</p>
                  <p className="text-lg md:text-xl opacity-90">Sr. Instructor, ZRTI/MLY/SC/SCR</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="relative z-10">Join Our Course</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-lg text-white text-xl font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="relative z-10">Learn More</span>
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative z-10 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="lg:text-5xl text-3xl font-bold text-white mb-4">Our Success Stories</h2>
            <p className="text-xl text-blue-200">Numbers That Speak for Themselves</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-yellow-400 mb-2">500+</div>
              <p className="text-blue-200 text-lg">Successful Officers</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-yellow-400 mb-2">95%</div>
              <p className="text-blue-200 text-lg">Success Rate</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-yellow-400 mb-2">10+</div>
              <p className="text-blue-200 text-lg">Years Experience</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-yellow-400 mb-2">24/7</div>
              <p className="text-blue-200 text-lg">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="lg:text-5xl text-3xl font-bold text-white mb-4">Why Choose Our Academy?</h2>
            <p className="text-xl text-blue-200">Excellence in Railway Officer Training</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Guidance</h3>
              <p className="text-blue-200 text-lg leading-relaxed">Learn from experienced instructors with proven track records in railway operations</p>
            </div>
            
            <div className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Interactive Classes</h3>
              <p className="text-blue-200 text-lg leading-relaxed">Join live Zoom sessions for real-time learning experience with Q&A sessions</p>
            </div>
            
            <div className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Practice Tests</h3>
              <p className="text-blue-200 text-lg leading-relaxed">Regular assessments and mock tests to track your progress and improve performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="lg:text-5xl text-3xl font-bold text-white mb-4">What Our Students Say</h2>
            <p className="text-xl text-blue-200">Success Stories from Our Academy</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-blue-200 text-lg mb-6 italic">&quot;The intensive crash course helped me clear the AOM LDCE examination in my first attempt. Excellent guidance and support!&quot;</p>
              <div className="text-white font-bold">- Rajesh Kumar</div>
              <div className="text-blue-300">Senior Station Master</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-blue-200 text-lg mb-6 italic">&quot;Interactive Zoom classes made learning engaging and effective. Highly recommended for all railway aspirants!&quot;</p>
              <div className="text-white font-bold">- Priya Sharma</div>
              <div className="text-blue-300">Assistant Station Master</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-blue-200 text-lg mb-6 italic">&quot;The practice tests and mock exams were crucial for my success. Thank you for the excellent preparation!&quot;</p>
              <div className="text-white font-bold">- Amit Singh</div>
              <div className="text-blue-300">Station Superintendent</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="lg:text-3xl text-2xl font-bold text-white mb-4">GROUP B OFFICERS ACADEMY</h3>
              <p className="text-blue-200 text-lg mb-6">Empowering Railway Officers Through Excellence in Training and Development</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-white">📘</span>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-white">📷</span>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-white">🐦</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
                <li><a href="/login" className="text-blue-200 hover:text-white transition-colors">Login</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Contact Info</h4>
              <div className="space-y-2 text-blue-200">
                <p>📧 info@groupbofficersacademy.com</p>
                <p>📞 +91 9876543210</p>
                <p>📍 Railway Training Institute</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-blue-200">© 2024 Group B Officers Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home