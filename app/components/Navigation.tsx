'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()
  
  React.useEffect(() => {
    console.log('Navigation component mounted. Current path:', pathname)
  }, [pathname])

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.jpg"
                alt="Group B Officers Academy Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-blue-900">GROUP B</h1>
                <p className="text-sm text-blue-800 font-semibold">OFFICERS ACADEMY</p>
              </div>
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-8">
            <Link 
              href="/"
              prefetch={true}
              className={`font-medium transition-colors duration-200 ${
                pathname === '/' 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about"
              prefetch={true}
              className={`font-medium transition-colors duration-200 ${
                pathname === '/about' 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>
            <Link 
              href="/contact"
              prefetch={true}
              className={`font-medium transition-colors duration-200 ${
                pathname === '/contact' 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
            <Link 
              href="/login"
              prefetch={true}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                pathname === '/login' 
                  ? 'bg-blue-700 text-white' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
