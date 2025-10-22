import React from 'react'

const Vision = () => {
  const visionPillars = [
    {
      icon: "🌟",
      title: "Excellence",
      description: "Being the premier institution for Railway Group B officer preparation in the region",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: "🎓",
      title: "Knowledge Hub",
      description: "Creating a comprehensive learning ecosystem for aspiring railway professionals",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Leading the way with cutting-edge teaching methods and technology integration",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Building a supportive network of learners, mentors, and successful alumni",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: "🏆",
      title: "Success",
      description: "Achieving industry-leading success rates and producing top-ranking candidates",
      color: "from-red-500 to-rose-600"
    },
    {
      icon: "🌍",
      title: "Impact",
      description: "Making a lasting positive impact on students' lives and railway services",
      color: "from-indigo-500 to-violet-600"
    }
  ]

  const futureGoals = [
    {
      year: "2025",
      title: "Digital Transformation",
      description: "Complete digitalization of all learning materials with AI-powered personalized learning paths",
      icon: "💻",
      status: "In Progress"
    },
    {
      year: "2026",
      title: "National Expansion",
      description: "Establishing presence in 10 major railway zones across India with dedicated training centers",
      icon: "🗺️",
      status: "Planning"
    },
    {
      year: "2027",
      title: "Advanced Analytics",
      description: "Implementing advanced performance analytics and predictive success modeling for students",
      icon: "📊",
      status: "Research"
    },
    {
      year: "2028",
      title: "Industry Partnership",
      description: "Collaborating with Indian Railways for direct recruitment and internship opportunities",
      icon: "🤝",
      status: "Vision"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="text-7xl mb-4 animate-bounce">👁️</div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
              Our Vision
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-4 text-purple-100">
              Shaping Tomorrow&apos;s Railway Leaders
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl leading-relaxed text-purple-50 mb-6">
                To be the most trusted and innovative academy for Railway Group B officer preparation, 
                transforming aspiring candidates into competent professionals who will shape the future of Indian Railways
              </p>
              <div className="inline-block px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full">
                <p className="text-lg font-semibold">
                  &ldquo;Envisioning Excellence, Inspiring Success&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Pillars Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Vision Pillars
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The foundational elements that guide our vision for the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visionPillars.map((pillar, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${pillar.color} p-8 text-center transition-all duration-300`}>
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Future Goals Timeline */}
      <div className="bg-gradient-to-br from-gray-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Future Roadmap
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic goals for becoming the leading railway preparation academy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureGoals.map((goal, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {goal.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <span className="text-4xl mr-3">{goal.icon}</span>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {goal.title}
                        </h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        goal.status === 'In Progress' ? 'bg-green-100 text-green-600' :
                        goal.status === 'Planning' ? 'bg-blue-100 text-blue-600' :
                        goal.status === 'Research' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {goal.status}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-12 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-300 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We Envision
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-purple-50">
              We envision a future where every aspiring railway professional has access to world-class education, 
              personalized mentorship, and the tools they need to excel in their careers and contribute to the 
              development of India&apos;s railway infrastructure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl mb-3">🎯</div>
                <h3 className="font-bold text-xl mb-2">Our Target</h3>
                <p className="text-purple-100 text-sm">
                  Become the #1 choice for Railway Group B preparation by 2026
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl mb-3">📈</div>
                <h3 className="font-bold text-xl mb-2">Our Growth</h3>
                <p className="text-purple-100 text-sm">
                  Expand to serve 25,000+ students annually with 98% satisfaction
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl mb-3">🌟</div>
                <h3 className="font-bold text-xl mb-2">Our Legacy</h3>
                <p className="text-purple-100 text-sm">
                  Create generations of successful railway professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Be Part of Our Vision
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in shaping the future of railway education and your career
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/register/trainee-register"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </a>
            <a
              href="/about"
              className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision