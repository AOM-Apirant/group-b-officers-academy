import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8 group">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
                <Image
                  src="/logo.jpg"
                  alt="Group B Officers Academy"
                  width={220}
                  height={220}
                  className="relative mx-auto rounded-full shadow-2xl ring-4 ring-white group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-6 leading-tight">
                Welcome to
                <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text">Group B Officers Academy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
                Your gateway to success in the <span className="text-blue-600 font-bold">AOM LDCE Examination</span> through expert guidance and comprehensive preparation
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
                <button className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg overflow-hidden">
                  <span className="relative z-10">Start Learning</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="group relative border-2 border-blue-600 text-blue-700 px-10 py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Learn More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-1 shadow-2xl hover:shadow-blue-300/50 transition-all duration-500">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-14 text-white">
              <div className="text-center mb-10">
                <div className="inline-block animate-bounce">
                  <span className="text-6xl mb-6 block drop-shadow-lg">🌟</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight tracking-tight">
                  GOOD EVENING, AOM ASPIRANTS!
                </h2>
                <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                  <p className="text-xl font-semibold">
                    From GROUP &apos;B&apos; OFFICERS ACADEMY
                  </p>
                </div>
              </div>
              
              <div className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed space-y-6">
                <p className="text-white/95 font-medium">
                  It&apos;s wonderful to see such a large number of dedicated aspirants preparing for the AOM LDCE Examination.
                </p>
                
                <p className="text-white/95 font-medium">
                  To instill seriousness and focus among all participants and to ensure effective preparation through interactive Zoom classes and regular practice tests, an Intensive Crash Course has been specially designed under the able guidance of:
                </p>
                
                <div className="relative mt-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl blur-xl opacity-30"></div>
                  <div className="relative bg-white backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-3">
                          <span className="text-4xl">👨‍🏫</span>
                        </div>
                        <p className="font-black text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                          Sri. SREENIVASULU CHEVURU
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 font-semibold">
                          Sr. Instructor, ZRTI/MLY/SC/SCR
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-bold rounded-full text-sm uppercase tracking-wide">
                Our Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Why Choose Our Academy?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              Comprehensive preparation for your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl blur-md opacity-50"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-4xl">📚</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Guidance</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Learn from experienced instructors with proven track records in LDCE examinations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur-md opacity-50"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-4xl">💻</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Classes</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Join live Zoom sessions for real-time learning and doubt clarification.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl blur-md opacity-50"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-4xl">🎯</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Practice Tests</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Regular mock tests and practice sessions to boost your confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-black rounded-full text-sm uppercase tracking-wider shadow-lg">
                Start Today
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 font-medium leading-relaxed">
              Join thousands of successful officers who started their journey with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button className="group relative overflow-hidden bg-white text-blue-900 px-10 py-5 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 font-black text-xl transform hover:scale-105">
                <span className="relative z-10">Enroll Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"> 🚀</span>
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 font-bold text-xl backdrop-blur-sm bg-white/10 hover:shadow-xl transform hover:scale-105">
                Contact Us
              </button>
            </div>
            
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-black text-white mb-2">1000+</p>
                <p className="text-blue-200 font-semibold">Students</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-black text-white mb-2">95%</p>
                <p className="text-blue-200 font-semibold">Success Rate</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-black text-white mb-2">10+</p>
                <p className="text-blue-200 font-semibold">Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home