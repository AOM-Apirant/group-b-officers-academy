import React from 'react'

const Mission = () => {
  const coreValues = [
    {
      icon: "🎯",
      title: "Excellence in Training",
      description: "Preparing Group B Officers with the best training methodologies and practices",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "💡",
      title: "Innovation & Technology",
      description: "Embracing modern technology and innovative teaching methodologies",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "🤝",
      title: "Collaborative Learning",
      description: "Promoting knowledge exchange through collaborative learning approaches",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "⭐",
      title: "Quality Education",
      description: "Providing quality educational content and comprehensive guidance",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description: "Paving the way for professional development and career advancement",
      color: "from-red-500 to-red-600"
    },
    {
      icon: "🌟",
      title: "Continuous Improvement",
      description: "Staying at the forefront through continuous development and updates",
      color: "from-teal-500 to-teal-600"
    }
  ]

  const objectives = [
    {
      number: "01",
      title: "Student Empowerment",
      description: "Equipping students with all the necessary resources for Railway Group B examinations",
      icon: "📚"
    },
    {
      number: "02",
      title: "Quality Content",
      description: "Providing comprehensive and updated study material aligned with the exam syllabus",
      icon: "✍️"
    },
    {
      number: "03",
      title: "Personal Guidance",
      description: "Identifying each student's needs and providing individual attention and mentorship",
      icon: "👨‍🏫"
    },
    {
      number: "04",
      title: "Exam Strategy",
      description: "Developing effective exam strategies and time management skills for success",
      icon: "⏰"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="text-7xl mb-4 animate-bounce">🎯</div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
              Our Mission
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-4 text-blue-100">
              Empowering Future Railway Officers
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl leading-relaxed text-blue-50 mb-6">
                To provide exceptional education, guidance, and resources to candidates preparing for Railway Group B Officer examinations, helping them achieve their dreams and aspirations
              </p>
              <div className="inline-block px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full">
                <p className="text-lg font-semibold">
                  &ldquo;Empowerment through Education, Transformation through Success&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${value.color} p-8 text-center transition-all duration-300`}>
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Objectives Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Objectives
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Goals we are committed to for student success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      {objective.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="text-4xl mr-3">{objective.icon}</span>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {objective.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-12 text-white text-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-300 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Commitment
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-blue-50">
              We want every student to succeed in achieving their goals. Through quality education, dedicated instructors, and comprehensive support, we pave the way for your success.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-8 py-4">
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm text-blue-100">Students</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-8 py-4">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-8 py-4">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-blue-100">Experts</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-8 py-4">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Achieve Your Dreams With Us
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/register/trainee-register"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Join Now
            </a>
            <a
              href="/topics"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              View Courses
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission