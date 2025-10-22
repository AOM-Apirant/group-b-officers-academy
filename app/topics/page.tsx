import React from 'react'
import Link from 'next/link'

const Topics = () => {
  const topics = [
    {
      id: 1,
      title: "Indian Polity & Constitution",
      description: "భారత రాజ్యాంగం మరియు రాజకీయ వ్యవస్థ గురించి సమగ్ర అధ్యయనం",
      icon: "🏛️",
      lessons: 45,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Indian History",
      description: "ప్రాచీన, మధ్యయుగ మరియు ఆధునిక భారత చరిత్ర",
      icon: "📜",
      lessons: 38,
      color: "bg-amber-500"
    },
    {
      id: 3,
      title: "Geography",
      description: "భారత మరియు ప్రపంచ భౌగోళిక శాస్త్రం",
      icon: "🌍",
      lessons: 32,
      color: "bg-green-500"
    },
    {
      id: 4,
      title: "Indian Economy",
      description: "భారత ఆర్థిక వ్యవస్థ మరియు ఆర్థిక అభివృద్ధి",
      icon: "💰",
      lessons: 40,
      color: "bg-purple-500"
    },
    {
      id: 5,
      title: "General Science",
      description: "భౌతిక శాస్త్రం, రసాయన శాస్త్రం మరియు జీవ శాస్త్రం",
      icon: "🔬",
      lessons: 50,
      color: "bg-pink-500"
    },
    {
      id: 6,
      title: "Current Affairs",
      description: "జాతీయ మరియు అంతర్జాతీయ ప్రస్తుత వ్యవహారాలు",
      icon: "📰",
      lessons: 25,
      color: "bg-red-500"
    },
    {
      id: 7,
      title: "Quantitative Aptitude",
      description: "గణిత సామర్థ్యం మరియు సంఖ్యా విశ్లేషణ",
      icon: "🔢",
      lessons: 42,
      color: "bg-indigo-500"
    },
    {
      id: 8,
      title: "Reasoning",
      description: "తార్కిక మరియు విశ్లేషణాత్మక సామర్థ్యం",
      icon: "🧩",
      lessons: 35,
      color: "bg-teal-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            📚 కోర్సు విషయాలు
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            గ్రూప్ B అధికారుల పరీక్షకు అవసరమైన అన్ని విషయాలను ఇక్కడ అధ్యయనం చేయండి
          </p>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/topics/${topic.id}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`${topic.color} p-6 text-center`}>
                <div className="text-6xl mb-2">{topic.icon}</div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg py-1 px-3 inline-block">
                  <span className="text-white font-semibold text-sm">{topic.lessons} పాఠాలు</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {topic.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <span>ప్రారంభించండి</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Study Tips Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">📖 అధ్యయన చిట్కాలు</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-bold text-lg mb-2">నియమిత అధ్యయనం</h3>
              <p className="text-blue-100 text-sm">ప్రతిరోజు నిర్ణీత సమయంలో అధ్యయనం చేయండి</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">✍️</div>
              <h3 className="font-bold text-lg mb-2">నోట్స్ తీసుకోండి</h3>
              <p className="text-blue-100 text-sm">ముఖ్యమైన అంశాలను వ్రాసి గుర్తుంచుకోండి</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">అభ్యాసం చేయండి</h3>
              <p className="text-blue-100 text-sm">MCQ ప్రాక్టీస్ ద్వారా మీ జ్ఞానాన్ని పరీక్షించండి</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topics