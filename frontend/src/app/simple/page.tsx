'use client'

import { useState } from "react"

export default function SimplePage() {
  const [apiUrl] = useState(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000')

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ML Cogni - Simple Test
          </h1>
          <p className="text-lg text-gray-600">
            Testing frontend deployment and API connection
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Configuration
          </h2>
          <div className="space-y-2">
            <p><strong>API URL:</strong> {apiUrl}</p>
            <p><strong>Environment:</strong> {process.env.NODE_ENV}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            API Test
          </h2>
          <button 
            onClick={async () => {
              try {
                const response = await fetch(`${apiUrl}/health`)
                const data = await response.json()
                alert(`API Response: ${JSON.stringify(data, null, 2)}`)
              } catch (error) {
                alert(`API Error: ${error}`)
              }
            }}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Test Backend Connection
          </button>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="text-blue-500 hover:text-blue-600 underline"
          >
            Go to Main App
          </a>
        </div>
      </div>
    </div>
  )
}
