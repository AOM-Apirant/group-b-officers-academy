import React from 'react'

const About = () => {
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
              ABOUT OUR
            </h1>
            <h2 className="lg:text-5xl text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 animate-fade-in-up-delay">
              GROUP B OFFICERS ACADEMY
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
            Empowering Railway Officers Through Excellence in Training and Development Since 2014
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="lg:text-5xl text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-6">
                To provide comprehensive, high-quality training programs that prepare railway officers for 
                successful careers in Group B positions through innovative teaching methods, expert guidance, 
                and practical experience.
              </p>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                We are committed to fostering excellence, integrity, and leadership qualities in every 
                officer who passes through our academy.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 animate-fade-in-up-delay">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Vision</h3>
              <div className="text-center">
                <div className="text-6xl mb-4">🚂</div>
                <p className="text-lg text-blue-100 leading-relaxed">
                  To be the premier training institution for railway officers, recognized nationally 
                  for producing competent, ethical, and innovative leaders who drive excellence in 
                  Indian Railways operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy History Section */}
      <section className="relative z-10 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="lg:text-5xl text-3xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-blue-200">A Decade of Excellence in Railway Officer Training</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-yellow-400 mb-2">2014</div>
              <h3 className="text-xl font-bold text-white mb-2">Academy Founded</h3>
              <p className="text-blue-200">Started with a vision to transform railway officer training</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-yellow-400 mb-2">500+</div>
              <h3 className="text-xl font-bold text-white mb-2">Officers Trained</h3>
              <p className="text-blue-200">Successfully trained officers across various railway zones</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-yellow-400 mb-2">95%</div>
              <h3 className="text-xl font-bold text-white mb-2">Success Rate</h3>
              <p className="text-blue-200">Outstanding track record in AOM LDCE examinations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="lg:text-5xl text-3xl font-bold text-white mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-blue-200">Experienced Professionals Dedicated to Your Success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">👨‍🏫</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Sri. SREENIVASULU CHEVURU</h3>
              <p className="text-blue-300 text-lg mb-4">Senior Instructor</p>
              <p className="text-blue-200 text-sm">ZRTI/MLY/SC/SCR</p>
              <p className="text-blue-100 text-sm mt-4">
                With over 15 years of experience in railway operations and training, 
                Sri. Sreenivasulu brings unparalleled expertise to our academy.
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">👩‍💼</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Dr. Priya Sharma</h3>
              <p className="text-blue-300 text-lg mb-4">Training Coordinator</p>
              <p className="text-blue-200 text-sm">Educational Excellence</p>
              <p className="text-blue-100 text-sm mt-4">
                Specialized in curriculum development and student assessment, 
                ensuring comprehensive preparation for all aspirants.
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">👨‍💻</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Rajesh Kumar</h3>
              <p className="text-blue-300 text-lg mb-4">Technical Specialist</p>
              <p className="text-blue-200 text-sm">Digital Learning</p>
              <p className="text-blue-100 text-sm mt-4">
                Expert in online learning platforms and interactive teaching methods, 
                making complex railway concepts easy to understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="lg:text-5xl text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-blue-200">Principles That Guide Everything We Do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-blue-200 text-sm">Committed to delivering the highest quality training</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Integrity</h3>
              <p className="text-blue-200 text-sm">Maintaining the highest ethical standards</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-blue-200 text-sm">Embracing new methods and technologies</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Leadership</h3>
              <p className="text-blue-200 text-sm">Developing future railway leaders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Join hundreds of successful officers who have transformed their careers through our 
              comprehensive training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <span className="relative z-10">Enroll Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-lg text-white text-xl font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <span className="relative z-10">Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default About