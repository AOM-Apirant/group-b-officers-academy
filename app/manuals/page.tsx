import React from 'react'

const Manuals = () => {
  const manuals = [
    {
      id: 1,
      title: "గ్రూప్ B పరీక్ష సిలబస్",
      description: "పూర్తి సిలబస్ మరియు పరీక్షా విధానం",
      icon: "📋",
      pages: 25,
      category: "సిలబస్",
      color: "from-blue-500 to-blue-600",
      downloadSize: "2.5 MB"
    },
    {
      id: 2,
      title: "భారత రాజ్యాంగం స్టడీ మెటీరియల్",
      description: "రాజ్యాంగ అంశాల సమగ్ర గైడ్",
      icon: "📚",
      pages: 150,
      category: "స్టడీ మెటీరియల్",
      color: "from-purple-500 to-purple-600",
      downloadSize: "8.2 MB"
    },
    {
      id: 3,
      title: "సాధారణ జ్ఞానం హ్యాండ్‌బుక్",
      description: "2024 అప్‌డేటెడ్ GK మెటీరియల్",
      icon: "📖",
      pages: 200,
      category: "రిఫరెన్స్",
      color: "from-green-500 to-green-600",
      downloadSize: "12.5 MB"
    },
    {
      id: 4,
      title: "గణిత ఫార్ములా గైడ్",
      description: "అన్ని ముఖ్య గణిత ఫార్ములాలు",
      icon: "🔢",
      pages: 50,
      category: "రిఫరెన్స్",
      color: "from-amber-500 to-amber-600",
      downloadSize: "3.8 MB"
    },
    {
      id: 5,
      title: "ఇంగ్లీష్ గ్రామర్ మాన్యువల్",
      description: "సమగ్ర వ్याకరణ గైడ్",
      icon: "📝",
      pages: 120,
      category: "స్టడీ మెటీరియల్",
      color: "from-pink-500 to-pink-600",
      downloadSize: "6.4 MB"
    },
    {
      id: 6,
      title: "చరిత్ర క్విక్ రివిజన్ నోట్స్",
      description: "ముఖ్యమైన చారిత్రాత్మక సంఘటనలు",
      icon: "📜",
      pages: 80,
      category: "రివిజన్",
      color: "from-red-500 to-red-600",
      downloadSize: "4.2 MB"
    },
    {
      id: 7,
      title: "భౌగోళిక శాస్త్ర అట్లస్",
      description: "మ్యాప్స్ మరియు చార్ట్స్‌తో",
      icon: "🗺️",
      pages: 100,
      category: "రిఫరెన్స్",
      color: "from-teal-500 to-teal-600",
      downloadSize: "15.6 MB"
    },
    {
      id: 8,
      title: "కరెంట్ అఫైర్స్ 2024",
      description: "నెలవారీ కరెంట్ అఫైర్స్ కంపైలేషన్",
      icon: "📰",
      pages: 180,
      category: "కరెంట్ అఫైర్స్",
      color: "from-indigo-500 to-indigo-600",
      downloadSize: "9.8 MB"
    },
    {
      id: 9,
      title: "రీజనింగ్ ప్రాక్టీస్ బుక్",
      description: "500+ రీజనింగ్ ప్రశ్నలు మరియు పరిష్కారాలు",
      icon: "🧩",
      pages: 220,
      category: "ప్రాక్టీస్",
      color: "from-cyan-500 to-cyan-600",
      downloadSize: "11.2 MB"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            📖 స్టడీ మాన్యువల్స్
          </h1>
          <p className="text-xl text-center text-orange-100 max-w-3xl mx-auto">
            మీ పరీక్షా తయారీ కోసం అవసరమైన అన్ని స్టడీ మెటీరియల్స్ మరియు గైడ్స్
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{manuals.length}</div>
            <div className="text-gray-600 font-medium">మొత్తం మాన్యువల్స్</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1,125</div>
            <div className="text-gray-600 font-medium">పేజీలు</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">74.2 MB</div>
            <div className="text-gray-600 font-medium">మొత్తం సైజ్</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">PDF</div>
            <div className="text-gray-600 font-medium">ఫార్మాట్</div>
          </div>
        </div>
      </div>

      {/* Manuals Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manuals.map((manual) => (
            <div
              key={manual.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${manual.color} p-6`}>
                <div className="flex items-center justify-between text-white">
                  <div className="text-5xl">{manual.icon}</div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-semibold">{manual.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {manual.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {manual.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{manual.pages} పేజీలు</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span>{manual.downloadSize}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    డౌన్‌లోడ్
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-all duration-200">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">💡 ముఖ్యమైన సూచనలు</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">📥</div>
              <h3 className="font-bold text-lg mb-2">డౌన్‌లోడ్ చేయండి</h3>
              <p className="text-orange-100 text-sm">అన్ని మాన్యువల్స్ PDF ఫార్మాట్‌లో అందుబాటులో ఉన్నాయి</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-bold text-lg mb-2">రెగ్యులర్ అప్‌డేట్స్</h3>
              <p className="text-orange-100 text-sm">స్టడీ మెటీరియల్స్ క్రమం తప్పకుండా అప్‌డేట్ చేయబడతాయి</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-bold text-lg mb-2">నాణ్యమైన కంటెంట్</h3>
              <p className="text-orange-100 text-sm">నిపుణులచే తయారు చేయబడిన మరియు ధృవీకరించబడిన మెటీరియల్</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manuals