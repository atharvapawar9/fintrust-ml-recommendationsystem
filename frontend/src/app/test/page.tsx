export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Test Page
        </h1>
        <p className="text-gray-600">
          If you can see this, the routing is working correctly!
        </p>
        <div className="mt-8">
          <a 
            href="/" 
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
}
