'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const TestPage = () => {
  const pathname = usePathname()
  const router = useRouter()

  const handleNavigation = (path: string) => {
    console.log('Navigating to:', path)
    router.push(path)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          🔧 Navigation Test Page
        </h1>
        
        <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500">
          <p className="font-semibold">Current Path: <span className="text-blue-600">{pathname}</span></p>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Test Next.js Link Component:</h2>
            <div className="space-y-3">
              <Link 
                href="/"
                className="block px-4 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-center"
              >
                🏠 Go to Home (Link)
              </Link>
              <Link 
                href="/about"
                className="block px-4 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition text-center"
              >
                📖 Go to About (Link)
              </Link>
              <Link 
                href="/contact"
                className="block px-4 py-3 bg-purple-500 text-white rounded hover:bg-purple-600 transition text-center"
              >
                📧 Go to Contact (Link)
              </Link>
              <Link 
                href="/login"
                className="block px-4 py-3 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition text-center"
              >
                🔐 Go to Login (Link)
              </Link>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Test useRouter Hook:</h2>
            <div className="space-y-3">
              <button 
                onClick={() => handleNavigation('/')}
                className="block w-full px-4 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                🏠 Go to Home (Router)
              </button>
              <button 
                onClick={() => handleNavigation('/about')}
                className="block w-full px-4 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                📖 Go to About (Router)
              </button>
              <button 
                onClick={() => handleNavigation('/contact')}
                className="block w-full px-4 py-3 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
              >
                📧 Go to Contact (Router)
              </button>
              <button 
                onClick={() => handleNavigation('/login')}
                className="block w-full px-4 py-3 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
              >
                🔐 Go to Login (Router)
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-6 bg-yellow-50">
            <h2 className="text-xl font-semibold mb-4">Instructions:</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open Browser DevTools (F12)</li>
              <li>Go to Console tab</li>
              <li>Click buttons above</li>
              <li>Check console for "Navigating to:" messages</li>
              <li>Verify URL changes in address bar</li>
              <li>Verify page content updates</li>
            </ol>
          </div>

          <div className="border rounded-lg p-6 bg-green-50">
            <h2 className="text-xl font-semibold mb-4">Expected Behavior:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>✅ URL should change without page reload</li>
              <li>✅ Console should show "Navigating to:" messages</li>
              <li>✅ Page content should update smoothly</li>
              <li>✅ No errors in console</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestPage

