'use client'

import { useState, useEffect } from 'react'

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    // Get visitor count from localStorage or initialize to 0
    const storedCount = localStorage.getItem('visitorCount')
    const currentCount = storedCount ? parseInt(storedCount) : 0
    
    // Increment visitor count for new visit
    const newCount = currentCount + 1
    setVisitorCount(newCount)
    
    // Store updated count in localStorage
    localStorage.setItem('visitorCount', newCount.toString())
  }, [])

  return (
    <footer className="bg-gray-900 text-white lg:py-8 py-4 lg:px-6 px-4 mt-1">
      <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm text-center mb-4 md:mb-0">
               Group B Officers Academy Copyright © {new Date().getFullYear()}. <br/> All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="text-gray-400 text-sm">
                Total Visitors: <span className="text-white font-semibold">{visitorCount.toLocaleString()}</span>
              </div>
              
            </div>
          </div>
    </footer>
  )
}

export default Footer
