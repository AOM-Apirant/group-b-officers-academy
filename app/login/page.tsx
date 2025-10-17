import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Login Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          {/* Logo and Title */}
          <div className="text-center mb-8 animate-fade-in-up">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-3xl font-bold">GB</span>
              </div>
            </div>
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mb-2">
              Welcome Back
            </h1>
            <p className="text-xl text-blue-100">
              Sign in to your account
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 animate-fade-in-up-delay">
            <form className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-blue-200 text-xl">📧</span>
                  </div>
                  <input 
                    type="email" 
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-blue-100 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-blue-200 text-xl">🔒</span>
                  </div>
                  <input 
                    type="password" 
                    className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    placeholder="Enter your password"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button type="button" className="text-blue-200 hover:text-white transition-colors">
                      <span className="text-xl">👁️</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    id="remember-me" 
                    name="remember-me" 
                    type="checkbox" 
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-white/20 rounded bg-white/10"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-100">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-blue-300 hover:text-white transition-colors">
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Login Button */}
              <button 
                type="submit"
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-transparent text-blue-200">Or continue with</span>
                </div>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full group relative px-4 py-3 bg-white/10 backdrop-blur-lg text-white text-lg font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10 flex items-center justify-center">
                  <span className="mr-2">📘</span>
                  Facebook
                </span>
              </button>
              <button className="w-full group relative px-4 py-3 bg-white/10 backdrop-blur-lg text-white text-lg font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10 flex items-center justify-center">
                  <span className="mr-2">🔍</span>
                  Google
                </span>
              </button>
            </div>
          </div>

          {/* Register Link */}
          <div className="mt-8 text-center animate-fade-in-up-delay-2">
            <p className="text-blue-200">
              Don&apos;t have an account?{' '}
              <a href="#" className="text-blue-300 hover:text-white font-semibold transition-colors">
                Sign up here
              </a>
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center animate-fade-in-up-delay-3">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-2">New to Our Academy?</h3>
              <p className="text-blue-200 text-sm mb-4">
                Join our comprehensive AOM LDCE preparation course and start your journey to becoming a railway officer.
              </p>
              <button className="w-full group relative px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Learn More About Our Courses</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="lg:text-5xl text-3xl font-bold text-white mb-4">Why Login?</h2>
            <p className="text-xl text-blue-200">Access Your Personalized Learning Experience</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Course Materials</h3>
              <p className="text-blue-200 text-sm">Access your personalized study materials and resources</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Progress Tracking</h3>
              <p className="text-blue-200 text-sm">Monitor your learning progress and performance</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Live Classes</h3>
              <p className="text-blue-200 text-sm">Join interactive Zoom sessions and Q&A</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Login