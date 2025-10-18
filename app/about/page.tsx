import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-60 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-full text-sm uppercase tracking-wider shadow-lg">
              ✨ About Us
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight animate-fade-in">
            About Our Academy
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-medium leading-relaxed">
            Dedicated to excellence in preparing officers for <span className="text-yellow-300 font-bold">AOM LDCE examinations</span>
          </p>
          <div className="mt-10">
            <div className="inline-flex items-center gap-8 text-white">
              <div className="text-center">
                <p className="text-4xl font-black">10+</p>
                <p className="text-sm text-blue-200">Years</p>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <p className="text-4xl font-black">1000+</p>
                <p className="text-sm text-blue-200">Students</p>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <p className="text-4xl font-black">95%</p>
                <p className="text-sm text-blue-200">Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Overview */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-bold rounded-full text-sm uppercase tracking-wide">
                  🎓 Our Story
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-8 leading-tight">
                GROUP B OFFICERS ACADEMY
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed font-medium">
                We are a <span className="text-blue-600 font-bold">premier training institution</span> specializing in preparing dedicated aspirants for the AOM LDCE Examination. Our academy is committed to providing comprehensive, high-quality education that empowers students to achieve their career goals in the Indian Railways.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                With years of experience and a proven track record, we have successfully guided numerous students through their preparation journey, helping them secure their desired positions in <span className="text-purple-600 font-bold">Group B officer roles</span>.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10">Expert Instructors</span>
                </div>
                <div className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10">Interactive Learning</span>
                </div>
                <div className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10">Proven Results</span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="Group B Officers Academy"
                  width={500}
                  height={500}
                  className="rounded-3xl shadow-2xl ring-4 ring-white group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 font-bold rounded-full text-sm uppercase tracking-wide">
                💫 Our Purpose
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Mission & Vision
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-100 hover:border-blue-300 transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                      <span className="text-5xl">🎯</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 mb-6">Our Mission</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    To provide <span className="text-blue-600 font-bold">exceptional training and guidance</span> to AOM aspirants, ensuring they are well-prepared for the LDCE examination through comprehensive study materials, expert instruction, and regular practice sessions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-100 hover:border-purple-300 transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                      <span className="text-5xl">🌟</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6">Our Vision</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    To be the <span className="text-purple-600 font-bold">leading academy</span> for Group B officer preparation, recognized for our excellence in education and our commitment to student success in the Indian Railways sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-full text-sm uppercase tracking-wider shadow-lg">
                👨‍🏫 Our Expert
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Meet Our Expert Instructor
            </h2>
            <p className="text-xl md:text-2xl text-blue-200 font-medium">
              Learn from the best in the field
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-10 md:p-16 border border-white/20 shadow-2xl">
                <div className="text-center">
                  <div className="relative mb-8 inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                    <div className="relative w-40 h-40 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto shadow-2xl ring-4 ring-white/30">
                      <span className="text-7xl">👨‍🏫</span>
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                    Sri. SREENIVASULU CHEVURU
                  </h3>
                  <div className="inline-block mb-8 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
                    <p className="text-xl font-black text-gray-900">
                      Senior Instructor, ZRTI/MLY/SC/SCR
                    </p>
                  </div>
                  <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto font-medium mb-10">
                    With extensive experience in railway operations and training, Sri. SREENIVASULU CHEVURU brings <span className="text-yellow-300 font-bold">unparalleled expertise</span> to our academy. His deep understanding of the AOM LDCE examination patterns and his proven teaching methods have helped <span className="text-orange-300 font-bold">countless students achieve their goals</span>.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="group/badge relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
                      Expert in Railway Operations
                    </div>
                    <div className="group/badge relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
                      Proven Track Record
                    </div>
                    <div className="group/badge relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
                      Student-Focused Approach
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Features */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-purple-100"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 font-bold rounded-full text-sm uppercase tracking-wide">
                ⭐ Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-6 leading-tight">
              What Sets Us Apart
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              Our unique approach to AOM preparation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-300 transform hover:-translate-y-3">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-4xl">📖</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">Comprehensive Study Material</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">Well-structured curriculum covering all aspects of the examination</p>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-300 transform hover:-translate-y-3">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-4xl">💻</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">Live Interactive Classes</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">Real-time learning through Zoom sessions with expert instructors</p>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-300 transform hover:-translate-y-3">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-4xl">📝</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">Regular Practice Tests</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">Mock tests and assessments to track your progress</p>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-300 transform hover:-translate-y-3">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-4xl">🤝</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">Personal Mentorship</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">Individual guidance and support throughout your journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About