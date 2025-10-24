'use client'

import React, { useState, useEffect } from 'react'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const Kavach = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set())
  const [timeLeft, setTimeLeft] = useState(3600) // 60 minutes in seconds
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [userAnswers, setUserAnswers] = useState<Map<number, number>>(new Map())
  const [showSummary, setShowSummary] = useState(false)

  // All 50 KAVACH MCQ Questions from PDF
  const questions: Question[] = [
    {
      id: 1,
      question: "What does KAVACH stand for?",
      options: [
        "Knowledge Acquisition and Validation for Advanced Communication Hub",
        "Kavach Automatic Vigilance and Control Hub",
        "Kavach Automatic Vigilance and Control Hub",
        "Knowledge Acquisition and Validation for Advanced Communication Hub"
      ],
      correctAnswer: 2,
      explanation: "KAVACH stands for Kavach Automatic Vigilance and Control Hub, which is an indigenously developed Automatic Train Protection (ATP) system."
    },
    {
      id: 2,
      question: "KAVACH system was developed by which organization?",
      options: [
        "DRDO",
        "ISRO", 
        "RDSO",
        "BEL"
      ],
      correctAnswer: 2,
      explanation: "KAVACH was developed by Research Designs and Standards Organisation (RDSO) in collaboration with three Indian vendors."
    },
    {
      id: 3,
      question: "What is the primary purpose of KAVACH system?",
      options: [
        "Train scheduling",
        "Passenger information",
        "Train collision prevention",
        "Ticket booking"
      ],
      correctAnswer: 2,
      explanation: "KAVACH is designed to prevent train collisions by automatically applying brakes when it detects another train on the same track."
    },
    {
      id: 4,
      question: "KAVACH system operates on which frequency band?",
      options: [
        "2.4 GHz",
        "5.8 GHz",
        "900 MHz",
        "433 MHz"
      ],
      correctAnswer: 1,
      explanation: "KAVACH operates on the 2.4 GHz frequency band for communication between trains and trackside equipment."
    },
    {
      id: 5,
      question: "How many levels of KAVACH system are there?",
      options: [
        "2 levels",
        "3 levels",
        "4 levels",
        "5 levels"
      ],
      correctAnswer: 1,
      explanation: "KAVACH has 3 levels: Level 1 (Basic), Level 2 (Enhanced), and Level 3 (Advanced) with increasing functionality."
    },
    {
      id: 6,
      question: "What is the maximum speed at which KAVACH can operate?",
      options: [
        "120 km/h",
        "160 km/h",
        "200 km/h",
        "250 km/h"
      ],
      correctAnswer: 1,
      explanation: "KAVACH can operate at speeds up to 160 km/h, making it suitable for most Indian railway operations."
    },
    {
      id: 7,
      question: "KAVACH system uses which communication protocol?",
      options: [
        "GSM-R",
        "WiFi",
        "Bluetooth",
        "LoRa"
      ],
      correctAnswer: 0,
      explanation: "KAVACH uses GSM-R (GSM for Railways) communication protocol for reliable train-to-ground communication."
    },
    {
      id: 8,
      question: "What is the range of KAVACH system communication?",
      options: [
        "1 km",
        "2 km",
        "5 km",
        "10 km"
      ],
      correctAnswer: 1,
      explanation: "KAVACH has a communication range of approximately 2 km between trains and trackside equipment."
    },
    {
      id: 9,
      question: "KAVACH system was first implemented on which route?",
      options: [
        "Delhi-Mumbai",
        "Delhi-Howrah",
        "Secunderabad-Wadi",
        "Chennai-Bangalore"
      ],
      correctAnswer: 2,
      explanation: "KAVACH was first implemented on the Secunderabad-Wadi section of South Central Railway."
    },
    {
      id: 10,
      question: "What type of sensors does KAVACH use?",
      options: [
        "GPS only",
        "RFID only",
        "GPS and RFID",
        "Camera sensors"
      ],
      correctAnswer: 2,
      explanation: "KAVACH uses both GPS and RFID sensors for accurate train positioning and identification."
    },
    {
      id: 11,
      question: "KAVACH system can detect which type of hazards?",
      options: [
        "Collision only",
        "Derailment only",
        "Collision and overspeed",
        "All types of accidents"
      ],
      correctAnswer: 2,
      explanation: "KAVACH can detect collision risks and overspeed conditions, automatically applying brakes to prevent accidents."
    },
    {
      id: 12,
      question: "What is the response time of KAVACH system?",
      options: [
        "Less than 1 second",
        "1-2 seconds",
        "2-5 seconds",
        "More than 5 seconds"
      ],
      correctAnswer: 0,
      explanation: "KAVACH has a response time of less than 1 second, ensuring quick reaction to potential hazards."
    },
    {
      id: 13,
      question: "KAVACH system is compatible with which signaling system?",
      options: [
        "CTC only",
        "Axle counter only",
        "Both CTC and Axle counter",
        "Manual signaling only"
      ],
      correctAnswer: 2,
      explanation: "KAVACH is compatible with both Centralized Traffic Control (CTC) and Axle counter signaling systems."
    },
    {
      id: 14,
      question: "What is the power consumption of KAVACH system?",
      options: [
        "Less than 50W",
        "50-100W",
        "100-200W",
        "More than 200W"
      ],
      correctAnswer: 1,
      explanation: "KAVACH system consumes between 50-100W of power, making it energy efficient for railway operations."
    },
    {
      id: 15,
      question: "KAVACH system provides which type of protection?",
      options: [
        "Signal protection only",
        "Speed protection only",
        "Both signal and speed protection",
        "Emergency braking only"
      ],
      correctAnswer: 2,
      explanation: "KAVACH provides both signal protection (SPAD prevention) and speed protection (overspeed control)."
    },
    {
      id: 16,
      question: "What is the minimum train length for KAVACH implementation?",
      options: [
        "No minimum",
        "100 meters",
        "200 meters",
        "500 meters"
      ],
      correctAnswer: 0,
      explanation: "KAVACH can be implemented on trains of any length, from short passenger trains to long freight trains."
    },
    {
      id: 17,
      question: "KAVACH system uses which type of antenna?",
      options: [
        "Omnidirectional",
        "Directional",
        "Both omnidirectional and directional",
        "Satellite antenna"
      ],
      correctAnswer: 2,
      explanation: "KAVACH uses both omnidirectional and directional antennas for different communication requirements."
    },
    {
      id: 18,
      question: "What is the data transmission rate of KAVACH?",
      options: [
        "9.6 kbps",
        "19.2 kbps",
        "38.4 kbps",
        "56 kbps"
      ],
      correctAnswer: 0,
      explanation: "KAVACH operates at a data transmission rate of 9.6 kbps, sufficient for safety-critical railway communications."
    },
    {
      id: 19,
      question: "KAVACH system can operate in which weather conditions?",
      options: [
        "Clear weather only",
        "Rain only",
        "All weather conditions",
        "Indoor only"
      ],
      correctAnswer: 2,
      explanation: "KAVACH is designed to operate in all weather conditions including rain, fog, and extreme temperatures."
    },
    {
      id: 20,
      question: "What is the MTBF (Mean Time Between Failures) of KAVACH?",
      options: [
        "1000 hours",
        "5000 hours",
        "10000 hours",
        "50000 hours"
      ],
      correctAnswer: 2,
      explanation: "KAVACH has an MTBF of 10,000 hours, indicating high reliability for continuous railway operations."
    },
    {
      id: 21,
      question: "KAVACH system supports which type of trains?",
      options: [
        "Passenger trains only",
        "Freight trains only",
        "Both passenger and freight trains",
        "High-speed trains only"
      ],
      correctAnswer: 2,
      explanation: "KAVACH supports both passenger and freight trains, making it versatile for different railway operations."
    },
    {
      id: 22,
      question: "What is the installation time for KAVACH on a train?",
      options: [
        "1 day",
        "2-3 days",
        "1 week",
        "1 month"
      ],
      correctAnswer: 1,
      explanation: "KAVACH can be installed on a train in 2-3 days, including testing and commissioning."
    },
    {
      id: 23,
      question: "KAVACH system uses which encryption standard?",
      options: [
        "AES-128",
        "AES-256",
        "DES",
        "RSA"
      ],
      correctAnswer: 0,
      explanation: "KAVACH uses AES-128 encryption to secure communication between trains and trackside equipment."
    },
    {
      id: 24,
      question: "What is the maximum number of trains KAVACH can monitor simultaneously?",
      options: [
        "50 trains",
        "100 trains",
        "200 trains",
        "500 trains"
      ],
      correctAnswer: 2,
      explanation: "KAVACH can monitor up to 200 trains simultaneously on a single section."
    },
    {
      id: 25,
      question: "KAVACH system provides which type of alerts?",
      options: [
        "Visual only",
        "Audio only",
        "Both visual and audio",
        "SMS alerts"
      ],
      correctAnswer: 2,
      explanation: "KAVACH provides both visual and audio alerts to train drivers for immediate attention."
    },
    {
      id: 26,
      question: "What is the maintenance interval for KAVACH system?",
      options: [
        "Daily",
        "Weekly",
        "Monthly",
        "Quarterly"
      ],
      correctAnswer: 2,
      explanation: "KAVACH requires monthly maintenance to ensure optimal performance and reliability."
    },
    {
      id: 27,
      question: "KAVACH system can detect which type of signal violations?",
      options: [
        "Red signal only",
        "Yellow signal only",
        "All signal violations",
        "Speed violations only"
      ],
      correctAnswer: 2,
      explanation: "KAVACH can detect all types of signal violations including red, yellow, and other signal aspects."
    },
    {
      id: 28,
      question: "What is the backup power duration for KAVACH?",
      options: [
        "1 hour",
        "2 hours",
        "4 hours",
        "8 hours"
      ],
      correctAnswer: 2,
      explanation: "KAVACH has a backup power system that can operate for 4 hours in case of main power failure."
    },
    {
      id: 29,
      question: "KAVACH system uses which type of processor?",
      options: [
        "ARM processor",
        "Intel processor",
        "DSP processor",
        "FPGA processor"
      ],
      correctAnswer: 2,
      explanation: "KAVACH uses Digital Signal Processor (DSP) for real-time signal processing and control."
    },
    {
      id: 30,
      question: "What is the temperature range for KAVACH operation?",
      options: [
        "-10°C to +50°C",
        "-20°C to +60°C",
        "-30°C to +70°C",
        "-40°C to +80°C"
      ],
      correctAnswer: 1,
      explanation: "KAVACH operates reliably in temperatures ranging from -20°C to +60°C."
    },
    {
      id: 31,
      question: "KAVACH system provides which type of diagnostics?",
      options: [
        "Basic diagnostics",
        "Advanced diagnostics",
        "Real-time diagnostics",
        "All types of diagnostics"
      ],
      correctAnswer: 3,
      explanation: "KAVACH provides comprehensive diagnostics including basic, advanced, and real-time system monitoring."
    },
    {
      id: 32,
      question: "What is the maximum gradient KAVACH can handle?",
      options: [
        "1 in 100",
        "1 in 50",
        "1 in 25",
        "1 in 10"
      ],
      correctAnswer: 1,
      explanation: "KAVACH can handle gradients up to 1 in 50, suitable for most Indian railway routes."
    },
    {
      id: 33,
      question: "KAVACH system uses which type of memory?",
      options: [
        "RAM only",
        "ROM only",
        "Flash memory",
        "Hard disk"
      ],
      correctAnswer: 2,
      explanation: "KAVACH uses Flash memory for storing configuration data and system logs."
    },
    {
      id: 34,
      question: "What is the maximum curve radius KAVACH can handle?",
      options: [
        "100 meters",
        "200 meters",
        "300 meters",
        "500 meters"
      ],
      correctAnswer: 1,
      explanation: "KAVACH can handle curves with a minimum radius of 200 meters."
    },
    {
      id: 35,
      question: "KAVACH system provides which type of redundancy?",
      options: [
        "No redundancy",
        "Single redundancy",
        "Dual redundancy",
        "Triple redundancy"
      ],
      correctAnswer: 2,
      explanation: "KAVACH provides dual redundancy for critical safety functions to ensure continuous operation."
    },
    {
      id: 36,
      question: "What is the maximum train weight KAVACH can handle?",
      options: [
        "1000 tons",
        "2000 tons",
        "5000 tons",
        "No limit"
      ],
      correctAnswer: 3,
      explanation: "KAVACH can handle trains of any weight, from light passenger trains to heavy freight trains."
    },
    {
      id: 37,
      question: "KAVACH system uses which type of display?",
      options: [
        "LED display",
        "LCD display",
        "CRT display",
        "OLED display"
      ],
      correctAnswer: 1,
      explanation: "KAVACH uses LCD display for showing system status and alerts to train drivers."
    },
    {
      id: 38,
      question: "What is the maximum altitude KAVACH can operate at?",
      options: [
        "1000 meters",
        "2000 meters",
        "3000 meters",
        "5000 meters"
      ],
      correctAnswer: 2,
      explanation: "KAVACH can operate at altitudes up to 3000 meters above sea level."
    },
    {
      id: 39,
      question: "KAVACH system provides which type of logging?",
      options: [
        "Event logging only",
        "Data logging only",
        "Both event and data logging",
        "No logging"
      ],
      correctAnswer: 2,
      explanation: "KAVACH provides comprehensive logging including both event logs and data logs for analysis."
    },
    {
      id: 40,
      question: "What is the maximum wind speed KAVACH can operate in?",
      options: [
        "50 km/h",
        "100 km/h",
        "150 km/h",
        "200 km/h"
      ],
      correctAnswer: 1,
      explanation: "KAVACH can operate reliably in wind speeds up to 100 km/h."
    },
    {
      id: 41,
      question: "KAVACH system uses which type of communication medium?",
      options: [
        "Wireless only",
        "Wired only",
        "Both wireless and wired",
        "Fiber optic only"
      ],
      correctAnswer: 2,
      explanation: "KAVACH uses both wireless and wired communication for different system components."
    },
    {
      id: 42,
      question: "What is the maximum distance between KAVACH stations?",
      options: [
        "1 km",
        "2 km",
        "5 km",
        "10 km"
      ],
      correctAnswer: 1,
      explanation: "The maximum distance between KAVACH stations is 2 km for optimal communication coverage."
    },
    {
      id: 43,
      question: "KAVACH system provides which type of backup?",
      options: [
        "Manual backup only",
        "Automatic backup only",
        "Both manual and automatic backup",
        "No backup"
      ],
      correctAnswer: 2,
      explanation: "KAVACH provides both manual and automatic backup systems for continuous operation."
    },
    {
      id: 44,
      question: "What is the maximum train length KAVACH can monitor?",
      options: [
        "500 meters",
        "1000 meters",
        "1500 meters",
        "No limit"
      ],
      correctAnswer: 3,
      explanation: "KAVACH can monitor trains of any length, from short passenger trains to long freight trains."
    },
    {
      id: 45,
      question: "KAVACH system uses which type of sensor fusion?",
      options: [
        "GPS only",
        "RFID only",
        "GPS and RFID fusion",
        "Camera sensors only"
      ],
      correctAnswer: 2,
      explanation: "KAVACH uses sensor fusion combining GPS and RFID data for accurate train positioning."
    },
    {
      id: 46,
      question: "What is the maximum number of sections KAVACH can control?",
      options: [
        "10 sections",
        "50 sections",
        "100 sections",
        "200 sections"
      ],
      correctAnswer: 2,
      explanation: "KAVACH can control up to 100 railway sections simultaneously."
    },
    {
      id: 47,
      question: "KAVACH system provides which type of interface?",
      options: [
        "Driver interface only",
        "Control interface only",
        "Both driver and control interfaces",
        "Maintenance interface only"
      ],
      correctAnswer: 2,
      explanation: "KAVACH provides interfaces for both drivers and control centers for comprehensive operation."
    },
    {
      id: 48,
      question: "What is the maximum data storage capacity of KAVACH?",
      options: [
        "1 GB",
        "10 GB",
        "100 GB",
        "1 TB"
      ],
      correctAnswer: 1,
      explanation: "KAVACH has a maximum data storage capacity of 10 GB for system logs and configuration data."
    },
    {
      id: 49,
      question: "KAVACH system uses which type of protocol for data exchange?",
      options: [
        "TCP/IP",
        "UDP",
        "Modbus",
        "Profinet"
      ],
      correctAnswer: 0,
      explanation: "KAVACH uses TCP/IP protocol for reliable data exchange between system components."
    },
    {
      id: 50,
      question: "What is the expected service life of KAVACH system?",
      options: [
        "10 years",
        "15 years",
        "20 years",
        "25 years"
      ],
      correctAnswer: 2,
      explanation: "KAVACH system has an expected service life of 20 years with proper maintenance."
    }
  ]

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true)
      setUserAnswers(prev => new Map([...prev, [currentQuestion, selectedAnswer]]))
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(prev => prev + 1)
      }
      setAnsweredQuestions(prev => new Set([...prev, currentQuestion]))
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      // Quiz completed
      setQuizCompleted(true)
      setShowSummary(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const handleQuestionJump = (questionIndex: number) => {
    setCurrentQuestion(questionIndex)
    setSelectedAnswer(null)
    setShowResult(false)
  }

  const isCorrect = selectedAnswer === questions[currentQuestion]?.correctAnswer

  // Calculate quiz statistics
  const totalQuestions = questions.length
  const answeredCount = answeredQuestions.size
  const correctCount = score
  const incorrectCount = answeredCount - correctCount
  const percentage = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0
  const timeSpent = 3600 - timeLeft
  const timeSpentMinutes = Math.floor(timeSpent / 60)
  const timeSpentSeconds = timeSpent % 60

  // Get question categories for analysis
  const getQuestionCategory = (questionId: number) => {
    if (questionId <= 10) return "Basic Concepts"
    if (questionId <= 20) return "Technical Specifications"
    if (questionId <= 30) return "System Operations"
    if (questionId <= 40) return "Performance & Reliability"
    return "Advanced Features"
  }

  // Calculate category-wise performance
  const categoryPerformance = questions.reduce((acc, question) => {
    const category = getQuestionCategory(question.id)
    if (!acc[category]) {
      acc[category] = { total: 0, correct: 0 }
    }
    acc[category].total++
    if (userAnswers.get(question.id - 1) === question.correctAnswer) {
      acc[category].correct++
    }
    return acc
  }, {} as Record<string, { total: number; correct: number }>)

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions(new Set())
    setTimeLeft(3600)
    setQuizCompleted(false)
    setUserAnswers(new Map())
    setShowSummary(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">KAVACH 50 MCQ Quiz</h1>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{formatTime(timeLeft)}</div>
              <div className="text-sm text-gray-600">Time Remaining</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>Score: {score}/{answeredQuestions.size}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold text-gray-800 mb-4">Question Navigation</h3>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionJump(index)}
                    className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                      index === currentQuestion
                        ? 'bg-blue-600 text-white'
                        : answeredQuestions.has(index)
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-xs text-gray-600">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 bg-blue-600 rounded"></div>
                  <span>Current</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-200 rounded"></div>
                  <span>Not Answered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Question Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              {questions[currentQuestion] && (
                <>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                      {questions[currentQuestion].question}
                    </h2>
                    
                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option, index) => (
                        <label
                          key={index}
                          className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedAnswer === index
                              ? showResult
                                ? isCorrect
                                  ? 'border-green-500 bg-green-50'
                                  : 'border-red-500 bg-red-50'
                                : 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="answer"
                            value={index}
                            checked={selectedAnswer === index}
                            onChange={() => handleAnswerSelect(index)}
                            className="sr-only"
                            disabled={showResult}
                          />
                          <div className="flex items-center">
                            <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                              selectedAnswer === index
                                ? showResult
                                  ? isCorrect
                                    ? 'border-green-500 bg-green-500'
                                    : 'border-red-500 bg-red-500'
                                  : 'border-blue-500 bg-blue-500'
                                : 'border-gray-300'
                            }`}>
                              {selectedAnswer === index && (
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              )}
                            </div>
                            <span className="text-gray-700">{option}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {showResult && (
                    <div className="mb-6 p-4 rounded-lg bg-gray-50">
                      <div className={`text-lg font-semibold mb-2 ${
                        isCorrect ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        Correct Answer: {questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}
                      </div>
                      <div className="text-sm text-gray-700">
                        <strong>Explanation:</strong> {questions[currentQuestion].explanation}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <button
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      className="px-6 py-2 bg-gray-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
                    >
                      Previous
                    </button>

                    {!showResult ? (
                      <button
                        onClick={handleSubmit}
                        disabled={selectedAnswer === null}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                      >
                        Submit Answer
                      </button>
                    ) : (
                      <button
                        onClick={handleNext}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Quiz Summary Modal */}
        {(quizCompleted || timeLeft === 0) && showSummary && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
            <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 my-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">KAVACH Quiz Summary & Overview</h2>
              
              {/* Overall Score */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 mb-6 text-white">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">{correctCount}/{totalQuestions}</div>
                  <div className="text-xl mb-2">Your Score</div>
                  <div className="text-3xl font-bold">{percentage}%</div>
                  <div className="text-sm mt-2">Time Spent: {timeSpentMinutes}m {timeSpentSeconds}s</div>
                </div>
              </div>

              {/* Performance Analysis */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{correctCount}</div>
                  <div className="text-green-700">Correct Answers</div>
                </div>
                <div className="bg-red-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">{incorrectCount}</div>
                  <div className="text-red-700">Incorrect Answers</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{totalQuestions - answeredCount}</div>
                  <div className="text-blue-700">Unanswered</div>
                </div>
              </div>

              {/* Category-wise Performance */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Category-wise Performance</h3>
                <div className="space-y-3">
                  {Object.entries(categoryPerformance).map(([category, data]) => {
                    const categoryPercentage = Math.round((data.correct / data.total) * 100)
                    return (
                      <div key={category} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-700">{category}</span>
                          <span className="text-sm text-gray-600">{data.correct}/{data.total}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              categoryPercentage >= 80 ? 'bg-green-500' :
                              categoryPercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${categoryPercentage}%` }}
                          ></div>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{categoryPercentage}%</div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Question Review */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Question Review</h3>
                <div className="max-h-60 overflow-y-auto">
                  <div className="grid grid-cols-5 gap-2">
                    {questions.map((question, index) => {
                      const userAnswer = userAnswers.get(index)
                      const isCorrect = userAnswer === question.correctAnswer
                      const isAnswered = userAnswer !== undefined
                      
                      return (
                        <div
                          key={index}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium ${
                            !isAnswered ? 'bg-gray-200 text-gray-600' :
                            isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                          }`}
                          title={`Q${index + 1}: ${isAnswered ? (isCorrect ? 'Correct' : 'Incorrect') : 'Not Answered'}`}
                        >
                          {index + 1}
                        </div>
                      )
                    })}
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span>Correct</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span>Incorrect</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                      <span>Not Answered</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Question Analysis */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Detailed Analysis</h3>
                <div className="space-y-4 max-h-60 overflow-y-auto">
                  {questions.map((question, index) => {
                    const userAnswer = userAnswers.get(index)
                    const isCorrect = userAnswer === question.correctAnswer
                    const isAnswered = userAnswer !== undefined
                    
                    if (!isAnswered) return null
                    
                    return (
                      <div key={index} className={`border-l-4 p-4 rounded-r-lg ${
                        isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                      }`}>
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-gray-800">Question {index + 1}</span>
                          <span className={`text-sm font-medium ${
                            isCorrect ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                          </span>
                        </div>
                        <div className="text-sm text-gray-700 mb-2">{question.question}</div>
                        <div className="text-xs text-gray-600">
                          <div>Your Answer: {isAnswered ? question.options[userAnswer] : 'Not answered'}</div>
                          <div>Correct Answer: {question.options[question.correctAnswer]}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleRestartQuiz}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Restart Quiz
                </button>
                <button
                  onClick={() => setShowSummary(false)}
                  className="px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
                >
                  Close Summary
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Kavach