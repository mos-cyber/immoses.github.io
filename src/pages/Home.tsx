import React from 'react';
import { 
  ArrowRight, 
  Sprout, 
  TrendingUp, 
  Shield, 
  Smartphone,
  BarChart3,
  Cloud,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary-600" />,
      title: 'Smart Analytics',
      description: 'Get real-time insights into crop performance, soil health, and weather patterns with AI-powered analytics.'
    },
    {
      icon: <Cloud className="h-8 w-8 text-primary-600" />,
      title: 'Weather Integration',
      description: 'Stay ahead with accurate weather forecasts and climate data to optimize planting and harvesting schedules.'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'Pest Management',
      description: 'Comprehensive pest and disease database with treatment recommendations and prevention strategies.'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary-600" />,
      title: 'Mobile First',
      description: 'Access your farm data anywhere with our mobile-optimized platform and dedicated mobile apps.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Livestock Management',
      description: 'Track animal health, vaccination schedules, and breeding records with comprehensive livestock tools.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-600" />,
      title: 'Yield Optimization',
      description: 'Maximize your harvest with data-driven recommendations for fertilization, irrigation, and crop rotation.'
    }
  ];

  const benefits = [
    'Increase crop yields by up to 30%',
    'Reduce input costs by 25%',
    'Save 40% time on farm management',
    'Improve decision making with AI insights',
    'Access premium features starting at $5/month',
    'Available on all devices and platforms'
  ];

  const testimonials = [
    {
      name: 'John Farmer',
      location: 'Green Valley Farm, California',
      quote: 'Ace Vision transformed how I manage my 200-acre farm. The AI recommendations helped me increase my corn yield by 25% this season.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      location: 'Sunshine Agriculture, Brazil',
      quote: 'The pest management database saved my crops when I identified a disease early. The treatment recommendations were spot-on.',
      rating: 5
    },
    {
      name: 'David Chen',
      location: 'Tech Farm Solutions, Australia',
      quote: 'As someone who manages multiple farms, the mobile app keeps me connected and informed wherever I am. Absolutely essential tool.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 mb-8">
              <Sprout className="h-16 w-16 text-primary-600" />
              <h1 className="text-6xl font-bold text-gray-900">Ace Vision</h1>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Precision Agriculture
              <span className="block text-primary-600">Made Simple</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your farming operations with AI-powered insights, real-time monitoring, 
              and expert recommendations. From crop management to livestock care, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                to="/register" 
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                to="/download" 
                className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 text-lg font-medium rounded-lg hover:bg-primary-50 transition-colors"
              >
                Download App
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Modern Farming
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and insights to optimize every aspect of your agricultural operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Proven Results for Forward-Thinking Farmers
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of farmers who have already transformed their operations with Ace Vision. 
                Our platform delivers measurable improvements in productivity, efficiency, and profitability.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  Learn more about our mission
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <Award className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Industry Recognition</h3>
                <p className="text-gray-600">Trusted by agricultural professionals worldwide</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600">10,000+</div>
                  <div className="text-gray-600">Active Farmers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">50+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">25%</div>
                  <div className="text-gray-600">Avg. Yield Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">4.9★</div>
                  <div className="text-gray-600">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Farmers Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real farmers who have transformed their operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">⭐</div>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Preview */}
      <div className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Affordable Plans for Every Farm Size
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            From small family farms to large agricultural enterprises, we have a plan that fits your needs and budget.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="text-4xl font-bold text-primary-600 mb-4">$5<span className="text-lg">/month</span></div>
              <p className="text-gray-600">Perfect for small farms</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center transform scale-105 border-4 border-secondary-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
              <div className="text-4xl font-bold text-primary-600 mb-4">$10<span className="text-lg">/month</span></div>
              <p className="text-gray-600">Most popular choice</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <div className="text-4xl font-bold text-primary-600 mb-4">$15<span className="text-lg">/month</span></div>
              <p className="text-gray-600">For large operations</p>
            </div>
          </div>
          
          <Link 
            to="/pricing" 
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            View All Plans & Features
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Farm?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the precision agriculture revolution today. Start your free trial and see the difference 
            technology can make for your farming operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Start Free Trial Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              to="/login" 
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Sign In
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;