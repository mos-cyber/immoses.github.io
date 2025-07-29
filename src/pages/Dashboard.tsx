import React from 'react';
import { 
  Sprout, 
  TrendingUp, 
  Users, 
  Calendar,
  Settings,
  LogOut,
  Bell,
  BarChart3
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const stats = [
    {
      icon: <Sprout className="h-8 w-8 text-primary-600" />,
      title: 'Active Crops',
      value: '12',
      change: '+2 this month'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Livestock',
      value: '45',
      change: '+5 this week'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: 'Yield Increase',
      value: '23%',
      change: 'vs last season'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: 'Farm Score',
      value: '8.7/10',
      change: 'Excellent'
    }
  ];

  const recentActivities = [
    {
      type: 'planting',
      description: 'Planted 5 acres of corn in North Field',
      time: '2 hours ago'
    },
    {
      type: 'irrigation',
      description: 'Scheduled irrigation for Wheat Field B',
      time: '4 hours ago'
    },
    {
      type: 'health_check',
      description: 'Vaccinated 12 cattle - all healthy',
      time: 'Yesterday'
    },
    {
      type: 'harvest',
      description: 'Harvested 3 tons of tomatoes',
      time: '2 days ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <Sprout className="h-8 w-8 text-primary-600" />
                <span className="text-2xl font-bold text-gray-900">Ace Vision</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="h-6 w-6" />
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-500">{user?.farmName}</p>
                </div>
                <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {user?.name?.charAt(0)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name?.split(' ')[0]}!
          </h1>
          <p className="text-gray-600">
            Here's what's happening on {user?.farmName || 'your farm'} today.
          </p>
        </div>

        {/* Subscription Status */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-1">
                {user?.subscription?.plan.toUpperCase()} Plan
              </h3>
              <p className="text-primary-100">
                {user?.subscription?.status === 'trial' 
                  ? `Trial ends ${user?.subscription?.trialEndsAt ? new Date(user.subscription.trialEndsAt).toLocaleDateString() : 'soon'}`
                  : `Active until ${user?.subscription?.endDate ? new Date(user.subscription.endDate).toLocaleDateString() : 'unknown'}`
                }
              </p>
            </div>
            <Link 
              to="/pricing" 
              className="bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {user?.subscription?.status === 'trial' ? 'Upgrade Now' : 'Manage Plan'}
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
              <p className="text-xs text-gray-500">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="h-2 w-2 bg-primary-600 rounded-full mt-2"></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Sprout className="h-5 w-5 text-primary-600" />
                    <span className="text-sm font-medium">Add New Crop</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium">Record Animal Health</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">Schedule Activity</span>
                  </div>
                </button>
                <Link 
                  to="/pricing" 
                  className="block w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Settings className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium">Upgrade Plan</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Weather Widget */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Weather</h2>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">24°C</div>
                <p className="text-gray-600 mb-2">Partly Cloudy</p>
                <p className="text-sm text-gray-500">Perfect for outdoor activities</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;