'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false)
  const [isMobileRegisterOpen, setIsMobileRegisterOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.jpg"
                alt="Group B Officers Academy Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="lg:text-xl text:lg font-bold text-blue-900">GROUP B OFFICERS ACADEMY</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              About
            </Link>
            <Link href="/mission" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Mission
            </Link>
            <Link href="/vision" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Vision
            </Link>
            <Link href="/motto" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Motto
            </Link>
            <Link href="/topics" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Topics
            </Link>
            <Link href="/manuals" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Manuals
            </Link>
            <Link href="/mcq-practice" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              MCQ Practice
            </Link>
            <Link href="/mcq-test" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              MCQ Test
            </Link>
            <Link href="/mcq-cbt" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              MCQ CBT
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Contact
            </Link>
            <div className="relative" onMouseEnter={() => setIsRegisterDropdownOpen(true)} onMouseLeave={() => setIsRegisterDropdownOpen(false)}>
              <button className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center">
                Register
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isRegisterDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link href="/register/trainee-register" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Trainee Register
                  </Link>
                  <Link href="/register/experts-register" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Experts Register
                  </Link>
                </div>
              )}
            </div>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/mission" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
                Mission
              </Link>
              <Link href="/vision" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
                Vision
              </Link>
              <Link href="/motto" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
                Motto
              </Link>
              <Link href="/topics" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
                Topics
              </Link>
              <Link href="/manuals" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
                Manuals
              </Link>
              <Link href="/mcq-practice" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
                MCQ Practice
              </Link>
              <Link href="/mcq-test" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
                MCQ Test
              </Link>
              <Link href="/mcq-cbt" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
                MCQ CBT
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <div>
                <button 
                  onClick={() => setIsMobileRegisterOpen(!isMobileRegisterOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                >
                  Register
                  <svg className={`h-4 w-4 transition-transform ${isMobileRegisterOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileRegisterOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link href="/register/trainee-register" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                      Trainee Register
                    </Link>
                    <Link href="/register/experts-register" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                      Experts Register
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/login" className="block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
