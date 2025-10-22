import React from 'react'

const MCQTest = () => {
  const upcomingTests = [
    {
      id: 1,
      title: "గ్రూప్ B మోడల్ టెస్ట్ - 1",
      description: "పూర్తి సిలబస్ కవరేజ్",
      duration: 120,
      questions: 100,
      marks: 200,
      difficulty: "మధ్యస్థం",
      date: "25 అక్టోబర్ 2025",
      enrolled: 1250,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "సాధారణ జ్ఞానం స్పెషల్ టెస్ట్",
      description: "2024-25 కరెంట్ అఫైర్స్",
      duration: 60,
      questions: 50,
      marks: 100,
      difficulty: "సులభం",
      date: "28 అక్టోబర్ 2025",
      enrolled: 890,
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "రీజనింగ్ & ఆప్టిట్యూడ్ టెస్ట్",
      description: "లాజికల్ & క్వాంటిటేటివ్",
      duration: 90,
      questions: 75,
      marks: 150,
      difficulty: "కష్టం",
      date: "1 నవంబర్ 2025",
      enrolled: 765,
      color: "from-purple-500 to-purple-600"
    }
  ]

  const completedTests = [
    {
      id: 1,
      title: "గ్రూప్ B ప్రిలిమ్స్ మోడల్ పేపర్",
      score: 165,
      totalMarks: 200,
      rank: 42,
      totalParticipants: 1500,
      date: "18 అక్టోబర్ 2025",
      percentile: 97.2
    },
    {
      id: 2,
      title: "ఇండియన్ పాలిటీ టెస్ట్",
      score: 88,
      totalMarks: 100,
      rank: 25,
      totalParticipants: 850,
      date: "12 అక్టోబర్ 2025",
      percentile: 98.5
    },
    {
      id: 3,
      title: "సైన్స్ & టెక్నాలజీ టెస్ట్",
      score: 72,
      totalMarks: 100,
      rank: 156,
      totalParticipants: 920,
      date: "5 అక్టోబర్ 2025",
      percentile: 83.1
    }
  ]

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600"
    if (percentage >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            📝 MCQ టెస్ట్ సిరీస్
          </h1>
          <p className="text-xl text-center text-purple-100 max-w-3xl mx-auto">
            నిజమైన పరీక్షా అనుభవం పొందండి - టైమ్డ్ టెస్ట్స్ & వివరణాత్మక విశ్లేషణతో
          </p>
        </div>
      </div>

      {/* Performance Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-purple-600">{completedTests.length}</div>
            <div className="text-gray-600 text-sm">పూర్తైన టెస్ట్స్</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-2xl font-bold text-green-600">92.9%</div>
            <div className="text-gray-600 text-sm">సగటు పెర్సెంటైల్</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-blue-600">25</div>
            <div className="text-gray-600 text-sm">ఉత్తమ ర్యాంక్</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-orange-600">82.5%</div>
            <div className="text-gray-600 text-sm">సగటు స్కోర్</div>
          </div>
        </div>
      </div>

      {/* Upcoming Tests */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">రాబోయే టెస్ట్స్</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingTests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${test.color} p-6 text-white`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{test.title}</h3>
                    <p className="text-sm text-white/90">{test.description}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>{test.enrolled} మంది నమోదు చేసుకున్నారు</span>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{test.questions}</div>
                    <div className="text-xs text-gray-600">ప్రశ్నలు</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{test.marks}</div>
                    <div className="text-xs text-gray-600">మార్కులు</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{test.duration}</div>
                    <div className="text-xs text-gray-600">నిమిషాలు</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{test.date}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    test.difficulty === 'సులభం' ? 'bg-green-100 text-green-600' :
                    test.difficulty === 'మధ్యస్థం' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {test.difficulty}
                  </span>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-semibold">
                  టెస్ట్ కోసం నమోదు చేయండి
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Completed Tests */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">పూర్తైన టెస్ట్స్</h2>
        <div className="space-y-4">
          {completedTests.map((test) => {
            const percentage = (test.score / test.totalMarks) * 100
            return (
              <div
                key={test.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{test.title}</h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{test.date}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 flex-shrink-0">
                      <div className="text-center">
                        <div className={`text-xl font-bold ${getPerformanceColor(percentage)}`}>
                          {test.score}/{test.totalMarks}
                        </div>
                        <div className="text-xs text-gray-600">స్కోర్</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600">#{test.rank}</div>
                        <div className="text-xs text-gray-600">ర్యాంక్</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-purple-600">{test.percentile}%</div>
                        <div className="text-xs text-gray-600">పెర్సెంటైల్</div>
                      </div>
                      <div className="text-center">
                        <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-all duration-200 text-sm font-semibold">
                          విశ్లేషణ
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>స్కోర్ పెర్సెంటేజ్</span>
                      <span>{percentage.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          percentage >= 80 ? 'bg-green-500' :
                          percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">💡 టెస్ట్ టిప్స్</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-bold text-lg mb-2">సమయ నిర్వహణ</h3>
              <p className="text-purple-100 text-sm">ప్రతి విభాగానికి సమయాన్ని సరిగ్గా పంచుకోండి</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-bold text-lg mb-2">సులభం మొదలు పెట్టండి</h3>
              <p className="text-purple-100 text-sm">సులభమైన ప్రశ్నలతో ప్రారంభించి ఆత్మవిశ్వాసం పెంచుకోండి</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-lg mb-2">రివిజన్ చేయండి</h3>
              <p className="text-purple-100 text-sm">చివరి నిమిషాల్లో మీ సమాధానాలను తనిఖీ చేయండి</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MCQTest