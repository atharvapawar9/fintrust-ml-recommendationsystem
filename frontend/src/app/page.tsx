'use client'

import { useState } from "react"
import Link from "next/link"

export default function HomePage() {
  const [apiUrl] = useState(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">FinTrust</h1>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/simple"
                className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Simple Test
              </Link>
              <Link 
                href="/test"
                className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Test Page
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI-Powered Loan Intelligence
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Smart lending made simple with AI-driven loan recommendations and instant eligibility assessments.
          </p>
          
          <div className="flex justify-center space-x-4">
            <Link 
              href="/apply"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Apply for Loan
            </Link>
            <Link 
              href="/dashboard"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>

        {/* API Status */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            System Status
          </h2>
          <div className="space-y-2">
            <p><strong>Frontend:</strong> <span className="text-green-600">✓ Running</span></p>
            <p><strong>API URL:</strong> {apiUrl}</p>
            <p><strong>Environment:</strong> {process.env.NODE_ENV}</p>
          </div>
          <button 
            onClick={async () => {
              try {
                const response = await fetch(`${apiUrl}/health`)
                const data = await response.json()
                alert(`Backend Status: ${JSON.stringify(data, null, 2)}`)
              } catch (error) {
                alert(`Backend Error: ${error}`)
              }
            }}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Test Backend Connection
          </button>
        </div>
      </div>
    </div>
  )
}