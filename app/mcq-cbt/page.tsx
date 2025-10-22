'use client'
import React, { useState } from 'react'

const MCQCBTPage = () => {
  const [selectedMode, setSelectedMode] = useState<'practice' | 'mock'>('practice')

  const cbtTests = [
    {
      id: 1,
      title: "గ్రూప్ B ఫుల్ లెంగ్త్ CBT మోక్ టెస్ట్ - 1",
      description: "నిజమైన పరీక్షా అనుభవం",
      duration: 180,
      questions: 150,
      sections: 5,
      difficulty: "కష్టం",
      attempted: false,
      type: "mock",
      color: "from-red-500 to-red-600"
    },
    {
      id: 2,
      title: "జనరల్ నాలెడ్జ్ CBT ప్రాక్టీస్",
      description: "కరెంట్ అఫైర్స్ & GK",
      duration: 60,
      questions: 60,
      sections: 3,
      difficulty: "మధ్యస్థం",
      attempted: true,
      score: 52,
      type: "practice",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      title: "రీజనింగ్ & అప్టిట్యూడ్ CBT",
      description: "అడాప్టివ్ టెస్టింగ్",
      duration: 90,
      questions: 80,
      sections: 2,
      difficulty: "మధ్యస్థం",
      attempted: true,
      score: 68,
      type: "practice",
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "గ్రూప్ B ఫుల్ లెంగ్త్ CBT మోక్ టెస్ట్ - 2",
      description: "అధునాతన స్థాయి",
      duration: 180,
      questions: 150,
      sections: 5,
      difficulty: "కష్టం",
      attempted: false,
      type: "mock",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 5,
      title: "స్పీడ్ టెస్ట్ CBT - క్విక్ ప్రాక్టీస్",
      description: "30 నిమిషాల క్విక్ రివిజన్",
      duration: 30,
      questions: 40,
      sections: 1,
      difficulty: "సులభం",
      attempted: true,
      score: 35,
      type: "practice",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 6,
      title: "సబ్జెక్ట్ వైజ్ CBT - పాలిటీ",
      description: "భారత రాజ్యాంగం & పాలిటీ",
      duration: 75,
      questions: 70,
      sections: 2,
      difficulty: "మధ్యస్థం",
      attempted: false,
      type: "practice",
      color: "from-teal-500 to-teal-600"
    }
  ]

  const filteredTests = cbtTests.filter(test => 
    selectedMode === 'practice' ? test.type === 'practice' : test.type === 'mock'
  )

  const features = [
    {
      icon: "💻",
      title: "నిజమైన CBT అనుభవం",
      description: "అసలు పరీక్ష వాతావరణాన్ని అనుభవించండి"
    },
    {
      icon: "⏱️",
      title: "టైమర్ & అలర్ట్స్",
      description: "ప్రతి సెక్షన్ కు టైమ్ ట్రాకింగ్"
    },
    {
      icon: "📊",
      title: "తక్షణ విశ్లేషణ",
      description: "వివరణాత్మక పనితీరు నివేదిక"
    },
    {
      icon: "🔄",
      title: "రివ్యూ & మార్క్",
      description: "ప్రశ్నలను మార్క్ చేసి తిరిగి సమీక్షించండి"
    },
    {
      icon: "📱",
      title: "అన్ని పరికరాలలో",
      description: "డెస్క్‌టాప్, టాబ్లెట్, మొబైల్"
    },
    {
      icon: "🎯",
      title: "అడాప్టివ్ లెర్నింగ్",
      description: "మీ స్థాయికి అనుగుణంగా ప్రశ్నలు"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            💻 CBT ప్రాక్టీస్ మోడ్
          </h1>
          <p className="text-xl text-center text-cyan-100 max-w-3xl mx-auto mb-8">
            కంప్యూటర్ బేస్డ్ టెస్టింగ్ (CBT) ఫార్మాట్‌లో ప్రాక్టీస్ చేయండి
          </p>
          
          {/* Mode Selector */}
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 inline-flex">
              <button
                onClick={() => setSelectedMode('practice')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedMode === 'practice'
                    ? 'bg-white text-cyan-600 shadow-lg'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                ప్రాక్టీస్ మోడ్
              </button>
              <button
                onClick={() => setSelectedMode('mock')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedMode === 'mock'
                    ? 'bg-white text-cyan-600 shadow-lg'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                మోక్ టెస్ట్ మోడ్
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">🖥️</div>
            <div className="text-2xl font-bold text-cyan-600">6</div>
            <div className="text-gray-600 text-sm">CBT టెస్ట్స్</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-gray-600 text-sm">పూర్తయినవి</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-purple-600">85%</div>
            <div className="text-gray-600 text-sm">సగటు స్కోర్</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-2xl font-bold text-orange-600">4.5</div>
            <div className="text-gray-600 text-sm">సగటు గంటలు</div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">CBT ఫీచర్స్</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-6 text-center"
            >
              <div className="text-5xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CBT Tests */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {selectedMode === 'practice' ? 'ప్రాక్టీస్ టెస్ట్స్' : 'మోక్ టెస్ట్స్'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${test.color} p-6 text-white`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{test.title}</h3>
                    <p className="text-sm text-white/90">{test.description}</p>
                  </div>
                  {test.attempted && (
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {test.attempted && test.score && (
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">మీ స్కోర్:</span>
                      <span className="text-xl font-bold">{test.score}/{test.questions}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                      <div 
                        className="bg-white h-2 rounded-full"
                        style={{ width: `${(test.score / test.questions) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">{test.questions}</div>
                    <div className="text-xs text-gray-600">ప్రశ్నలు</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">{test.sections}</div>
                    <div className="text-xs text-gray-600">విభాగాలు</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-600">{test.duration}</div>
                    <div className="text-xs text-gray-600">నిమిషాలు</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    test.difficulty === 'సులభం' ? 'bg-green-100 text-green-600' :
                    test.difficulty === 'మధ్యస్థం' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {test.difficulty}
                  </span>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>CBT మోడ్</span>
                  </div>
                </div>

                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  test.attempted
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700'
                }`}>
                  {test.attempted ? 'మళ్లీ ప్రయత్నించండి' : 'టెస్ట్ ప్రారంభించండి'}
                </button>

                {test.attempted && (
                  <button className="w-full mt-2 py-2 px-4 rounded-lg font-semibold text-blue-600 hover:bg-blue-50 transition-all duration-200">
                    ఫలితాలు చూడండి
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">💡 CBT సూచనలు</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">🖱️</div>
              <h3 className="font-bold text-lg mb-2">నావిగేషన్</h3>
              <p className="text-cyan-100 text-sm">ప్రశ్నల మధ్య సులభంగా తిరగండి, మార్క్ చేయండి మరియు సమీక్షించండి</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-bold text-lg mb-2">టైమ్ ట్రాకింగ్</h3>
              <p className="text-cyan-100 text-sm">మీకు మిగిలి ఉన్న సమయం తెలుసుకోండి, సమర్ధవంతంగా ప్లాన్ చేయండి</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">💾</div>
              <h3 className="font-bold text-lg mb-2">ఆటో సేవ్</h3>
              <p className="text-cyan-100 text-sm">మీ సమాధానాలు ఆటోమేటిక్‌గా సేవ్ అవుతాయి, ఆందోళన పడకండి</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MCQCBTPage