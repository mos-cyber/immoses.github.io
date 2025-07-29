import React from 'react';
import { 
  Download, 
  Smartphone, 
  Monitor, 
  Apple, 
  Zap,
  Star,
  Shield,
  Globe,
  ArrowRight,
  QrCode
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DownloadPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary-600" />,
      title: 'Real-time Monitoring',
      description: 'Track your crops and livestock in real-time with instant notifications'
    },
    {
      icon: <Star className="h-6 w-6 text-primary-600" />,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations based on weather, soil, and market data'
    },
    {
      icon: <Shield className="h-6 w-6 text-primary-600" />,
      title: 'Offline Support',
      description: 'Continue working even without internet connection'
    },
    {
      icon: <Globe className="h-6 w-6 text-primary-600" />,
      title: 'Cross-Platform Sync',
      description: 'Seamlessly sync data across all your devices'
    }
  ];

  const screenshots = [
    {
      title: 'Dashboard Overview',
      description: 'Get a complete view of your farm operations',
      image: '/api/placeholder/300/600'
    },
    {
      title: 'Crop Management',
      description: 'Track planting, growth, and harvest schedules',
      image: '/api/placeholder/300/600'
    },
    {
      title: 'Animal Health',
      description: 'Monitor livestock health and vaccination records',
      image: '/api/placeholder/300/600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Download <span className="text-primary-600">Ace Vision</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Take your precision agriculture management anywhere. Available for iOS, Android, Windows, and macOS.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/pricing" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                <span>Get Started Free</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <span className="text-gray-500">or download the app below</span>
            </div>
          </div>
        </div>
      </div>

      {/* Download Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Apps */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Smartphone className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Mobile Apps</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Manage your farm on-the-go with our fully-featured mobile applications.
              </p>
            </div>

            <div className="space-y-4">
              {/* iOS App */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-transparent hover:border-primary-200 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-black rounded-2xl p-3">
                      <Apple className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">iOS App</h3>
                      <p className="text-gray-500">For iPhone and iPad</p>
                    </div>
                  </div>
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    <Download className="h-5 w-5 inline mr-2" />
                    Download
                  </button>
                </div>
                <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                  <span>iOS 14.0+</span>
                  <span>•</span>
                  <span>25.4 MB</span>
                  <span>•</span>
                  <span>Version 2.1.0</span>
                </div>
              </div>

              {/* Android App */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-transparent hover:border-primary-200 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500 rounded-2xl p-3">
                      <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993.0007.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993.0007.5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0329L4.841 5.4747a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.61 10.2718.8995 12.1954.8995 14.5h22.201c0-2.3046-1.7105-4.2282-5.12-5.1786z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Android App</h3>
                      <p className="text-gray-500">For Android devices</p>
                    </div>
                  </div>
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    <Download className="h-5 w-5 inline mr-2" />
                    Download
                  </button>
                </div>
                <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                  <span>Android 8.0+</span>
                  <span>•</span>
                  <span>28.7 MB</span>
                  <span>•</span>
                  <span>Version 2.1.0</span>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
              <QrCode className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Download</h3>
              <p className="text-gray-500 text-sm">Scan with your phone camera to download directly</p>
            </div>
          </div>

          {/* Desktop Apps */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Monitor className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Desktop Apps</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Full-featured desktop applications for comprehensive farm management.
              </p>
            </div>

            <div className="space-y-4">
              {/* Windows App */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-transparent hover:border-primary-200 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 rounded-2xl p-3">
                      <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.351"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Windows App</h3>
                      <p className="text-gray-500">For Windows 10/11</p>
                    </div>
                  </div>
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    <Download className="h-5 w-5 inline mr-2" />
                    Download
                  </button>
                </div>
                <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                  <span>Windows 10+</span>
                  <span>•</span>
                  <span>156 MB</span>
                  <span>•</span>
                  <span>Version 2.1.0</span>
                </div>
              </div>

              {/* macOS App */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-transparent hover:border-primary-200 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-800 rounded-2xl p-3">
                      <Apple className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">macOS App</h3>
                      <p className="text-gray-500">For Mac computers</p>
                    </div>
                  </div>
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    <Download className="h-5 w-5 inline mr-2" />
                    Download
                  </button>
                </div>
                <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                  <span>macOS 11+</span>
                  <span>•</span>
                  <span>142 MB</span>
                  <span>•</span>
                  <span>Version 2.1.0</span>
                </div>
              </div>

              {/* Web App */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-transparent hover:border-primary-200 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-600 rounded-2xl p-3">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Web App</h3>
                      <p className="text-gray-500">Access anywhere online</p>
                    </div>
                  </div>
                  <Link 
                    to="/dashboard" 
                    className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors inline-block"
                  >
                    <Globe className="h-5 w-5 inline mr-2" />
                    Open Web App
                  </Link>
                </div>
                <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                  <span>Any Browser</span>
                  <span>•</span>
                  <span>No Installation</span>
                  <span>•</span>
                  <span>Always Updated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Ace Vision Mobile?
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for precision agriculture, right in your pocket.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600">
              Get a preview of what you can do with Ace Vision mobile app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-4">
                  <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                    <Smartphone className="h-24 w-24 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-gray-600">
                  {screenshot.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers already using Ace Vision to optimize their operations and increase yields.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="inline-flex items-center px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="inline-flex items-center px-8 py-3 border border-white text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;