'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              <span className="text-xl font-bold text-blue-900">GROUP B OFFICERS ACADEMY</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Contact
            </Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Link href="/login" className="block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={() => setIsMenuOpen(false)}>
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
