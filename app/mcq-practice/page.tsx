'use client'
import React, { useState } from 'react'

const MCQPractice = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'అన్నీ', icon: '📚', count: 2500 },
    { id: 'polity', name: 'పాలిటీ', icon: '🏛️', count: 350 },
    { id: 'history', name: 'చరిత్ర', icon: '📜', count: 280 },
    { id: 'geography', name: 'భూగోళశాస్త్రం', icon: '🌍', count: 220 },
    { id: 'economy', name: 'ఆర్థిక వ్యవస్థ', icon: '💰', count: 300 },
    { id: 'science', name: 'సైన్స్', icon: '🔬', count: 400 },
    { id: 'reasoning', name: 'రీజనింగ్', icon: '🧩', count: 450 },
    { id: 'maths', name: 'గణితం', icon: '🔢', count: 500 }
  ]

  const practiceTopics = [
    {
      id: 1,
      category: 'polity',
      title: "భారత రాజ్యాంగం - ప్రాథమికాలు",
      questions: 50,
      difficulty: "సులభం",
      difficultyColor: "text-green-600 bg-green-100",
      completed: 45,
      accuracy: 89
    },
    {
      id: 2,
      category: 'history',
      title: "ప్రాచీన భారత చరిత్ర",
      questions: 40,
      difficulty: "మధ్యస్థం",
      difficultyColor: "text-yellow-600 bg-yellow-100",
      completed: 30,
      accuracy: 75
    },
    {
      id: 3,
      category: 'geography',
      title: "భారత భౌగోళిక శాస్త్రం",
      questions: 35,
      difficulty: "సులభం",
      difficultyColor: "text-green-600 bg-green-100",
      completed: 20,
      accuracy: 82
    },
    {
      id: 4,
      category: 'economy',
      title: "ఆర్థిక అభివృద్ధి మరియు ప్రణాళికలు",
      questions: 45,
      difficulty: "కష్టం",
      difficultyColor: "text-red-600 bg-red-100",
      completed: 10,
      accuracy: 68
    },
    {
      id: 5,
      category: 'science',
      title: "భౌతిక శాస్త్రం - యాంత్రికత",
      questions: 60,
      difficulty: "మధ్యస్థం",
      difficultyColor: "text-yellow-600 bg-yellow-100",
      completed: 35,
      accuracy: 78
    },
    {
      id: 6,
      category: 'reasoning',
      title: "లాజికల్ రీజనింగ్",
      questions: 70,
      difficulty: "మధ్యస్థం",
      difficultyColor: "text-yellow-600 bg-yellow-100",
      completed: 50,
      accuracy: 85
    },
    {
      id: 7,
      category: 'maths',
      title: "సంఖ్యా సామర్థ్యం - ప్రాథమికాలు",
      questions: 80,
      difficulty: "సులభం",
      difficultyColor: "text-green-600 bg-green-100",
      completed: 60,
      accuracy: 92
    },
    {
      id: 8,
      category: 'polity',
      title: "ప్రాథమిక హక్కులు మరియు కర్తవ్యాలు",
      questions: 30,
      difficulty: "సులభం",
      difficultyColor: "text-green-600 bg-green-100",
      completed: 25,
      accuracy: 88
    }
  ]

  const filteredTopics = selectedCategory === 'all' 
    ? practiceTopics 
    : practiceTopics.filter(topic => topic.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            ✏️ MCQ ప్రాక్టీస్
          </h1>
          <p className="text-xl text-center text-green-100 max-w-3xl mx-auto">
            మీ జ్ఞానాన్ని పరీక్షించండి మరియు మెరుగుపరచండి - 2500+ ప్రశ్నలతో
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">📝</div>
            <div className="text-2xl font-bold text-blue-600">2,500+</div>
            <div className="text-gray-600 text-sm">ప్రశ్నలు</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-green-600">85%</div>
            <div className="text-gray-600 text-sm">సగటు ఖచ్చితత్వం</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-2xl font-bold text-purple-600">45</div>
            <div className="text-gray-600 text-sm">నిమిషాలు</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-2xl font-bold text-orange-600">275</div>
            <div className="text-gray-600 text-sm">పూర్తయినవి</div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">విభాగాలను ఎంచుకోండి</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`p-4 rounded-xl transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:shadow-md hover:scale-105'
              }`}
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <div className="font-semibold text-sm mb-1">{cat.name}</div>
              <div className={`text-xs ${selectedCategory === cat.id ? 'text-green-100' : 'text-gray-500'}`}>
                {cat.count} ప్రశ్నలు
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Practice Topics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">ప్రాక్టీస్ టాపిక్స్</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800 flex-1">
                    {topic.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${topic.difficultyColor}`}>
                    {topic.difficulty}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{topic.questions} ప్రశ్నలు</span>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>పురోగతి</span>
                      <span>{Math.round((topic.completed / topic.questions) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(topic.completed / topic.questions) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Accuracy */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">ఖచ్చితత్వం:</span>
                    <span className="font-semibold text-green-600">{topic.accuracy}%</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 text-white py-2 px-4 rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-200 font-semibold">
                    ప్రారంభించండి
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-all duration-200">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">💡 ప్రాక్టీస్ చిట్కాలు</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">దృష్టి సారించండి</h3>
              <p className="text-green-100 text-sm">ప్రతి ప్రశ్నను జాగ్రత్తగా చదివి సమాధానం ఇవ్వండి</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-bold text-lg mb-2">సమయ నిర్వహణ</h3>
              <p className="text-green-100 text-sm">ప్రతి ప్రశ్నకు నిర్ణీత సమయాన్ని కేటాయించండి</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-lg mb-2">విశ్లేషించండి</h3>
              <p className="text-green-100 text-sm">తప్పులను సమీక్షించి మీ పనితీరును మెరుగుపరచండి</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MCQPractice